import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';
import PersonalInfo from '../components/PersonalInfo';
import Companions from '../components/Companions';
import Menu from '../components/Menu';
import Accommodation from '../components/Accommodation';
import ChildForm from '../components/ChildForm';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';


const Form2 = () => {

    const { currentUser, setForm } = useAuth();
    const history = useHistory();

    const { currentText } = useLanguage();
    const { formSubmitCheck, formSubmit } = currentText;

    const [formStep, setFormStep] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [showChildrenInfo, setShowChildrenInfo] = useState(false);
    const [plusOne, setPlusOne] = useState("false");
    const [formData, setFormData] = useState(
        {
            fname: "",
            lname: "",
            address: "",
            phone: "",
            email: "",
            typeFood: "meat",
            allergies: "",
            plusOne: {
                fname: "",
                lname: "",
                typeFood: "meat",
                allergies: ""

            },
            children: [
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "meat",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "meat",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "meat",
                    allergies: ""
                },
                {
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "meat",
                    allergies: ""
                }
            ],
            hotel: "no",
            transport: "no",
            childcare: "no"
        }
    )

    useEffect(() => {
        if (currentUser) {
            setFormData(prevFormData => prevFormData = currentUser.formAnswers);
            console.log("First effect")
        }
    }, [])
    useEffect(() => {
        setTotalChildren(
            formData.children.reduce((total, child) => {
                if (child.fname !== "") total++;
                return total;
            }, 0)
        );
    }, [formData.children])
    useEffect(() => {
        if (currentUser.formDone) {
            setFormData(prevFormData => prevFormData = currentUser.formAnswers);
            console.log("update effect")
        }
    }, [currentUser.formDone, currentUser.formAnswers])

    const handlePlusOne = () => {
        plusOne === "false" ? setPlusOne("true") : setPlusOne("false");

    }

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }

    const handlePlusOneChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            plusOne: {
                ...prevData.plusOne,
                [name]: value
            }
        }))
    }

    const handleChildrenChange = e => {
        const { name, value } = e.target;
        const childNumber = parseInt(e.target.getAttribute("data-child"));
        const children = formData.children;

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


                console.log("child to delete", children[childToDelete])

                children[childToDelete] = {
                    ...children[childToDelete],
                    fname: "",
                    lname: "",
                    age: 0,
                    typeFood: "meat",
                    allergies: ""
                }


                setFormData(prevData => ({
                    ...prevData,
                    children: [
                        ...children
                    ]
                }))

                return childToDelete - 1;

            } else {
                return 0;
            }
        })
    }

    const handleShowField = e => {
        e.preventDefault();
        const name = e.target.name;

        if (name === "contactInfo") setShowContactInfo(prevShowContactInfo => !prevShowContactInfo);
        if (name === "childrenInfo") setShowChildrenInfo(prevShowChildrenInfo => !prevShowChildrenInfo);
    }

    const postForm = async () => {
        console.log("SUBMIT")
        // try {
        //     const response = await axios.put(`http://localhost:3001/users//form/${currentUser._id}`, formData);
        //     console.log(response.data);
        // } catch (error) {
        //     console.log(error.response.data.message)
        // }
    }

    const handleSubmit = e => {
        e.preventDefault();

        // if (formData.fname === "" || formData.lname === "" || formData.address === "" || formData.phone === ""
        //     || formData.email === "") {
        //     return alert("Fields empty, check all fields")
        // }
        // postForm();
        // setForm(formData);
        // setFormStep(0);
        // history.push("/");
        // alert("SUBMIT");
    }


    return (
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="step1">Personal Info</label>

                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.fname} onChange={handleChange} required />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.lname} onChange={handleChange} />

                        <label htmlFor="plusOne">Plus one ?
                            <input type="checkbox" id="plusOneYes" name="plusOne" value="true" onChange={handlePlusOne} />
                        </label>

                        {
                            plusOne === "true" &&
                            <>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.plusOne.fname} onChange={handlePlusOneChange} required />

                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.plusOne.lname} onChange={handlePlusOneChange} />
                            </>
                        }

                    </div>
                    <div className="form-group">
                        <label htmlFor="step2">Contact Info
                            <button name="contactInfo" onClick={handleShowField}>+</button>
                        </label>
                        {
                            showContactInfo &&
                            <>
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" placeholder="Address..." value={formData.address} onChange={handleChange} />

                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="Phone..." value={formData.phone} onChange={handleChange} />

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange} />
                            </>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="step3">Children
                            <button name="childrenInfo" onClick={handleShowField}>+</button>
                        </label>
                        {
                            showChildrenInfo &&
                            <>
                                {
                                    formData.children.map((child, index) => <ChildForm totalChildren={totalChildren} child={child} index={index} key={index} handleChildrenChange={handleChildrenChange} />)
                                }
                                <button onClick={handleDeleteChild}>Delete Child</button>
                                <button onClick={handleAddChild}>Add Child</button>
                            </>
                        }
                    </div>

                </form>
            </div >
        </div >
    )
};

export default Form2;
