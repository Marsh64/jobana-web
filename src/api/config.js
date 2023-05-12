import axios from 'axios'

const loginConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // 'Origin': 'http://127.0.0.1:8080',
        // 'Credentials': 'true'
    }
}

export const LoginApiInstance = axios.create(loginConfig);

const defaultConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // 'Origin': 'http://127.0.0.1:8080',
        // 'Credentials': 'true'
    }
}

const token = localStorage.getItem('token');
if (token) defaultConfig.headers['Authorization'] = `Bearer ${token}`;

export const DefaultApiInstance = axios.create(defaultConfig);

const attachmentConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        // 'Origin': 'http://127.0.0.1:8080',
        // 'Credentials': 'true'
    }
}

if (token) attachmentConfig.headers['Authorization'] = `Bearer ${token}`;

export const AttachmentApiInstance = axios.create(attachmentConfig);
