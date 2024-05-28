import React, { useState } from 'react'
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const CheckOut = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleNext = () => {   
        setCurrentStep(currentStep + 1);
    };

    const handlePrev = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (e) => {
        //Validation simple
        e.preventDefault();
        if (name && email && phone && message) {
            console.log('Form Data:', { name, email, phone, message, amount });
            handleNext();
        } else {
            console.log('Validation failed');
        }
    };

    const Steps = () => {
        switch (currentStep) {
            case 1:
                return (
                    <Step1 handleNext={handleNext} setAmount={setAmount} />
                );
            case 2:
                return (
                    <Step2
                        handleSubmit={handleSubmit}
                        handlePrev={handlePrev}
                        setName={setName}
                        setEmail={setEmail}
                        setMessage={setMessage}
                        setPhone={setPhone}
                        phone={phone}
                        name={name}
                        email={email}
                        message={message}
                    />
                );
            case 3:
                return <Step3 handlePrev={handlePrev} />;
            default:
                return <></>;
        }
    };

    return (
        <div className="min-h-screen px-6 py-3 mx-auto rounded-md bg-slate-100">
            {Steps()}
        </div>
    );
};

export default CheckOut;
