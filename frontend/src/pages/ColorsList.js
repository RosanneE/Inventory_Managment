//imports
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import App from "../App"
import Item from "./Color"

const InventoryList = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const updateSearch = e => {
        setSearchTerm(e.target.value)
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
                        value = {searchTerm}
                        onChange = {updateSearch}
                        />
                    </form>
                </div>
                <div className="productsList">
                    {/* ternery checks that products is not null */}
                    {products ? products.map((product, hex) =>
                        <Link to={`/product/${product.hex.slice(1, product.hex.length)}`} key={product.hex}>
                            <h2 className="colorName" style={{ 'color': product.hex }}>{product.name}</h2>
                        </Link>
                    ) : <h2>Loading</h2>}
                </div>
            </div>
        </div>
    )
}
//export
export default InventoryList 