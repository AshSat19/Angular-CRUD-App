import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEE_ITEMS } from './employee-data';
import { findIndex } from 'lodash';

@Injectable()
export class EmployeeService {
  private eItems = EMPLOYEE_ITEMS;

  getEmployeesFromData(): Employee[] {
    console.log(this.eItems);
    return this.eItems;
  }

  addEmployee(employee: Employee) {
    this.eItems.push(employee);
    console.log(this.eItems);
  }

  updateEmployee(employee: Employee) {
    const index = findIndex(this.eItems, (e: Employee) => {
      return e.id === employee.id;
    });
    this.eItems[index] = employee;
  }

  deleteEmployee(employee: Employee) {
    this.eItems.splice(this.eItems.indexOf(employee), 1);
    console.log(this.eItems);
  }
}
