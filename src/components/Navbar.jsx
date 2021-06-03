import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {

    const { currentUser, logout } = useAuth();
    const [isClicked, setIsClicked] = useState(false);

    const clickBurger = () => {
        setIsClicked(prevIsClicked => setIsClicked(!prevIsClicked));
    }


    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={clickBurger}>
                <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isClicked ? "nav-links" : "nav-links hide-links"}>
                <li>
                    <Link to="/" onClick={clickBurger}>Home</Link>
                </li>
                <li>
                    <Link to="/form" onClick={clickBurger}>Form</Link>
                </li>
                {
                    currentUser.role === "admin" && <li><Link to="/admin" onClick={clickBurger}>Admin</Link></li>
                }
                {
                    currentUser && <li><button onClick={logout}>Logout</button></li>
                }
            </ul>
        </nav>
    );

}

export default Navbar;
