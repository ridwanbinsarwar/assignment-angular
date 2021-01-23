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
    {  id:  1,  firstName:  'PO1', lastName: 'lastName', email: "admin@g.com", password: "password1", dob: '',gender: '',interest:'',address: '',phone: '', role: "1: Object"},
    {  id:  2,  firstName:  'PO1', lastName: 'lastName', email: "a2@g.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'gaming',address: '',phone: '', role: "0: Object"},
    {  id:  3,  firstName:  'PO1', lastName: 'lastName', email: "email1@gmail.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},
    {  id:  4,  firstName:  'Ridwan', lastName: 'Bin Sarwar', email: "user1@tbuddy.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'music',address: '70/A,Farmgate',phone: '015320110', role: "0: Object"},
    {  id:  5,  firstName:  'PO5', lastName: 'lastName', email: "email5@gmail.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},
    {  id:  6,  firstName:  'PO6', lastName: 'lastName', email: "email6@gmail.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},
    {  id:  7,  firstName:  'PO7', lastName: 'lastName', email: "email7@gmail.com", password: "password1",dob: '19-12-2012',gender: 'male',interest:'',address: '',phone: '', role: "0: Object"},

    
   ];

   return {users};

  }
}