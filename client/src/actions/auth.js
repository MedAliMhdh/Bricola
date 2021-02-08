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
  const body = { name, email, password, role, job, phone };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}api/user`,
      body,
      config
    );
    console.log(res.data);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    // console.log(err.response.data.errors);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
      });
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
