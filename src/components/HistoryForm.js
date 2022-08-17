import "./HistoryForm.css";
import PropTypes from "prop-types";
import { useState } from "react";

import { getGlobalUsername } from "..";
import { addHistory } from "../backendAPI";

const HistoryForm = (props) => {
    const [placeName, setPlaceName] = useState("");
    const [timeSpent, setTimeSpent] = useState("");
    const [mood, setMood] = useState("");
    const [comments, setComments] = useState("");

    const handlePlaceNameInput = (event) => {
        setPlaceName(event.target.value)
    };

    const handleTimeSpentInput = (event) => {
        setTimeSpent(event.target.value)
    };

    const handleMoodInput = (event) => {
        setMood(event.target.value)
    };

    const handleCommentsInput = (event) => {
        setComments(event.target.value)
    };

    const cb = (param) => {
        setPlaceName("");
        setTimeSpent("");
        setMood("");
        setComments("");
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        addHistory(getGlobalUsername().user_id, {
            "place_name": placeName,
            "time_spent": timeSpent,
            "mood": mood,
            "comments": comments,
        }, cb)
    };

    return (
        <div className="historyform">
            <form onSubmit={handleFormSubmission}>
                {/* <label>Today's Progress</label> */}
                <div className="input-form">
                    <label>Today's Progress</label>
                    <div className="inputs">
                        <input
                            maxLength={100}
                            name="name"
                            type="text"
                            placeholder="Place name"
                            value={placeName}
                            onChange={handlePlaceNameInput}
                        />
                        <input
                            maxLength={12}
                            name="time"
                            type="text"
                            placeholder="Time spent"
                            value={timeSpent}
                            onChange={handleTimeSpentInput}
                        />
                        <input
                            maxLength={40}
                            name="mood"
                            type="text"
                            placeholder="My mood"
                            value={mood}
                            onChange={handleMoodInput}
                        />
                        <input
                            maxLength={100}
                            name="comments"
                            type="text"
                            placeholder="Comments"
                            value={comments}
                            onChange={handleCommentsInput}
                        />

                        <div className="enter">
                            <input type="submit" value="Add"/>
                        </div>
                        
                    </div>
                </div>       
            </form>
        </div>
    );
};

HistoryForm.propTypes = {
    handleSubmission: PropTypes.func.isRequired,
};

export default HistoryForm;
