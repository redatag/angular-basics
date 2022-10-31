import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
// comp class shoul has one resposiblity that support (control)view  logic only 
//getting data not its responsibility and violate SRP princible
//the solution is use the service
//ervice is a class with specific service

//shared data across multi comp
//implement app logic
//used fior externel interactions (connecting db) employee.service.ts
  employees:any[] = [];
  //   {id:1 , name:"reda", age: 33},
  //   {id:2 , name:"ahmed", age: 28},
  //   {id:3 , name:"malek", age: 20}
  // ];
  constructor(private emploeeService: EmployeeService) { }

  ngOnInit(): void {
    //called once the comp has been initialized
    this.employees = this.emploeeService.getEmloyees();
  }


}
