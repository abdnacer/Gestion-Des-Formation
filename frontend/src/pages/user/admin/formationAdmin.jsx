import { React, useState, useEffect } from 'react'
import axios from 'axios'
// import ReactImg from '../../../assets/Reactjs.jpg'
import { IoIosAddCircle } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { ToastContainer, toast } from 'react-toastify'

const imagePath = 'http://localhost:8088'
const baseURL = 'http://localhost:8088/api/user'

const FormationAdmin = () => {

  const [showModal, setShowModal] = useState(false)
  const [editeModal, setEditeModal] = useState(false)

  const [formation, setFormation] = useState([])
  const [addFormation, setAddFormation] = useState([])
  const [editeFormation, setEditeFormation] = useState([])
  const [formationImg, setFormationImg] = useState()
  const [formationImgEdite, setFormationImgEdite] = useState()

  const modalOrganisme = [
    { name: 'name', type: 'text', value: `${editeFormation.name}`, id: 'name', placeholder: 'Name' },
    { name: 'description', type: 'text', value: `${editeFormation.description}`, id: 'description', placeholder: 'Description' },
    { name: 'debut', type: 'date', value: `${editeFormation.debut}`, id: 'debut', placeholder: 'Date Debut' },
    { name: 'fin', type: 'date', value: `${editeFormation.fin}`, id: 'fin', placeholder: 'Date Fin' }
  ]

  const onChangeAdd = (e) => {
    setAddFormation({ ...addFormation, [e.target.name]: e.target.value })
  }

  const onChangeEdite = (e) => {
    setEditeFormation({ ...editeFormation, [e.target.name]: e.target.value })
  }

  const addDataFormation = async () => {

    const dataOneFormation = new FormData()

    dataOneFormation.append('name', addFormation.name)
    dataOneFormation.append('description', addFormation.description)
    dataOneFormation.append('debut', addFormation.debut)
    dataOneFormation.append('fin', addFormation.fin)
    dataOneFormation.append('images', formationImg)

    await axios.post(`${baseURL}/add-formation`, dataOneFormation)
      .then(res => {

        toast.warn(<span style={{ fontSize: '18px' }}>🦄 {res.data}</span>, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

        getFormation()
        setShowModal(false)
      })
      .catch(err => console.log(err))
  }

  const editeDataFormation = async (e) => {

    const dataOneFormationEdite = new FormData()

    dataOneFormationEdite.append('name', editeFormation.name)
    dataOneFormationEdite.append('description', editeFormation.description)
    dataOneFormationEdite.append('debut', editeFormation.debut)
    dataOneFormationEdite.append('fin', editeFormation.fin)
    dataOneFormationEdite.append('images', formationImgEdite)

    await axios.put(`${baseURL}/update-formation/${editeFormation._id}`, dataOneFormationEdite)
      .then(res => {

        toast.warn(<span style={{ fontSize: '18px' }}>🦄 {res.data}</span>, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

        getFormation()
        setEditeModal(false)
      })
      .catch(err => console.log(err))
  }

  const deleteOneFormation = async (id) => {
    await axios.delete(`${baseURL}/delete-formation/${id}`)
      .then(res => {

        toast.warn(<span style={{ fontSize: '18px' }}>🦄 {res.data}</span>, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })

        getFormation()
      })
      .catch(err => console.log(err))
  }

  const getFormation = async () => {
    await axios.get(`${baseURL}/formation`)
      .then(res => {
        setFormation(res.data.allFormation)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    getFormation()
  }, [])

  return (
    <div>
      {showModal ?
        <div>

          <div className={`duration-300 p-3 font-bold text-3xl`}>
            <h1>Create Formation</h1>
          </div>
          <form className={`duration-500 p-4 pt-9`}>
            {modalOrganisme.map((addmodal, index) => (
              <div key={index} className="relative z-0 mb-6 w-full group">
                <Input type={addmodal.type} name={addmodal.name} onChange={onChangeAdd} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
              </div>
            ))}
            <div className="mb-2">
              <div class="flex items-center justify-center w-72">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" name='images' onChange={(e) => { setFormationImg(e.target.files[0]) }} className="hidden" />
                </label>
              </div>
            </div>
            <Button type="submit" onClick={() => { setShowModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="button" onClick={addDataFormation} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
          </form>
        </div>
        : null}

      {editeModal ?
        <div>
          <div className={`duration-300 p-3 font-bold text-3xl`}>
            <h1>Update Formation</h1>
          </div>
          <form className={`duration-500 p-4 pt-9`}>
            {modalOrganisme.map((addmodal, index) => (
              <div key={index} className="relative z-0 mb-6 w-full group">
                <Input type={addmodal.type} name={addmodal.name} value={addmodal.value} onChange={onChangeEdite} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-blue-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
              </div>
            ))}
            <div className="mb-2">
              <div class="flex items-center justify-center w-72">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-42 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input id="dropzone-file" type="file" name='images' onChange={(e) => { setFormationImgEdite(e.target.files[0]) }} className="hidden" />
                </label>
              </div>
            </div>
            <Button type="submit" onClick={() => { setEditeModal(false) }} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
            <Button type="button" onClick={editeDataFormation} className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Update" />
          </form>
        </div>
        : null}

      <div className='container mt-5 duration-300 flex flex-wrap justify-center'>
        {formation.map((getOneFormation, index) => (
          <div key={index} className='max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6'>
            <div style={{ width: '23rem', border: 'none' }} className='bg-white flex justify-center flex-col shadow-xl'>
              {/* <img variant="top" src={ReactImg} style={{ height: '14rem' }} className='m-4' /> */}
              <img variant="top" src={`${imagePath}/${getOneFormation.images}`} style={{ height: '14rem' }} className='m-4' />
              <div className='m-3 flex flex-col'>
                <h2 className='text-2xl font-bold ml-2'>{getOneFormation === null ? 'You are not assigned Formation' : `${getOneFormation.name}`}</h2>
                <span className='text-[#EFA3C8] text-xs font-light ml-4 mb-3'>{getOneFormation === null ? 'You are not assigned Formation' : `${getOneFormation.debut + '-' + getOneFormation.fin}`}</span>
                <p className='text-sm font-normal mb-2' >{getOneFormation === null ? 'You are not assigned Formation' : `${getOneFormation.description}`}</p>
              </div>
              <div className='m-4 flex items-center'>
                <Button type='button' onClick={() => { setEditeModal(true); setEditeFormation(getOneFormation) }} className='mr-2 text-2xl text-[#9999FF]' btn={<FiEdit />} />
                <Button type='button' onClick={(e) => { e.preventDefault(); deleteOneFormation(getOneFormation._id) }} className='text-3xl text-[#9999FF]' btn={<MdDeleteOutline />} />
              </div>
            </div>
          </div>
        ))}
        <Button type='submit' onClick={() => { setShowModal(true); setEditeModal(false) }} className='w-16 h-16 z-10 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn={<IoIosAddCircle />} />
        <ToastContainer />
      </div>
    </div>
  )
}

// The course would be best suited for developers who already have a solid understanding of JavaScript and web development, and want to learn how to build web applications using ReactJS.

export default FormationAdmin