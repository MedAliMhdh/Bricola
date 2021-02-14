import {
  SELECT_JOB,
  SELECT_EQUIPMENT,
  SELECT_CITY,
  SELECT_RATE,
} from './types';

export const SelectJob = (payload) => {
  return { type: SELECT_JOB, payload };
};

export const SelectEquipment = (payload) => {
  return { type: SELECT_EQUIPMENT, payload };
};

export const SelectCity = (payload) => {
  return { type: SELECT_CITY, payload };
};

export const SelectRate = (payload) => {
  return { type: SELECT_RATE, payload };
};
