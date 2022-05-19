//imports
import { Link } from "react-router-dom"
import Loading from "../components/Loading"

const Login = ({ products }) => {

    return (
        <div>
            <h1>Hues Your Own Adventure!</h1>
            <div className="intro">
                <p>Welcome!</p>
                <p>Scroll through the swatches below to find a color that strikes your fancy.  Clicking on the color will take you to a page with the color's name, RGB, HSL and Hex codes.It will also allow you to see lighter and darker versions of the color, and to view it against a darker background.  </p>
                <p>Hues your colors wisely! </p>
            </div>
            {/* <MapColors/> */}
            <div className="productsList">
                {/* ternery checks that products is not null */}
                {products ? products.map((product, hex) => {
                    return (
                        //map products to links/list
                        <Link to={`/product/${product.hex.slice(1, product.hex.length)}`} key={product.hex}>
                            <div className="swatch" style={{ 'color': product.hex, 'background-color': product.hex }}><h3>{product.name}</h3></div>
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