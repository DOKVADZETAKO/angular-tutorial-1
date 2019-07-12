import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss']
})
export class EmployeeRegisterComponent implements OnInit {

  employees$;
  employeesregister

  constructor(
    private employeesService: EmployeesService,
    private fb: FormBuilder,
  ) { 
    this.employeesregister = fb.group({
      name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      age: ['', [Validators.required]]
    })
  }

  ngOnInit() {
   this.employees$ = this.employeesService.getEmployees();
  }

  newEmployee(newemployee){
    this.employeesService.AddRegister(newemployee).subscribe();
  }

}
