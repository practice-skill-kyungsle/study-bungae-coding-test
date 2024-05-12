import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: 'https://yts.mx/api',
    timeout: 30000,
    maxRedirects: 0,
});

export default apiInstance;
