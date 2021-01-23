import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserTransferService {

  private user: User | undefined;
 
  constructor() { 
  }
 
  setUser(user: User) {
    // console.log(user)
    this.user = user;
  }
 
  getUser() {
    const tempVillain = this.user;
    this.clearUser();
    return tempVillain;
  }
 
  clearUser() {
    this.user = undefined;
  }
}