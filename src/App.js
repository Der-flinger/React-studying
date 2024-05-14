import logo from "./logo.svg";
import "./App.css";
import Message from "./cs/Message";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Message text="Hello world!" />
			</header>
		</div>
	);
}

export default App;
