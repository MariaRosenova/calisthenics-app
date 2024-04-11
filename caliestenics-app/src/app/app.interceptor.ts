import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  API = '/api';
  constructor() {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    
    if (request.url.startsWith(this.API)) {
      request = request.clone({
        url: request.url.replace(this.API, apiUrl),
        withCredentials: true,
      })
    }
    
    return next.handle(request);
  }
}
