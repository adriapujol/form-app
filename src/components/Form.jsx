import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';
import ChildForm from '../components/ChildForm';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';


const Form = () => {

    const { currentUser, setForm } = useAuth();

    const { currentText } = useLanguage();
    const { formPersonalInfo, formFirstName, formLastName, formAddress, formCP, formCity, formPhone, formEmail, formFood, formFoodMessage, formPlusOne, formPlusOneMessage, formChildren, formAdd, formDelete, formAccommodation, formAccommodationMessage, formSubmit } = currentText;

    const [totalChildren, setTotalChildren] = useState(0);

    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showPlusOneInfo, setShowPlusOneInfo] = useState(false);
    const [showChildrenInfo, setShowChildrenInfo] = useState(false);
    const [showAccommodationInfo, setShowAccommodationInfo] = useState(false);

    const [formData, setFormData] = useState(
        {
            fname: "",
            lname: "",
            address: "",
            cp: "",
            city: "",
            phone: "",
            email: "",
            typeFood: "",
            plusOne: {
                fname: "",
                lname: "",
                typeFood: ""

            },
            children: [
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: ""
                }
            ]
        }
    )


    useEffect(() => {
        if (currentUser.formDone) {
            setFormData(prevFormData => prevFormData = currentUser.formAnswers);

            setTotalChildren(
                currentUser.formAnswers.children.reduce((total, child) => {
                    if (child.fname !== "" || child.lname !== "" || child.age > 0 || child.allergies !== "") total++;
                    return total;
                }, 0)
            );


        }
    }, [currentUser.formDone, currentUser.formAnswers])


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
                    typeFood: ""
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
        try {
            const response = await axios.put(`https://jenniferetcarlos.herokuapp.com/users/form/${currentUser._id}`, formData);
        } catch (error) {
            alert("There was an error, try again later.");
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        setShowChildrenInfo(false);
        setShowPersonalInfo(false);
        setShowPlusOneInfo(false);

        if (formData.fname === "" || formData.lname === "" || formData.address === "" || formData.phone === ""
            || formData.email === "") {
            return alert("Fields empty, check all fields")
        } else {
            postForm();
            setForm(formData);

            alert("Form succesfully submited!");
        }
    }


    return (

        <div className="form-container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="step1" className="field-title">{formPersonalInfo}
                        <button className="display-field-btn" name="personalInfo" onClick={handleShowField}>
                            <i className={showPersonalInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                        </button>
                    </label>
                    {
                        showPersonalInfo &&

                        <>
                            <div className="group-input">
                                < label htmlFor="fname">{formFirstName}</label>
                                <input type="text" id="fname" maxLength="20" name="fname" placeholder={`${formFirstName}...`} value={formData.fname} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="lname">{formLastName}</label>
                                <input type="text" id="lname" maxLength="20" name="lname" placeholder={`${formLastName}...`} value={formData.lname} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="address">{formAddress}</label>
                                <input type="text" id="address" name="address" maxLength="50" placeholder={`${formAddress}...`} value={formData.address} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="cp">{formCP}</label>
                                <input type="text" id="cp" maxLength="20" name="cp" placeholder={`${formCP}...`} value={formData.cp} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="city">{formCity}</label>
                                <input type="text" id="city" maxLength="20" name="city" placeholder={`${formCity}...`} value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="tel">{formPhone}</label>
                                <input type="tel" id="phone" maxLength="50" name="phone" placeholder={`${formPhone}...`} value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="group-input">
                                <label htmlFor="email">{formEmail}</label>
                                <input type="email" id="email" maxLength="50" name="email" placeholder={`${formEmail}...`} value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="group-input">
                                <label htmlFor="typeFood">{formFood}</label>
                                <input type="text" maxLength="150" name="typeFood" placeholder={`${formFood.slice(0, 30)}...`} value={formData.typeFood} onChange={handleChange} />
                                <p className="plus-one-fine-print">{formFoodMessage}</p>
                            </div>
                        </>
                    }


                </div>

                {

                    <div className="form-group">
                        <label htmlFor="step2" className="field-title">{formPlusOne}
                            <button className="display-field-btn" name="plusOneInfo" onClick={handleShowField}>
                                <i className={showPlusOneInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                            </button>
                        </label>
                        {showPlusOneInfo &&
                            <>
                                <div className="group-input">
                                    <label htmlFor="fname" className="plus-one-fine-print">{formPlusOneMessage}</label>
                                </div>
                                <div className="group-input">
                                    <label htmlFor="fname">{formFirstName}</label>
                                    <input type="text" id="fname" name="fname" placeholder={`${formFirstName}...`} value={formData.plusOne.fname} onChange={handlePlusOneChange} />
                                </div>
                                <div className="group-input">
                                    <label htmlFor="lname">{formLastName}</label>
                                    <input type="text" id="lname" name="lname" placeholder={`${formLastName}...`} value={formData.plusOne.lname} onChange={handlePlusOneChange} />
                                </div>
                                <div className="group-input">
                                    <label htmlFor="typeFood">{formFood}</label>
                                    <input type="text" name="typeFood" placeholder={`${formFood.slice(0, 30)}...`} value={formData.plusOne.typeFood} onChange={handlePlusOneChange} />
                                </div>
                            </>}
                    </div>
                }
                <div className="form-group children-group">
                    <label htmlFor="step3" className="field-title">{formChildren}
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
                                <button className="form-btn" onClick={handleAddChild}>{formAdd}</button>
                                <button className="form-btn form-btn-delete" onClick={handleDeleteChild}>{formDelete}</button>
                            </div>
                        </>
                    }
                </div>
                <div className="form-group">
                    <label htmlFor="step4" className="field-title">{formAccommodation}
                        <button className="display-field-btn" name="accommodationInfo" onClick={handleShowField}>
                            <i className={showAccommodationInfo ? "fas fa-chevron-down rotate-icon" : "fas fa-chevron-down"} />
                        </button>
                    </label>
                    {
                        showAccommodationInfo &&

                        <>
                            <div className="accommodation-field">
                                <label htmlFor="hotel">{formAccommodationMessage}</label>
                            </div>
                        </>
                    }
                </div>
                <button type="submit" className="form-btn submit-btn">{formSubmit}</button>
            </form>
        </div >

    )
};

export default Form;
