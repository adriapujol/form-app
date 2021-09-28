import React from 'react';
import './Main.scss';
import topLeftFrame from '../img/frame_left_top_2.png';
import topRightFrame from '../img/frame_right_2.png';
import jenniferCarlos from '../img/jennifer_villar.png';
import smallFlower from '../img/small_flower.png';


const Main = () => {
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
                            <button className="btn-yes">Yes</button>
                            <button className="btn-no">No</button>
                        </div>
                        <p>if you're coming please complete the form.</p>
                    </div>
                </div>
                <img src={jenniferCarlos} className="jennifer-carlos" alt="Jennifer et Carlos" />
            </div>
        </div>
    )
}

export default Main;
