import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
// import { HttpClientUserService } from '@app/core/';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
 
  constructor(private userService: HttpClientUserService) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers() {
    this.userService.getUsers().subscribe(data => { 
      this.users = data;
    });    
  }

}
