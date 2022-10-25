// import RoutesLink from './router/RoutesLink' //importing the Routes component
import Form from "../components/onBoardingForm/Form";
import ProgressBar from "../components/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import {
  formNextStep,
  goToParticularStep,
  submitFormResponse,
} from "../redux/actions/creators";

function OnboardingFormPage() {
  // Dispatch action to redux store
  const dispatch = useDispatch();

  // Get current step from redux store
  const { currentStep } = useSelector((state) => state.form);

  // Go to next step and pass data to redux store
  const goOnNextStep = (data) => dispatch(formNextStep(data));
  const goToStep = (step) => {
    if (step < currentStep) dispatch(goToParticularStep(step));
  };
  const submitAndResetForm = () => dispatch(submitFormResponse());

  return (
    <div className="p-10 ">
      {/* Progress Bar */}
      <ProgressBar
        current={currentStep}
        steps={4}
        goToParticularStep={goToStep}
      />
      {/* Form */}
      <Form
        currentStep={currentStep}
        goOnNextStep={goOnNextStep}
        submitAndResetForm={submitAndResetForm}
      />
    </div>
  );
}

export default OnboardingFormPage;
