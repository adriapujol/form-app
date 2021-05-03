import React from 'react'

const Accommodation = ({ handleChange, formData }) => {

    const { hotel, numberRooms, transport, childcare } = formData;


    return (
        <div className="form-group">
            <label htmlFor="step1">Accommodation</label>

            <label htmlFor="hotel">Do you want help searching for accommodation?</label>
            <label htmlFor="accommodationYes">
                <input type="radio" id="hotel" name="hotel" value="yes" checked={hotel === "yes"} onChange={handleChange} />
                Yes
            </label>
            <label htmlFor="accommodationNo">
                <input type="radio" id="hotel" name="hotel" value="no" checked={hotel === "no"} onChange={handleChange} />
                No
            </label>

            <label htmlFor="numberRooms">Number of rooms</label>
            <input type="number" id="numberRooms" name="numberRooms" min="0" defaultValue="0" value={numberRooms} onChange={handleChange} />

            <label htmlFor="transport">Do you want transport from the Hotel to the Wedding?</label>
            <label htmlFor="transportYes">
                <input type="radio" id="transport" name="transport" value="yes" checked={transport === "yes"} onChange={handleChange} />
                Yes
            </label>
            <label htmlFor="transportNo">
                <input type="radio" id="transport" name="transport" value="no" checked={transport === "no"} onChange={handleChange} />
                No
            </label>

            <label htmlFor="childcare">Do you want Childcare?</label>
            <label htmlFor="childcareYes">
                <input type="radio" id="childcare" name="childcare" value="yes" checked={childcare === "yes"} onChange={handleChange} />
                Yes
            </label>
            <label htmlFor="childcareNo">
                <input type="radio" id="childcare" name="childcare" value="no" checked={childcare === "no"} onChange={handleChange} />
                No
            </label>
        </div>
    )
}

export default Accommodation;
