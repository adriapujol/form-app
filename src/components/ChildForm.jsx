import React from 'react';
import { useLanguage } from '../context/LanguageContext';


function ChildForm({ totalChildren, child, index, handleChildrenChange }) {

    const { currentText } = useLanguage();
    const { formFirstName, formLastName, formAge, formFood } = currentText;

    return (
        <>
            {
                index < totalChildren &&
                <>
                    <div className="group-input">
                        <label htmlFor="fname">{formFirstName}</label>
                        <input type="text" data-child={index} name="fname" placeholder="Name..." value={child.fname} onChange={handleChildrenChange} required />
                    </div>
                    <div className="group-input">
                        <label htmlFor="lname">{formLastName}</label>
                        <input type="text" data-child={index} name="lname" placeholder="Last Name..." value={child.lname} onChange={handleChildrenChange} />
                    </div>
                    <div className="group-input">
                        <label htmlFor="age">{formAge}</label>
                        <input type="number" min="0" max="18" step="1" data-child={index} name="age" placeholder="Age..." value={child.age} onChange={handleChildrenChange} />
                    </div>
                    <div className="group-input children-last-input">
                        <label htmlFor="typeFood">{formFood}</label>
                        <input type="text" data-child={index} name="typeFood" placeholder="Type any allergies" value={child.typeFood} onChange={handleChildrenChange} />
                    </div>
                </>
            }
        </>
    )
}

export default ChildForm
