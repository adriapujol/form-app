import React from 'react';

const PersonalInfo = ({ handleChange, formData }) => {

    const { fname, lname, address, phone, email } = formData;

    return (
        <div className="form-group">
            <label htmlFor="step1">Personal Info</label>

            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="Name..." value={fname} onChange={handleChange} />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last Name..." value={lname} onChange={handleChange} />

            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Address..." value={address} onChange={handleChange} />

            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone..." value={phone} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email..." value={email} onChange={handleChange} />
        </div>
    )
}

export default PersonalInfo;
