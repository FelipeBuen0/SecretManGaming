 import axios from 'axios';
 const API_BASE_URL = 'http://localhost:3000';
 const API = axios.create({
    baseURL: API_BASE_URL
 }) 

export const fetch = (path) => API.get(`/${path}`);
export const create = (path, record) => API.post(`/${path}`, record);
export const update = (path, recordId, record,) => API.patch(`/${path}/${recordId}`, record);
export const deleted = (path, recordId) => API.delete(`/${path}/${recordId}`);