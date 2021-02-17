import axios from 'axios';

const setEquipment = (equipment) => {
  if (token) {
    axios.defaults.headers.common['equipment'] = equipment;
  } else {
    delete axios.defaults.headers.common['equipment'];
  }
};

export default setEquipment;
