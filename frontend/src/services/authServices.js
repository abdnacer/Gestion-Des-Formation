import axios from "axios";

const baseURL = "http://localhost:8088/api/auth";

const authLogin = (email, password) => {
    return axios.post(`${baseURL}/login`, { email, password })
        .then((res) => {
            if (res.data) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        });
};

// const logout = () => {
//     return axios.get(API_URL + "logout")
//         .then(() => {
//             localStorage.removeItem("user");
//         });
// };

export default authLogin