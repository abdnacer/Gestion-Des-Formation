import { React, useState, useEffect } from 'react'
import ReactImg from '../../../assets/Reactjs.jpg'
import axios from 'axios'

const Home = () => {

  const [formationEmploye, setFormationEmploye] = useState([])

  const getDataEmployeFormation = async () => {
    await axios.get('http://localhost:8088/api/user/employe/formation')
      .then(res => {
        setFormationEmploye(res.data.user)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataEmployeFormation()
  }, [])

  return (
    <div>
    <div className='container mt-5 duration-300 flex flex-wrap justify-center'>
      <div className='max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6'>
        <div style={{ width: '23rem', border: 'none' }} className='bg-white flex justify-center flex-col shadow-xl'>
          <img variant="top" src={ReactImg} style={{ height: '14rem' }} className='m-4' />
          {/* <img variant="top" src={`${imagePath}/${getOneFormation.images}`} style={{ height: '14rem' }} className='m-4' /> */}
          <div className='m-3 flex flex-col'>
            <h2 className='text-2xl font-bold ml-2'>{formationEmploye.formation.name}</h2>
            <span className='text-[#EFA3C8] text-xs font-light ml-4 mb-3'>{formationEmploye.formation.debut} - {formationEmploye.formation.fin }</span>
            <p className='text-sm font-normal mb-2'>{formationEmploye.formation.description}</p>
            <p className='text-sm font-normal mb-2'>Organisme Pour Lire Cette Formation On <span className='text-2xl font-bold ml-2'>{formationEmploye.organisme.name}</span></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home