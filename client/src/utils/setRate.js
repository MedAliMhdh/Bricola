import axios from 'axios';

const setRate = (rate) => {
  if (token) {
    axios.defaults.headers.common['rate'] = rate;
  } else {
    delete axios.defaults.headers.common['rate'];
  }
};

export default setRate;
