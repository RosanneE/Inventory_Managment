import React, { useState } from "react";


//displays variations on the original color
const Variations = ({ item }) => {
      let [r, setR] = useState(item.rgb.r)
      let [g, setG] = useState(item.rgb.g)
      let [b, setB] = useState(item.rgb.b)
      let colorString = `rgb(${r},${g},${b})`

      function light() {
            (r < 245) ? setR(r + 10): setR(255);
            (g < 245) ? setG(g + 10): setG(255);
            (b < 245) ? setB(b + 10):setB(255);
      }
      function dark() {
                  (r > 10) ? setR(r - 10): setR(0);
                  (g > 10) ? setG(g - 10): setG(0);
                  (b > 10) ? setB(b - 10):setB(0);
                  colorString = `rgb(${r},${g},${b})`
                  console.log(colorString)
      }
      function reset(){
            setR(item.rgb.r)
            setG(item.rgb.g)
            setB(item.rgb.b)
      }

      return (
            <div className="colorVar">
                  <h3>Variations</h3>
                  <div className="swatchTwo" style={{ 'backgroundColor': colorString }}></div>
                  {/* <ColorSort/> */}
                  <h3>RGG Values: {r}, {g}, {b}</h3>
                  <button onClick={light}>Lighter</button>
                  <button onClick={reset}>Reset</button>
                  <button onClick={dark}>Darker</button>
            </div>
      )
}
export default Variations
