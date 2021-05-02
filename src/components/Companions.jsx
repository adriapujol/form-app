import React from 'react';

const Companions = () => {
    return (
        <div className="form-group">
            <label htmlFor="step2">Companions</label>
            <label htmlFor="numberPersons">Number of companions</label>
            <input type="number" min="0" id="numberPersons" name="numberPersons" defaultValue="0" />
            <label htmlFor="minors">Any minors? (Age {"<"} 14)</label>
            <label htmlFor="minorsYes">Yes</label>
            <input type="radio" id="minors" name="minors" value="yes"></input>
            <label htmlFor="minorsNo">No</label>
            <input type="radio" id="minors" name="minors" value="no"></input>
        </div>
    )
}

export default Companions
