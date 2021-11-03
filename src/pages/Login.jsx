import React, { useState } from 'react';
import './Login.scss';
import { useAuth } from '../context/AuthContext';
import topRightFrame from '../img/frame_right.png';
import bottomLeftFrame from '../img/frame_left.png';
import LangSelect from '../components/LangSelect';


function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser, errorMessage, login } = useAuth();


    const usernameChange = (e) => {
        setUsername(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        login(username, password);
        setLoading(false);
    }

    return (
        <div className="container">
            <div className="lang-sel-box">
                <LangSelect />
            </div>
            <div className="login-card">

                <img src={topRightFrame} className="top-right-frame" alt="flowers" />
                <img src={bottomLeftFrame} className="bottom-left-frame" alt="flowers" />

                <div className="login-content">
                    <div className="login-text">
                        <p>Rendez-vous pour le marriage de</p>
                        <p>Jennifer & Carlos</p>
                        <p>28 mai 2022</p>
                        <p>Paris</p>
                    </div>
                    <div className="form-wrapper">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="login-input username"
                                placeholder="Username"
                                value={username}
                                onChange={usernameChange}
                                required
                            />
                            <input
                                type="password"
                                className="login-input passowrd"
                                placeholder="Password"
                                value={password}
                                onChange={passwordChange}
                                required
                            />
                            <button className="login-btn" disabled={loading}>Login</button>
                            <div className="error-message">{errorMessage}</div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <div>{currentUser && currentUser.username}</div> */}
        </div>
    )
}

export default Login;
