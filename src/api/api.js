import axios from 'axios';

const API_URL = 'http://localhost:52873'; // la URL de tu servidor TEMPORIS!

const api = axios.create({
  baseURL: API_URL,
});

export default api;