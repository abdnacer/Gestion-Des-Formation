import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types'
import { authLogin, authLogout } from '../services/authServices'


export const apiLogin = (email, password) => (dispatch) => {
  return authLogin(email, password)
    .then(res => {
      if (res.data.token) {
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("role", JSON.stringify(res.data.role))
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: res.data }
        })
      }
      else {
        dispatch({
          type: LOGIN_FAIL
        })
      }
    })
}

export const apiLogout = () => (dispatch) => {
  return authLogout()
    .then(() => {
      dispatch({
        type: LOGOUT_SUCCESS
      })

    })

}




