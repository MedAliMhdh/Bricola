import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import { artisanProfileReducer } from "./artisanProfileReducer";
import postReducer from "./postReducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: artisanProfileReducer,
  post: postReducer,
});
