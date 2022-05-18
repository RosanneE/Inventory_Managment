import { useParams } from "react-router-dom";
import Item from "../pages/Color";

//displays variations on the original color
const Variations = ({item}) => {
   console.log(item)
	return (
		<div className="colorVar">
            <h3>Variations</h3>
		</div>
	)
}
export default Variations