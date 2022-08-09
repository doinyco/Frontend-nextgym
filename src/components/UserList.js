import React, { useEffect, useState } from "react";
import "./UserList.css";
import axios from "axios";
import User from "./User.js";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


// let edit_user = {}

// const UserList = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         getUsersFromAPI();
//     }, []);

//     const getUsersFromAPI = () => {
//         axios
//         .get("http://127.0.0.1:5000/users")
//         .then((response) => {
//             setUsers(response.data);
//         })
//         .catch((error) => {
//             console.log("Oh noooo!!!");
//         });


//     };

//     return (
//         <div>
//             <p>
//                 I'm in User
//             </p>
//         </div>
//     );
// };



const UserList = (props) => {
    
    const userData = [
        {id: 1, userName: "DoinyCo"}
    ]

    console.log("userData: ", userData);

    const userComponents = userData.map((user) => (
        <User
            key={user.id} 
            id={user.id} 
            name={user.userName} 
            
        />
    ));


    return ( 
        <div>
            {/* <h2 className="userList"> All Users</h2> */}
            <h2 className="userList">Users</h2>
            {userComponents}

        </div>
    );
    
};

UserList.propTypes = {
    userData:PropTypes.array.isRequired
}


export default UserList;