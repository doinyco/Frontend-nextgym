import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { getGlobalUsername, setGlobalUsername } from "..";
import { Link} from "react-router-dom";
import User from "./User";

import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

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

        console.log(username, password)
        authenticateUser(username, password, () => {
            props.setUserLoggedIn();
            navigate(`/user`);
        })
    };

    const signUpCb = () => {
        console.log("signUpCb")
        navigate(`/signup`);
    }

    return (
        <div className="login">
            <form onSubmit={handleFormSubmissionn}>
                <div className="auth">
                    <div className="log">
                        <h3>Login</h3>
                        <input
                            name="username"
                            type="text"
                            placeholder="User name"
                            value={username}
                            onChange={handleFormInput}
                        />
                        <br/>
                        <br/>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordInput}
                        />
                        <br/>
                        <br/>
                        <div className="log-button">
                            <input type="submit" value="Log In" />
                        </div>
                        <div className="sign-up">
                        {/* <h3>Sign-up</h3> */}
                        {/* <UserForm/> */}
                        <h4>New user?</h4>
                    </div>
                        
                    </div>
                    <br/>
                </div>
            </form>
            <input type="button" onClick={signUpCb} value="Sign up"/>
        </div>
    );
};

Login.propTypes = {
    setUserLoggedIn:PropTypes.func.isRequired,
}

export default Login;
