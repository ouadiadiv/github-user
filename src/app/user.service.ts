import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { catchError } from 'rxjs/operators';
import {  HttpErrorResponse } from '@angular/common/http';
import { ErrorApp } from './common/error';
import { throwError } from 'rxjs';
import { ErrorNotFound } from './common/Error-Not-Found';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users' ;

  constructor(private http :HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }
    getUser():Observable<User>{
      return this.http.get<User>(this.url)
      .pipe(
        catchError((Error : HttpErrorResponse)=>

        {
          if (Error.status===400)
          {
            return throwError(() => new ErrorNotFound)
          }
          
            return throwError(() => new ErrorApp)
        
         
        }
        )
        )
    }
    addUser(user:User):Observable<User>{
      return this.http.post<User>('https://jsonplaceholder.typicode.com/users',user);
    }
    updateUser(user:User):Observable<User>{
      return this.http.put<User>('https://jsonplaceholder.typicode.com/users/'+user.id,user);
    }
    deleteUser(user :User){
      return this.http.delete('https://jsonplaceholder.typicode.com/users/'+user.id).pipe(
        catchError(this.dealError)
        )
    }
    private dealError(error : Response)
    {
      if (error.status===404)
          {
            return throwError(() => new ErrorNotFound)
          }
          if (error.status===400)
          {
            return throwError(() => new ErrorNotFound)
          }
          
        
            return throwError(() => new ErrorApp)
          
         
        }
    
 
}
