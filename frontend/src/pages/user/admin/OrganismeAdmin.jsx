import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'

const Organisme = () => {

  const [getOrganisme, setGetOrganisme] = useState([])

  const getDataOrganisme = async () => {
    await axios.get('http://localhost:8088/api/user/organisme')
      .then(res => {
        setGetOrganisme(res.data.allOrganisme)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getDataOrganisme()
  }, [])

  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List Organisme</h1>
      </div>
      <div className={` duration-300 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-4 px-4">id</th>
              <th scope="col" className="py-2 px-4">Name Organisme</th>
              <th scope="col" className="py-2 px-4">Phone</th>
              <th scope="col" className="py-2 px-4">Ville</th>
              <th scope="col" className="py-2 px-4">Address</th>
              <th scope="col" className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {getOrganisme.map((organisme, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-600 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {index + 1}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {organisme.name}
                </td>
                <td scope ="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  +212 <span>{organisme.phone.slice(1).match(/.{1,3}/g).join(" ")}</span>
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {organisme.ville}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {organisme.address}
                </td>
                <td className="flex items-center py-4 ">
                  <Link to="#" className="text-black text-xl mr-2"><FiEdit /></Link>
                  <Link to="#" className="text-black text-2xl mr-2"><MdDeleteOutline /></Link>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Organisme