import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTabsModule,MatTableModule  } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import {EmployeeService} from './services/employee.service';
//import { Observable }   from 'rxjs/Observable';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatTableModule, 
    MatTabsModule
  //  Observable
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
