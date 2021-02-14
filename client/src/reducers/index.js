import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import { artisanProfileReducer } from "./artisanProfileReducer";
import postReducer from "./postReducer";
import { personProfileReducer } from "./personProfileReducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  artisan: artisanProfileReducer,
  post: postReducer,
  person: personProfileReducer,
});
