import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Form = ({ currentStep, goOnNextStep, submitAndResetForm }) => {
  // Render form based on current step
  return (
    <div className="m-auto">
      {currentStep === 1 ? (
        <Step1 goOnNextStep={goOnNextStep} />
      ) : currentStep === 2 ? (
        <Step2 goOnNextStep={goOnNextStep} />
      ) : currentStep === 3 ? (
        <Step3 goOnNextStep={goOnNextStep} />
      ) : (
        <Step4 submitAndResetForm={submitAndResetForm} />
      )}
    </div>
  );
};

// Export Form
export default Form;
