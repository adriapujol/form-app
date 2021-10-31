import React from 'react';


function ChildForm({ totalChildren, child, index, handleChildrenChange }) {

    return (
        <>
            {
                index < totalChildren &&
                <>
                    <div className="group-input">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" data-child={index} name="fname" placeholder="Name..." value={child.fname} onChange={handleChildrenChange} required />
                    </div>
                    <div className="group-input">
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" data-child={index} name="lname" placeholder="Last Name..." value={child.lname} onChange={handleChildrenChange} />
                    </div>
                    <div className="group-input">
                        <label htmlFor="age">Age</label>
                        <input type="number" min="0" max="18" step="1" data-child={index} name="age" placeholder="Age..." value={child.age} onChange={handleChildrenChange} />
                    </div>


                    <label htmlFor={`typeFood-${index}`}>Type of food</label>
                    <label htmlFor="meat">
                        <input type="radio" data-child={index} name={`typeFood-${index}`} value="meat" checked={child.typeFood === "meat"} onChange={handleChildrenChange} />
                        Meat
                    </label>
                    <label htmlFor="fish">
                        <input type="radio" data-child={index} name={`typeFood-${index}`} value="fish" checked={child.typeFood === "fish"} onChange={handleChildrenChange} />
                        Fish
                    </label>
                    <label htmlFor="eggs">
                        <input type="radio" data-child={index} name={`typeFood-${index}`} value="eggs" checked={child.typeFood === "eggs"} onChange={handleChildrenChange} />
                        Eggs
                    </label>
                    <label htmlFor="plant">
                        <input type="radio" data-child={index} name={`typeFood-${index}`} value="plant" checked={child.typeFood === "plant"} onChange={handleChildrenChange} />
                        Plant
                    </label>
                    <div className="group-input children-last-input">
                        <label htmlFor="allergies">Allergies</label>
                        <input type="text" data-child={index} name="allergies" placeholder="Type any allergies" value={child.allergies} onChange={handleChildrenChange} />
                    </div>
                </>
            }
        </>
    )
}

export default ChildForm
