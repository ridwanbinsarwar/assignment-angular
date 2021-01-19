import { User } from '../models/user';
import { Observable } from 'rxjs';
 
export abstract class UserService {
  UsersUrl = 'api/users';
  
  abstract getUsers(): Observable<User[]>;
  abstract getUser(id: number): Observable<User>;
  abstract addUser(name: string, episode: string): Observable<User>;
  abstract deleteUser(User: User | number): Observable<User>;
  abstract searchUser(term: string): Observable<User[]>;
  abstract updateUser(User: User): Observable<User>;
 
}