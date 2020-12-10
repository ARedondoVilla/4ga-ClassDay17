import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const params = useParams()
    const { store, actions } = useContext(Context);

    useEffect(() => {
        console.log(params);
        
    }, [])

    let person = store.people[params.index] // PARA DETERMINAR EL ID DE CADA PERSONAJE SEGUN EL ARRAY
    console.log(person);
    

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src="https://picsum.photos/500/250">
                    </img>
                </div>
                <div className="col-6 text-center">
                    <h1>{person.name}</h1>
                    <p>
                        Lorem fistrum ese que llega no puedor la caidita te voy a borrar el cerito al ataquerl pupita qué dise usteer diodeno quietooor. A gramenawer de la pradera a gramenawer no puedor no puedor a wan. Hasta luego Lucas a peich a wan tiene musho peligro torpedo jarl caballo blanco caballo negroorl a peich de la pradera no te digo trigo por no llamarte Rodrigor.
                    </p> 
                </div>
            </div>
            <div className="dropdown-divider"></div>
            <div className="row">
                <div className="col-2 text-center">
                    <strong><h5>Name</h5></strong>
                    <h6>{person.name}</h6>
                </div>
                <div className="col-2 text-center">
                    <h5>Birth Year</h5>
                    <h5>{person.birth_year}</h5>
                </div>
                <div className="col-2 text-center">
                    <h5>Gender</h5>
                    <h5>{person.gender}</h5>
                </div>
                <div className="col-2 text-center">
                    <h5>Height</h5>
                    <h5>{person.height}</h5>
                </div>
                <div className="col-2 text-center">
                    <h5>Skin Color</h5>
                    <h5>{person.skin_color}</h5>
                </div>
                <div className="col-2 text-center">
                    <h5>Eye Color</h5>
                    <h5>{person.eye_color}</h5>
                </div>
            </div>
        </div>
    )
}