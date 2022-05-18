//imports
import { Link } from "react-router-dom"
import Loading from "./Loading"

const MapColors = ({ products }) => {
    console.log(products);
    <div className="productsList">
    {/* ternery checks that products is not null */}
    {products ? products.map((product, hex) => { 
        return (
            //map products to links/list
            <Link to={`/product/${product.hex.slice(1, product.hex.length)}`} key={product.hex}>
                <div className="swatch" style={{ 'background-color': product.hex }}></div>
            </Link>
        )
    }
    ) : <Loading />
    }
</div>
}
export default MapColors