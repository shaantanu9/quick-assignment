//import {useState, useEffect,useRef} from 'react'
import React from "react";
import FormHeading from "../FormHeading";
import onboardingCompleted from "../../assets/onboardingCompleted.jpeg";
//import Step4 from './components/Step4'
const Step4 = ({ submitAndResetForm }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:m-[100px]">
        <div className="flex justify-between item-center">
          <img
            className="w-40 h-30 my-10"
            src={onboardingCompleted}
            alt="OnboardingCompleted"
          />
        </div>
        <FormHeading
          heading="Congratulations, Eren!"
          subHeading="You have successfully completed the onboarding, you can start using Eden!"
        />
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => submitAndResetForm()}
            className="bg-[#664DE5] text-white px-3 py-3 rounded-lg w-[350px]"
          >
            Launch Eden
          </button>
        </div>
      </div>
    </>
  );
};

export default React.memo(Step4);
