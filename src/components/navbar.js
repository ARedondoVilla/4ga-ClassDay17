import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";


export default function(props) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // actions.getListFavorites()
    }, [store.favorites])

    return (
        <nav className="navbar navbar-expand navbar-light bg-light mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png"/>
                </a>
            </div>
        </nav>
    )
}