import React, { useState } from 'react';
import './Form.scss';
import PersonalInfo from './PersonalInfo';
import Companions from './Companions';
import Menu from './Menu';
import Accommodation from './Accommodation';


const Form = () => {

    const [formStep, setFormStep] = useState(0);
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [numberPersons, setNumberPersons] = useState();
    const [minors, setMinors] = useState();
    const [foodType, setFoodType] = useState();
    const [allergies, setAllergies] = useState("");
    const [accomodationSearch, setAccomodationSearch] = useState();
    const [numRooms, setNumRooms] = useState();
    const [transport, setTransport] = useState();
    const [childcare, setChildcare] = useState();


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
