import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { state, style, trigger,transition,animate } from '@angular/animations'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  animations: [
    trigger('loadUnload', [
      state('load', style({
        display: 'none'
      })),
      state('unload', style({
        display: 'block'
      })),
      // transition('load => unload', [
      //   animate('0.2s')
      // ])
    ])
  ]
})
export class EmployeesComponent implements OnInit {

  employees$;
  loaded = false;
  Employees;

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
    this.employees$.subscribe(data => {
      this.Employees = data;
      this.loaded = true;
    });
  }
}
