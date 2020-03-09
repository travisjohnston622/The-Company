import { Employee } from './Employee';
import { Position } from './enums/Position';
import * as data from './data/names.json';
import { HistoryLog } from './utils/HistoryLog';
import randomNumber from './utils/randomNumber';

export class Company {
	private timer: Object = {};
	private timerCount: number = 0;
	private employees: Employee[] = [];
	private historyLog: HistoryLog = new HistoryLog();
	// private name: string;

	constructor() {
		this.timerCount = 0;
		this.employees = [];
		console.log("I'm a company!");
	}

	public init(): void {
		this.timer = setInterval(this.onTimerInterval.bind(this), 1000);

		while (this.employees.length < 10) {
			this.createEmployee();
		}

		console.log(this.historyLog.getLog());

		// console.log(this.employees);
	}

	private onTimerInterval(): void {
		this.timerCount++;
		this.randomEvent;
	}

	private randomEvent(): void {}

	private createEmployee(): Employee {
		const newEmployee = new Employee();
		newEmployee.promote();
		newEmployee.promote();
		this.employees.push(newEmployee);
		this.historyLog.addNewEmployee(newEmployee);
		return newEmployee;
	}
}
