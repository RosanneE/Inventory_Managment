import React from "react"
import { Link } from "react-router-dom"

//Used in App.js, appears on all pages
const Nav = (props) => {
	return (
		<div className="nav">
			<Link to="/">
				<div>Home</div>
			</Link>
			<Link to="/products">
				<div>Inventory List</div>
			</Link>
		</div>
	)
}

export default Nav