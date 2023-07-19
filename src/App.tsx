import Navbar from "./components/NavBar";
import About from "./components/About";
import Cards from "./components/Projects/Cards";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Cards />
			<Technologies />
			<Contact />
			<ScrollToTop />
		</div>
	);
}

export default App;
