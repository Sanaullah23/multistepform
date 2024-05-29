import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";

const CheckOut = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(35);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setProgress(progress + 35);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
    setProgress(progress - 35);
  };

  const handleSubmit = (e) => {
    //Validation simple
    e.preventDefault();
    if (name && email && phone && message) {
      console.log("Form Data:", { name, email, phone, message, amount });
      handleNext();
    } else {
      console.log("Validation failed");
    }
  };

  const handleClick = () => {
    setProgress(progress === 0 ? progress + 35 : 0); // Toggle progress on click
  };

  const Steps = () => {
    switch (currentStep) {
      case 1:
        return <Step1 handleNext={handleNext} setAmount={setAmount} />;
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
    <div className="min-h-screen  py-3 mx-auto rounded-md bg-slate-100 relative">
      {Steps()}
      <progress
        value={progress}
        max="100"
        className={`${
          progress > 0 ? "bg-green-500 border border-gray-300" : "bg-white"
        } w-full h-2 rounded-full absolute top-[40px]  `}
        onClick={handleClick}
      ></progress>
    </div>
  );
};

export default CheckOut;
