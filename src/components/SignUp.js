import "./SignUp.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import md5 from "md5";

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
        <div>
            <form onSubmit={handleFormSubmissionn}>
                <div className="center">
                    <div className="vertical-center">
                        <div>
                            <input
                                name="username"
                                type="text"
                                placeholder="User name"
                                value={username}
                                onChange={handleUsernameInput}
                            />
                        </div>
                        <div>
                        <input
                            name="first name"
                            type="text"
                            placeholder="First name"
                            value={firstname}
                            onChange={handleFirstNameInput}
                        />
                        </div>
                        <div>
                        <input
                            name="last name"
                            type="text"
                            placeholder="Last name"
                            value={lastname}
                            onChange={handleLastNameInput}
                        />
                        </div>
                        <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordInput}
                        />
                        </div>
                        <div>
                        <input type="submit" value="Sign up" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateProfile;