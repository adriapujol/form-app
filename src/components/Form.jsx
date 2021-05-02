import React, { useState } from 'react';
import './Form.scss';
import PersonalInfo from './PersonalInfo';
import Companions from './Companions';
import Menu from './Menu';
import Accommodation from './Accommodation';


const Form = () => {

    const [formStep, setFormStep] = useState(0);

    const showStep = (stepNum) => {
        switch (stepNum) {
            case 0:
                return <PersonalInfo />;
            case 1:
                return <Companions />;
            case 2:
                return <Menu />;
            case 3:
                return <Accommodation />;
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
        <>
            <form>
                {
                    showStep(formStep)
                }
            </form>
            <div>Count {formStep}</div>
            <button onClick={prevStep}>Prev</button>
            <button onClick={nextStep}>Next</button>
        </>
    )
};

export default Form;
