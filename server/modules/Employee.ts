import { Position } from "./enums/Position";
import * as data from './data/names.json';
import randomNumber from './utils/randomNumber';

export class Employee {
	private firstName: string;
	private lastName: string;
	private salary: number;
	private position: Position;

	constructor(
		firstName?: string,
		lastName?: string,
		salary?: number,
		position?: Position,
	) {
		this.firstName = firstName ? firstName : this.createFirstName();
		this.lastName = lastName ? lastName : this.createLastName();
		this.salary = salary ? salary : 10000;
		this.position = position ? position : Position.ANALYST;
	}

	private createFirstName(): string {
		return data.first_names[randomNumber(0, data.first_names.length - 1)];
	}

	private createLastName(): string {
		return data.last_names[randomNumber(0, data.last_names.length - 1)];
	}
}
