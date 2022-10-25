//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Step1 from './components/Step1'
import InputBox from "../InputBox";
import FormHeading from "../FormHeading";
import { useFormik } from "formik";
import * as Yup from "yup";
const Step1 = ({ goOnNextStep }) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be of 2 characters")
      .max(50, "Too Long! First name must be of 50 characters max")
      .required("Required"),
    displayName: Yup.string()
      .min(2, "Display name must be of 2 characters")
      .max(50, "Too Long!, Display name must be of 50 characters max")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      displayName: "",
    },
    validationSchema,
    validateOnBlur: true,

    onSubmit: (values) => goOnNextStep(values),
  });

  return (
    <>
      <div className=" flex flex-col items-center justify-center h-80 mt-20 w-full">
        {/* FormHeading */}
        <FormHeading
          heading="Welcome! First things first..."
          subHeading="You can always change them later."
        />

        {/* Form Start */}
        <form onSubmit={formik.handleSubmit}>
          <InputBox
            label="First Name"
            placeholder="Steve Jobs"
            id="firstName"
            type="text"
            onChangeInput={formik.handleChange}
            value={formik.values["firstName"]}
          />

          {/* Form Validation */}
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className="text-red-500">{formik.errors.firstName}</div>
          ) : null}
          <InputBox
            label="Display Name"
            placeholder="Steve"
            id="displayName"
            type="text"
            onChangeInput={formik.handleChange}
            value={formik.values["displayName"]}
          />

          {/* Form Validation */}
          {formik.errors.displayName && formik.touched.displayName ? (
            <div className="text-red-500">{formik.errors.displayName}</div>
          ) : null}
          <div className="flex flex-col mb-4 md:w-[103%] bg-[#664DE5] text-white rounded-md py-3 px-3 mt-4">
            <input type="submit" value="Create Workspace" />
          </div>
          {/* <div className="flex flex-col mb-4 w-[103%]  bg-[#664DE5] text-white rounded-md py-2 px-3 mt-4">
            <input type="submit" value="Create Workspace" />
          </div> */}
        </form>

        {/* Form End */}
      </div>
    </>
  );
};

export default React.memo(Step1);
