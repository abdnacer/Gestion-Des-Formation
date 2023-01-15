import { React, useState, useEffect } from 'react'
// import ReactImg from '../../../assets/Reactjs.jpg'
import axios from 'axios'

const imagePath = 'http://localhost:8088'

const Home = () => {

  const [formationEmploye, setFormationEmploye] = useState([])
  const [organismeEmploye, setOrganismeEmploye] = useState([])

  const getDataEmployeFormation = async () => {
    await axios.get('http://localhost:8088/api/user/employe/formation')
      .then(res => {
        console.log(res.data)
        setFormationEmploye(res.data.formation)
        setOrganismeEmploye(res.data.organisme)
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
            {/* <img variant="top" src={ReactImg} style={{ height: '14rem' }} className='m-4' /> */}
            <img variant="top" src={`${imagePath}/${formationEmploye.images}`} style={{ height: '14rem' }} className='m-4' />
            <div className='m-3 flex flex-col'>
              <h2 className='text-2xl font-bold ml-2'>{formationEmploye === null ? 'You are not assigned Formation' : `${formationEmploye.name}`}</h2>
              <span className='text-[#EFA3C8] text-xs font-light ml-4 mb-3'>{formationEmploye === null ? 'You are not assigned Date Formation' : `${formationEmploye.debut + '-' + formationEmploye.fin}`}</span>
              <p className='text-sm font-normal mb-2'>
                {organismeEmploye === null ? 'You are not assigned Organisme' : `Organisme Pour Lire Cette Formation On : ${organismeEmploye.name}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home