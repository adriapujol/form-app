import React, { useState } from 'react';
import axios from 'axios';
import './Main.scss';
import topLeftFrame from '../img/frame_left_top_2.png';
import topRightFrame from '../img/frame_right_2.png';
import jenniferCarlos from '../img/jennifer_villar.png';
import smallFlower from '../img/small_flower.png';
import Form from '../components/Form';
import { useAuth } from '../context/AuthContext';

const Main = () => {

    const { currentUser } = useAuth();

    const [isComingAnswer, setIsComingAnswer] = useState(currentUser.isComing);

    const postIsComing = async (reply) => {
        try {
            const response = await axios.put(`http://localhost:3001/users/isComing/${currentUser._id}`, { isComing: reply });
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handleIsComing = (reply) => {
        console.log("this is the reply", reply)
        setIsComingAnswer(reply);
        postIsComing(reply);
    }

    return (
        <div className="container">
            <div className="main-wrapper">
                <img src={topLeftFrame} className="frame frame-left" alt="flowers" />
                <img src={topRightFrame} className="frame frame-right" alt="flowers" />
                <div className="main-content">
                    <div className="main-text">
                        You have been invited to the wedding of <b>Jennifer</b> and <b>Carlos</b> on May 28th, 2022 in Paris, location place number 23.
                    </div>
                    <img src={smallFlower} className="small-flower" alt="flower" />
                    <div className="button-box">
                        <p>Are you coming?</p>
                        <div className="buttons">
                            <button
                                className={isComingAnswer ? "btn-yes btn-big btn-yes-green" : typeof isComingAnswer !== "undefined" ? "btn-no btn-small" : "btn-yes"}
                                onClick={() => handleIsComing(true)}>
                                Yes
                            </button>
                            <button
                                className={isComingAnswer ? "btn-no btn-small" : typeof isComingAnswer !== "undefined" ? "btn-no btn-big btn-no-red" : "btn-no"}
                                onClick={() => handleIsComing(false)}>
                                No
                            </button>
                        </div>
                        {isComingAnswer && <p>If you're coming please complete the form below.</p>}
                    </div>
                </div>
                {isComingAnswer && <Form />}
                <img src={jenniferCarlos} className={isComingAnswer ? "jennifer-carlos bottom-img-relative" : "jennifer-carlos bottom-img-absolute"} alt="Jennifer et Carlos" />
            </div>
        </div >
    )
}

export default Main;
