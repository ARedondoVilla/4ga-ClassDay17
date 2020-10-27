import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    
    let path = "/"+props.resource+"/"+props.id; 
    console.log(path);
    
    
    return (
        
        <div className="container">
                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Nombre: {props.name}</h5>
                    {props.children}
                    <Link to={path} className="btn btn-primary" id="button-info">Learn More!</Link>
                </div>
            </div>
        </div>
            
        
                
    )
}