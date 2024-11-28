import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Leer la URL desde variables de entorno

const api = axios.create({
  baseURL: API_URL,
});

export default api;
