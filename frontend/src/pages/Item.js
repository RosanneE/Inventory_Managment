//imports
import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"


const Item = ({ products }) => {
    const { id } = useParams()
    //console.log(id)

    const [item, setItem] = useState(null)


    async function setProduct() {
        try {
            let product = await products.find(prod =>
                prod.hex.substring(1, prod.hex.length) === id
            )
            console.log(product)
            setItem(product)

        } catch (error) {
            console.log(error)
            throw error
        }
    }
    setProduct()

    if (!item) {
        <h2>loading</h2>
    } else {
        return (
            <div>
                <h1>Color Name</h1>
                {console.log(item.name)}
                <h1>{item.name}</h1>
                <button className="swatch" style = {{'backgroundColor': item.hex}}></button>
                <ul>
                    <li>Hex Code: {item.hex}</li>
                    <li>RGB:  ({item.rgb.r},  {item.rgb.g},  {item.rgb.b})</li>
                    <li>HSL: ({item.hsl.h}, {item.hsl.s}, {item.hsl.l})</li>
                </ul>
            </div>
        )
    }
}

//export
export default Item 