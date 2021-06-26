import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const PersonalInfo = ({ handleChange, formData }) => {

    const { fname, lname, address, phone, email } = formData;

    const { currentText } = useLanguage();

    const { formPersonalInfo, formFirstName, formLastName, formAddress, formPhone, formEmail } = currentText;

    return (
        <div className="form-group">
            <label htmlFor="step1">{formPersonalInfo}</label>

            <label htmlFor="fname">{formFirstName}</label>
            <input type="text" id="fname" name="fname" placeholder="Name..." value={fname} onChange={handleChange} required />

            <label htmlFor="lname">{formLastName}</label>
            <input type="text" id="lname" name="lname" placeholder="Last Name..." value={lname} onChange={handleChange} />

            <label htmlFor="address">{formAddress}</label>
            <input type="text" id="address" name="address" placeholder="Address..." value={address} onChange={handleChange} />

            <label htmlFor="phone">{formPhone}</label>
            <input type="text" id="phone" name="phone" placeholder="Phone..." value={phone} onChange={handleChange} />

            <label htmlFor="email">{formEmail}</label>
            <input type="email" id="email" name="email" placeholder="Email..." value={email} onChange={handleChange} />
        </div>
    )
}

export default PersonalInfo;
