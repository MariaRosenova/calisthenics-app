import { Injectable, OnDestroy } from '@angular/core';
import { UserForAuth } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class UserService implements OnDestroy {
    private user$$ = new BehaviorSubject<UserForAuth | undefined>(undefined);
    private user$ = this.user$$.asObservable();
  

    user: UserForAuth | undefined;
    USER_KEY = '[user]';

    userSubscription: Subscription;

    get isLogged(): boolean {
        return !!this.user
    }

    
    constructor(private http: HttpClient) {
        this.userSubscription = this.user$.subscribe((user) => {
          this.user = user;
        });
      }
    

    login(email: string, password: string) {
        const { apiUrl } = environment;
        return this.http.post<UserForAuth>(`${apiUrl}/training/login`, {email, password}, {withCredentials: true})
        .pipe(
            tap((user) => {
                this.user$$.next((user));
                sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
            })
        )
    }

    register(
        email: string, 
        username: string, 
        password: string, 
        rePassword: string
    ) {

        if (password !== rePassword) {
            throw new Error('Passwords do not match');
        }
    
        const { apiUrl } = environment;
        return this.http.post<UserForAuth>(`${apiUrl}/training/register`, {email, username, password, rePassword})
        .pipe(
            tap((user) => {
                this.user$$.next((user));
                sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
            }))
    }

    getProfile() {
        const { apiUrl } = environment;
        return this.http.get<UserForAuth>(`${apiUrl}/training/getProfile`, {}).pipe(tap((user) => {this.user$$.next(user)
            
        }))
    }
    
    logout()
    {
      const { apiUrl } = environment;
      return this.http.post(`${apiUrl}/training/logout`, {}, { withCredentials: true })
      .pipe(
        tap((user) => {
            this.user$$.next((undefined));
            sessionStorage.removeItem(this.USER_KEY);
        }))
    }



    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
      }
}