import axios from 'axios'

const baseURL = 'http://localhost:8088/api/auth'

const login = (email, password) => {
  return axios.post(`${baseURL}/login`, {email, password})
  .then(res => {
    if(res.data.token){
      // localStorage.setItem('role', JSON.stringify(res.data.role))
      localStorage.setItem('user', JSON.stringify(res.data))
    }
    return res.data
  })
  .catch(err => {
    console.log(err)
  })
}

export default {
  login
}