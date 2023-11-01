import { Button, Container, Input, Text } from "parallel-ui";
import { useState } from "react";
import { useUserActions } from "../hook/userActions";

function CreateNewUser() {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setResult(null);

		const form = e.currentTarget;
		const formData = new FormData(form);

		const id = formData.get("id") as string;
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;

		if (!id || !name || !email) {
			return setResult("ko");
		}

		addUser({ id, name, email });
		setResult("ok");
		form.reset();
	};

	return (
		<Container gap="2rem" direction="column">
			<Text>Create new user</Text>
			<form onSubmit={handleSubmit}>
				<Input name="id" label="ID" placeholder="Aqui el id" />
				<Input name="name" label="Nombre" placeholder="Aqui el nombre" />
				<Input name="email" label="Email" placeholder="Aqui el email" />
				<Container justify="end" padding="1rem 0">
					<Button label="Crear" type="submit" />
				</Container>
			</form>
		</Container>
	);
}

export default CreateNewUser;
