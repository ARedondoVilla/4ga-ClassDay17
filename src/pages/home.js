import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

import Card from "../components/card.js"

export default function(props) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPlanets()
        actions.getPeople()
    }, [])

    console.log(store.planets);
    

    return (
        <div className="container">
            <h1>Planets</h1>
            {store.planets.map((planet, index) => 
                <Card key={index} name={planet.name} resource="planets" id={index}>
                    <p>Population: {planet.population}</p>
                    <p>Terrain: {planet.terrain}</p>
                </Card>
            )}
            <h1>Characters</h1>
            {store.people.map((person, index) => 
                <Card key={index} name={person.name} resource="people" id={index}>
                    <p>Hair Color: {person.hair_color}</p>
                    <p>Eye-Color: {person.eye_color}</p>
                </Card>
            )}
          
        </div>
    )
}