//imports
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import Variations from "../components/Variations"


const Item = ({ products }) => {
    const { id } = useParams()
    //console.log(products)

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

    const [isDark, setIsDark] = useState(false)

    const darkMode = () => {
        setIsDark(current => !current)
    }

    if (!item) {
        <Loading />
    } else {
        return (
            <div style={{ backgroundColor: isDark ? '#322c2e' : '#eacdc7', color: isDark ? 'white' : 'black' }}>
                {/* Toggles background from black to white */}
                <div>
                    {/* mapped info on color */}
                    <h1>{item.name}</h1>
                    <button className="colorChangeClick" onClick={darkMode}>Dark Background</button>
                    <div></div>
                    <button className="swatch" style={{ 'backgroundColor': item.hex }}></button>
                    <ul>
                        <li>Hex Code: {item.hex}</li>
                        <li>RGB:  ({item.rgb.r},  {item.rgb.g},  {item.rgb.b})</li>
                        <li>HSL: ({item.hsl.h}, {item.hsl.s}, {item.hsl.l})</li>
                    </ul>
                </div>
                <div>
                    {/* black and white toggle */}
                </div>
                <Variations item = {item}/>
            </div>
        )
    }
}

//export
export default Item 