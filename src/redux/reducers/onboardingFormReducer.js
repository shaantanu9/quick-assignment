// Importing the action types
import {
  FORM_NEXT_STEP,
  GO_TO_PARTICULAR_STEP,
  SUCCESSFULLY_ONBOARDED,
} from "../actions/types";

// Initial state of the form
const initialState = {
  currentStep: 1,
  formData: {},
};

// Reducer for the form
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // If the action type is FORM_NEXT_STEP use to go to next step
    case FORM_NEXT_STEP:
      console.log(state.formData, "state.formData");
      return {
        ...state,
        currentStep: state.currentStep + 1,
        formData: { ...state.formData, ...action.payload },
      };

    // If the action type is GO_TO_PARTICULAR_STEP use to go to particular step
    case GO_TO_PARTICULAR_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };

    case SUCCESSFULLY_ONBOARDED:
      return { ...initialState };

    default:
      return state;
  }
};
