import React from 'react';
import './Modal.scss';
import topLeftFrame from '../img/frame_left_top_2.png';
import topRightFrame from '../img/frame_right_2.png';
import { useLanguage } from '../context/LanguageContext';

function Modal({ action, closeModal }) {

    const { currentText } = useLanguage();
    const { yes, no, modalMessage } = currentText;

    return (
        <div className="confirm-delete">

            <div className="confirm-box">
                {modalMessage}
                <div>
                    <button onClick={() => {
                        action();
                        closeModal(false);
                    }}>{yes}</button>
                    <button onClick={() => closeModal(false)}>{no}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
