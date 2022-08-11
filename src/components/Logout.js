import "./Logout.css";

import PropTypes from 'prop-types';

import { getGlobalUsername } from "..";

const Logout = (props) => {
    const logout = () => {
        console.log("Logging out")

        localStorage.clear()

        props.setUserLoggedIn(false);
    }

    return (
        <div className="logout">
            <p>Welcome {getGlobalUsername().username}</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

Logout.propTypes = {
    setUserLoggedIn:PropTypes.func.isRequired,
}

export default Logout;