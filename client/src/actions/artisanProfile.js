import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  GET_PROFILES,
  SELECT_JOB,
  SELECT_EQUIPMENT,
  SELECT_CITY,
  SELECT_RATE,
  CLEAR_PROFILE,
  LOG_OUT,
  EVALUATE_ARTISAN,
} from './types';

//GET current user profile
export const getArtisanCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/artisan/me`);

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
    const res = await axios.get(`/api/artisan`);

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
export const getProfileById = (artisanId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/artisan/${artisanId}`);

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
export const createArtisanProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`/api/artisan`, formData, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert({
        msg: edit ? 'Profile Updated' : 'Profile Cretated',
        alertType: 'success',
      })
    );

    history.push('/artisanprofile/me');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert({ msg: error.msg, alertType: 'danger' }));
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

// Delete profile
export const deleteProfile = (history) => async (dispatch) => {
  try {
    await axios.delete(`/api/artisan/`);
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

// Filter profile
export const filterProfiles = ({ job, equipment, city, rate }) => async (
  dispatch
) => {
  try {
    const res = await axios.get(`/api/artisan`);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });

    if (city !== '') {
      await dispatch({
        type: SELECT_CITY,
        payload: city,
      });
    }

    if (job !== '') {
      await dispatch({
        type: SELECT_JOB,
        payload: job,
      });
    }

    if (equipment !== '') {
      await dispatch({
        type: SELECT_EQUIPMENT,
        payload: equipment,
      });
    }
    if (rate) {
      await dispatch({
        type: SELECT_RATE,
        payload: rate,
      });
    }
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

// Evaluate Artisan

export const evaluateArtisan = ({ rate, profileId }) => async (dispatch) => {
  try {
    console.log(profileId, 'profileid');
    console.log(rate);
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post(
      `/api/artisan/evaluate/${profileId}`,
      { rateValue: rate },
      config
    );

    dispatch({
      type: EVALUATE_ARTISAN,
      payload: { profileId, rates: res.data },
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
