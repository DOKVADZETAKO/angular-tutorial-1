import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees$;
  employee

  constructor(private employeesService: EmployeesService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(value => {
      const employeeId = +value.get('id');
      this.employeesService.OneEmployee(employeeId).subscribe(employee => {
        this.employee = employee;
        if (!this.employee) {
          router.navigate(['error']);
        }
      });
 
    });
  }


  ngOnInit() {
    this.employees$ = this.employeesService.getEmployees();
  }

  OneEmployee() {

  }

}
