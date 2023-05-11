import React from "react";
import { Link } from "react-router-dom";

export const Card = ({name, uid, detail}) => {
	return(
	<>
		<div className="card container row mx-2" style={{ width: "300px", height: "400px"}}>
  <img src="..." className="card-img-top"  alt="..."></img>
  <div className="card-body">
    <h5 className="card-title mx-auto">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="d-flex justify-content-between">
   <Link to={`/${detail}/${uid}`}> <button className="btn btn-primary">Learn more!</button></Link>
   <Link to={`/${detail}/${uid}`}> <button className="btn btn-warning"><i className="fa-regular fa-heart"></i></button></Link>
   </div>
  </div>
</div>
		
	</>
)};
