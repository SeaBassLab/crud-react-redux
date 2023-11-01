import { Container } from "parallel-ui";
import { Toaster } from "sonner";
import CreateNewUser from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<Container
			height="100vh"
			justify="center"
			align="center"
			direction="column"
			gap="2rem"
		>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</Container>
	);
}

export default App;
