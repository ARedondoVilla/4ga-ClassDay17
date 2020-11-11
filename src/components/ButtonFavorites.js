import React, { useContext, useEffect, useState } from "react";

import { Context } from "../store";

 
export default function(props) {
    const { store, actions } = useContext(Context)

    useEffect(() => {
         console.log(listFav);
    })

    const [listFav, setListFav] = useState([])
    
    function setFav(element) {
        let newList = []
        if (element.isFav) {
        //    element.isFav = false;
            newList =  listFav.filter((item, index) => {
               return element.id !== item.id
           })
        //    setListFav(newList)
         } else {
        //    element.isFav = true;
        //    setListFav([...listFav, element ])
            newList = [...listFav, element ]
        }
        setListFav(newList);
        element.isFav = !element.isFav 
    }


    return (
        <>
            <button type="button" onClick={(event) => setFav(props.elemento)}>Fav</button>
        </>
    )
}