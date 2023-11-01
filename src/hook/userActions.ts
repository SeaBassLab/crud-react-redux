import { addNewUser, deleteUser } from "../store/users/slice";
import { ObjectId } from "../type";
import { User } from "../type/user";
import { useAppDispatch } from "./store";

export function useUserActions() {
	const dispatch = useAppDispatch();

	const addUser = (user: User) => {
		dispatch(addNewUser(user));
	};

	const removeUser = (id: ObjectId) => {
		dispatch(deleteUser(id));
	};

	return { addUser, removeUser };
}
