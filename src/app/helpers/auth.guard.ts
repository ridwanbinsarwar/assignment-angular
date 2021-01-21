import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientUserService } from "../core/services/http-client-user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private userService: HttpClientUserService
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // localStorage.removeItem('email');

      let role = localStorage.getItem('role');

      switch (true) {
        case state.url.endsWith('/user'):
          if (role == 'admin' || role == 'user'){
              return true;
          } else {
            this.router.navigate(['/auth/login']);
            return false;
          }
        case state.url.endsWith('/user/list'):
          if (role == 'admin'){
            return true;
          } else {
            this.router.navigate(['/auth/login']);
            return false;
          }
        case state.url.endsWith('/user/profile'):
          if (role == 'user'){
              return true;
          }else {
            this.router.navigate(['/auth/login']);
            return false;
          }
        case state.url.endsWith('/user/update'):
          if (role == 'admin' || role == 'user'){
              return true;
          } else {
            this.router.navigate(['/auth/login']);
            return false;
          }
        default:
            // pass through any requests not handled above
            return true;
      }

  }
  
}
