import { Id } from ".";

export interface User extends Id {
	name: string;
	email: string;
}
