import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "../../type";
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

const initialState: User[] = (() => {
	const persistedState = localStorage.getItem("state");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return DEFAULT_STATE;
})();

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			state.push(action.payload);
		},
		deleteUser: (state, action: PayloadAction<ObjectId>) => {
			return state.filter((user) => user.id !== action.payload);
		},
		rollbackUser: (state, action: PayloadAction<User>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default userSlice.reducer;

export const { addNewUser, deleteUser, rollbackUser } = userSlice.actions;
