//import {useState, useEffect,useRef} from 'react'
import React from "react";
import FormHeading from "../FormHeading";
import { MdGroups, MdPerson } from "react-icons/md";

//import Step3 from './components/Step3'
const Step3 = ({ goOnNextStep, submitAndResetForm }) => {
  const [isTeam, setIsTeam] = React.useState("null");
  console.log(isTeam);
  const card = [
    {
      title: "individual",
      heading: "For myself",
      subHeading: "Write better, Think more clearly, Stay organized.",
      icon: <MdPerson size={30} />,
    },
    {
      title: "team",
      heading: "With my team",
      subHeading: "Write docs, tasks & projects, all in one place.",
      icon: <MdGroups size={30} />,
    },
  ];

  const handleSubmit = () => {
    if (isTeam !== "null") {
      goOnNextStep({ isTeam });
    }
  };

  function DisplayCard({ heading, subHeading, icon, title }) {
    // console.log(title, "<=title", isTeam, "<=isTeam");
    return (
      <button
        className={
          `border border-1 space-x-4 hover:border-[#664DE5] rounded w-[165px] md:h-[auto] m-5  ` +
          (isTeam === title ? "border-[#664DE5]" : "border-[#E5E7EB]")
        }
        onClick={() => setIsTeam(title)}
      >
        <div className="container flex flex-col m-5 w-[150px] text-left ">
          <div className={`` + (isTeam === title && "text-[#664DE5]")}>
            {icon}
          </div>
          <p className="font-bold text-left w-auto">{heading}</p>
          <p className="text-gray-500 w-auto text-left pr-2">{subHeading}</p>
        </div>
      </button>
    );
  }
  return (
    <>
      <div className=" flex flex-col items-center justify-center h-80 mt-20 w-full">
        <FormHeading
          heading="How are you planning to use the Eden?"
          subHeading="We'll streamline your setup experience accordingly"
        />
        <div className="flex flex-col justify-between items-center">
          <div className="flex items-center justify-center h-52 w-full">
            {/* Select card and change the Border */}
            {card.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <DisplayCard
                    key={index}
                    heading={item.heading}
                    subHeading={item.subHeading}
                    icon={item.icon}
                    title={item.title}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex flex-col mb-4 md:[300px]  bg-[#664DE5] text-white rounded-md p-3">
            <button className="w-[350px]" onClick={() => handleSubmit()}>
              Create Workspace
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Step3);
