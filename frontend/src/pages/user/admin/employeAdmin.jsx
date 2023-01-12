import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { IoIosAddCircle } from 'react-icons/io'
import Button from '../../../components/Button'
import axios from 'axios'

const EmployeAdmin = () => {

  const [getDataEmploye, setGetDataEmploye] = useState([])

  const getEmploye = async () => {
    await axios.get('http://localhost:8088/api/user/admin/user')
      .then(res => {
        console.log(res.data)
        setGetDataEmploye(res.data.users)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getEmploye()
  }, [])

  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List Employe</h1>
      </div>
      <div className={` duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-4 px-4">id</th>
              <th scope="col" className="py-2 px-4">Name Compete</th>
              <th scope="col" className="py-2 px-4">Organisme</th>
              <th scope="col" className="py-2 px-4">Formation</th>
              <th scope="col" className="py-2 px-4">Durée De Formation</th>
              <th scope="col" className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {/* {Object.keys(getDataEmploye).map((employe, index) => ( */}
            {getDataEmploye.map((employe, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {index + 1}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {employe.first_name} {employe.last_name}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {employe.organisme[0].name}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {employe.formation[0].name}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  <span>{employe.formation[0].debut}</span> - <span>{employe.formation[0].fin}</span>
                </td>
                <td className="py-4 px-6 flex items-center">
                  <Link to="#" className="text-black text-xl mr-2"><FiEdit /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button type='submit' className='w-16 h-16 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', left: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

export default EmployeAdmin
