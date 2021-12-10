import React, { useState } from 'react';
import axios from 'axios';
import './Main.scss';
import topLeftFrame from '../img/frame_left_top_2.png';
import topRightFrame from '../img/frame_right_2.png';
import jenniferCarlos from '../img/jennifer_villar.png';
import smallFlower from '../img/small_flower.png';
import Form from '../components/Form';
import LangSelect from '../components/LangSelect';
import Modal from '../components/Modal';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';



const Main = () => {

    const { currentUser, logout } = useAuth();
    const { currentText } = useLanguage();

    const { navLogout, mainMainText, mainAreYouComing, mainFillFormMessage, yes, no } = currentText;

    const [isComingAnswer, setIsComingAnswer] = useState(currentUser.isComing);
    const [confirmLogout, setConfirmLogout] = useState(false);

    const postIsComing = async (reply) => {
        try {
            const response = await axios.put(`http://localhost:3001/users/isComing/${currentUser._id}`, { isComing: reply });
        } catch (error) {
            // console.log(error.response.data.message)
            alert("Something went wrong");
        }
    }



    function mapsSelector() {
        /* if we're on iOS, open in Apple Maps */
        if ((navigator.userAgentData.platform.indexOf("iPhone") != -1) ||
            (navigator.userAgentData.platform.indexOf("iPad") != -1) ||
            (navigator.userAgentData.platform.indexOf("iPod") != -1))
            window.open("maps://www.google.com/maps/search/?api=1&query=48.84653875051833%2C2.3480901057956385&query_place_id=ChIJq7TPJOZx5kcR424OXJ5cKgU");

        /* else use Google */
        else
            window.open("https://www.google.com/maps/search/?api=1&query=48.84653875051833%2C2.3480901057956385&query_place_id=ChIJq7TPJOZx5kcR424OXJ5cKgU");
    }

    const handleIsComing = (reply) => {
        setIsComingAnswer(reply);
        postIsComing(reply);
    }

    return (
        <div className="container">
            <div className="main-wrapper">
                <div className="lang-box">
                    <LangSelect />
                </div>
                <img src={topLeftFrame} className="frame frame-left" alt="flowers" />
                <img src={topRightFrame} className="frame frame-right" alt="flowers" />
                {confirmLogout && <Modal action={logout} closeModal={setConfirmLogout} />}
                <div className="logout-box">
                    <button className="btn-logout" onClick={() => setConfirmLogout(true)}>
                        <i className="fas fa-power-off"></i>
                    </button>
                    <p>{navLogout}</p>
                </div>
                <div className="main-content">
                    <div className="main-text">
                        {mainMainText}
                        <i className="fas fa-map-marker-alt maps" onClick={() => mapsSelector()} />
                    </div>
                    <img src={smallFlower} className="small-flower" alt="flower" />
                    <div className="button-box">
                        <p>{mainAreYouComing}</p>
                        <div className="buttons">
                            <button
                                className={isComingAnswer ? "btn-yes btn-big btn-yes-green" : typeof isComingAnswer !== "undefined" ? "btn-no btn-small" : "btn-yes"}
                                onClick={() => handleIsComing(true)}>
                                {yes}
                            </button>
                            <button
                                className={isComingAnswer ? "btn-no btn-small" : typeof isComingAnswer !== "undefined" ? "btn-no btn-big btn-no-red" : "btn-no"}
                                onClick={() => handleIsComing(false)}>
                                {no}
                            </button>
                        </div>
                        {isComingAnswer && <p>{mainFillFormMessage}</p>}
                    </div>
                </div>
                {isComingAnswer && <Form />}
                <img src={jenniferCarlos} className={isComingAnswer ? "jennifer-carlos bottom-img-relative make-100" : "jennifer-carlos bottom-img-absolute"} alt="Jennifer et Carlos" />
            </div>
        </div >
    )
}

export default Main;
