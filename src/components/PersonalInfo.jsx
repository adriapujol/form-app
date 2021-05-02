import React from 'react';

const PersonalInfo = () => {
    return (
        <div className="form-group">
            <label htmlFor="step1">Personal Info</label>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder="Name..." />
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder="Last Name..." />
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" placeholder="Address..." />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone..." />
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="Phone..." />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email..." />
        </div>
    )
}

export default PersonalInfo;
