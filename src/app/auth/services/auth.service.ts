import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientUserService } from '../../core/services/http-client-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private userService: HttpClientUserService, 
  ) { }


  login(email: string, password: string) {
    this.userService.searchUser(email).subscribe(data => { 
      if (data.length == 1){
        console.log(data)
        if (data[0].password == password){
          localStorage.setItem('email', email);
          let role = data[0].role[0] == '0'? 'user' : 'admin';
          localStorage.setItem('role', role);

          if (role == 'user'){
            this.router.navigate(['/user/profile']);
          } else {
            this.router.navigate(['/user/list']);
          }
          
          // localStorage.removeItem('user');
        }
          
      }
      // throw new Error('Email and password does not match');
    });
    
  }
}
