import "./User.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import UserForm from "./UserForm";
import { getGlobalUsername } from "..";
import { getSavedPlaces } from "../backendAPI";
import PlaceList from "./PlaceList";

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
        <div className="user">
            <header>
                <h2>Welcome {getGlobalUsername().username}</h2>
            </header>
            <main>

                <img src={profile}></img>
                <br/>
            <button onClick={showHidePlacelist}>List of Favourite Places</button>
            {
                placesListShowing ? <PlaceList placeData={places.places}/> : null
            }
            </main>
            <section className="nav">
                <Link to="/">
                    <div id="home">🏠</div>
                </Link>
                <br/>
                
                <Link to="/map">
                    <div id="go-to-map">🗺</div>
                </Link>
            </section>
        </div>
    );
};

// User.propTypes = {
//     name:PropTypes.string.isRequired
// }

export default User;