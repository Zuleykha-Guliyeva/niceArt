import { API } from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';

export const getContactService = () => {
  return axiosInstance(API.contact, {
    headers: {
      'X-Master-Key':
        '$2a$10$Y.P17daU7i/nhthPz5RgCeK/lwySiLS/0BCNstyRdT7QFwWv9DNAe',
    },
  }).then((res) => {
    return res.data.record;
  });
};
