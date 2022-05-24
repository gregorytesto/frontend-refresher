import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../logos/logo-hort.png";

const SearchResults = () => {
	const [searchTerms, setSearchTerms] = useState("");

	const handleSearchInput = (evt) => {
		setSearchTerms(evt.target.value);
	};

	return (
		<div id="navbar">
			<div id="nav-search">
				<form className="search-form">
					<input
						id="search-input"
						type="text"
						className="searchTerm"
						placeholder=" Search by title..."
						value={searchTerms}
						onChange={handleSearchInput}
					/>
					&nbsp;&nbsp;
					<button id="search-button" type="submit">
						Search
					</button>
				</form>
			</div>

			<div id="nav-buttons">
				<Link to="/">
					<img src={logo} width="125px"></img>
				</Link>
				<Link to="/login">LOGIN</Link>&nbsp;&nbsp;
				<Link to="/signup">SIGN UP</Link>&nbsp;&nbsp;
				<Link to="/account">MY ACCOUNT</Link>
			</div>
		</div>
	);
};

export default SearchResults;
