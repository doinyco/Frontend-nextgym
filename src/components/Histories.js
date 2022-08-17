import "./Histories.css";
import React from "react";
import PropTypes from "prop-types";

import History from "./History";

const Histories = (props) => {
    const histories = props.histories.map((history) => {
        return <div className="histories">
                    <History 
                        key = {history.history_id}
                        history_id = {history.history_id}
                        place_name = {history.place_name}
                        date = {history.date}
                        mood = {history.mood}
                        comments = {history.comments}
                        time_spent = {history.time_spent}
                    />
                </div>
    });

    return (
        <div className="history">
            {histories}
        </div>
    );
};

Histories.propTypes = {
    histories:PropTypes.array.isRequired
}

export default Histories;


    