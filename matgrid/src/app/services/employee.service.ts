import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';

import {Employee} from '../models/employee.model';
import { Observable }   from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private employeeJson = '../src/employee.json';
  constructor(private http:HttpClient) {  }
     getEmployee():Observable<Employee[]>{
       return this.http.get<Employee[]>(this.employeeJson);

     }
}
