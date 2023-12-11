import axios from '../axios'
import instance from '../axios';
export const getData = async () => {
  try {
    const response = await instance.get(`api/users/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const postData = async (data) => {
  try {
    const response = await axios.post('/api/data', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`/api/data/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`/api/data/${id}`, data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};