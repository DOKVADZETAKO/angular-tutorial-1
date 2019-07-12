import { Component, OnInit } from '@angular/core';
import { EmployeesService, IEmployee } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees$;
  employee = {
    id: '',
    name: '',
    salary: null,
    age: null
  };

  employeeForm;
  updetedEmployee;

  constructor(
    private employeesService: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.employeeForm = formBuilder.group({
      name: [this.employee.name, [Validators.required]],
      salary: [this.employee.salary, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      age: [this.employee.age, [Validators.required, Validators.pattern(/^[0-9]+$/)]],
    });
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

  onDelete() {
    this.employeesService.delete(this.employee.id)
    .subscribe(res => {
      this.router.navigate(['/employees']);
    })
  }

  onSubmit() {
    this.updetedEmployee = {
      name: this.employeeForm.get('name').value,
      salary: this.employeeForm.get('salary').value,
      age: this.employeeForm.get('age').value
    }
    this.employeesService.update(this.employee.id, this.updetedEmployee)
      .subscribe((newEmployee: IEmployee) => {
        this.employee.name = newEmployee.employee_name;
        this.employee.age = newEmployee.employee_age;
        this.employee.salary = newEmployee.employee_salary;
        this.router.navigate(['/employees']);
      });
  }

}