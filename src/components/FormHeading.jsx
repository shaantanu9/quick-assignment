//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import FormHEading from './components/FormHEading'
const FormHEading = ({ heading, subHeading }) => {
  return (
    <>
      <h2 className=" text-center mb-3 sm:text-3xl text-2xl font-bold w-full">
        {heading}
      </h2>
      <h3 className="font-medium text-gray-400 text-center mb-4">
        {subHeading}
      </h3>
    </>
  );
};

export default React.memo(FormHEading);
