import React, {useContext} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";



export default function(props) {
    const { store, actions } = useContext(Context);

    
    let path = "/"+props.resource+"/"+props.id; 
    // console.log(path);
    
    let imgRandom = Math.floor((Math.random()*1000)+1)
    let pathImg = "https://picsum.photos/400/200?random="+imgRandom;
    
    return (
        
        <div className="container">
                <div className="card">
                <img src={pathImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {props.name}</h5>
                    {props.children}
                    <div className="row justify-content-between">
                        <div className="col-6">
                            <Link to={path} className="btn btn-primary" id="button-info">Learn More!</Link>
                        </div>
                        <div className="col-6">
                            <button type="button" class="btn btn-warning" onClick={event => actions.addList(props.name)}>Add to Favorites</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
            
        
                
    )
}