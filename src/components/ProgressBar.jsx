//import {useState, useEffect,useRef} from 'react'
import React from "react";
import logo from "../assets/logo.jpeg";
//import ProgressBar from './components/ProgressBar'
const ProgressBar = ({ steps, current, goToParticularStep }) => {
  const showCompletedSteps = new Array(steps).fill(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row justify-center items-center">
          <img src={logo} alt="Eden" />
          <h1 className="text-2xl font-bold">Eden</h1>
        </div>
        {/* Step Compeleted Progress Bar */}
        <div className="flex flex-row justify-between items-center mt-8">
          {showCompletedSteps.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && index < showCompletedSteps.length && (
                <div
                  className={
                    `w-10 h-[2px] flex justify-center items-center text-white` +
                    (index < current ? "  bg-[#664DE5]" : " bg-gray-300")
                  }
                ></div>
              )}

              <div
                onClick={() => goToParticularStep(index + 1)}
                key={index}
                className={
                  `w-8 h-8 rounded-full flex justify-center items-center ` +
                  (index < current
                    ? " bg-[#664DE5] text-white"
                    : " bg-white border")
                }
              >
                {index + 1}
              </div>
              {index < showCompletedSteps.length - 1 && (
                <div
                  className={
                    `w-10 h-[2px] flex justify-center items-center text-white` +
                    (index < current
                      ? "delay-75 duration-100 ease-in-out bg-[#664DE5]"
                      : " bg-gray-300")
                  }
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(ProgressBar);
