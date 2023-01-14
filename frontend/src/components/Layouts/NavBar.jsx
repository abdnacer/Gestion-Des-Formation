import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../../assets/Logo_white_without_background.png'
import Profile from '../../assets/profil.png'

const NavBar = () => {

  const NavBarEmploye = [
    { name: 'Home', route: '' },
    { name: 'Historique', route: 'historique' },
    { name: 'Setting', route: 'setting' }
  ]

  return (
    <div>
      <nav className="bg-[#82C3EC] m-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded-md">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <div className="flex md:order-2">
            <img src={Profile} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#82C3EC] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-[#82C3EC] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {NavBarEmploye.map((navbar, index) => (
                <li key={index}>
                  <Link to={navbar.route} className="block py-2 pl-3 pr-4 text-white bg-[#82C3EC] rounded md:bg[#82C3EC] md:text-white md:p-0 dark:text-white" >{navbar.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default NavBar