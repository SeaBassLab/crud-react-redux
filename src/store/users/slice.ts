import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ObjectId } from "../../type";
import { User } from "../../type/user";
import { initialState } from "./initialState";

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
