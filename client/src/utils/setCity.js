import axios from 'axios';

const setCity = (city) => {
  if (token) {
    axios.defaults.headers.common['city'] = city;
  } else {
    delete axios.defaults.headers.common['city'];
  }
};

export default setCity;
