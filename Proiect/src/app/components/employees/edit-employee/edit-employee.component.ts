import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute } from '@angular/router';
import {Employee} from 'src/app/models/employee.model';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {


  employee: Employee;
  guid: string;
  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  async getEmployee() {
    this.route.queryParams.subscribe(params => this.guid = params['guid']);
    var response = this.employeesService.getAllEmployees();
    await lastValueFrom(response).then((resp) => {
      this.employee = resp.find(e => e.id == this.guid) as Employee;
    });
  }

  editEmployee() {
    console.log(this.employee);
  }

}
