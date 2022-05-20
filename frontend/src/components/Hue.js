import React, { useState } from "react";


//displays variations on the original color
const Hue = ({ item }) => {

    const [filter, onChange] = useState(0);


    return (
        <div className="colorVar">
            <div className="swatchTwo" style={{ 'backgroundColor': item.hex, 'filter': `invert(${filter}%)` }}></div>
            {/* <ColorSort/> */}
            <h3>Filter Percentage: {`${filter}%`}</h3>
            <div className="slider">
                <input type="range" min="0" max="100" value={filter}
                    onChange={({ target: { value: radius } }) => {
                        onChange(radius);
                    }}
                />

            </div>
        </div>
    )
}

export default Hue