//imports
import { Link } from "react-router-dom"
import Loading from "../components/Loading"

const Login = ({products}) => {

    return (
        <div>
            <h1>Hues Your Own Adventure!</h1>
                {/* <MapColors/> */}
        <div className="productsList">
            {/* ternery checks that products is not null */}
            {products ? products.map((product, hex) => { 
                return (
                    //map products to links/list
                    <Link to={`/product/${product.hex.slice(1, product.hex.length)}`} key={product.hex}>
                        <div className="swatch" style={{ 'color': product.hex, 'background-color': product.hex }}>{product.name}</div>
                    </Link>
                )
            }
            ) : <Loading />
            }
        </div>
        </div>
    )
}

//export
export default Login 