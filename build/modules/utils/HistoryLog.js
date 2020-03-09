"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var currenyFormatter = require('currency-formatter');
var HistoryLog = /** @class */ (function () {
    function HistoryLog() {
        this.log = [];
    }
    HistoryLog.prototype.addNewEmployee = function (employee) {
        var salary = currenyFormatter.format(employee.getSalary(), {
            code: 'USD',
        });
        var timestamp = moment_1.default().format('lll');
        this.log.push(timestamp + " - " + employee.getFullName() + " joined the team as a " + employee.getPosition() + " making " + salary);
    };
    HistoryLog.prototype.getLog = function () {
        return this.log;
    };
    return HistoryLog;
}());
exports.HistoryLog = HistoryLog;
