import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Companions = ({ handleChange, formData }) => {

    const { numberPersons, minors, numberMinors } = formData;

    const { currentText } = useLanguage();

    const { formCompanions, formNumberCompanions, formAnyMinors, formNumberMinors, formYes, formNo } = currentText;

    return (
        <div className="form-group">
            <label htmlFor="step2">{formCompanions}</label>

            <label htmlFor="numberPersons">{formNumberCompanions}</label>
            <input type="number" min="0" id="numberPersons" name="numberPersons" value={numberPersons} onChange={handleChange} />

            <label htmlFor="minors">{formAnyMinors}</label>
            <label htmlFor="minorsYes">
                <input type="radio" id="minors" name="minors" value="yes" checked={minors === "yes"} onChange={handleChange} />
                {formYes}
            </label>
            <label htmlFor="minorsNo">
                <input type="radio" id="minors" name="minors" value="no" checked={minors === "no"} onChange={handleChange} />
                {formNo}
            </label>

            <label htmlFor="numberMinors">{formNumberMinors}</label>
            <input type="number" min="0" id="numberMinors" name="numberMinors" value={numberMinors} onChange={handleChange} />

        </div>
    )
}

export default Companions
