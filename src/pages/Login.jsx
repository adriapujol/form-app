import React, { useState } from 'react';
import './Login.scss';
import { useAuth } from '../context/AuthContext';


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
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="username"
                    placeholder="Username"
                    value={username}
                    onChange={usernameChange}
                    required
                />
                <input
                    type="password"
                    className="passowrd"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChange}
                    required
                />
                <button className="login-btn" disabled={loading}>Login</button>
                <div className="error-message">{errorMessage}</div>
            </form>
            <div>{currentUser && currentUser.username}</div>
        </div>
    )
}

export default Login;
