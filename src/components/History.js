import "./History.css";

import React from "react";
import PropTypes from 'prop-types';

const History = (props) => {
    return <div className="history">
                <h6>
                    Place name: {props.place_name}, 
                    Date: {props.date},
                    Mood: {props.mood},
                    Comments: {props.comments},
                    Time spent: {props.time_spent}
                </h6>
            </div>
};

History.propTypes = {
    history_id:PropTypes.number.isRequired,
    place_name:PropTypes.string.isRequired,
    date:PropTypes.string.isRequired,
    mood:PropTypes.string.isRequired,
    comments:PropTypes.string.isRequired,
    time_spent:PropTypes.string.isRequired,
}

export default History;