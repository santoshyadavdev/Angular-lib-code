import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get<Employee>(`https://jsonplaceholder.typicode.com/users`);
  }
}
