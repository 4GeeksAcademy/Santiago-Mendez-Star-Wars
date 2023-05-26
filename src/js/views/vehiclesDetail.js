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
	<div className="text-white text-center">
        <h1>
            {store.vehiclesInfo.name}
        </h1>
		<img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.theid}.jpg`}></img>
        <br></br>
        <br></br>
        <h4>
        Model :  {store.vehiclesInfo.model}
        </h4>

        <h4>
        Vehicle class :  {store.vehiclesInfo.vehicle_class}
        </h4>

        <h4>
        Manufacturer :  {store.vehiclesInfo.manufacturer}
        </h4>

        <h4>
        Cost in credit :  {store.vehiclesInfo.cost_in_credit}
        </h4>

        <h4>
        Crew :  {store.vehiclesInfo.crew}
        </h4>

        <h4>
        Passengers :  {store.vehiclesInfo.passengers}
        </h4>
       
		
	</div>
)};