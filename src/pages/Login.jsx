import React, { useState } from 'react';
import './Login.scss';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import topRightFrame from '../img/frame_right.png';
import bottomLeftFrame from '../img/frame_left.png';
import LangSelect from '../components/LangSelect';


function Login() {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { errorMessage, login } = useAuth();
    const { currentText } = useLanguage();
    const { loginP1, loginP2, loginP3, loginP4, loginUsername, loginPassword, loginButton } = currentText;


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
                        <p>{loginP1}</p>
                        <p>{loginP2}</p>
                        <p>{loginP3}</p>
                        <p>{loginP4}</p>
                    </div>
                    <div className="form-wrapper">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="login-input username"
                                placeholder={loginUsername}
                                value={username}
                                onChange={usernameChange}
                                required
                            />
                            <input
                                type="password"
                                className="login-input passowrd"
                                placeholder={loginPassword}
                                value={password}
                                onChange={passwordChange}
                                required
                            />
                            <button className="login-btn" disabled={loading}>{loginButton}</button>
                            <div className="error-message">{errorMessage}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
