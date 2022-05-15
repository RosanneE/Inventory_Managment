//imports
import { Link } from "react-router-dom"
import App from "../App"

const InventoryList = ({ products }) => {
    return (
        <div className="products">
            <h1>Inventory List</h1>
            <div className="productsList">
                {/* {products.map((product, idx) => (
                    <Link to={`/product/${idx}`} key={idx}>
                        <h2>{product.name}</h2>
                    </Link>
                ))} */}
            </div>
        </div>
    )
}

//export
export default InventoryList 