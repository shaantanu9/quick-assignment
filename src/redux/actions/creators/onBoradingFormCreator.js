import {
  FORM_NEXT_STEP,
  GO_TO_PARTICULAR_STEP,
  SUCCESSFULLY_ONBOARDED,
} from "../types";
import { postOnboardingUser } from "../../../api";
export const formNextStep = (formData) => {
  return {
    type: FORM_NEXT_STEP,
    payload: formData,
  };
};

export const goToParticularStep = (step) => {
  return {
    type: GO_TO_PARTICULAR_STEP,
    payload: step,
  };
};

export const successfullyOnboarded = () => {
  return {
    type: SUCCESSFULLY_ONBOARDED,
  };
};

export const submitFormResponse = (formData) => {
  return async (dispatch) => {
    try {
      const response = await postOnboardingUser(formData);
      console.log(response, "response");
      if (response.token) dispatch(successfullyOnboarded());
      else console.log("Error in submitting the form");
      return;
    } catch (error) {
      console.log(error, "error");
    }
  };
};
