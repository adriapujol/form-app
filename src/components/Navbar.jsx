import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {

    const { currentUser, logout } = useAuth();
    const { currentLanguage, setCurrentLanguage, currentText } = useLanguage();
    const [isClicked, setIsClicked] = useState(false);

    const { navLinkHome, navLinkForm, navLogout } = currentText;

    const clickBurger = () => {
        setIsClicked(prevIsClicked => setIsClicked(!prevIsClicked));
    }

    const selectLanguage = (e) => {
        setCurrentLanguage(e.target.value);
    }

    return (
        <nav className="navbar">
            <div className="menu-icon" onClick={clickBurger}>
                <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={isClicked ? "nav-links" : "nav-links hide-links"}>
                <li>
                    <Link to="/" onClick={clickBurger}>{navLinkHome}</Link>
                </li>
                <li>
                    <Link to="/form" onClick={clickBurger}>{navLinkForm}</Link>
                </li>
                {
                    currentUser.role === "admin" && <li><Link to="/admin" onClick={clickBurger}>Admin</Link></li>
                }
                {
                    currentUser && <li><button onClick={logout}>{navLogout}</button></li>
                }
                <li>
                    <div className="languages">
                        <select id="languages" name="langauges" value={currentLanguage} onChange={selectLanguage}>
                            <option value="en">EN</option>
                            <option value="fr">FR</option>
                            <option value="es">ES</option>
                        </select>
                    </div>
                </li>
            </ul>
        </nav>
    );

}

export default Navbar;
