import { React, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { HiMenuAlt1 } from 'react-icons/hi'
import { MdOutlineDashboard } from 'react-icons/md'
import { FiUser, FiSettings } from 'react-icons/fi'
import { AiOutlineLogout } from 'react-icons/ai'
import { GiStarFormation } from 'react-icons/gi'
import { GrOrganization } from 'react-icons/gr'
import Logo from '../../assets/Logo_white_without_background.png'
import Profile from '../../assets/profil.png'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { apiLogout } from '../../actions/auth'

function Sidebar() {

  const MenusAdmin = [
    { name: 'Dashboard', route: '', icon: <MdOutlineDashboard /> },
    { name: 'Employe', route: 'employe', icon: <FiUser />, margin: true, add: true },
    { name: 'Formation', route: 'formation', icon: <GiStarFormation />, add: true },
    { name: 'Organisme', route: 'organisme', icon: <GrOrganization />, add: true },
    { name: 'Setting', route: 'setting', icon: <FiSettings />, margin: true },
  ]

  const [open, setOpen] = useState(true)

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(apiLogout())
  }

  const select = useSelector((state) => state.isLoggedIn)
  if (!select) {
    return <Navigate to='/' />
  }

  return (
    <div className=' bg-[#EEE]' style={{ height: "100vh", width: '100%' }}>
      <div className='flex relative gap-6' >
        <div className={`${open ? 'w-72' : 'w-16'} fixed bg-[#82C3EC] my-2 ml-2 rounded-xl duration-300 w-72 px-4`} style={{ height: "98%" }}>
          <div className='py-3 flex justify-end'>
            <HiMenuAlt1 size={26} className='cursor-pointer' onClick={() => setOpen(!open)} />
          </div>
          <div className='mt-4 flex flex-col gap-4 relative'>
            {MenusAdmin.map((menu, index) => (<Link key={index} to={menu.route} className={`${menu.margin ? 'mt-8' : ''} flex items-center text-xl duration-200 gap-3.5 font-medium p-2 hover:bg-[#9999FF] hover:text-white rounded-md`}>
              <div>{menu.icon}</div>
              <h2 className={`${!open ? 'opacity-0 translate-x-28 overflow-hidden' : ''} whitespace-pre duration-500`} style={{ transitionDelay: `${index + 3}00ms` }}>{menu.name}</h2>
            </Link>
            ))}
            <Link onClick={logout} className={`flex items-center text-xl duration-200 gap-3.5 font-medium p-2 hover:bg-[#00C1FE] hover:text-white rounded-md`}>
              <div><AiOutlineLogout /></div>
              <h2 className={`${!open ? 'opacity-0 translate-x-28 overflow-hidden' : ''} whitespace-pre duration-500`} style={{ transitionDelay: '800ms' }}>Logout</h2>
            </Link>
            {/* {MenusAdmin.map((menu) => (
              menu.add ? <button>Add</button> : '')
            )} */}
          </div>
        </div>

        <div className={`${open ? "ml-80" : "ml-20"} pt-2 pr-2 text-2xl font-semibold flex-1 h-screen`}>
          <nav className="bg-[#82C3EC] border-gray-200 px-2 sm:px-4 py-2.5 rounded-md ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <a href="#" className="flex items-center">
                <img src={Logo} className="h-9 mr-3 sm:h-12" alt="Creative Logo" />
              </a>

              <button type="button" class="flex mr-3 text-sm  rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <img className="w-10 h-10 rounded-full " src={Profile} alt="Pofil photo" />
              </button>
            </div>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Sidebar