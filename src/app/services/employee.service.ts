import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, observable } from 'rxjs';
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
    return this.http.get<IEmployee[]>(this.url);
    // return [
    //   {id:1 , name:"reda", age: 33},
    //   {id:2 , name:"ahmed", age: 28},
    //   {id:3 , name:"malek", age: 20}
    // ];
  }
}
