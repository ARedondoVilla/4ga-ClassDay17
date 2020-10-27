import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    
    let path = "/"+props.resource+"/"+props.id; 
    console.log(path);
    
    
    return (
        <div className="container">
            <div className="card">
                <p>Nombre: {props.name}</p>
                {props.children}
                <Link to={path} className="btn btn-primary">Learn More!</Link>
               
            </div>
        </div>
                
    )
}