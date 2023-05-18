import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";



export const Navbar = () => {
	const {store, actions}= useContext(Context);
	
	return (
		<nav className="navbar navbar-light bg-dark mb-3 px-4" style={{ height:"100px"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 text-white" >StarWars</span>
			</Link>
			<div className="dropdown ml-auto">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    favorites {store.favorites.length}
  </button>
  <ul className="dropdown-menu">
	{store.favorites.map(
	(favorite, index)=>{
		return (
		<li key={index}>{favorite} <button onClick={() => {actions.deleteFavorites(favorite)}}  className="rounded-circle" alt="...">X</button></li>
		);
	}	
	)}
  
  </ul>
</div>
		</nav>
	);
};

