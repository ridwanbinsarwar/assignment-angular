import { User } from '../models/user';
import { Observable } from 'rxjs';
 
export abstract class UserService {
  UsersUrl = 'api/users';
  
  abstract getUsers(): Observable<User[]>;
  abstract getUser(email: string): Observable<User>;
  abstract addUser(firstName: string, lastName: string, email: string, password: string, role: string): Observable<User>;
  abstract deleteUser(User: User | string): Observable<User>;
  abstract searchUser(term: string): Observable<User[]>;
  abstract updateUser(User: User): Observable<User>;
 
}