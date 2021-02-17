import axios from 'axios';

const setSearch = (search) => {
  if (token) {
    axios.defaults.headers.common['search'] = search;
  } else {
    delete axios.defaults.headers.common['search'];
  }
};

export default setSearch;
