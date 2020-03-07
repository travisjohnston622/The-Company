"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./enums/Position");
var data = __importStar(require("./data/names.json"));
var randomNumber_1 = __importDefault(require("./utils/randomNumber"));
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, salary, position) {
        this.firstName = firstName ? firstName : this.createFirstName();
        this.lastName = lastName ? lastName : this.createLastName();
        this.salary = salary ? salary : 10000;
        this.position = position ? position : Position_1.Position.ANALYST;
    }
    Employee.prototype.createFirstName = function () {
        return data.first_names[randomNumber_1.default(0, data.first_names.length - 1)];
    };
    Employee.prototype.createLastName = function () {
        return data.last_names[randomNumber_1.default(0, data.last_names.length - 1)];
    };
    return Employee;
}());
exports.Employee = Employee;
