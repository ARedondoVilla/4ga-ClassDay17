import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
            </a>
            <form className="form-inline">
                <button className="btn btn-outline-success" type="button">Main button</button>
                
            </form>
            {/* CREAR UN NUEVO COMPONENTE QUE SUSTITUYA AL BOTON MAIN BUTTON QUE ALMACENE LOS ELEMENTOS CON isFav = true*/ }
            </div>
        
        </nav>
    )
}