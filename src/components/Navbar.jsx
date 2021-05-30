import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

    const { currentUser, logout } = useAuth();

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                {
                    currentUser.role === "admin" && <li><Link to="/admin">Admin</Link></li>
                }
                {
                    currentUser && <li><button onClick={logout}>Logout</button></li>
                }

            </ul>
        </nav>
    );

}

export default Navbar;
