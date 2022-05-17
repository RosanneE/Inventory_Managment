//imports
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const InventoryList = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const updateSearch = e => {
        setSearchTerm(e.target.value)
        filterBy(e.target.value)
        console.log(searchTerm)
    }
    const filterBy = term => {
        const updatedList = products.filter(listColor => listColor !== term)
    }

    return (
        <div>
            <div className="products">
                <h1>Inventory List</h1>
                <div className="searchBar">
                    <form>
                        <label>Search by color name or Hex Code: </label>
                        <input
                            placeholder="Search Here"
                            value={searchTerm}
                            onChange={updateSearch}
                        />
                        {/* <button onClick={filterBy}>Search</button> */}
                    </form>
                </div>
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
                    ) : <h2>Loading</h2>
                    }
                </div>
            </div>
        </div>
    )
}
//export
export default InventoryList 