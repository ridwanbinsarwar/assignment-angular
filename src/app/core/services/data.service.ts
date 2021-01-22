import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb(){

   let  users: User[] =  [
    {  id:  1,  firstName:  'PO1', lastName: 'lastName', email: "admin@g.com", password: "password", dob: '19-12-2012',gender: 'male',interest:'Gaming',address: '',phone: '', role: "1: Object"},
    {  id:  2,  firstName:  'PO1', lastName: 'lastName', email: "a2@g.com", password: "password",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},
    {  id:  3,  firstName:  'PO1', lastName: 'lastName', email: "email1@gmail.com", password: "password",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},
    {  id:  4,  firstName:  'PO1', lastName: 'lastName', email: "user1@tbuddy.com", password: "password",dob: '19-12-2012',gender: 'male',interest:'music',address: '',phone: '', role: "0: Object"}
   
   ];

   return {users};

  }
}