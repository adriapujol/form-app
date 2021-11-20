import React from 'react';
import './LangSelect.scss';
import { useLanguage } from '../context/LanguageContext';

function Nav() {

    const { currentLanguage, setCurrentLanguage } = useLanguage();


    const selectLanguage = (e) => {
        setCurrentLanguage(e.target.value);
    }

    return (
        <div className="languages">
            <select id="languages" name="langauges" value={currentLanguage} onChange={selectLanguage}>
                <option value="fr">FR</option>
                <option value="es">ES</option>
            </select>
        </div>
    )
}

export default Nav
