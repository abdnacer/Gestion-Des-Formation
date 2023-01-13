import { React, useState, useEffect } from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoIosAddCircle } from 'react-icons/io'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import axios from 'axios'

const EmployeAdmin = () => {

  const baseUrl = 'http://localhost:8088/api/user'

  const modalOrganisme = [
    { name: 'first_name', type: 'text', id: 'first_name', placeholder: 'First Name' },
    { name: 'last_name', type: 'text', id: 'last_name', placeholder: 'Last Name' },
    { name: 'phone', type: 'text', id: 'phone', placeholder: 'Phone' },
    { name: 'email', type: 'email', id: 'email', placeholder: 'Email' },
    { name: 'password', type: 'password', id: 'password', placeholder: 'Password' }
  ]

  const [showModal, setShowModal] = useState(false)
  const [editShowModal, setShowEditModal] = useState(false)

  const [getDataEmploye, setGetDataEmploye] = useState([])
  const [dataOrganisme, setDataOrganisme] = useState([])
  const [getDataFormation, setGetDataFormation] = useState([])

  const [addEmploye, setAddEmploye] = useState([])
  const [editeDataEmploye, setEditeDataEmploye] = useState([])

  const onChangeAdd = (e) => {
    setAddEmploye({ ...addEmploye, [e.target.name]: e.target.value })
  }

  const onChangeEdite = (e) => {
    setEditeDataEmploye({ ...editeDataEmploye, [e.target.name]: e.target.value })
    console.log(editeDataEmploye)
  }

  const addOneEmploye = async () => {
    await axios.post(`${baseUrl}/admin/add-employe`, addEmploye)
      .then(res => {
        window.location.reload(false)
      })
      .catch(err => console.log(err))
  }

  const updateEmploye = async() => {
    await axios.put(`${baseUrl}/admin/update-user/${editeDataEmploye._id}`, editeDataEmploye)
    .then(res => {
      window.location.reload(false)
    })
    .catch(err => console.log(err))
  }

  const getEmploye = async () => {
    await axios.get(`${baseUrl}/employe`)
      .then(res => {
        setGetDataEmploye(res.data.userEmploye)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getOrganisme = async () => {
    await axios.get(`${baseUrl}/organisme`)
      .then(res => {
        setDataOrganisme(res.data.allOrganisme)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getFormation = async () => {
    await axios.get(`${baseUrl}/formation`)
      .then(res => {
        setGetDataFormation(res.data.allFormation)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getEmploye()
    getOrganisme()
    getFormation()
  }, [])

  return (
    <div>
      {showModal ?
        <div>

          <div className={`duration-300 p-3 font-bold text-3xl`}>
            <h1>Added Employe</h1>
          </div>
          <form className={`duration-500 p-4 pt-9`}>
            {modalOrganisme.map((addmodal, index) => (
              <div key={index} className="relative z-0 mb-6 w-full group">
                <Input type={addmodal.type} name={addmodal.name} onChange={onChangeAdd} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
              </div>
            ))}
            <div className="mb-2">
              <select name='organisme' id="organisme" onChange={onChangeAdd} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-blue-300 peer">
                <option selected>Choose a Organisme</option>
                {dataOrganisme.map((organisme, index) => (
                  <option key={index} value={organisme._id}>{organisme.name}</option>
                ))}
              </select>
            </div>
            <Button type="submit" onClick={() => { setShowModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="button" onClick={addOneEmploye} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
          </form>
        </div>
        : null}

      {editShowModal ?
        <div>
          <div className={`duration-300 p-3 font-bold text-3xl`}>
            <h1>Edite Employe</h1>
          </div>
          <form className={`duration-500 p-4 pt-9`}>
            <div className="mb-2">
              <select name='organisme' onChange={onChangeEdite} id="organisme" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a Organisme</option>
                {dataOrganisme.map((organisme, index) => (
                  <option key={index} value={organisme._id}>{organisme.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-2">
              <select name='formation' onChange={onChangeEdite} id="formation" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a Formation</option>
                {getDataFormation.map((formation, index) => (
                  <option key={index} value={formation._id}>{formation.name}</option>
                ))}
              </select>
            </div>
            <Button type="submit" onClick={() => { setShowEditModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="button" onClick={updateEmploye} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
          </form>
        </div>
        : null}
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
                {/* <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  {employe.formation[0].name}
                </td>
                <td scope="row" className="py-4 px-6 font-medium text-gray-600 whitespace-nowrap dark:text-white">
                  <span>{employe.formation[0].debut}</span> - <span>{employe.formation[0].fin}</span>
                </td> */}
                <td className="py-4 px-6 flex items-center">
                  <Button type='button' onClick={() => { setShowEditModal(true); setShowModal(false); setEditeDataEmploye(employe) }} className="text-black text-xl mr-2" btn={<FiEdit />} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button type='submit' onClick={() => {setShowModal(true); setShowEditModal(false)}} className='w-16 h-16 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

export default EmployeAdmin
