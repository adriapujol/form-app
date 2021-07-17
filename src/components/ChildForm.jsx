import React from 'react';


function ChildForm({ child, index, handleChildrenChange }) {
    return (
        <>
            {

                <div className="child-form">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" data-child={index} id="fname" name="fname" placeholder="Name..." value={child.fname} onChange={handleChildrenChange} required />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" data-child={index} id="lname" name="lname" placeholder="Last Name..." value={child.lname} onChange={handleChildrenChange} />

                    <label htmlFor="age">Age</label>
                    <input type="number" min="0" max="18" step="1" data-child={index} id="age" name="age" placeholder="Age..." value={child.age} onChange={handleChildrenChange} />

                    <label htmlFor="typeFood">Type of food</label>
                    <label htmlFor="omnivore">
                        <input type="radio" data-child={index} id="typeFoodOmn" name="typeFood" value="omnivore" checked={child.typeFood === "omnivore"} onChange={handleChildrenChange} />
                        Omnivore
                    </label>
                    <label htmlFor="vegeterian">
                        <input type="radio" data-child={index} id="typeFoodVeg" name="typeFood" value="vegeterian" checked={child.typeFood === "vegeterian"} onChange={handleChildrenChange} />
                        Vegeterian
                    </label>
                    <label htmlFor="vegan">
                        <input type="radio" data-child={index} id="typeFoodVegan" name="typeFood" value="vegan" checked={child.typeFood === "vegan"} onChange={handleChildrenChange} />
                        Vegan
                    </label>

                    <label htmlFor="allergies">Allergies</label>
                    <input type="text" data-child={index} id="allergies" name="allergies" placeholder="Type any allergies" value={child.allergies} onChange={handleChildrenChange} />
                </div>
            }
        </>
    )
}

export default ChildForm
