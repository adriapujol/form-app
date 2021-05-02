import React from 'react';

const Menu = () => {
    return (
        <div className="form-group">
            <label htmlFor="step1">Menu</label>
            <label htmlFor="typeFood">First Name</label>
            <label htmlFor="omnivore">Omnivore</label>
            <input type="radio" id="typeFood" name="typeFood" value="omnivore" />
            <label htmlFor="omnivore">Vegeterian</label>
            <input type="radio" id="typeFood" name="typeFood" value="vegeterian" />
            <label htmlFor="omnivore">Vegan</label>
            <input type="radio" id="typeFood" name="typeFood" value="Vegan" />
            <label htmlFor="allergies">Food allergies</label>
            <input type="text" id="allergies" name="allergies" placeholder="Type any allergies" />
        </div>
    )
}

export default Menu;
