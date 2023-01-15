import axios from "axios";

const baseURL = "http://localhost:8088/api/auth";

export const authLogin = (email, password) => {
    return axios.post(`${baseURL}/login`, { email, password })
};

export const authLogout = () => {
    return axios.get(`${baseURL}/logout`)
        .then(() => {
            localStorage.clear()
        });
};

