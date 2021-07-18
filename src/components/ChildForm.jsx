import React from 'react';


function ChildForm({ totalChildren, child, index, handleChildrenChange }) {

    return (
        <>
            {
                index < totalChildren &&
                <div className="child-form">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" data-child={index} name="fname" placeholder="Name..." value={child.fname} onChange={handleChildrenChange} required />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" data-child={index} name="lname" placeholder="Last Name..." value={child.lname} onChange={handleChildrenChange} />

                    <label htmlFor="age">Age</label>
                    <input type="number" min="0" max="18" step="1" data-child={index} name="age" placeholder="Age..." value={child.age} onChange={handleChildrenChange} />

                    <label htmlFor="typeFood">Type of food</label>
                    <label htmlFor="omnivore">
                        <input type="radio" data-child={index} name="typeFood" value="omnivore" checked={child.typeFood === "omnivore"} onChange={handleChildrenChange} />
                        Omnivore
                    </label>
                    <label htmlFor="vegeterian">
                        <input type="radio" data-child={index} name="typeFood" value="vegeterian" checked={child.typeFood === "vegeterian"} onChange={handleChildrenChange} />
                        Vegeterian
                    </label>
                    <label htmlFor="vegan">
                        <input type="radio" data-child={index} name="typeFood" value="vegan" checked={child.typeFood === "vegan"} onChange={handleChildrenChange} />
                        Vegan
                    </label>

                    <label htmlFor="allergies">Allergies</label>
                    <input type="text" data-child={index} name="allergies" placeholder="Type any allergies" value={child.allergies} onChange={handleChildrenChange} />
                </div>
            }
        </>
    )
}

export default ChildForm
