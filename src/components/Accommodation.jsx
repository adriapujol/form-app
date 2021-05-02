import React from 'react'

const Accommodation = () => {
    return (
        <div className="form-group">
            <label htmlFor="step1">Accommodation</label>
            <label htmlFor="search">Do you want help searching for accommodation?</label>
            <label htmlFor="accommodationYes">Yes</label>
            <input type="radio" id="search" name="search" value="yes" />
            <label htmlFor="accommodationNo">No</label>
            <input type="radio" id="search" name="search" value="no" />
            <label htmlFor="numRooms">Number of rooms</label>
            <input type="number" id="numRooms" name="numRooms" min="0" defaultValue="0" />
            <label htmlFor="transport">Do you want transport from the Hotel to the Wedding?</label>
            <label htmlFor="transportYes">Yes</label>
            <input type="radio" id="transport" name="transport" value="yes" />
            <label htmlFor="transportNo">No</label>
            <input type="radio" id="transport" name="transport" value="no" />
            <label htmlFor="childcare">Do you want Childcare?</label>
            <label htmlFor="childcareYes">Yes</label>
            <input type="radio" id="childcare" name="childcare" value="yes" />
            <label htmlFor="childcareNo">No</label>
            <input type="radio" id="childcare" name="childcare" value="no" />
        </div>
    )
}

export default Accommodation;
