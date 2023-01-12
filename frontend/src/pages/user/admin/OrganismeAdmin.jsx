import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { IoIosAddCircle } from 'react-icons/io'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import Modal from '../../../components/Layouts/Modal'

const Organisme = () => {

  const modalAddOrganisme = [
    { name: 'name', type: 'text', id: 'name', placeholder: 'Name Organisme' },
    { name: 'phone', type: 'text', id: 'phone', placeholder: 'Phone' },
    { name: 'ville', type: 'text', id: 'ville', placeholder: 'Ville' },
    { name: 'address', type: 'text', id: 'address', placeholder: 'Address' }
  ]

  const [getOrganisme, setGetOrganisme] = useState([])
  const [showModal, setShowModal] = useState(false)
  // const [addOrganisme, setAddOrganisme] = useState([])

  const getDataOrganisme = async () => {
    await axios.get('http://localhost:8088/api/user/organisme')
      .then(res => {
        setGetOrganisme(res.data.allOrganisme)
      })
      .catch(err => {
        console.log(err)
      })
  }

  // const addOneOrganisme = async (e) => {
  //   e.preventDefault()
  //   await axios.post('http://localhost:8088/api/user/add-organisme', addOrganisme)
  //     .then(res => {
  //       window.location.reload(false)
  //     })
  //     .catch(err => console.log(err))
  // }


  // const onChangeAdd = (e) => {
  //   setAddOrganisme({ ...addOrganisme, [e.target.name]: e.target.value })
  // }

  // const onSubmit = (e) => {
  //   e.preventDefault()

  // }

  const getData = (data) => {
    console.log(data)
  }

  useEffect(() => {
    getDataOrganisme()
  }, [])

  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List Organisme</h1>
      </div>
      <div>
        {showModal ?
          <Modal onSubmit={getData} />
          : null}
        {/* {showModal ?
          <form onSubmit={onSubmit} className={`duration-500 p-4 pt-9`}>
            {modalAddOrganisme.map((addmodal, index) => (
              <div key={index} className="relative z-0 mb-6 w-full group">
                <Input type={addmodal.type} name={addmodal.name} onChange={onChangeAdd} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
              </div>
            ))}
            <Button type="submit" onclick={() => { setShowModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="button" onClick={addOneOrganisme} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
          </form>
          : null} */}
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
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
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
      <Button type='submit' onClick={() => setShowModal(true)} className='w-16 h-16 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

export default Organisme