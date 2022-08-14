import React, { useEffect } from 'react';
import "./Map.css";
import { Link } from "react-router-dom";
import SearchMenu from "./SearchMenu";
import Login from "./Login"
import { getGlobalUsername } from "..";
import GoogleMapReact from 'google-map-react';
import { GoogleMap, LoadScript, Marker, InfoWindow, MarkerClusterer } from '@react-google-maps/api';
import {useState} from "react";
import { addFavoritePlace, removeFavoritePlace, getSavedPlaces } from '../backendAPI';
import mrk1 from "../images/mrk1.png";
import usericon from "../images/usericon.png";

let GlobalMapInstance;
let GlobalMapsInstance;

const Map = () => {
  console.log("Rendering map")

  const [ markers, setMarkers ] = useState([])

  // const mapStyles = {
  //   height: "40%",
  //   width: "40%"
  // };
  
  const defaultCenter = {
    lat: 47.6062, lng: -122.3321
  };

  const addFavoritePlaceHelper = (place, cb) => {
    addFavoritePlace(getGlobalUsername().user_id, place, cb)
  }

  const removeFavoritePlaceHelper = (place_id) => {
    removeFavoritePlace(getGlobalUsername().user_id, place_id)
  }

  const getSavedPlacesCb = (favorite_places, search_results) => {
    console.log("Retrieved", favorite_places.length, "saved places")

    markers.map((marker, index) => {
      marker.setMap(null);
    })

    let markers2 = []

    search_results.map((result, index) => {
      const position = {lat: result.geometry.location.lat(), lng: result.geometry.location.lng()}
      console.log("position", position)

      let marker = new GlobalMapsInstance.Marker({
          position: position,
          title: result.name,
          animation: GlobalMapsInstance.Animation.DROP,
          // icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"  },
          // icon: {url: "https://icons8.com/icons/set/map-marker"},
          map: GlobalMapInstance,
      });

      marker.maps_place_id = result.place_id
      marker.result = result
      marker.favorite_place = null;
      marker.infoWindow = null;
      marker.infoWindowVisible = false;

      for (let i = 0; i < favorite_places.length; i++) {
        if (marker.maps_place_id === favorite_places[i].maps_place_id) {
          marker.favorite_place = favorite_places[i]
          break;
        }
      }

      // Add a click listener for each marker, and set up the info window.
      marker.addListener("click", () => {
        console.log("marker", marker)
        let liked = marker.favorite_place !== null ? "❤️" : "🤍";

        if (marker.infoWindow === null) {
          marker.infoWindow = new GlobalMapsInstance.InfoWindow()

          marker.infoWindow.addListener('closeclick', () => {
            marker.infoWindowVisible = false;
          });

          const description = `<section>` +
          `<p>${marker.result.name}</p>` +
          `<p>Rating: ${marker.result.rating}</p>` + 
          `<img src=${marker.result.photos[0].getUrl()}>` + 
          `<button id='${marker.maps_place_id}'</button>` +
          `</section>`

          
          marker.infoWindow.setContent(description);
        }

        if (marker.infoWindowVisible) {
          marker.infoWindow.close(marker.getMap(), marker);
          marker.infoWindowVisible = false;
        } else {
          marker.infoWindow.open(marker.getMap(), marker);
          marker.infoWindowVisible = true;
        }

        const likeButtonCb = () => {
          if (marker.favorite_place === null) {
            console.log("position", marker.position)
  
            addFavoritePlaceHelper({
              "name": marker.title,
              "lat": marker.position.lat(),
              "lon": marker.position.lng(),
              "maps_place_id": marker.maps_place_id
            }, (favorite_place) => {
              marker.favorite_place = favorite_place;
              document.getElementById(marker.maps_place_id).textContent = "❤️"
            })
  
            marker.favorite_place = true;
            document.getElementById(marker.maps_place_id).textContent = "❤️"
          } else {
            removeFavoritePlaceHelper(marker.favorite_place.place_id)

            marker.favorite_place = null;
            document.getElementById(marker.maps_place_id).textContent = "🤍"
          }
        }

        GlobalMapsInstance.event.addListener(marker.infoWindow, "domready", function () {
          document.getElementById(marker.maps_place_id).onclick=likeButtonCb
          document.getElementById(marker.maps_place_id).textContent = liked
        });
      });

      markers2.push(marker)
    })

    setMarkers(markers2)
  }

  const mapCb = (results) => {
    getSavedPlaces(getGlobalUsername().user_id, getSavedPlacesCb, results)
  };

  return (
    <div className='map'>
      <header>
        <h2>
          My Map
          <img src={mrk1}></img>
        </h2>
      </header>
    
        <div className="search-menu"><SearchMenu mapCb={mapCb}/></div>
        <div className="my-map">
          <div style={{ height: '70vh', width: '55%' }}> 
              <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAPS_KEY,
                libraries:['places'],
              }}
                // mapContainerStyle={mapStyles}
                defaultZoom={12}
                defaultCenter={defaultCenter}
                onGoogleApiLoaded={({ map, maps }) => {
                  GlobalMapInstance = map;
                  GlobalMapsInstance = maps;
                }}
                yesIWantToUseGoogleMapApiInternals>
                </GoogleMapReact>
            </div>
            {/* <Link to="/profile">User Profile</Link> */}
        </div>
        <div className="map-nav">
          <Link to="/profile"><img src={usericon}></img></Link>
        </div>
      
      <footer/>
    </div>
  )
};

export default Map;
export {GlobalMapInstance, GlobalMapsInstance}