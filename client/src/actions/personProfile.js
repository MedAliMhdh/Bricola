import axios from 'axios';

import { setAlert } from './alert';
import {
  GET_PERSON_PROFILE,
  PROFILE_PERSON_ERROR,
  GET_PERSON_PROFILES,
  CLEAR_PROFILE,
  LOG_OUT,
  PROFILE_ERROR,
} from './types';

//GET current user profile
export const getPersonCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/person/me`);

    dispatch({
      type: GET_PERSON_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_PERSON_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get all profiles
export const getPersonProfiles = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/person`);

    dispatch({
      type: GET_PERSON_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_PERSON_ERROR,
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
    const res = await axios.get(`/api/person/${personId}`);

    dispatch({
      type: GET_PERSON_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_PERSON_ERROR,
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
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/person`, formData, config);
    dispatch({
      type: GET_PERSON_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert({
        msg: edit ? 'Profile Updated' : 'Profile Cretated',
        alertType: 'success',
      })
    );

    history.push('/personprofile/me');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: 'danger' }));
      });
    }

    dispatch({
      type: PROFILE_PERSON_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Delete profile
export const deletePersonProfile = (history) => async (dispatch) => {
  try {
    await axios.delete(`/api/person/`);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({ type: LOG_OUT });
    history.push('/');
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
