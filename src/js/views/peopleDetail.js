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
	<>
		<h1>people Detail</h1>
        <h3>
            {store.peopleInfo.name}
        </h3>
        <h3>
            {store.peopleInfo.height}
        </h3>
       
		
	</>
)};