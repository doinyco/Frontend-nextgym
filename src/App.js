// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import User from "./components/User";
import UserList from "./components/UserList";
import Auth from "./components/Auth";
//import Place from "./components/Place";
// import PlaceList from "./components/PlaceList";
import axios from 'axios';
import { Link } from "react-router-dom";
import CreateProfile from './components/CreateProfile';
//import fitness from "./images/fitness.jpeg";

function App() {
  let username = ""

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Next Gym </h1>
      </header>
      <section>
        <div className="authentication">
          <Auth />
          <Link to="/create-profile">
            <button id="get-started">Sign up</button>
          </Link>
        </div>
      </section>
  
        <Link to="/users">
          <div id="go-to-user">👤</div>
        </Link>
        <Link to="/map">
          <div id="go-to-map">🗺 </div>
        </Link>
        <div className="quote">
          <p>Finding the right gym <br/>has never been easier.</p>
        </div>
        
        {/* <img src={fitness}></img> */}
      
      <footer> &copy; 2022 Ada Developers Academy ✨ by ✨
        Doina Colun ✨</footer>
    </div>
  );
}

export default App;