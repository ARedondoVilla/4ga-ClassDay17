import React from "react";
import { useParams } from "react-router-dom";

export default function(props) {
    const params = useParams()

    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Planet: {params.index}</h1>
            </div>
        </div>
    )
}