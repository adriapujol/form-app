import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Menu = ({ handleChange, formData }) => {

    const { typeFood, allergies } = formData;

    const { currentText } = useLanguage();

    const { formMenu, formTypeFood, formTypeFoodOmnivore, formTypeFoodVegeterian, formTypeFoodVegan, formFoodAllergies } = currentText;

    return (
        <div className="form-group">
            <label htmlFor="step1">{formMenu}</label>

            <label htmlFor="typeFood">{formTypeFood}</label>
            <label htmlFor="omnivore">
                <input type="radio" id="typeFood" name="typeFood" value="omnivore" checked={typeFood === "omnivore"} onChange={handleChange} />
                {formTypeFoodOmnivore}
            </label>
            <label htmlFor="vegeterian">
                <input type="radio" id="typeFood" name="typeFood" value="vegeterian" checked={typeFood === "vegeterian"} onChange={handleChange} />
                {formTypeFoodVegeterian}
            </label>
            <label htmlFor="vegan">
                <input type="radio" id="typeFood" name="typeFood" value="vegan" checked={typeFood === "vegan"} onChange={handleChange} />
                {formTypeFoodVegan}
            </label>

            <label htmlFor="allergies">{formFoodAllergies}</label>
            <input type="text" id="allergies" name="allergies" placeholder="Type any allergies" value={allergies} onChange={handleChange} />
        </div>
    )
}

export default Menu;
