import axios from "axios";
import { GET_PROFILE, PROFILE_ERROR } from "./types";

//GET current user profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get("api/artisan/me");
    console.log(res.data);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
