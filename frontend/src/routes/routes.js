import React from 'react'
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Dashboard  from '../pages/user/dashboard'


function RoutesApp() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    </Router>
    </Provider>
  )
}

export default RoutesApp