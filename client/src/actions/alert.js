import { SET_ALERT } from './types';

export const setAlert = ({ msg, alertType }) => async (dispatch) => {
  const id = Math.random();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
};
