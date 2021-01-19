import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from './user.service';
 
const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
 
@Injectable()
 
export class HttpClientUserService extends UserService {
   
  constructor(private http: HttpClient) {
    super();
   }
 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  // get by id - will 404 when id not found
  getUser(id: number): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      catchError(this.handleError)
    );
  }
 
  addUser(name: string, episode: string): Observable<User> {
    const User = { name, episode };
 
    return this.http.post<User>(this.UsersUrl, User, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  deleteUser(User: number | User): Observable<User> {
    const id = typeof User === 'number' ? User : User.id;
    const url = `${this.UsersUrl}/${id}`;
 
    return this.http.delete<User>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  searchUser(term: string): Observable<User[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
    { params: new HttpParams().set('name', term)} : {};
 
    return this.http.get<User[]>(this.UsersUrl, options).pipe(
      catchError(this.handleError)
    );
  }
 
  updateUser(User: User): Observable<User> {
    return this.http.put<User>(this.UsersUrl, User, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
 
}