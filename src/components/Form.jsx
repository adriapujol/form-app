import React, { useState } from 'react';
import './Form.scss';
import PersonalInfo from './PersonalInfo';
import Companions from './Companions';
import Menu from './Menu';
import Accommodation from './Accommodation';


const Form = () => {

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
            childcare: 'no'
        }
    )


    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

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
                <form>
                    {
                        showStep(formStep)
                    }
                </form>
                <div>Count {formStep}</div>
                <div className="form-controls">
                    {(formStep > 0) && <button onClick={prevStep}>Prev</button>}
                    {(formStep < 4) && <button onClick={nextStep}>Next</button>}
                    {(formStep === 4) && <button onClick={() => console.log("SUBMIT")}>Submit</button>}
                </div>
            </div>
        </div>
    )
};

export default Form;
