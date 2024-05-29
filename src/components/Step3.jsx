import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Step3 = ({ handlePrev }) => {
  return (
    <>
      <div className="flex justify-between px-4 mb-8">
        <button
          onClick={handlePrev}
          className="flex justify-center items-center gap-2"
        >
          <FaArrowLeft /> <span>Go Back</span>
        </button>
        <Link to="/home" className="flex items-center justify-center gap-1">
          <span>Exit</span> <RxCross2 />
        </Link>
      </div>
      <div className="w-[520px] mx-auto flex  mt-[100px] flex-col  justify-center   gap-6">
        <div>
          <span className=" flex w-[104px] h-[104px] bg-gray-200 mx-auto"></span>
          <div>
            <h1 className="text-[28px] font-medium text-center">
              {" "}
              Your Request for a Proposal Has Been Submitted!
            </h1>
            <p className="text-[16px] text-center">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis
              gravida parturient urna tristique congue. Curabitur volutpat nulla
              convallis eget pellentesque. Luctus tellus eu ultrices egestas.
            </p>
          </div>
        </div>
        <Link
          to="/home"
          className="bg-green-700 hover:bg-green-600 text-white font-medium py-3 px-6 mx-auto"
        >
          {" "}
          <button>Return Home</button>
        </Link>
      </div>
    </>
  );
};

export default Step3;
