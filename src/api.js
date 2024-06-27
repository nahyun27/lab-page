// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://cors-anywhere/192.168.0.166:3000'
});

export default api;
