//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import InputBox from './components/InputBox'
const InputBox = ({
  label,
  placeholder,
  onChangeInput,
  type = "text",
  id,
  value,
}) => {
  return (
    <>
      <div className="flex flex-col mb-4 md:w-[340px] justify-center ">
        <label className="mb-2  text-lg text-gray-700">{label}</label>
        <input
          onChange={onChangeInput}
          name={id}
          id={id}
          className="border py-2 px-3 text-gray-700 rounded w-[350px]"
          placeholder={placeholder}
          type={type}
          required
          value={value}
        />
      </div>
    </>
  );
};

export default React.memo(InputBox);
