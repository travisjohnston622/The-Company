import { Employee } from './Employee';
import { Position } from './enums/Position';
import randomNumber from './utils/randomNumber';
import * as data from './data/names.json';

export class Company {
	private timer: Object = {};
	private timerCount: number = 0;
	private employees: Employee[] = [];
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

		console.log(this.employees);
	}

	private onTimerInterval(): void {
		// console.log("burple");
		this.timerCount++;
		this.randomEvent;
		// clearInterval(this.timer);
	}

	private randomEvent(): void {}

	private createEmployee(): Employee {
		const newEmployee = new Employee();
		newEmployee.promote();
		newEmployee.promote();
		console.log(newEmployee.getFullName());
		this.employees.push(newEmployee);
		return newEmployee;
	}
}
