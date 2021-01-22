import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let ROLE =  localStorage.getItem('role');
    let EMAIL = localStorage.getItem('email');

    if (ROLE == null)
      ROLE = "null"
    if (EMAIL == null)
      EMAIL = "null"
    // console.warn(request);
    let headers = request.headers
    .set('ROLE', ROLE)
    .set('EMAIL', EMAIL);

    const cloneReq = request.clone({ headers : headers });
    console.warn(cloneReq);

    return next.handle(cloneReq);
  }
}
