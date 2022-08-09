import "./Place.css";
import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

import { addFavoritePlace, removeFavoritePlace } from "../backendAPI"
import { getGlobalUsername } from ".."
// import { removeFavoritePlaceHelper } from "./Map.js";

const Place = (props) => {
    const [savedPlace, setSavedPlace] = useState(true);
    const [place_id, setPlaceId] = useState(props.place_id)

    console.log("Drawing Place", place_id, props)

    const addFavoritePlaceCb = (place) => {
        setPlaceId(place.place_id)
    }

    const buttonCb = () => {
        if (savedPlace) {
            setSavedPlace(false)

            removeFavoritePlace(getGlobalUsername().user_id, place_id)
        } else {
            setSavedPlace(true)

            addFavoritePlace(getGlobalUsername().user_id, props, addFavoritePlaceCb)
        }

        console.log("deletePlaceCb", place_id)
    };

    return (
        <div className="List-info">
            <h3>
                {props.name}
                {/* <button onClick={deletePlaceCb}>Remove</button> */}
            </h3>
            <button onClick={buttonCb}>{savedPlace ? "❤️" : "🤍"}</button>
            {/* <p>{props.lat} {props.lon}</p> */}
            {/* <p>{props.place_id} {props.maps_place_id}</p> */}
            {/* <button>Remove</button> */}
        </div>
    );
};

Place.propTypes = {
    place_id:PropTypes.number.isRequired,
    maps_place_id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    lat:PropTypes.number.isRequired,
    lon:PropTypes.number.isRequired
}

export default Place;