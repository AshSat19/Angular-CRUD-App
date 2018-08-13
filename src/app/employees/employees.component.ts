import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employees.service';
import { Employee } from './employee';
import { clone } from 'lodash';

@Component({
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit {
  employees: Employee[];
  employeeForm = false;
  editEmployeeForm = false;
  isNewForm: boolean;
  newEmployee: any = {};
  editedEmployee: any = {};

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employees = this._employeeService.getEmployeesFromData();
  }

  showEditEmployeeForm(employee: Employee) {
    if (!employee) {
      this.employeeForm = false;
      return;
    }
    this.editEmployeeForm = true;
    this.editedEmployee = clone(employee);
  }

  showAddEmployeeForm() {
    if (this.employees.length) {
      this.newEmployee = {};
    }
    this.employeeForm = true;
    this.isNewForm = true;
  }

  saveEmployee(employee: Employee) {
    if (this.isNewForm) {
      this._employeeService.addEmployee(employee);
    }
    this.employeeForm = false;
  }

  removeEmployee(employee: Employee) {
    this._employeeService.deleteEmployee(employee);
  }

  updateEmployee() {
    this._employeeService.updateEmployee(this.editedEmployee);
    this.editEmployeeForm = false;
    this.editedEmployee = {};
  }

  cancelNewEmployee() {
    this.newEmployee = {};
    this.employeeForm = false;
  }

  cancelEdits() {
    this.editedEmployee = {};
    this.editEmployeeForm = false;
  }

}
