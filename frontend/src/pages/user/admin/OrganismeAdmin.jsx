import { React, useState, useEffect } from 'react'
import axios from 'axios'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { IoIosAddCircle } from 'react-icons/io'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

const Organisme = () => {

  const baseUrl = 'http://localhost:8088/api/user'

  const [showModal, setShowModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const [getOrganisme, setGetOrganisme] = useState([])
  const [addOrganisme, setAddOrganisme] = useState([])

  const [editeOrganisme, setEditeOrganisme] = useState({ name: '', phone: '', ville: '', address: '' })

  const modalOrganisme = [
    { name: 'name', type: 'text', value: `${editeOrganisme.name}`, id: 'name', placeholder: 'Name Organisme' },
    { name: 'phone', type: 'text', value: `${editeOrganisme.phone}`, id: 'phone', placeholder: 'Phone' },
    { name: 'ville', type: 'text', value: `${editeOrganisme.ville}`, id: 'ville', placeholder: 'Ville' },
    { name: 'address', type: 'text', value: `${editeOrganisme.address}`, id: 'address', placeholder: 'Address' }
  ]

  const addOneOrganisme = async (e) => {
    e.preventDefault()
    await axios.post(`${baseUrl}/add-organisme`, addOrganisme)
      .then(res => {
        window.location.reload(false)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const updateOneOrganisme = async (e) => {
    await axios.put(`${baseUrl}/update-organisme/${editeOrganisme._id}`, {
      name: editeOrganisme.name,
      ville: editeOrganisme.ville,
      address: editeOrganisme.address,
      phone: editeOrganisme.phone
    })
      .then(res => {
        window.location.reload(false)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const deleteOneOrganisme = async (id) => {
    await axios.delete(`${baseUrl}/delete-organisme/${id}`)
      .then(res => {
        console.log('success')
        window.location.reload(false)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getDataOrganisme = async () => {
    await axios.get(`${baseUrl}/organisme`)
      .then(res => {
        setGetOrganisme(res.data.allOrganisme)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const onChangeAdd = (e) => {
    setAddOrganisme({ ...addOrganisme, [e.target.name]: e.target.value })
  }

  const onChangeUpdate = (e) => {
    setEditeOrganisme({ ...editeOrganisme, [e.target.name]: e.target.value })
  }

  const onSubmitAdd = (e) => {
    e.preventDefault()
    console.log(getOrganisme)
  }

  useEffect(() => {
    getDataOrganisme()
  }, [])

  return (
    <div>
      <div>
        {editModal ?
          <div>
            <div className={`duration-300 p-3 font-bold text-3xl`}>
              <h1>Update Organisme</h1>
            </div>
            <form className={`duration-500 p-4 pt-9`}>
              {modalOrganisme.map((addmodal, index) => (
                <div key={index} className="relative z-0 mb-6 w-full group">
                  <Input type={addmodal.type} name={addmodal.name} id={addmodal.id} value={addmodal.value} onChange={onChangeUpdate} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
                </div>
              ))}
              <Button type="submit" onClick={() => { setEditModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
              <Button type="button" onClick={updateOneOrganisme} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Update" />
            </form>
          </div>
          : null}

        {showModal ?
          <div>
            <div className={`duration-300 p-3 font-bold text-3xl`}>
              <h1>Create Organisme</h1>
            </div>
            <form onSubmit={onSubmitAdd} className={`duration-500 p-4 pt-9`}>
              {modalOrganisme.map((addmodal, index) => (
                <div key={index} className="relative z-0 mb-6 w-full group">
                  <Input type={addmodal.type} name={addmodal.name} onChange={onChangeAdd} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
                </div>
              ))}
              <Button type="submit" onClick={() => { setShowModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
              <Button type="button" onClick={addOneOrganisme} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
            </form>
          </div>
          : null}
      </div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>List Organisme</h1>
      </div>
      <div className={`duration-300 m-3 overflow-x-auto mt-6 relative shadow-md drop-shadow-2xl sm:rounded-lg`}>
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
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
                  <Button className="text-black text-xl mr-2" onClick={() => { setEditModal(true); setShowModal(false); setEditeOrganisme(organisme) }} btn={<FiEdit />} />
                  <Button type='button' onClick={(e) => { e.preventDefault(); deleteOneOrganisme(organisme._id) }} className="text-black text-2xl mr-2" btn={<MdDeleteOutline />} />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
      <Button type='submit' onClick={() => { setShowModal(true); setEditModal(false) }} className='w-16 h-16 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

export default Organisme