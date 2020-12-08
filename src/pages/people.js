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
                <div className="col-6">
                    <h1>{person.name}</h1>
                    <p>
                        Lorem fistrum ese que llega no puedor la caidita te voy a borrar el cerito al ataquerl pupita qué dise usteer diodeno quietooor. A gramenawer de la pradera a gramenawer no puedor no puedor a wan. Hasta luego Lucas a peich a wan tiene musho peligro torpedo jarl caballo blanco caballo negroorl a peich de la pradera no te digo trigo por no llamarte Rodrigor.
                    </p> 
                </div>
            
            </div> 
        </div>
    )
}