import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
	return (
		<div className="nav">
			<Link to="/">
				<div>Login</div>
			</Link>
			<Link to="/products">
				<div>Inventory List</div>
			</Link>
		</div>
	)
}

export default Nav