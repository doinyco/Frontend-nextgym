import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import User from "./components/User.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Map from "./components/Map.js";
import SignUp from "./components/SignUp";
// import HomePage from "./components/HomePage.js";
// import "materialize-css/dist/css/materialize.min.css";
// import $ from "jquery";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function getGlobalUsername() {
  let user_string = localStorage.getItem("user")
  if (user_string === null) {
    return {"user_id": -1, "username": ""}
  }
  return JSON.parse(user_string)
}

export function setGlobalUsername(username) {
  localStorage.setItem("user", JSON.stringify(username))
}

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="profile" element={<User />} />
      <Route path="/" element={<App />} />
      <Route path="map" element={<Map />} />
      <Route path="signup" element={<SignUp />} />
      {/* <Route path="home" element={<HomePage />} /> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();