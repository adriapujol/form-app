import React, { useContext, useState, useEffect } from 'react';
import en from '../LanguagesText/en.json';
import es from '../LanguagesText/es.json';
import fr from '../LanguagesText/fr.json';

const LanguageContext = React.createContext();

export function useLanguage() {
    return useContext(LanguageContext);
};

export function LanguageProvider({ children }) {


    const defaultLanguage = window.localStorage.getItem('lang');
    const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage || "en");
    const currentText = { en, es, fr };

    useEffect(() => {
        window.localStorage.setItem('lang', currentLanguage)
    }, [currentLanguage])


    const value = {
        currentLanguage,
        setCurrentLanguage,
        currentText: currentText[currentLanguage]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

