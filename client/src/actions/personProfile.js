import axios from "axios";

import { setAlert } from "./alert";
import { GET_PROFILE, PROFILE_ERROR, GET_PROFILES } from "./types";

//GET current user profile
export const getPersonCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/person/me`
    );

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

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}api/person`);

    dispatch({
      type: GET_PROFILES,
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

// Get profile by ID
export const getProfileById = (personId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}api/person/${personId}`
    );

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

//Create or update profile
export const createPersonProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}api/person`,
      formData,
      config
    );
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert({
        msg: edit ? "Profile Updated" : "Profile Cretated",
        alertType: "success",
      })
    );

    history.push("/personprofile/me");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: "danger" }));
      });
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};
