import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";
import MediaDetails from "./components/MediaDetails";
import NavBar from "./components/NavBar";
import Footer from	"./components/Footer"
import "./App.css"

const App = () => {
	return (
		<>
			<NavBar />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route path="/search" element={<SearchResults />} />
				<Route path="/details" element={<MediaDetails />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
