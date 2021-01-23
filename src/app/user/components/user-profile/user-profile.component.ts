import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';
import { User } from '../../../core/models/user';

import { ProfileService } from '../../services/profile.service';
import { UserTransferService } from '../../../core/services/user-transfer.service';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data: {} | undefined;
  users: User[] = [];
  constructor(
    private userService: HttpClientUserService,
    private userTransferService: UserTransferService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data)=>{
      this.users = data.users;
    });
  }

  toUpdateUser(user: User) {  
    
    console.log(user);
    this.userTransferService.setUser(user);
    this.router.navigateByUrl("/user/update");   
  }

  signOut() {   
    if(confirm("Do you wish to Sign Out ")) {
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        this.router.navigateByUrl("/auth/login");   
    }    
  }

}
