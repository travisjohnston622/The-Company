import { Employee } from "./Employee";
import { Position } from "./enums/Position";

export class Company {
	private timer: Object = {};
	private timerCount: number = 0;
	private employees: Employee[] = [];

	constructor() {
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
		console.log("burple");
		this.timerCount++;
		this.randomEvent;
		// clearInterval(this.timer);
	}

	private randomEvent(): void {}

	private createEmployee(): Employee {
		const min: number = 0;
		const max: number = 10;
		const randomNumber: number = Math.floor(
			Math.random() * (1 + max - min) + min,
		);

		const newEmployee = new Employee(
			"Travis",
			"Johnston",
			1000000,
			Position.PRESIDENT,
		);
		this.employees.push(newEmployee);
		return newEmployee;
	}
}
