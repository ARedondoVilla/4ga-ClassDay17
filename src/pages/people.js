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
            <div className="jumbotron">
                <h1>Person: {person.name}</h1>
            </div>
            <div className="card mb-3" id="card-more">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/800/600" className="card-img" alt="..."/>
                     </div>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}