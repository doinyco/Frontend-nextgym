import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
// import "materialize-css/dist/css/materialize.min.css";
// import $ from "jquery";

const HomePage = () => {
    return (

        <div className="home-page">
            <header>
                <h1>My Next Gym</h1>
            </header>
            {/* <div className="home-nav-bar"> */}
            <nav>
                <ul className="nav">
                    <li>
                        <Link to="/user">
                            <div id="go-to-user">Profile</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/map">
                            <div id="go-to-map">Map</div>
                        </Link>
                    </li>
                </ul>
            </nav>
                {/* <Link to="/user">
                    <div id="go-to-user">Profile</div>
                </Link>
                <Link to="/map">
                    <div id="go-to-map">Map</div>
                </Link> */}
            {/* </div> */}
            <main>
                <p>
                Whether it is soccer, tennis, chess, or poker, everyone knows sports make individuals feel happier and healthier. 
                People who engage in sports benefit physically and mentally, while reducing the risk of conditions like diabetes, 
                osteoporosis, anxiety, and obesity. 
                <br/>
                <br/>
                Physical activity also greatly helps improve your overall mood. 
                You can do it by simply swimming or playing team sports like football or 
                basketball. When you’re involved in a sport, your brain releases chemicals 
                that make you feel relaxed and happier. It is a chance for you to unwind and participate in something challenging 
                that improves your fitness. When you participate in a team sport, you interact with other teammates and friends, 
                which is guaranteed to make you feel happier. 
                </p>

            </main>
            <footer/>
        </div>

    );
};

export default HomePage;