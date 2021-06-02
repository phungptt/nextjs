import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.response.use((response) => {
  if (response.status !== 200 && response.status !== 201) return Promise.reject(response);
  return response.data;
}, (error) => {
  if (error) return Promise.reject(error.response);
  return Promise.reject();
});
