import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

export const PlanetsDetail = () => {
const params = useParams();
const {store, actions} = useContext(Context);
useEffect (()=>{
    actions.fetchPlanetsDatail(params.theid)
},[])


	return(
	<div className="text-white">
		<h1>planet Detail</h1>
        <h3>
            {store.planetsInfo.name}
        </h3>
        <h3>
            {store.planetsInfo.population}
        </h3>
       
		
	</div>
)};