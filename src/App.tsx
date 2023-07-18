import Navbar from "./components/NavBar";
import About from "./components/About";
import Cards from "./components/Projects/Cards";
import Technologies from "./components/Technologies/Technologies";

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Cards />
			<Technologies />
		</div>
	);
}

export default App;
