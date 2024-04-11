import { Component } from '@angular/core';
import { faLink, faBars} from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/user/user.service';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  constructor(private userService: UserService, private router: Router) {
  }

  faLink = faLink;
  faBars = faBars;
  faUserCircle = faUserCircle;
 

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }


  logout() {
    this.userService.logout().subscribe({
      next: () =>  this.router.navigate(['/home'])
    });
 
  }

}
