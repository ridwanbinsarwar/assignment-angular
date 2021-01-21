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
    {  id:  1,  firstName:  'PO1', lastName: 'lastName', email: "a1@g.com", password: "password", role: "USER"},
    {  id:  2,  firstName:  'PO1', lastName: 'lastName', email: "a2@g.com", password: "password", role: "ADMIN"},
    {  id:  3,  firstName:  'PO1', lastName: 'lastName', email: "email1@gmail.com", password: "password", role: "USER"},
    {  id:  4,  firstName:  'PO1', lastName: 'lastName', email: "user1@tbuddy.com", password: "password", role: "ADMIN"}
   ];

   return {users};

  }
}