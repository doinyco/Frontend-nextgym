import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { getGlobalUsername, setGlobalUsername } from "..";

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const authenticateUser = (username, password, setUserLoggedIn) => {
    console.log("authenticating", username)
    axios.get(`https://my-next-gym.herokuapp.com/user/${username}`)
        .then((response) => {
            console.log(response);
            setGlobalUsername({
                "user_id": response.data.user.user_id,
                "username": response.data.user.username,
            })
            console.log(getGlobalUsername())
            console.log(setUserLoggedIn)
            console.log(typeof(setUserLoggedIn))
            setUserLoggedIn(true)
        })
        .catch((error) => {
            console.log("Oh no no no!", error)
        });
}

const Login = (props) => {
    console.log("Login rendering")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleFormInput = (event) => {
        setUsername(event.target.value)
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    };

    const handleFormSubmissionn = (event) => {
        event.preventDefault();

        console.log("set username to:", username, props.setUserLoggedIn)
        authenticateUser(username, password, props.setUserLoggedIn)
    };

    const signUpCb = () => {
        console.log("signUpCb")
        navigate(`/create-profile`);
    }

    return (
        <div className="login">
            <form onSubmit={handleFormSubmissionn}>
                <input
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleFormInput}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={handlePasswordInput}
                />
                <input type="submit" value="Login" />
                <input type="button" onClick={signUpCb} value="Sign up"/>
            </form>
        </div>
    );
};

Login.propTypes = {
    setUserLoggedIn:PropTypes.func.isRequired,
}

export default Login;
