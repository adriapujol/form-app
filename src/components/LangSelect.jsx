import React from 'react';
import './LangSelect.scss';
import { useLanguage } from '../context/LanguageContext';

function LangSelect() {

    const { currentLanguage, setCurrentLanguage } = useLanguage();


    const selectLanguage = (e) => {
        setCurrentLanguage(e.target.value);
    }

    return (
        <div className="languages">
            <select id="languages" name="langauges" value={currentLanguage} onChange={selectLanguage}>
                <optgroup>
                    <option value="fr">FR</option>
                    <option value="es">ES</option>
                </optgroup>
            </select>
        </div>
    )
}

export default LangSelect
