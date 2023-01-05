import axios from 'axios';
import config from './env';

const api = axios.create({
    baseURL: "http://localhost:5214/api"
})

api.defaults.timeout = 10 * 60 * 1000;
export default api;
