import { Button, Container, Text } from "parallel-ui";
import { useAppSelector } from "../hook/store";
import { useUserActions } from "../hook/userActions";

function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { removeUser } = useUserActions();

	return (
		<Container gap="2rem">
			{users.map((user) => (
				<Container key={user.id} direction="column">
					<Text>{user.name}</Text>
					<Text>{user.email}</Text>
					<Button label="Delete" onClick={() => removeUser(user.id)} />
				</Container>
			))}
		</Container>
	);
}

export default ListOfUsers;
