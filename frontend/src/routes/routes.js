import React from 'react'
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
// Pages The Admin
import Dashboard from '../components/Layouts/Dashboard.jsx'
import DashbordAdmin from '../pages/user/admin/dashboardAdmin'
import EmployeAdmin from '../pages/user/admin/employeAdmin'
import FormationAdmin  from '../pages/user/admin/formationAdmin'
import OrganismeAdmin from '../pages/user/admin/OrganismeAdmin'
import SettingAdmin from '../pages/user/admin/SettingAdmin'


function RoutesApp() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route path='/dashboard/admin' element={<Dashboard />}>
            <Route path='' element={<DashbordAdmin />} />
            <Route path='employe' element={<EmployeAdmin />} />
            <Route path='formation' element={<FormationAdmin />} />
            <Route path='organisme' element={<OrganismeAdmin />} />
            <Route path='setting' element={<SettingAdmin />} />
          </Route>

          <Route path='/dshboard/employe' element={<Dashboard />}>
            <Route path='' element={<DashbordAdmin />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default RoutesApp