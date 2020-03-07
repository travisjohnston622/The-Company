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
		this.position = position ? position : Position.ASSOCIATE;
	}

	private createFirstName(): string {
		return data.first_names[randomNumber(0, data.first_names.length - 1)];
	}

	private createLastName(): string {
		return data.last_names[randomNumber(0, data.last_names.length - 1)];
	}

	public promote(): void {
		switch (this.position) {
			case Position.ASSOCIATE:
				this.position = Position.ANALYST;
				break;
			case Position.ANALYST:
				this.position = Position.SENIOR_ANALYST;
				break;
			case Position.SENIOR_ANALYST:
				this.position = Position.MANAGER;
				break;
			case Position.MANAGER:
				this.position = Position.SENIOR_MANAGER;
				break;
			case Position.SENIOR_MANAGER:
				this.position = Position.DIRECTOR;
				break;
			case Position.DIRECTOR:
				this.position = Position.VICE_PRESIDENT;
				break;
			case Position.VICE_PRESIDENT:
				this.position = Position.SENIOR_VICE_PRESIDENT;
				break;
			case Position.SENIOR_VICE_PRESIDENT:
				this.position = Position.PRESIDENT;
				break;
		}
	}
}
