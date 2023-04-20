import axios from 'axios'

const loginConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginApiInstance = axios.create(loginConfig)

const defaultConfig = {
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

const token = localStorage.getItem('token');
if (token) defaultConfig.headers['authorization'] = `Bearer ${token}`;

export const DefaultApiInstance = axios.create(defaultConfig)