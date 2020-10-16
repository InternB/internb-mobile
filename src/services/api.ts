import axios from 'axios';

const api = axios.create({
  baseURL: '/http://api-internb.herokuapp.com/',
});

export default api;
