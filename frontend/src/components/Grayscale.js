import React, { useState } from "react";


//displays greyscale variations on the original color
const Grayscale = ({ item }) => {
   
      const [filter, setFilter] = useState(0);

      return (
          <div className="colorVar">
              <div className="swatchTwo" style={{ 'backgroundColor': item.hex, 'filter': `grayscale(${filter}%)` }}></div>
              {/* <ColorSort/> */}
              <h3>Filter Percentage: {`${filter}%`}</h3>
              <div className="slider">
                  <input type="range" min="0" max="100" value={filter}
                      onChange={({ target: { value: radius } }) => {
                          setFilter(radius);
                      }}
                  />
  
              </div>
          </div>
      )
  }
export default Grayscale