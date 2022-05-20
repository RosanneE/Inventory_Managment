//imports

//Loading Animation (used in Color and ColorsList)
const SearchBar = ({searchTerm, updateSearch}) => {

    return (
        <div className="searchBar">
        <form>
            <label>Search by Color Name: </label>
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