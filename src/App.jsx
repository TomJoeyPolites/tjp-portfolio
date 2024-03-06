import { Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" index element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}

export default App;
