import React from 'react';
import './Modal.scss';
import topLeftFrame from '../img/frame_left_top_2.png';
import topRightFrame from '../img/frame_right_2.png';

function Modal({ action, closeModal }) {
    return (
        <div className="confirm-delete">

            <div className="confirm-box">
                <div className="modal-frame-wrapper">
                    <img src={topLeftFrame} className="modal-frame modal-frame-left" alt="flowers" />
                    <img src={topRightFrame} className="modal-frame modal-frame-right" alt="flowers" />
                </div>
                Are you sure?
                <div>
                    <button onClick={() => {
                        action();
                        closeModal(false);
                    }}>yes</button>
                    <button onClick={() => closeModal(false)}>no</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
