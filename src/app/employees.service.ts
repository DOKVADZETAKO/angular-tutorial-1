import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  host = 'http://dummy.restapiexample.com/api/v1'

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = `${this.host}/employees`
    return this.http
      .get(url)
      .pipe(map((employees: IEmployee[]) => {
        return employees.map(employee => {
          return {
            id: employee.id,
            name: employee.employee_name,
            salary: employee.employee_salary,
            age: employee.employee_age
          }
        })
      }))
  }

  AddRegister(employee: IEmployee) {
    const url = `${this.host}/create`
    return this.http
      .post<IEmployee> (url, employee);
  }

  OneEmployee(id) {
    const url = `${this.host}/employee/${id}`;
    return this.http.get(url)
      .pipe(map((employee: IEmployee) => {
        return {
          id: employee.id,
          name: employee.employee_name,
          salary: employee.employee_salary,
          age: employee.employee_age
        }
      }))
  }

  //task-3

  update(id, employee) {
    const url = `${this.host}/update/${id}`;

    return this.http.put(url, employee);
  }

  delete(id) {
    const url = `${this.host}/delete/${id}`;
    return this.http.delete(url);
  }

}
