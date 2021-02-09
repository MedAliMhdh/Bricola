import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from "./types";
import { setAlert } from "./alert";

import setAuthToken from "../utils/setAuthToken";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}api/auth`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

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

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
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

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const body = { email, password };

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}api/auth`,
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
      });
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//Log out user/ clkear profile
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
