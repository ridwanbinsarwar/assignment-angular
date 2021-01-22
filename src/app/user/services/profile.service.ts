import { Injectable } from '@angular/core';
import { HttpClientUserService } from "../../core/services/http-client-user.service";
import { User } from "../../core/models/user";


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  users: User[] = [];

  constructor(private userService: HttpClientUserService) { }
  
  // getLoggedUser(): User{

  //   let email = localStorage.getItem('email');
    
  //   if (email != null){
  //     this.userService.searchUser(email).subscribe(data =>{
  //       this.users[0] = data[0];
  //     })
  //   }
  //   return this.user;
    
  // }
}
