import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import {isAuth} from "./isAuth"

const ProtectedEmploye = () => {
  return(
    
    isAuth() && isAuth() === 'employe' ? <Outlet /> : <Navigate to='/Page404' />
  )
}
export default ProtectedEmploye