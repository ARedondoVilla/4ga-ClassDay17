import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    let person = store.people[params.index] // PARA DETERMINAR EL ID DE CADA PERSONAJE SEGUN EL ARRAY
    console.log(person);
    

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Person: {person.name}</h1>
            </div>
        </div>
    )
}