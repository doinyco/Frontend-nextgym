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
// import "materialize-css/dist/css/materialize.min.css";
// import $ from "jquery";
import map from "../images/map.png";
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

        // setPlacesListShowing(!placesListShowing)
    }

    return (
        <div className="ur">
            <div className="logout"><Logout /></div>
            
            <header>
                <h2>My Profile</h2>
            </header>
            <div className="user-main">
                <img src={blueuser}></img>
                <br/>
                <h3>{getGlobalUsername().username}</h3>
                <div className="saved">
                    <button onClick={showHidePlacelist}>
                        <h4>Saved Places</h4>
                        { placesListShowing ? <PlaceList placeData={places.places}/> : null }
                    </button>
                    

                </div>
                {/* <button onClick={showHidePlacelist}> */}
                    {/* <div className="saved">
                        Saved Places
                    </div> */}
                    {/* <h4>Saved Places</h4> */}
                    {/* { placesListShowing ? <PlaceList placeData={places.places}/> : null } */}
                {/* </button> */}
            </div>
            <div className="user-nav">
                    <Link to="/">
                        <img src={home2}></img>
                    </Link>
                    <br/>
                    <Link to="/map">
                        <img src={map}></img>
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