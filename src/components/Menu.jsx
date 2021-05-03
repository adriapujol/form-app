import React from 'react';

const Menu = ({ handleChange, formData }) => {

    const { typeFood, allergies } = formData;

    return (
        <div className="form-group">
            <label htmlFor="step1">Menu</label>

            <label htmlFor="typeFood">Type of food</label>
            <label htmlFor="omnivore">
                <input type="radio" id="typeFood" name="typeFood" value="omnivore" checked={typeFood === "omnivore"} onChange={handleChange} />
                Omnivore
            </label>
            <label htmlFor="omnivore">
                <input type="radio" id="typeFood" name="typeFood" value="vegeterian" checked={typeFood === "vegeterian"} onChange={handleChange} />
                Vegeterian
            </label>
            <label htmlFor="omnivore">
                <input type="radio" id="typeFood" name="typeFood" value="vegan" checked={typeFood === "vegan"} onChange={handleChange} />
                Vegan
            </label>

            <label htmlFor="allergies">Food allergies</label>
            <input type="text" id="allergies" name="allergies" placeholder="Type any allergies" value={allergies} onChange={handleChange} />
        </div>
    )
}

export default Menu;
