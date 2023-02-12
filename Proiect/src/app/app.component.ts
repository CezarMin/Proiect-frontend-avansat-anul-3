import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proiect';
  navItems = [
    {name: 'Employee list', link: 'employees'},
    {name: 'Add Employee', link: 'employees/add'}
  ]
}
