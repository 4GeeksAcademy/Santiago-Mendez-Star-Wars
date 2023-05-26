import React, {useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import  PropTypes  from "prop-types";

export const Card = ({name, uid, detail, props}) => {
  const {store, actions}= useContext(Context);
  
 
	return(
	<>
		<div className="card container row mx-2" style={{ width: "300px", height: "500px", backgroundColor: "#4B0082"}}>
  <img style={{ width: "300px", height: "300px",}} src={`https://starwars-visualguide.com/assets/img/${detail}/${uid}.jpg`} className="card-img-top"  alt="..."></img>
  <div className="card-body">
    <h5 className="card-title mx-auto text-white">{name}</h5>
    <p className="card-text"></p>
    <div className="d-flex justify-content-between">
   <Link to={`/${detail}/${uid}`}> <button className="btn btn-primary">Learn more!</button></Link>
   <button className="btn btn-warning" onClick={()=>{actions.addFavorites(name)}}><i className="fa-regular fa-heart"></i></button>
   </div>
  </div>
</div>
		
	</>
)};

// `https://starwars-visualguide.com/assets/img/?${props.proptypes == "people"? "characters": "planets"}/${props.id}.jpg`