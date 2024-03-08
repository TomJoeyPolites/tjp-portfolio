import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

//* Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import PageTest from "./pages/PageTest";

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/pagetest" element={<PageTest />} />
				{/* <Route path="*" element={<Home />} /> */}
			</Route>
		</Routes>
	);
}

export default App;
