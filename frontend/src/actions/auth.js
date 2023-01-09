import { LOGIN_SUCCESS, LOGIN_FAIL } from './types'
import authLogin from '../services/authServices'


const apiLogin = (email, password) => (dispatch) => {
  return authLogin(email, password)
    .then(res => {
      if (res.data) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: res.data }
        })
      }
      else {
        dispatch({
          type: LOGIN_FAIL,
          payload: { user: res.data }
        })
      }
    })
}

export default apiLogin
