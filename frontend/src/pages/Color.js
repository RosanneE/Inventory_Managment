//imports
import React, { useState, setState, Component } from "react"
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

    const [isDark, setIsDark] = useState(false)

    const darkMode = () => {
        setIsDark(current => !current)
        console.log("this")
    }

    if (!item) {
        <h2>loading</h2>
    } else {
        return (
            <div>
                {/* Toggles background from black to white */}
                <div style={{ backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black' }}>
                    {/* mapped info on color */}
                    <h1>{item.name}</h1>
                    <button className="swatch" style={{ 'backgroundColor': item.hex }}></button>
                    <ul>
                        <li>Hex Code: {item.hex}</li>
                        <li>RGB:  ({item.rgb.r},  {item.rgb.g},  {item.rgb.b})</li>
                        <li>HSL: ({item.hsl.h}, {item.hsl.s}, {item.hsl.l})</li>
                    </ul>
                </div>
                <div>
                    {/* black and white toggle */}
                    <button className="colorChangeClick" onClick={darkMode}>Dark Background</button>
                </div>
            </div>
        )
    }
}

//export
export default Item 