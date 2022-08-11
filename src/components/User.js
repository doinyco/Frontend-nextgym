import "./User.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import UserForm from "./UserForm";
import { getGlobalUsername } from "..";
import { getSavedPlaces } from "../backendAPI";
import PlaceList from "./PlaceList";
// import "materialize-css/dist/css/materialize.min.css";
// import $ from "jquery";

const User = () => {
    const [places, setPlaces] = useState({"done": false, "places": []})
    const [placesListShowing, setPlacesListShowing] = useState(false)

    // useEffect(() => {
    //     getSavedPlaces(getGlobalUsername().user_id, cb, places)
    // }, []);

    const cb = (new_places, context) => {
        console.log("cb")
        setPlaces({"done": true, "places": new_places})
        setPlacesListShowing(true)
    }

    const showHidePlacelist = () => {
        if (!placesListShowing) {
            getSavedPlaces(getGlobalUsername().user_id, cb, places)
        } else {
            setPlacesListShowing(!placesListShowing)
        }

        // setPlacesListShowing(!placesListShowing)
    }

    console.log("asde")

    return (
        <div className="ur">
            <header>
                <h2>My Profile</h2>
                {/* <h2>Welcome {getGlobalUsername().username}</h2> */}
            </header>
            <div className="user-main">
                <img src={profile}></img>
                <br/>
                <h3>{getGlobalUsername().username}</h3>
                <button onClick={showHidePlacelist}>
                    <div className="saved">
                        Saved Places
                    </div>
                    { placesListShowing ? <PlaceList placeData={places.places}/> : null }
                </button>
                {/* { placesListShowing ? <PlaceList placeData={places.places}/> : null } */}
            </div>
            <div className="user-nav">
                    <Link to="/">
                        <div id="main">🏠</div>
                    </Link>
                    <br/>
                    <Link to="/map">
                        <div id="go-to-map">🗺</div>
                    </Link>
                </div>
            {/* <footer/> */}
        </div>
    );
};

// User.propTypes = {
//     name:PropTypes.string.isRequired
// }

export default User;