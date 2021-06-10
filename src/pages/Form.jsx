import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.scss';
import PersonalInfo from '../components/PersonalInfo';
import Companions from '../components/Companions';
import Menu from '../components/Menu';
import Accommodation from '../components/Accommodation';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';


const Form = () => {

    const { currentUser, setForm } = useAuth();
    const history = useHistory();

    const [formStep, setFormStep] = useState(0);
    const [formData, setFormData] = useState(
        {
            fname: '',
            lname: '',
            address: '',
            phone: '',
            email: '',
            numberPersons: 0,
            minors: 'no',
            numberMinors: 0,
            typeFood: 'omnivore',
            allergies: '',
            hotel: 'no',
            numberRooms: 0,
            transport: 'no',
            childcare: 'no',
            formDone: false
        }
    )

    useEffect(() => {
        if (currentUser.formDone) {
            setFormData(prevFormData => prevFormData = currentUser.formAnswers);
        }
        // else {
        //     setFormData(
        //         {
        //             fname: '',
        //             lname: '',
        //             address: '',
        //             phone: '',
        //             email: '',
        //             numberPersons: 0,
        //             minors: 'no',
        //             numberMinors: 0,
        //             typeFood: 'omnivore',
        //             allergies: '',
        //             hotel: 'no',
        //             numberRooms: 0,
        //             transport: 'no',
        //             childcare: 'no',
        //             formDone: false
        //         }
        //     )
        // }
    }, [currentUser.formDone])

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }

    const postForm = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/users//form/${currentUser._id}`, formData);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const handleSubmit = e => {
        e.preventDefault();

        postForm();
        // setUsers(prevUsers => [...prevUsers, formData]);
        setForm(formData);
        // setFormData({
        //     fname: '',
        //     lname: '',
        //     address: '',
        //     phone: '',
        //     email: '',
        //     numberPersons: 0,
        //     numberMinors: 0,
        //     typeFood: 'omnivore',
        //     allergies: '',
        //     hotel: 'no',
        //     numberRooms: 0,
        //     transport: 'no',
        //     childcare: 'no',
        // })
        setFormStep(0);
        history.push("/");
        alert("SUBMIT");
    }

    const showStep = (stepNum) => {
        switch (stepNum) {
            case 0:
                return <PersonalInfo handleChange={handleChange} formData={formData} />;
            case 1:
                return <Companions handleChange={handleChange} formData={formData} />;
            case 2:
                return <Menu handleChange={handleChange} formData={formData} />;
            case 3:
                return <Accommodation handleChange={handleChange} formData={formData} />;
            case 4:
                return <div>If you are ok with your answers, go ahead, submit!</div>;
            default:
                return <div>There are no more steps</div>
        }
    }

    const nextStep = () => {
        setFormStep(c => c + 1);
    }

    const prevStep = () => {
        setFormStep(c => c - 1);
    }


    return (
        <div className="container">
            <div className="form-container">
                <div className="form-steps"></div>
                <form onSubmit={handleSubmit}>
                    {
                        showStep(formStep)
                    }
                    {(formStep === 4) && <button type="submit">Submit</button>}
                </form>
                <div>Count {formStep}</div>
                <div className="form-controls">
                    {(formStep > 0) && <button onClick={prevStep}>Prev</button>}
                    {(formStep < 4) && <button onClick={nextStep}>Next</button>}
                    {/* {(formStep === 4) && <button onClick={() => setFormStep(0)}>Start</button>} */}
                </div>
            </div>
        </div>
    )
};

export default Form;
