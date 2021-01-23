import { Injectable } from '@angular/core';
import { HttpClientUserService } from "../core/services/http-client-user.service";

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'


 /* The Error Interceptor intercepts http responses from the api to check if there were any errors. 
/*If there is a 401 Unauthorized response the user is automatically logged out of the website, */

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  
  constructor(private userService: HttpClientUserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.warn(request);
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
          // auto logout if 401 response returned from api
          localStorage.removeItem('email');
          localStorage.removeItem('role');

      }
      
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
