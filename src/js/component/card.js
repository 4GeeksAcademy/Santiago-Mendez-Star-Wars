import React from "react";
import { Link } from "react-router-dom";

export const Card = ({name, uid, detail}) => {
	return(
	<>
		<div className="card container row mx-2" style={{ width: "250px" }}>
  <img src="..." className="card-img-top"  alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link to={`/${detail}/${uid}`}> <button className="btn btn-primary">Learn More</button></Link>
  </div>
</div>
		
	</>
)};
