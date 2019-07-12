import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees$;

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
   this.employees$ = this.employeesService.getEmployees();
  }

}
