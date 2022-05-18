//imports
import React, {useState} from "react";

//Loading Animation (used in Color and ColorsList)

const SearchBar = (searchTerm, setSearchTerm) => {
    const updateSearch = e => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="searchBar">
        <form>
            <label>Search by Hex Code: </label>
            <input
                placeholder="Search Here"
                value={searchTerm}
                onChange={updateSearch}
            />
        </form>
    </div>
    )
}

export default SearchBar