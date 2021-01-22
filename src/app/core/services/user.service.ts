import { User } from '../models/user';
import { Observable } from 'rxjs';
 
export abstract class UserService {
  UsersUrl = 'api/users';
  
  abstract getUsers(): Observable<User[]>;
  abstract getUser(id: number): Observable<User>;
  abstract addUser(firstName: string, lastName: string, email: string, password: string, role: string): Observable<User>;
  abstract deleteUser(User: number): Observable<User>;
  abstract searchUser(term: string): Observable<User[]>;
  abstract updateUser(user: User): Observable<User>;
  abstract loginUser(email: string, password: string): Observable<User>;
}