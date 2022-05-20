//imports
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../components/Loading"
import Grayscale from "../components/Grayscale"
import Invert from "../components/Invert"
import TintTone from "../components/TintTone"

const Item = ({ products }) => {

    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [isDark, setIsDark] = useState(false)

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

    const darkMode = () => {
        setIsDark(current => !current)
    }

    if (!item) {
        <Loading />
    } else {
        return (
            <div className="colorPage" style={{ backgroundColor: isDark ? '#0e070d' : '#d7eae5', color: isDark ? 'white' : 'black' }}>
                {/* Toggles background from black to white */}
                <div>
                    {/* mapped info on color */}
                    <h1>{item.name}</h1>
                    <h4>Click to change background color</h4>
                    <button className="colorChangeClick" onClick={darkMode}>{(isDark ? ("Light Background") : ("Dark Background"))}</button>
                    <div className='ogSwatch'>
                        <h3>Color Swatch</h3>
                        <div className="swatchTwo" style={{ 'backgroundColor': item.hex }}></div>
                        <ul>
                            <li>Hex Code: {item.hex}</li>
                            <li>RGB:  ({item.rgb.r},  {item.rgb.g},  {item.rgb.b})</li>
                            <li>HSL: ({item.hsl.h}, {item.hsl.s}, {item.hsl.l})</li>
                        </ul>
                    </div>
                </div>
                <div className="variations">
                    <div className="shading">
                        <h3>Tint and Tone</h3>
                        <TintTone item={item} />
                    </div>
                    <div className="greyscale">
                        <h3>Grayscale</h3>
                        <Grayscale item={item} />
                    </div>
                    <div className="invert">
                        <h3>Invert</h3>
                        <Invert item={item} />
                    </div>
                </div>
            </div>
        )
    }
}

//export
export default Item 