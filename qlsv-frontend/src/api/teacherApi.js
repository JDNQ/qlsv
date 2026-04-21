// src/api/teacherApi.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/admin';

const teacherApi = {
    getAll: () => axios.get(`${API_BASE_URL}/teachers`),

    getById: (id) => axios.get(`${API_BASE_URL}/teachers/${id}`),

    create: (teacher) => axios.post(`${API_BASE_URL}/teachers`, teacher),

    update: (id, teacher) => axios.put(`${API_BASE_URL}/teachers/${id}`, teacher),

    delete: (id) => axios.delete(`${API_BASE_URL}/teachers/${id}`)
};

export default teacherApi;