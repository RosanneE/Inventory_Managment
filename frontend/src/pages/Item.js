//imports
import React from "react"
import { Link, useParams } from "react-router-dom"


const Item = ({ products }) => {
    const { id } = useParams()
    console.log(id)

    let product = ""

    async function setProduct() {
        try {
            product = products.find(prod =>
                prod.hex.slice(1, product.hex.length) == id
            )
            console.log(product)
            setProduct()
        } catch (error) {
            console.log(error)
            throw error
        }
        product ? setProduct() : <h2>loading</h2>
    }

    return (
        <div>
            <h1>Color Name</h1>
            {console.log(product.name)}
            <h1>{product.hex}</h1>
        </div>
    )

}

//export
export default Item 