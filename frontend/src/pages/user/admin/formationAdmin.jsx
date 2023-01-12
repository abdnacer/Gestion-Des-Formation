import { React, useState, useEffect } from 'react'
import axios from 'axios'
import ReactImg from '../../../assets/Reactjs.jpg'
import {IoIosAddCircle} from 'react-icons/io'
import Button from '../../../components/Button'


const imagePath = 'http://localhost:8088/images'

const FormationAdmin = () => {

  const [formation, setFormation] = useState([])

  const getFormation = async () => {
    await axios.get("http://localhost:8088/api/user/formation")
      .then(res => {
        console.log(res.data)
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
    <div className='container mt-5 duration-300 flex flex-wrap justify-center'>
      {formation.map((getOneFormation, index) => (
        <div key={index} className='max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6'>
          <div style={{ width: '23rem', border: 'none' }} className='bg-white flex justify-center flex-col shadow-xl'>
            <img variant="top" src={ReactImg} style={{ height: '14rem' }} className='m-4' />
            {/* <img variant="top" src={`${imagePath}/${getOneFormation.images}`} style={{ height: '14rem' }} className='m-4' /> */}
            <div className='m-3 flex flex-col'>
              <h2 className='text-2xl font-bold ml-2'>{getOneFormation.name}</h2>
              <span className='text-[#EFA3C8] text-xs font-light ml-4 mb-3'>{getOneFormation.debut} {getOneFormation.fin}</span>
              <p className='text-sm font-normal mb-2' >{getOneFormation.description}</p>
            </div>
          </div>
        </div>
      ))}      
      <Button type='submit' className='w-16 h-16 fixed bg-[#00C1FE] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', left: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

// The course would be best suited for developers who already have a solid understanding of JavaScript and web development, and want to learn how to build web applications using ReactJS.

export default FormationAdmin