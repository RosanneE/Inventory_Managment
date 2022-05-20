import React, { useEffect, useState } from "react";


//displays variations on the original color
const Invert = ({ item }) => {

    const [filter, setFilter] = useState("0%");
    const [isInverse, setIsInverse] = useState(true)

    const invertIt = () => {
        setIsInverse(current => !current)
        isInverse ? (setFilter("0%")) : (setFilter( "100%"))
        console.log(filter)
    }

    return (
        <div className="colorVar">
            <div className="swatchTwo" style={{ 'backgroundColor': item.hex, 'filter': `invert(${filter})`}}></div>
            {/* <ColorSort/> */}
            <h3>Filter Percentage: {`${filter}`}</h3>
            <div className="invertButton">
                <button onClick={invertIt}>Invert</button>
            </div>
        </div>
    )
}

export default Invert