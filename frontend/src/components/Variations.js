import { useParams } from "react-router-dom";
import Item from "../pages/Color";
import ColorSort from "./ColorSort";

//displays variations on the original color
const Variations = ({item}) => {
	return (
		<div className="colorVar">
            <h3>Variations</h3>
            <div className="swatch" style={{'background-color': item.hex}}></div>
            {/* <ColorSort/> */}
            <h3>New Hex Code: {}</h3>
            <button>Lighter</button>
            <button>Darker</button>
		</div>
	)
}
export default Variations