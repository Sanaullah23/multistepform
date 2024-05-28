import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Step2 = ({
  handleSubmit,
  handlePrev,
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  phone,
  setPhone,
}) => {
  return (
    <>
      <div className="flex justify-between px-4">
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

      <div className="w-[520px] mx-auto ">
        <div className="flex flex-col justify-center items-center mb-8">
          <span className="text-[28px]">Step # 2</span>
          <h1 className="text-[28px] px-4 py-2 font-medium">Details</h1>
          <p className="text-center">
            We’re thrilled at the opportunity to help you grow your business
            online. Please let us know the best way to reach you.
          </p>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
              required
            />
          </label>
          <div className="flex justify-between items-center ">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-700"
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="block w-full p-2 pl-10 text-sm text-gray-700"
                required
              />
            </label>
          </div>
          <div className="flex flex-col gap-6">
            <label>Message:</label>
            <textarea
              rows="4"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-600 text-white font-medium py-3 px-6 mx-auto"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-center items-center gap-2 mt-4">
        <AiOutlineLock />
        <p>We promise never to share your information or spam your inbox</p>
      </div>
    </>
  );
};

export default Step2;
