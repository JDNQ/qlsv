// src/api/studentApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const studentApi = {
    getAll: () => axios.get(`${API_BASE_URL}/students`),

    getById: (id) => axios.get(`${API_BASE_URL}/students/${id}`),

    create: (student) => axios.post(`${API_BASE_URL}/students`, student),

    update: (id, student) => axios.put(`${API_BASE_URL}/students/${id}`, student),

    delete: (id) => axios.delete(`${API_BASE_URL}/students/${id}`)
};

export default studentApi;