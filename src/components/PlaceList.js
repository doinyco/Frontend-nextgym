import "./PlaceList.css";

import React from "react";
import Place from "./Place.js";
import PropTypes from "prop-types";

const PlaceList = (props) => {
    const Favourites = props.placeData.map((place) => {
        console.log("Will render", props.placeData.length, "places");
        return (<Place key={place.place_id} place_id={place.place_id} maps_place_id={place.maps_place_id} name={place.name} lat={place.lat} lon={place.lon} />);
    });

    
    return (
        <div>
            <ul className="collection">
                {Favourites}
            </ul>
            {/* {
                props.placeData.map((place) => {
                    console.log("Will render", props.placeData.length, "places");
                    return <Place key={place.place_id} place_id={place.place_id} maps_place_id={place.maps_place_id} name={place.name} lat={place.lat} lon={place.lon} />;
                })
            } */}

        </div>
    );
};

PlaceList.propTypes = {
    placeData:PropTypes.array.isRequired
}

export default PlaceList;