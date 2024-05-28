import { FaArrowLeft } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Step1 = ({ handleNext, setAmount}) => {
const OptionText=['$1000/M','$1000/M','$1000/M','$1000/M','$1000/M','$1000/M']

  return (
    <>
    <div className="flex justify-between px-4">
      <Link to='/home' className="flex justify-center items-center gap-2">     <FaArrowLeft/> <span>Go Back</span>
</Link>
     <Link to="/home" className="flex items-center justify-center gap-1"><span>Exit</span> <RxCross2/></Link>

     </div>
    <div className="w-[480px] flex flex-col items-center m-auto ">
     <div className="flex flex-col items-center">
     <span className="text-[28px]">Step # 1</span>
      <h2 className="text-[28px] px-4 py-2 text-center font-medium">
      What is your monthly digital marketing budget?
      </h2>
     
     </div>
   
     <div className="flex flex-col justify-center gap-4" id="select-opt">
      {
        OptionText.map((text, index)=>{
          return (<button key={index} className="w-[300px] cursor-pointer py-4 bg-white text-[16px] rounded-md" 
          onClick={()=>{
            handleNext();
            setAmount(text)
          }} >{text}</button>)
        })
      }
  
     </div>
    </div>
    </>
  );
};

export default Step1;
