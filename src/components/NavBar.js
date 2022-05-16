import { Link } from "react-router-dom";

const SearchResults = () => {
	return (
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/search">Search</Link>
			</li>
			<li>
				<Link to="/details">Details</Link>
			</li>
		</ul>
	);
};

export default SearchResults;
