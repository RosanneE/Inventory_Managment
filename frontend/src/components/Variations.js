import { useParams } from "react-router-dom";
import Item from "../pages/Color";
import ColorSort from "./ColorSort";

//displays variations on the original color
const Variations = ({item}) => {
function light(r, b, g){

  //make turnery
      if ( r > 255 ) r = 255
      else if  (r < 0) r = 0
  
      if ( b > 255 ) b = 255
      else if  (b < 0) b = 0
  
      if ( g > 255 ) g = 255
      else if  ( g < 0 ) g = 0
}


	return (
		<div className="colorVar">
            <h3>Variations</h3>
            <div className="swatch" style={{'background-color': item.hex}}></div>
            {/* <ColorSort/> */}
            <h3>New RBG Values: {}</h3>
            <button onClick={light(item.rbg.r, item.rbg.b, item.rgb.g)}>Lighter</button>
            <button>Darker</button>
		</div>
	)
}
export default Variations