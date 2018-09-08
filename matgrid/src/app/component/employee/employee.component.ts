import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';

import {EmployeeService} from '../../services/employee.service';
import {Employee} from '../../models/employee.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  dataSource = new EmployeeDataSource(this.empService);
  displayedColumns = ['preferredFullName', 'emailAddress', 'phoneNumber', 'jobTitleName'];
  constructor(private empService: EmployeeService) { }
  
  ngOnInit() {
  }
 
}
export class EmployeeDataSource  extends DataSource<any>{
    constructor(private empService:EmployeeService){super();}
    connect():Observable<Employee[]>{
      return this.empService.getEmployee();
    }
    disconnect(){}

}

