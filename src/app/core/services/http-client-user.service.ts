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
   
   loginUser(email: string, password: string): Observable<User> {
    throw new Error('Method not implemented.');
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
 
  addUser(firstName: string, lastName: string, email: string, password: string, role: string): Observable<User> {
    const user = { id:(User.count+1), firstName, lastName, email, password, role };
    let x = this.http.post<User>(this.UsersUrl, user, cudOptions).pipe(
      
      catchError(this.handleError)
      
    );
    User.count = User.count + 1;

 

    return x;
  }
 
  deleteUser(email: number): Observable<User> {
    // const id = typeof User === 'string' ? User : User.id;
    const url = `${this.UsersUrl}/${email}`;
    
    return this.http.delete<User>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  searchUser(term: string): Observable<User[]> {
    // term = term.trim();
    // add safe, encoded search parameter if term is present
    // const options = { params: new HttpParams().set('email', term)};
    // console.log(term, )
    return this.http.get<User[]>(`${this.UsersUrl}/?email=${encodeURIComponent(term)}`).pipe(

      catchError(this.handleError)
    )
  }
 
  updateUser(id: number, firstName: string, lastName: string, email: string, password: string, role: string): Observable<User> {

    const User = {id:id, firstName, lastName, email, password, role };
    return this.http.put<User>(this.UsersUrl, User, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
 
}