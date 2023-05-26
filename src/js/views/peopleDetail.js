import React from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";

export const PeopleDetail = () => {
const params = useParams();
const {store, actions} = useContext(Context);
useEffect (()=>{
    actions.fetchPeopleDatail(params.theid)
},[])


	return(
	<div className="text-white text-center">
		

        <h1>
            {store.peopleInfo.name}
        </h1>
		<img src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`}></img>

        <br></br>
        <br></br>
        <h4>
        Height :  {store.peopleInfo.height}
        </h4>

        <h4>
        Mass :  {store.peopleInfo.mass}
        </h4>

        <h4>
        Skin_color :   {store.peopleInfo.skin_color}
        </h4>

        <h4>
        Eye_color :  {store.peopleInfo.eye_color}
        </h4>

        <h4>
        Gender :  {store.peopleInfo.gender}
        </h4>

        <h4>
        Birth year :  {store.peopleInfo.birth_year}
        </h4>
       
		
	</div>
)};