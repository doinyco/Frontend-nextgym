import "./Auth.css";

import Login from "./Login"
import Logout from "./Logout"

import { getGlobalUsername } from "..";
import { useState } from "react";

const Auth = () => {
    console.log("user id:", getGlobalUsername().user_id)

    const [userLoggedIn, setUserLoggedIn] = useState(getGlobalUsername().user_id !== -1)

    console.log(userLoggedIn)

    if (userLoggedIn) {
        return <Logout setUserLoggedIn={setUserLoggedIn}/>
    }

    return <Login setUserLoggedIn={setUserLoggedIn}/>
}

export default Auth;