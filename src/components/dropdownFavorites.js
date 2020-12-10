import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/index.js";

export default function(props) {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // actions.getListFavorites()
    }, [store.favorites])

 return (
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            {store.favorites.map((item, index) => {
                <a className="dropdown-item" href="#" key={index}>{item}</a>
            })}
        </div>
    </div>
    )
}