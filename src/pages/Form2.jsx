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

    const [showPersonalInfo, setShowPersonalInfo] = useState(true);
    const [showPlusOneInfo, setShowPlusOneInfo] = useState(false);
    const [showChildrenInfo, setShowChildrenInfo] = useState(false);

    const [plusOne, setPlusOne] = useState("false");
    const [formData, setFormData] = useState(
        {
            fname: "",
            lname: "",
            address: "",
            cp: 0,
            city: "",
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

        if (name === "personalInfo") setShowPersonalInfo(prevShowPersonalInfo => !prevShowPersonalInfo);
        if (name === "plusOneInfo") setShowPlusOneInfo(prevShowPlusOneInfo => !prevShowPlusOneInfo);
        if (name === "childrenInfo") setShowChildrenInfo(prevShowChildrenInfo => !prevShowChildrenInfo);
    }

    const postForm = async () => {
        console.log("SUBMIT")
        try {
            const response = await axios.put(`http://localhost:3001/users//form/${currentUser._id}`, formData);
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
        <div className="container">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="step1">Personal Info
                            <button name="personalInfo" onClick={handleShowField}>+</button>
                        </label>
                        {
                            showPersonalInfo &&

                            <>

                                < label htmlFor="fname">First Name</label>
                                <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.fname} onChange={handleChange} required />

                                <label htmlFor="lname">Last Name</label>
                                <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.lname} onChange={handleChange} required />

                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" placeholder="Address..." value={formData.address} onChange={handleChange} required />

                                <label htmlFor="cp">Postal Code</label>
                                <input type="text" id="cp" name="cp" placeholder="CP..." value={formData.cp} onChange={handleChange} required />

                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" placeholder="City..." value={formData.city} onChange={handleChange} required />

                                <label htmlFor="phone">Phone</label>
                                <input type="text" id="phone" name="phone" placeholder="Phone..." value={formData.phone} onChange={handleChange} />

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Email..." value={formData.email} onChange={handleChange} required />

                                <label htmlFor="typeFood">Type of food</label>
                                <label htmlFor="omnivore">
                                    <input type="radio" name="typeFood" value="omnivore" checked={formData.typeFood === "omnivore"} onChange={handleChange} />
                                    Omnivore
                                </label>
                                <label htmlFor="vegeterian">
                                    <input type="radio" name="typeFood" value="vegeterian" checked={formData.typeFood === "vegeterian"} onChange={handleChange} />
                                    Vegeterian
                                </label>
                                <label htmlFor="vegan">
                                    <input type="radio" name="typeFood" value="vegan" checked={formData.typeFood === "vegan"} onChange={handleChange} />
                                    Vegan
                                </label>

                                <label htmlFor="allergies">Allergies</label>
                                <input type="text" name="allergies" placeholder="Type any allergies" value={formData.allergies} onChange={handleChange} />
                            </>
                        }


                    </div>

                    {

                        <div className="form-group">
                            <label htmlFor="plusOne">Plus one ?
                                <button name="plusOneInfo" onClick={handleShowField}>+</button>
                            </label>
                            {showPlusOneInfo &&
                                <>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" id="fname" name="fname" placeholder="Name..." value={formData.plusOne.fname} onChange={handlePlusOneChange} required />

                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" id="lname" name="lname" placeholder="Last Name..." value={formData.plusOne.lname} onChange={handlePlusOneChange} />


                                    <label htmlFor="typeFood">Type of food</label>
                                    <label htmlFor="omnivore">
                                        <input type="radio" name="typeFood" value="omnivore" checked={formData.plusOne.typeFood === "omnivore"} onChange={handlePlusOneChange} />
                                        Omnivore
                                    </label>
                                    <label htmlFor="vegeterian">
                                        <input type="radio" name="typeFood" value="vegeterian" checked={formData.plusOne.typeFood === "vegeterian"} onChange={handlePlusOneChange} />
                                        Vegeterian
                                    </label>
                                    <label htmlFor="vegan">
                                        <input type="radio" name="typeFood" value="vegan" checked={formData.plusOne.typeFood === "vegan"} onChange={handlePlusOneChange} />
                                        Vegan
                                    </label>

                                    <label htmlFor="allergies">Allergies</label>
                                    <input type="text" name="allergies" placeholder="Type any allergies" value={formData.plusOne.allergies} onChange={handleChildrenChange} />
                                </>}
                        </div>
                    }
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
                    <button type="submit">Submit</button>
                </form>
            </div >
        </div >
    )
};

export default Form2;
