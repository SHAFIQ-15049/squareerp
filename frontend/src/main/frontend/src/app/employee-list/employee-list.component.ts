import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    // this.employees=[{
    //   "id":4,
    //   "firstName":"Ramesh",
    //   "lastName":"Fadatare",
    //   "emailId":"ramesh@gmail.com"
    // },{
    //   "id":5,
    //   "firstName":"Razzak",
    //   "lastName":"Abdur",
    //   "emailId":"razzak01@gmail.com"
    // }];

    this.getEmployees();
  }
  private getEmployees()
  {
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
    })
  }

}
