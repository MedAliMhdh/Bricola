import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import { artisanProfileReducer } from "./artisanProfileReducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: artisanProfileReducer,
});
