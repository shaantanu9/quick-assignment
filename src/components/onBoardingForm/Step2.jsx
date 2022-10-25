//import {useState, useEffect,useRef} from 'react'
import React from "react";
//import Step2 from './components/Step2'
import InputBox from "../InputBox";
import FormHeading from "../FormHeading";
import { useFormik } from "formik";
import * as Yup from "yup";
const Step2 = ({ goOnNextStep }) => {
  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    workspaceName: Yup.string()
      .min(6, "Workspace name must be of 6 characters")
      .max(50, "Too Long! Workspace name must be of 50 characters max")
      .required("Required"),
    workspaceURL: Yup.string()
      .min(6, "Workspace URL must be of 6 characters")
      .max(50, "Too Long! Workspace URL must be of 50 characters max"),
  });

  // Formik form handler
  const formik = useFormik({
    initialValues: {
      workspaceName: "",
      workspaceURL: "",
    },
    validationSchema,
    validateOnBlur: true,
    // OnSubmit handler
    onSubmit: (values) => goOnNextStep(values),
  });

  return (
    <>
      <div className=" flex flex-col items-center justify-center h-80 mt-20 w-full">
        <FormHeading
          heading="Let's set up a home for all your work"
          subHeading="You can always create another workspace later"
        />
        <form onSubmit={formik.handleSubmit}>
          <InputBox
            label="Workspace Name"
            placeholder="Eden"
            id="workspaceName"
            type="text"
            onChangeInput={formik.handleChange}
            value={formik.values["workspaceName"]}
          />
          {/* Form Validation */}
          {formik.errors.workspaceName && formik.touched.workspaceName ? (
            <div className="text-red-500">{formik.errors.workspaceName}</div>
          ) : null}

          <div className="flex flex-col justify-between item-center">
            <label htmlFor="workspaceURL">
              Workspace URL <span className="text-gray-400">(optional)</span>{" "}
            </label>
            <div className="flex justify-between item-center pb-2">
              <input
                className="border py-2 px-3 text-gray-500 rounded w-[150px]"
                type="text"
                name="eden"
                id="eden"
                value="www.eden.com/"
                disabled
              />
              <input
                type="text"
                className="border py-2 px-3 text-gray-700 rounded"
                placeholder="Example"
                id="workspaceURL"
                onChange={formik.handleChange}
                value={formik.values["workspaceURL"]}
              />
            </div>

            {/* Form Validation */}
            {formik.errors.workspaceURL && formik.touched.workspaceURL ? (
              <div className="text-red-500">{formik.errors.workspaceURL}</div>
            ) : null}
          </div>

          <div className="flex flex-col mb-4 w-full  bg-[#664DE5] text-white rounded-md py-3 px-3 mt-4">
            <input type="submit" value="Create Workspace" />
          </div>
        </form>
      </div>
    </>
  );
};

export default React.memo(Step2);
