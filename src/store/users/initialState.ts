import { User } from "../../type/user";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "John Doe",
		email: "XXXXXXXXXXXXXX",
	},
	{
		id: "2",
		name: "Jane Doe",
		email: "XXXXXXXXXXXXXX",
	},
	{
		id: "3",
		name: "John Smith",
		email: "XXXXXXXXXXXXXX",
	},
];

export const initialState: User[] = (() => {
	const persistedState = localStorage.getItem("state");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return DEFAULT_STATE;
})();
