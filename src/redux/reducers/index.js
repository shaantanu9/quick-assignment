import { combineReducers } from "redux";
import { reducer as formReducer } from "./onboardingFormReducer";
const rootReducer = combineReducers({
  form: formReducer,
  //reducer
});

export default rootReducer;
