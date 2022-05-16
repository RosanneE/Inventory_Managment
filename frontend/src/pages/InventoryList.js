//imports
import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import App from "../App"

const InventoryList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(" https://api.color.pizza/v1/", {
            })
            setProducts(data.data.colors)
            console.log(products)
        }
        fetchData()
    }, [])
    return (
        <div className="products">
            <h1>Inventory List</h1>
            <div className="productsList">
                {products.map((product,hex) =>
                <Link to = {`/products/${hex}`} key = {hex}>
                    <h2>{product.name}</h2>
                    </Link>
                )}
            </div>
        </div>
    )
}

//export
export default InventoryList 