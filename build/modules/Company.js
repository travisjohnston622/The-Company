"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var Company = /** @class */ (function () {
    // private name: string;
    function Company() {
        this.timer = {};
        this.timerCount = 0;
        this.employees = [];
        this.timerCount = 0;
        this.employees = [];
        console.log("I'm a company!");
    }
    Company.prototype.init = function () {
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
        while (this.employees.length < 10) {
            this.createEmployee();
        }
        console.log(this.employees);
    };
    Company.prototype.onTimerInterval = function () {
        // console.log("burple");
        this.timerCount++;
        this.randomEvent;
        // clearInterval(this.timer);
    };
    Company.prototype.randomEvent = function () { };
    Company.prototype.createEmployee = function () {
        var newEmployee = new Employee_1.Employee();
        newEmployee.promote();
        newEmployee.promote();
        console.log(newEmployee.getFullName());
        this.employees.push(newEmployee);
        return newEmployee;
    };
    return Company;
}());
exports.Company = Company;
