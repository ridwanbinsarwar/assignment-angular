import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
// import { HttpClientUserService } from '@app/core/';
import { HttpClientUserService } from '../../../core/services/http-client-user.service';
import { UserTransferService } from '../../../core/services/user-transfer.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  roles: any = ['USER', 'ADMIN']
  constructor(
    private userService: HttpClientUserService,
    private userTransferService: UserTransferService,
    private router: Router
    ) { }
 
  ngOnInit() {
    this.getUsers();
  }
 
  getUsers() {
    this.userService.getUsers().subscribe(data => { 
      // this.users = data;
      this.users = [];
      for (var i in data) {
        if(data[i].role[0] == '0'){
          this.users.push(data[i]);
        }
      }
    });    
  }

  toUpdateUser(id: number, firstName: string, lastName: string, email: string, password: string, role: string) {      
    const user = {id: id, firstName: firstName, lastName: lastName, email: email, password: password, role: role };
    this.userTransferService.setUser(user);
    this.router.navigateByUrl("/user/update");
  }


  deleteUser(id: number, firstName: string, lastName: string, email: string, password: string, role: string ) {   
    if(confirm("Do you wish to delete " + email)) {
      const user = {id: id, firstName: firstName, lastName: lastName, email: email, password: password, role: role };
      this.userService.deleteUser(id).subscribe();  
      this.getUsers();
      // this.router.navigateByUrl("/user/list");
    }    
  }

}
