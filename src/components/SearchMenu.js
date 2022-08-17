import * as React from 'react';
import PropTypes from "prop-types";
import { GlobalMapInstance, GlobalMapsInstance } from './Map'

const google = window.google;

const seattleCenter = {lat: 47.6062, lng: -122.3321}

const options = [
    { label: 'Yoga', value: 'yoga' },
    { label: 'Gym', value: 'gym' },
    { label: 'Table tennis', value: 'table tennis' },
    { label: 'Tennis', value: 'tennis' },
    { label: 'Fitness', value: 'fitness' },
    { label: 'Pilates', value: 'pilates' },
    { label: 'Aerobics', value: 'aerobics' },
    { label: 'Dance classes', value: 'dance classes' }
    // { label: 'Golf', value: 'golf' },
    // { label: 'Golf', value: 'golf' },
    // { label: 'Golf', value: 'golf' }


];

function search(query, mapCb) {
    console.log("Searching")
    var request = {
        location: seattleCenter,
        radius: '5000',
        query: query
      };

    const service = new GlobalMapsInstance.places.PlacesService(GlobalMapInstance);
    service.textSearch(request, callback(mapCb));
}

function callback(mapCb) {
    return (results, status) => {
        console.log("Search callback")
        console.log(results)
        if (status === GlobalMapsInstance.places.PlacesServiceStatus.OK) {
            mapCb(results)
        }
    }
}

const SearchMenu = (props) => {
    const [value, setValue] = React.useState('option');

    const handleChange = (event) => {
        console.log("click");
        setValue(event.target.value);
        search(event.target.value, props.mapCb)
    };

    

    return (
        <div className="maps">
          <label>
            <select value={value} onChange={handleChange}>
              <option value="">Select your option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        </div>  
      );
};

SearchMenu.propTypes = {
    mapCb: PropTypes.func.isRequired
}

export default SearchMenu;