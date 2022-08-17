import "./SignUp.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import md5 from "md5";
import { Link } from "react-router-dom";

import { setGlobalUsername } from "..";

const CreateProfile = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")

    const navigate = useNavigate()

    const handleUsernameInput = (event) => {
        setUsername(event.target.value)
    };

    const handleFirstNameInput = (event) => {
        setFirstName(event.target.value)
    };

    const handleLastNameInput = (event) => {
        setLastName(event.target.value)
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value)
    };

    const handleFormSubmissionn = (event) => {
        event.preventDefault();

        console.log(username, password)

        createUser();
    };

    const createUser = async () => {
        try {
            const response = await axios.post(`https://my-next-gym.herokuapp.com/user`, {
                "username": username,
                "first_name": firstname,
                "last_name": lastname,
                "password_hash": md5(password),
            })

            setGlobalUsername({
                "user_id": response.data.user_id,
                "username": response.data.username,
                "first_name": response.data.first_name,
                "last_name": response.data.last_name,
            })

            navigate('/profile')
        } catch (err) {
            console.log("error", err)
        }
    }

    return (
        <div className="SIGNUP">
            <h2>My next gym</h2>
            <br/>
            {/* <div className="signup-nav">
                <Link to="/">
                    <div id="home">Home</div>    
                </Link>
            </div> */}
            <form onSubmit={handleFormSubmissionn}>
                <div className="signup-form">
                    <h4>Welcome, create profile here</h4>
                            <input
                                name="username"
                                type="text"
                                placeholder=" User name"
                                value={username}
                                onChange={handleUsernameInput}
                            />
                            <br/>
                            <input
                                name="first name"
                                type="text"
                                placeholder=" First name"
                                value={firstname}
                                onChange={handleFirstNameInput}
                            />
                            <br/>
                            <input
                                name="last name"
                                type="text"
                                placeholder=" Last name"
                                value={lastname}
                                onChange={handleLastNameInput}
                            />
                            <br/>
                            <input
                                name="password"
                                type="password"
                                placeholder=" Password"
                                value={password}
                                onChange={handlePasswordInput}
                            />
                        <div className="signup-s">
                            <input type="submit" value="CREATE" /> 
                                {/* <Link to="/">
                                    <div id="home"> or go Home</div>    
                                </Link> */}
                        </div>
                    </div>
            </form>
            {/* <Link to="/">
                <div id="home">Home</div>    
            </Link> */}
            <footer>Doina Colun &copy; 2022</footer>
        </div>
    );
};

export default CreateProfile;