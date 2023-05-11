import React from "react";
import { Card } from "../component/card";
import "../../styles/home.css";
import { useEffect } from "react";
import {Context} from "../store/appContext.js"
import { useContext } from "react";

export const Home = () => {
	const {store, actions}= useContext(Context);
	useEffect(()=>{
		actions.fetchStarWars("vehicles");
		actions.fetchStarWars("people");
		actions.fetchStarWars("planets");
		
	},[])

	return(
		<div className="text-center mx-auto">
		<h1 className="text-white">Character</h1>
	<div className="text-center mt-5 d-flex">
		
		{store.people.map((person)=>{
			return <div className="text-center mx-auto mb-5">
				<Card name={person.name} uid={person.uid} key={person.uid} detail="peopleDetail">
				
			</Card>
			{/* <h1>{person.name}</h1> */}
			</div>
		})}
		
	</div>
	<h1 className="text-white">Vehicles</h1>
	<div className="text-center mt-5 d-flex">
		
		{store.vehicles.map((vehicle)=>{
			return <div className="text-center mx-auto mb-5">
				<Card name={vehicle.name} uid={vehicle.uid} key={vehicle.uid}>
				
			</Card>
			{/* {<h1>{vehicle.name}</h1>} */}
			</div>
		})}
		
	</div>
	<h1 className="text-white">planets</h1>
	<div className="text-center mt-5 d-flex">
		
		{store.planets.map((planet)=>{
			return <div className="text-center mx-auto mb-5">
				<Card name={planet.name} uid={planet.uid} key={planet.uid}>
				
			</Card>
			{/* {<h1>{vehicle.name}</h1>} */}
			</div>
		})}
		
	</div>

	</div>
)};
