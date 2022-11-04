import {Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, throwError, catchError } from 'rxjs';
// import 'rxjs/add/operators/catchError';
// import 'rxjs/add/operators/throw';
 @Injectable({
  providedIn: 'root' // register the service
  //providers: [EmployeeService], or in app module
})
export class EmployeeService {

  private url: string = '/assets/data/employees.json';
  //register the service at module level to be acces by all component in this module
  constructor(private http: HttpClient) { }

  getEmloyees(): Observable<IEmployee[]> {

    //return(cast) observable of type employee array
    return this.http.get<IEmployee[]>(this.url)
    .pipe(
      catchError((_error: HttpErrorResponse) => {
        return throwError(() => new Error(_error.message));
      })
    )
          // catchError(this.errorHandler));
    // return [
    //   {id:1 , name:"reda", age: 33},
    //   {id:2 , name:"ahmed", age: 28},
    //   {id:3 , name:"malek", age: 20}
    // ];

  }
  // errorHandler(_error: HttpErrorResponse): {
  // //  return throw new Error(_error.message || "server error");
  //   // return throwError(_error.message || "ddd");
  //     throwError(() => new Error('ups something happened'));
  //  }
  }