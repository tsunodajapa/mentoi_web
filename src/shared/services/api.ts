import axios from 'axios';

const api = axios.create({
  baseURL: process.env.MENTOI_API_URL,
  timeout: 5000,
});

export default api;
