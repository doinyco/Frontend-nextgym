import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { getGlobalUsername, setGlobalUsername } from "..";
import { Link} from "react-router-dom";
import User from "./User";

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import log1 from "../images/log1.png";

const md5 = require('md5');

const authenticateUser = (username, password, cb) => {
    console.log("authenticating", username)
    axios.post(`https://my-next-gym.herokuapp.com/user/${username}`, {
        "password_hash": md5(password)
    }).then((response) => {
        setGlobalUsername({
            "user_id": response.data.user_id,
            "username": response.data.username,
        })
        
        cb(true)
    }).catch((error) => {
        console.log("Oh no no no!", error)
    });
}

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleFormInput = (event) => {
        setUsername(event.target.value)
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();

        console.log(username, password)
        authenticateUser(username, password, () => {
            props.setUserLoggedIn();
            navigate(`/profile`);
        })
    };

    const signUpCb = () => {
        console.log("signUpCb")
        navigate(`/signup`);
    }

    return (
        <div className="login">
            <h3>Log In</h3>
            <form onSubmit={handleFormSubmission}>
                    <div className="log">
                        <input
                            name="username"
                            type="text"
                            // placeholder= <img src={log1}></img>
                            placeholder=" User name"
                            value={username}
                            onChange={handleFormInput}
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder=" Password"
                            value={password}
                            onChange={handlePasswordInput}
                        />
                        <div className="log-button">
                            <input type="submit" value="Log In" />
                        </div>   
                    </div>
            </form>
            <div className="signup">
                <h4>
                    New user? <span/><span/><span/><span/>
                    <input type="button" onClick={signUpCb} value="Sign up"/>
                </h4>
                {/* <input type="button" onClick={signUpCb} value="Sign up"/> */}

            </div>
            {/* <input type="button" onClick={signUpCb} value="Sign up"/> */}
        </div>
    );
};

Login.propTypes = {
    setUserLoggedIn:PropTypes.func.isRequired,
}

export default Login;
