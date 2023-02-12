import { Component, Input, OnInit } from '@angular/core';
import {Employee} from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  @Input() visibleProperties: {};

  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
      this.loadData();
  }

  editEmployee(guid: string) {
    this.router.navigateByUrl("/employees/edit?guid=" + guid);
  }

  loadData() {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    });
    console.log(this.employees);
  }

}
