import React from 'react';
import './Modal.scss';

function Modal({ deleteUser, setConfirmDelete }) {
    return (
        <div className="confirm-delete">
            <div className="confirm-box">
                Are you sure?
                <div>
                    <button onClick={() => {
                        deleteUser();
                        setConfirmDelete(false);
                    }}>yes</button>
                    <button onClick={() => setConfirmDelete(false)}>no</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
