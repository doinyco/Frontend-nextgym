import * as React from 'react';
import PropTypes from "prop-types";

import { GlobalMapInstance, GlobalMapsInstance } from './Map'

const google = window.google;

const seattleCenter = {lat: 47.6062, lng: -122.3321}

const options = [
    { label: 'gym', value: 'gym' },
    { label: 'tennis', value: 'table tennis' },
    { label: 'fitness', value: 'fitness' },
    { label: 'pilates', value: 'pilates' },
    { label: 'golf', value: 'golf' }

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
    const [value, setValue] = React.useState('gym');

    const handleChange = (event) => {
        console.log("click");
        setValue(event.target.value);
        search(event.target.value, props.mapCb)
    };

    return (
        <div>
          <label>
            Choose location type:
            <select value={value} onChange={handleChange}>
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