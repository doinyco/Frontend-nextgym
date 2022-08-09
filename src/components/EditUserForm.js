import { useState } from "react";


const EditUserForm = (props) => {
    const [userData, setUserData] = useState(props.user);
    const [message, setMessage] = useState("");


    const handleFormInput = (event) => {
        const inputElement = event.target;
        const name = inputElement.name;
        const value = inputElement.value;

        const newUserData = { ...userData };
        newUserData[name] = value;
        setUserData(newUserData);
    };

    const handleFormSubmission = (event) => {
        event.preventDefault();
        if (userData.username === "") {
            setMessage("Please enter your name");
        } else {
        userData.username = userData.username
            .toLowerCase()
        setUserData(userData);
        props.onEditSubmission(userData);
        }
    };
    
    return (
        <div className="edit-user">
            <form onSubmit={handleFormSubmission}>
                <div>Lalalalal</div>
                <input 
                    name="username"
                    type="text"
                    className="username"
                    value={userData.username}
                    onChange={handleFormInput}
                />
                <input type="submit" value="Submit" />
            </form>
            <p>{message}</p>

        </div>
    );

};

export default EditUserForm;