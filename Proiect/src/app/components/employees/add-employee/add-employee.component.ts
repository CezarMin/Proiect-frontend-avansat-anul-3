import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  newEmployee: Employee = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    salary: 0,
    workHours: 0,
    department: ''
  }


  constructor(private employeeService: EmployeesService) {

   }

  addEmployee() {
    this.employeeService.addEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        console.log(employee);
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  ngOnInit(): void {
    if(this.employee)
        this.newEmployee = this.employee;
    
  }

}
