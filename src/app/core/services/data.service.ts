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
    {  id:  "email1@ggmail.com",  firstName:  'PO1', lastName: 'lastName', email: "email1@ggmail.com", password: "password", role: "user"},
    {  id:  "email2@ggmail.com",  firstName:  'PO1', lastName: 'lastName', email: "email2@ggmail.com", password: "password", role: "admin"},
    {  id:  "email3@ggmail.com",  firstName:  'PO1', lastName: 'lastName', email: "email3@ggmail.com", password: "password", role: "user"},
    {  id:  "email4@ggmail.com",  firstName:  'PO1', lastName: 'lastName', email: "email4@ggmail.com", password: "password", role: "user"}
   ];

   return {users};

  }
}