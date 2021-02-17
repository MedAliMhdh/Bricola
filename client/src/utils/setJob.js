import axios from 'axios';

const setJob = (job) => {
  if (token) {
    axios.defaults.headers.common['job'] = job;
  } else {
    delete axios.defaults.headers.common['job'];
  }
};

export default setJob;
