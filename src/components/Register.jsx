import React, { useState } from 'react';
import './Register.scss';
import { useAuth } from '../context/AuthContext';

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("basic");
    const [loading, setLoading] = useState(false);
    const { register, errorMessage } = useAuth();

    const usernameChange = (e) => {
        setUsername(e.target.value);
    }
    const passwordChange = (e) => {
        setPassword(e.target.value);
    }
    const roleChange = (e) => {
        setRole(e.target.value);
    }

    const onRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        register(username, password, role);
        setLoading(false);
    }

    return (
        <form className="register-form" onSubmit={onRegister}>
            <div className="input-box">

                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    className="username"
                    placeholder="Username"
                    value={username}
                    onChange={usernameChange}
                    required
                />
            </div>
            <div className="input-box">

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="passowrd"
                    placeholder="Password"
                    value={password}
                    onChange={passwordChange}
                    required
                />
            </div>
            <div className="input-box">

                <label htmlFor="role">Role</label>
                <select name="role" id="role" value={role} onChange={roleChange}>
                    <option value="basic">basic</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <button className="register-btn" disabled={loading}>Register</button>
            <div className="error-message">{errorMessage}</div>
        </form>
    )
}

export default Register
