import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees = [
    {id:1 , name:"reda", age: 33},
    {id:2 , name:"ahmed", age: 28},
    {id:3 , name:"malek", age: 20}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
