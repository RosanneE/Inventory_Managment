import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Item from "../pages/Color";
import ColorSort from "./ColorSort";

//displays variations on the original color
const Variations = ({ item }) => {
      let [r, setR] = useState(item.rgb.r)
      let [g, setG] = useState(item.rgb.g)
      let [b, setB] = useState(item.rgb.b)
      let colorString = `rgb(${r},${g},${b})`

      function light() {

            if (r < 255 && g < 255 && b < 255) {
            setR(r + 10)
            setG(g + 10)
            setB(b + 10)
            }
      }
      function dark() {

            if (r > 0 && g > 0 && b > 0) {
                  setR(r - 10)
                  setG(g - 10)
                  setB(b - 10)
                  colorString = `rgb(${r},${g},${b})`
                  console.log(colorString)
            }
      }



      return (
            <div className="colorVar">
                  <h3>Variations</h3>
                  <div className="swatchTwo" style={{ 'backgroundColor': colorString }}></div>
                  {/* <ColorSort/> */}
                  <h3>RGG Values: {r}, {g}, {b}</h3>
                  <button onClick={light}>Lighter</button>
                  <button onClick={dark}>Darker</button>
            </div>
      )
}
export default Variations

{/* <div className="swatchTwo" style={{ 'backgroundColor': `rgb${({ r }, { g }, { b })}` }}></div> */ }