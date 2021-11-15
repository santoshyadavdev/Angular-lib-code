import { Component, OnInit } from '@angular/core';
import { add } from '@lib/employee/util';
@Component({
  selector: 'lib-employee',
  template: ` <p>employee works!</p> `,
  styles: [],
})
export class EmployeeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    add(2,5);
  }
}
