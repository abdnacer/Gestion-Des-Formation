import React from 'react'
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Page404 from '../pages/auth/Page404.jsx'
import PageNotFound from '../pages/auth/PageNotFound'
// Pages The Admin
import Dashboard from '../components/Layouts/Dashboard.jsx'
import DashbordAdmin from '../pages/user/admin/dashboardAdmin'
import EmployeAdmin from '../pages/user/admin/employeAdmin'
import FormationAdmin  from '../pages/user/admin/formationAdmin'
import OrganismeAdmin from '../pages/user/admin/OrganismeAdmin'
import SettingAdmin from '../pages/user/admin/SettingAdmin'
// Page D'employe
import NavBar from '../components/Layouts/NavBar.jsx'
import Home from '../pages/user/employe/Home'
import HistoriqueEmploye from '../pages/user/employe/HistoriqueEmploye'


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

          <Route path='/dashboard/employe' element={<NavBar />}>
            <Route path='' element={<Home />} />
            <Route path='historique' element={<HistoriqueEmploye />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
          <Route path='/Page404' element={<Page404 />}  />
        </Routes>
      </Router>
    </Provider>
  )
}

export default RoutesApp