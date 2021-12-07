import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  template: `<h2>Employee List</h2>
                <ul *ngFor="let employee of employees">
                  <li>{{employee.name}}</li>
                </ul>
                <button routerLink="/" routerLinkActive="active">MainPage</button>
                `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  constructor(private employeeservice: EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.getEmployee()
      .subscribe(
        data => {
          this.employees = data
        }
      )

  }

}
