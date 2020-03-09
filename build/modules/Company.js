"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var HistoryLog_1 = require("./utils/HistoryLog");
var Company = /** @class */ (function () {
    // private name: string;
    function Company() {
        this.timer = {};
        this.timerCount = 0;
        this.employees = [];
        this.historyLog = new HistoryLog_1.HistoryLog();
        this.timerCount = 0;
        this.employees = [];
        console.log("I'm a company!");
    }
    Company.prototype.init = function () {
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
        while (this.employees.length < 10) {
            this.createEmployee();
        }
        console.log(this.historyLog.getLog());
        // console.log(this.employees);
    };
    Company.prototype.onTimerInterval = function () {
        this.timerCount++;
        this.randomEvent;
    };
    Company.prototype.randomEvent = function () { };
    Company.prototype.createEmployee = function () {
        var newEmployee = new Employee_1.Employee();
        newEmployee.promote();
        newEmployee.promote();
        this.employees.push(newEmployee);
        this.historyLog.addNewEmployee(newEmployee);
        return newEmployee;
    };
    return Company;
}());
exports.Company = Company;
