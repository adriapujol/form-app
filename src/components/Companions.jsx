import React from 'react';

const Companions = ({ handleChange, formData }) => {

    const { numberPersons, minors, numberMinors } = formData;

    return (
        <div className="form-group">
            <label htmlFor="step2">Companions</label>

            <label htmlFor="numberPersons">Number of companions</label>
            <input type="number" min="0" id="numberPersons" name="numberPersons" value={numberPersons} onChange={handleChange} />

            <label htmlFor="minors">Any minors? (Age {"<"} 14)</label>
            <label htmlFor="minorsYes">
                <input type="radio" id="minors" name="minors" value="yes" checked={minors === "yes"} onChange={handleChange} />
                Yes
            </label>
            <label htmlFor="minorsNo">
                <input type="radio" id="minors" name="minors" value="no" checked={minors === "no"} onChange={handleChange} />
                No
            </label>

            <label htmlFor="numberMinors">Number of minors</label>
            <input type="number" min="0" id="numberMinors" name="numberMinors" value={numberMinors} onChange={handleChange} />

        </div>
    )
}

export default Companions
