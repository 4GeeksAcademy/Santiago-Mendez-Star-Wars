import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3 px-4" style={{ height:"100px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 text-white" >StarWars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorite <i class="fa-solid fa-heart"></i></button>
				</Link>
			</div>
		</nav>
	);
};

