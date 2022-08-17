import "./Logout.css";

import { getGlobalUsername } from "..";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()

    const logout = () => {
        console.log("Logging out")

        localStorage.clear()

        navigate("/");
    }

    return (
        <div className="logout">
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Logout;