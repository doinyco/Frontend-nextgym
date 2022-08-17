import "./UserForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

const defaultUser = {
    username : ""
};

const UserForm = (props) => {
    const [userData, setUserData] = useState(defaultUser);
    const [message, setMessage] = useState("");

    const handleFormInput = (event) => {
        const inputElement = event.target;
        const value = inputElement.value;
        const newUserData = { ...userData };
        newUserData.username = value;

        setUserData(newUserData);
        
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        if (userData.username === "") {
            setMessage("Please create a Username");

        } else {
            props.handleSubmission(userData);
            setUserData(defaultUser);
            setMessage("");
        }
    };

    return (
        <div className="new-user">
            <section>{message}</section>
            <form onSubmit={handleFormSubmission}>
                <input
                    maxLength={30}
                    name="username"
                    type="text"
                    placeholder="Create username here"
                    value={userData.username}
                    onChange={handleFormInput}
                />
                <br/>
                <br/>
                <div className="signup-button">
                    <input type="submit" value="Sign-uppp" />
                </div>  
            </form>
        </div>
    );
};

UserForm.propTypes = {
    handleSubmission: PropTypes.func.isRequired,
};

export default UserForm;
