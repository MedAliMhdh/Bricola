import { REMOVE_ALERT, SET_ALERT } from './types';

export const setAlert = ({ msg, alertType, timout = 5000 }) => async (
  dispatch
) => {
  const id = Math.random();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timout);
};
