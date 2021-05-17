import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const usernameChange = (e) => {
        setUsername(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("submit");
        const userInfo = { username: username, password: password }
        try {
            setLoading(true);
            const response = await axios.post('http://localhost:3001/user/login', userInfo);
            console.log(response.data);
            setLoading(false);
            alert("You are logged in");
        } catch (error) {
            console.log(error.response.data.error);
            setErrorMessage(error.response.data.error);
            setLoading(false);
        }
    }

    return (
        <div>
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
                    type="text"
                    className="passowrd"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChange}
                    required
                />
                <button className="login-btn" disabled={loading}>Login</button>
                <div className="error-message">{errorMessage}</div>
            </form>
        </div>
    )
}

export default Login;
