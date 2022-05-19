//imports
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading";

import SearchBar from "../components/SearchBar";

const InventoryList = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const updateSearch = e => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }

    return (
        <div>
            <div className="products">
                <h1>Color Name List</h1>
                <SearchBar updateSearch={updateSearch} searchTerm = {searchTerm}/>
                {/* <div className="searchBar">
                    <form>
                        <label>Search by Color Name or Hex Code: </label>
                        <input
                            placeholder="Search Here"
                            value={searchTerm}
                            onChange={updateSearch}
                        />
                    </form>
                </div> */}
                <div className="productsList">
                    {/* ternery checks that products is not null */}
                    {products ? products.map((product, hex) => {
                        return(
                            //checks for current search term inside of product's names, does not map if is not contained
                            //****TRY TO MAKE IT CASE INSENSATIVE (tried a.tolowercase, didn't work)
                        (searchTerm !== null && product.name.includes(searchTerm)) ?
                        //map products to links/list
                        <Link to={`/product/${product.hex.slice(1, product.hex.length)}`} key={product.hex}>
                            <h2 className="colorName" style={{ 'color': product.hex }}>{product.name}</h2>
                        </Link>
                        : null ) }
                    ) : <Loading/>
                    }
                </div>
            </div>
        </div>
    )
}
//export
export default InventoryList 