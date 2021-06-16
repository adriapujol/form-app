import React, { useContext, useState, useEffect } from 'react';
import en from '../LanguagesText/en.json';
import es from '../LanguagesText/es.json';
import fr from '../LanguagesText/fr.json';

const LanguageContext = React.createContext();

export function useLanguage() {
    return useContext(LanguageContext);
};

export function LanguageProvider({ children }) {


    // const content = {en, es, fr};
    const [currentLanguage, setCurrentLanguage] = useState("en");
    const [currentText, setCurrentText] = useState({ en, es, fr });

    // useEffect(() => {
    //     if (currentLanguage === "FR") setCurrentText(FR_text);
    //     if (currentLanguage === "ES") setCurrentText(ES_text);
    //     if (currentLanguage === "EN") setCurrentText(EN_text);

    // }, [currentLanguage])
    // switch (currentLanguage) {
    //     case "ES":
    //         setCurrentText(ES_text);
    //         break;
    //     case "FR":
    //         setCurrentText(FR_text);
    //         break;
    //     default:
    //         setCurrentText(EN_text);
    // }

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

