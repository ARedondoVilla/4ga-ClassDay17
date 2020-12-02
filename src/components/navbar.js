import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
                </a>
                {/* <form className="form-inline">
                    <button className="btn btn-outline-success" type="button">Main button</button>
                </form> */}
               
               <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.map((value, index) => {
                            <button key={index} className="dropdown-item">{value}</button>
                        })}
                        {/* <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a> */}
                    </div>
                </div>
                
            </div>
        
        </nav>
    )
}