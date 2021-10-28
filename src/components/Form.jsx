import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';
import ChildForm from '../components/ChildForm';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';


const Form2 = () => {

    const { currentUser, setForm } = useAuth();
    const history = useHistory();

    const { currentText } = useLanguage();
    const { formSubmitCheck, formSubmit } = currentText;

    const [totalChildren, setTotalChildren] = useState(0);

    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showPlusOneInfo, setShowPlusOneInfo] = useState(false);
    const [showChildrenInfo, setShowChildrenInfo] = useState(false);
    const [showAccommodationInfo, setShowAccommodationInfo] = useState(false);


    const [plusOne, setPlusOne] = useState("false");
    const [formData, setFormData] = useState(
        {
            fname: "",
            lname: "",
            address: "",
            cp: "",
            city: "",
            phone: "",
            email: "",
            typeFood: "not selected",
            allergies: "",
            plusOne: {
                fname: "",
                lname: "",
                typeFood: "not selected",
                allergies: ""

            },
            children: [
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "not selected",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "not selected",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "not selected",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "not selected",
                    allergies: ""
                }
            ],
            hotel: "no",
            transport: "no",
            childcare: "no"
        }
    )


    useEffect(() => {
        if (currentUser.formDone) {
            console.log("Fired Update Form")
            setFormData(prevFormData => prevFormData = currentUser.formAnswers);
            console.log("update effect")

            setTotalChildren(
                currentUser.formAnswers.children.reduce((total, child) => {
                    if (child.fname !== "" || child.lname !== "" || child.age > 0 || child.allergies !== "") total++;
                    return total;
                }, 0)
            );


        }
    }, [currentUser.formDone, currentUser.formAnswers])
    // useEffect(() => {
    //     console.log("Fired Children Number")
    //     setTotalChildren(
    //         formData.children.reduce((total, child) => {
    //             if (child.fname !== "" || child.lname !== "" || child.age > 0 || child.allergies !== "") total++;
    //             return total;
    //         }, 0)
    //     );
    // }, [formData.children])


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }

    const handlePlusOneChange = e => {
        let { name, value } = e.target;

        if (name === "typeFoodPlusOne") {
            name = "typeFood"
        }
        setFormData(prevData => ({
            ...prevData,
            plusOne: {
                ...prevData.plusOne,
                [name]: value
            }
        }))
    }

    const handleChildrenChange = e => {
        let { name, value } = e.target;
        const childNumber = parseInt(e.target.getAttribute("data-child"));
        const children = formData.children;

        if (name.startsWith("typeFood")) {
            name = "typeFood"
        }
        children[childNumber][name] = value;

        setFormData(prevData => ({
            ...prevData,
            children: [
                ...children
            ]
        }))
    }

    const handleAddChild = e => {
        e.preventDefault();
        setTotalChildren(prevTotalChildren => {
            if (totalChildren < 4) {
                return prevTotalChildren + 1;
            } else {
                return 4;
            }
        })
    }

    const handleDeleteChild = e => {
        e.preventDefault();
        setTotalChildren(prevTotalChildren => {
            if (totalChildren > 0) {

                const childToDelete = prevTotalChildren - 1;
                const children = formData.children;

                children[childToDelete] = {
                    ...children[childToDelete],
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "not selected",
                    allergies: ""
                }


                setFormData(prevData => ({
                    ...prevData,
                    children: [
                        ...children
                    ]
                }))

                return childToDelete;

            } else {
                return 0;
            }
        })
    }

    const handleShowField = e => {
        e.preventDefault();
        const name = e.target.name;

        if (name === "personalInfo") setShowPersonalInfo(prevShowPersonalInfo => !prevShowPersonalInfo);
        if (name === "plusOneInfo") setShowPlusOneInfo(prevShowPlusOneInfo => !prevShowPlusOneInfo);
        if (name === "childrenInfo") setShowChildrenInfo(prevShowChildrenInfo => !prevShowChildrenInfo);
        if (name === "accommodationInfo") setShowAccommodationInfo(prevShowAccommodationInfo => !prevShowAccommodationInfo);
    }

    const postForm = async () => {
        console.log("SUBMIT")
        try {
            const response = await axios.put(`http://localhost:3001/users/form/${currentUser._id}`, formData);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formData);
        setShowChildrenInfo(false);
        setShowPersonalInfo(false);
        setShowPlusOneInfo(false);

        if (formData.fname === "" || formData.lname === "" || formData.address === "" || formData.phone === ""
            || formData.email === "") {
            return alert("Fields empty, check all fields")
        } else {
            postForm();
            setForm(formData);

            alert("SUBMIT");
        }
    }


    return (

        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="step1" className="field-title">Personal Info
                        <button className="display-field-btn" name="personalInfo" onClick={handleShowField}>
                            <i className={showPersonalInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                        </button>
                    </label>
                    {
                        showPersonalInfo &&

                        <>
                            <div className="group-input">
                                < label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.fname} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.lname} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" placeholder="Address..." value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="cp">Postal Code</label>
                                <input type="text" id="cp" name="cp" placeholder="CP..." value={formData.cp} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" placeholder="City..." value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="tel">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="Phone..." value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="group-input">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange} required />
                            </div>

                            <label htmlFor="typeFood">Type of food</label>
                            <label htmlFor="meat">
                                <input type="radio" name="typeFood" value="meat" checked={formData.typeFood === "meat"} onChange={handleChange} />
                                Meat
                            </label>
                            <label htmlFor="fish">
                                <input type="radio" name="typeFood" value="fish" checked={formData.typeFood === "fish"} onChange={handleChange} />
                                Fish
                            </label>
                            <label htmlFor="eggs">
                                <input type="radio" name="typeFood" value="eggs" checked={formData.typeFood === "eggs"} onChange={handleChange} />
                                Eggs
                            </label>
                            <label htmlFor="plant">
                                <input type="radio" name="typeFood" value="plant" checked={formData.typeFood === "plant"} onChange={handleChange} />
                                Plant
                            </label>
                            <div className="group-input">
                                <label htmlFor="allergies">Allergies</label>
                                <input type="text" name="allergies" placeholder="Type any allergies" value={formData.allergies} onChange={handleChange} />
                            </div>
                        </>
                    }


                </div>

                {

                    <div className="form-group">
                        <label htmlFor="step2" className="field-title">Plus one
                            <button className="display-field-btn" name="plusOneInfo" onClick={handleShowField}>
                                <i className={showPlusOneInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                            </button>
                        </label>
                        {showPlusOneInfo &&
                            <>
                                <div className="group-input">
                                    <label htmlFor="fname" className="plus-one-fine-print">Leave empty if there is no plus one</label>
                                </div>
                                <div className="group-input">
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.plusOne.fname} onChange={handlePlusOneChange} />
                                </div>
                                <div className="group-input">
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.plusOne.lname} onChange={handlePlusOneChange} />
                                </div>


                                <label htmlFor="typeFoodPlusOne">Type of food</label>
                                <label htmlFor="meat">
                                    <input type="radio" name="typeFoodPlusOne" value="meat" checked={formData.plusOne.typeFood === "meat"} onChange={handlePlusOneChange} />
                                    Meat
                                </label>
                                <label htmlFor="fish">
                                    <input type="radio" name="typeFoodPlusOne" value="fish" checked={formData.plusOne.typeFood === "fish"} onChange={handlePlusOneChange} />
                                    Fish
                                </label>
                                <label htmlFor="eggs">
                                    <input type="radio" name="typeFoodPlusOne" value="eggs" checked={formData.plusOne.typeFood === "eggs"} onChange={handlePlusOneChange} />
                                    Eggs
                                </label>
                                <label htmlFor="plant">
                                    <input type="radio" name="typeFoodPlusOne" value="plant" checked={formData.plusOne.typeFood === "plant"} onChange={handlePlusOneChange} />
                                    Plant
                                </label>
                                <div className="group-input">
                                    <label htmlFor="allergies">Allergies</label>
                                    <input type="text" name="allergies" placeholder="Type any allergies" value={formData.plusOne.allergies} onChange={handlePlusOneChange} />
                                </div>
                            </>}
                    </div>
                }
                <div className="form-group">
                    <label htmlFor="step3" className="field-title">Children
                        <button className="display-field-btn" name="childrenInfo" onClick={handleShowField}>
                            <i className={showChildrenInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                        </button>
                    </label>
                    {
                        showChildrenInfo &&
                        <>
                            {
                                formData.children.map((child, index) => <ChildForm totalChildren={totalChildren} child={child} index={index} key={index} handleChildrenChange={handleChildrenChange} />)
                            }
                            <div className="btn-box-children">
                                <button className="form-btn" onClick={handleAddChild}>Add</button>
                                <button className="form-btn form-btn-delete" onClick={handleDeleteChild}>Delete</button>
                            </div>
                        </>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="step4" className="field-title">Accomodation/Transport
                        <button className="display-field-btn" name="accommodationInfo" onClick={handleShowField}>
                            <i className={showAccommodationInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                        </button>
                    </label>
                    {
                        showAccommodationInfo &&

                        <>
                            <div className="accommodation-field">
                                <label htmlFor="hotel">Would you be interested in help with searching for an hotel?</label>
                                <div className="yes-no-inputs">
                                    <label htmlFor="accommodationYes">
                                        <input type="radio" id="hotelYes" name="hotel" value="yes" checked={formData.hotel === "yes"} onChange={handleChange} />
                                        yes
                                    </label>
                                    <label htmlFor="accommodationNo">
                                        <input type="radio" id="hotelNo" name="hotel" value="no" checked={formData.hotel === "no"} onChange={handleChange} />
                                        no
                                    </label>
                                </div>
                            </div>

                            <div className="accommodation-field">
                                <label htmlFor="transport">If you said yes to the previous question. Would you be interested in tranposrtation the day of the wedding? (hotel/church/wedding reception/hotel)</label>
                                <div className="yes-no-inputs">
                                    <label htmlFor="transportYes">
                                        <input type="radio" id="transportYes" name="transport" value="yes" checked={formData.transport === "yes"} onChange={handleChange} />
                                        yes
                                    </label>
                                    <label htmlFor="transportNo">
                                        <input type="radio" id="transportNo" name="transport" value="no" checked={formData.transport === "no"} onChange={handleChange} />
                                        no
                                    </label>
                                </div>
                            </div>
                        </>
                    }
                </div>
                <button type="submit" className="form-btn submit-btn">Submit</button>
            </form>
        </div >

    )
};

export default Form2;
