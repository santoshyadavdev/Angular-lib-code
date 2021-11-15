import { Component } from '@angular/core';
import { EmployeeService } from 'employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lib-demo';

  constructor(private empService: EmployeeService) {}

  employee$ = this.empService.getEmployee();
}
