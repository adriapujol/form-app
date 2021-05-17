import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

function Login() {
    const { user, setUser } = useContext(UserContext);

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
            const response = await axios.post('http://localhost:3001/user/login', userInfo, { withCredentials: true });
            const user = response.data;
            setUser(user);
            setErrorMessage("");
            setLoading(false);
            alert("You are logged in");
        } catch (error) {
            console.log(error.response.data.error);
            setErrorMessage(error.response.data.error);
            setLoading(false);
        }
    }

    const showUsers = async () => {
        try {
            const response = await axios('http://localhost:3001/users/', { withCredentials: true, credentials: 'include' });
            console.log(response.data)
        } catch (error) {
            console.log(error.response)
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
            <div>{user && user.username}</div>
            <button onClick={showUsers}>Show Users</button>
        </div>
    )
}

export default Login;
