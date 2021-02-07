import axios from "axios";
import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";
import { setAlert } from "./alert";

// Register User
export const register = ({ name, email, password, role, job, phone }) => async (
  dispatch
) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password, role, job, phone });

  try {
    const res = await axios.post(
      "http://localhost:5000/api/user",
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.error;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
