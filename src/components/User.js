import "./User.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import UserForm from "./UserForm";
import { getGlobalUsername } from "..";
import { getSavedPlaces, getHistories } from "../backendAPI";
import PlaceList from "./PlaceList";
import Histories from "./Histories";
import Logout from "./Logout"
import Auth from "./Auth";
import m2 from "../images/m2.png";
import blueuser from "../images/blueuser.png"
import home2 from "../images/home2.png"
import HistoryForm from "./HistoryForm";

const User = () => {
    const [places, setPlaces] = useState({"done": false, "places": []})
    const [histories, setHistories] = useState([])
    const [placesListShowing, setPlacesListShowing] = useState(false)
    const [historiesShowing, setHistoriesShowing] = useState(false)

    const cb = (new_places, context) => {
        setPlaces({"done": true, "places": new_places})
        setPlacesListShowing(true)
    }

    const getHistoriesCb = (histories, context) => {
        setHistories(histories)
        setHistoriesShowing(true)
    }

    const showHidePlacelist = () => {
        if (!placesListShowing) {
            getSavedPlaces(getGlobalUsername().user_id, cb, places)
        } else {
            setPlacesListShowing(false)
        }
    }

    const showHideHistories = () => {
        if (!historiesShowing) {
            getHistories(getGlobalUsername().user_id, getHistoriesCb, null)
        } else {
            setHistoriesShowing(false)
        }
    }

    return (
        <div className="container">
            <div className="logout">
                <Logout />
            </div>
            <header>
                <h2>{getGlobalUsername().username}'s Profile</h2>
            </header>
            <div className="user-icon">
                <img src={blueuser}></img>
            </div>
            <div className="h-form"><HistoryForm/></div>
            <div className="user-main">
                    <button onClick={showHidePlacelist}>
                        <h4>Saved Places</h4>
                        { placesListShowing ? <PlaceList placeData={places.places}/> : null }
                    </button>
                    <br/>
                    <div className="progress">
                        <button onClick={showHideHistories}>
                            <h4>Show Progress</h4>
                                <div className="words">
                                    { historiesShowing ? <Histories histories={histories}/> : null }
                                </div>
                        </button>
                    </div>
            </div>
            <div className="user-nav">
                    <Link to="/map">
                        <img src={m2}></img>
                    </Link>
                </div>
        </div>
    );
};

export default User;