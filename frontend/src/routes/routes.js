import React from 'react'
import { Provider } from "react-redux"
import store from "../store"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// ProtectedRouter 
// import ProtectedEmploye from '../protectedRoute/protectedEmploye'
// import ProtectedAdmin from '../protectedRoute/protectedAdmin'
// Page Auth
import Login from '../pages/auth/Login'
import Page404 from '../pages/auth/Page404'
// Pages The Admin
import Dashboard from '../components/Layouts/Dashboard.jsx'
import DashbordAdmin from '../pages/user/admin/dashboardAdmin'
import EmployeAdmin from '../pages/user/admin/employeAdmin'
import FormationAdmin from '../pages/user/admin/formationAdmin'
import OrganismeAdmin from '../pages/user/admin/OrganismeAdmin'
import SettingAdmin from '../pages/user/admin/SettingAdmin'
// Page D'employe
import NavBar from '../components/Layouts/NavBar.jsx'
import Home from '../pages/user/employe/Home'
import HistoriqueEmploye from '../pages/user/employe/HistoriqueEmploye'
import Setting from '../pages/user/employe/Setting'
// import axios from 'axios'
// import { useDispatch, useSelector } from 'react-redux'
// import { apiLogout } from '../actions/auth'

// window.addEventListener("storage", () => {
//   axios.get('http://localhost:8088/api/auth/logout')
//   .then(() => {
//     localStorage.clear();
//     window.location.replace('http://localhost:3000');
//   })
//   .catch(() => {
//     console.log("Error");
//   });
// })


function RoutesApp() {

  return (

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* <Route element={<ProtectedAdmin />}> */}
            <Route path='/dashboard/admin' element={<Dashboard />}>
              <Route path='' element={<DashbordAdmin />} />
              <Route path='employe' element={<EmployeAdmin />} />
              <Route path='formation' element={<FormationAdmin />} />
              <Route path='organisme' element={<OrganismeAdmin />} />
              <Route path='setting' element={<SettingAdmin />} />
            </Route>
          {/* </Route> */}

          {/* <Route element={<ProtectedEmploye />}> */}
            <Route path='/dashboard/employe' element={<NavBar />}>
              <Route path='' element={<Home />} />
              <Route path='historique' element={<HistoriqueEmploye />} />
              <Route path='Setting' element={<Setting />} />
            </Route>
          {/* </Route> */}

          <Route path='*' element={<Page404 />} />
          <Route path='/Page404' element={<Page404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default RoutesApp