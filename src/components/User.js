import "./User.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import UserForm from "./UserForm";
import { getGlobalUsername } from "..";
import { getSavedPlaces } from "../backendAPI";
import PlaceList from "./PlaceList";
import Logout from "./Logout"
import Auth from "./Auth";
// import map from "../images/map.png";
import m2 from "../images/m2.png";
import blueuser from "../images/blueuser.png"
import home2 from "../images/home2.png"

const User = () => {
    const [places, setPlaces] = useState({"done": false, "places": []})
    const [placesListShowing, setPlacesListShowing] = useState(false)

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
    }

    return (
        <div className="container">
            <div className="logout"><Logout /></div>
            
            <header>
                <h2>{getGlobalUsername().username}'s Profile</h2>
            </header>
            <div className="user-icon">
                <img src={blueuser}></img>
            </div>
            <div className="user-main">
                <div className="saved">
                    <button onClick={showHidePlacelist}>
                        <h4>Saved Places</h4>
                        { placesListShowing ? <PlaceList placeData={places.places}/> : null }
                    </button>   
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="user-nav">
                    <Link to="/map">
                        <img src={m2}></img>
                    </Link>
                </div>
        </div>
    );
};

export default User;