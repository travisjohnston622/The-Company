"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Company = /** @class */ (function () {
    function Company() {
        this.timer = {};
        this.timerCount = 0;
        console.log("I'm a company!");
    }
    Company.prototype.init = function () {
        this.timer = setInterval(this.onTimerInterval.bind(this), 1000);
    };
    Company.prototype.onTimerInterval = function () {
        console.log("burple");
        this.timerCount++;
        console.log(this.timerCount);
        // clearInterval(this.timer);
    };
    return Company;
}());
exports.Company = Company;
