import { Link } from "react-router-dom";
import { useState } from "react"

const SearchResults = () => {
	const [searchTerms, setSearchTerms] = useState("")

	const handleSearchInput = (evt) => {
        setSearchTerms(evt.target.value)
    }

	return(
        <div id="navbar">
			<div id="nav-search">
				<form className="search-form">
					<input
						type="text"
						className="searchTerm"
						placeholder="Search by title..."
						value={searchTerms}
						onChange={handleSearchInput}
						/> 
					<button type="submit">Search</button>
				</form>
            </div>
            <div id="nav-buttons">
                <Link to="/">WePick</Link>&nbsp;&nbsp;
                <Link to="/login">Login</Link>&nbsp;&nbsp;
                <Link to="/signup">Sign Up</Link>&nbsp;&nbsp;
                <Link to="/account">My Account</Link>
            </div>
        </div>
    )
};

export default SearchResults;
