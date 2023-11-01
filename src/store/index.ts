import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import { User } from "../type/user";
import usersReducers, { rollbackUser } from "./users/slice";

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("state", JSON.stringify(store.getState()));
};

const syncWithDataBase: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;

	const previusState = store.getState();
	next(action);

	if (type === "user/deleteUser") {
		const userToRemove = previusState.users.find(
			(user: User) => user.id === payload,
		);
		fetch(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) toast.success("Usuario eliminado");
			})
			.catch((err) => {
				toast.error("Error eliminando usuario");
				if (userToRemove) store.dispatch(rollbackUser(userToRemove));
				console.log(err);
			});
	}
};

export const store = configureStore({
	reducer: {
		users: usersReducers,
	},
	middleware: [persistanceMiddleware, syncWithDataBase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
