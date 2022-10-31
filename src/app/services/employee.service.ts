import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // register the service
  //providers: [EmployeeService], or in app module
})
export class EmployeeService {

  //rejister the service at module level to be acces by all component in this module
  constructor() { }

  getEmloyees() {
    return [
      {id:1 , name:"reda", age: 33},
      {id:2 , name:"ahmed", age: 28},
      {id:3 , name:"malek", age: 20}
    ];
  }
}
