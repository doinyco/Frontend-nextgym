import "./CreateProfile.css";
import React from "react";
// import UserForm from "./components/UserForm";
import { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./UserForm";



const CreateProfile = () => {

    // const URL = "https://my-next-gym.herokuapp.com/"

    const [userData, setUserData] = useState({
        places: [],
        // id: 0,
        username: ""
    });

    const [users, setUsers] = useState([]);
    // const [places, setPlaces] = useState([]);

    useEffect(() => {
    getUsersFromAPI();
    }, []);

    const getUsersFromAPI = () => {
    axios.get(`https://my-next-gym.herokuapp.com/users`)
        .then((response) => { console.log(response.data);
        console.log("Getting response");
        setUsers(response.data) })
        .catch((error) => {console.log("Oh no no no!")});
    }

    const getUserDataFromAPI = (id) => {
    axios.get(`https://my-next-gym.herokuapp.com/users/${id}`)
        .then((response) => { console.log(response.data);
            // getUsersFromAPI()

        console.log("Getting response");
        setUsers(response.data) })
        .catch((error) => {console.log("No user found! :(")});
    }

    const createNewUser = (data) => {
    console.log(data);
    axios.post("https://my-next-gym.herokuapp.com/users", data)
        .then((response) => {
            getUsersFromAPI();
        })
        .catch((error) => {
            console.log("Couldn't create a new user! :(")
        })
    }

    return (
        <div className="create-user">
            <UserForm handleSubmission={createNewUser}/>

            {/* <UserForm/> */}
        </div>
    );
};

export default CreateProfile;