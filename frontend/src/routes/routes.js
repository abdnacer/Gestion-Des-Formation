import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../pages/auth/Login'

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default RoutesApp