import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Accommodation = ({ handleChange, formData }) => {

    const { hotel, numberRooms, transport, childcare } = formData;

    const { currentText } = useLanguage();

    const { formAccommodation, formHelpAccommodation, formYes, formNo, formNumberRooms, formNeedTransport, formChildcare } = currentText;

    return (
        <div className="form-group">
            <label htmlFor="step1">{formAccommodation}</label>

            <label htmlFor="hotel">{formHelpAccommodation}</label>
            <label htmlFor="accommodationYes">
                <input type="radio" id="hotelYes" name="hotel" value="yes" checked={hotel === "yes"} onChange={handleChange} />
                {formYes}
            </label>
            <label htmlFor="accommodationNo">
                <input type="radio" id="hotelNo" name="hotel" value="no" checked={hotel === "no"} onChange={handleChange} />
                {formNo}
            </label>

            <label htmlFor="numberRooms">{formNumberRooms}</label>
            <input type="number" id="numberRooms" name="numberRooms" min="0" value={numberRooms} onChange={handleChange} />

            <label htmlFor="transport">{formNeedTransport}</label>
            <label htmlFor="transportYes">
                <input type="radio" id="transportYes" name="transport" value="yes" checked={transport === "yes"} onChange={handleChange} />
                {formYes}
            </label>
            <label htmlFor="transportNo">
                <input type="radio" id="transportNo" name="transport" value="no" checked={transport === "no"} onChange={handleChange} />
                {formNo}
            </label>

            <label htmlFor="childcare">{formChildcare}</label>
            <label htmlFor="childcareYes">
                <input type="radio" id="childcareYes" name="childcare" value="yes" checked={childcare === "yes"} onChange={handleChange} />
                {formYes}
            </label>
            <label htmlFor="childcareNo">
                <input type="radio" id="childcareNo" name="childcare" value="no" checked={childcare === "no"} onChange={handleChange} />
                {formNo}
            </label>
        </div>
    )
}

export default Accommodation;
