import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

export const VehiclesDetail = () => {
const params = useParams();
const {store, actions} = useContext(Context);
useEffect (()=>{
    actions.fetchVeiclesDetail(params.theid)
},[])


	return(
	<div className="text-white">
		<h1>vehicles Detail</h1>
        <h3>
            {store.vehiclesInfo.name}
        </h3>
        <h3>
            {store.vehiclesInfo.model}
        </h3>
       
		
	</div>
)};