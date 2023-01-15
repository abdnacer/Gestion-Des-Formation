import { React, useState, useEffect } from 'react'
// import ReactImg from '../../../assets/Reactjs.jpg'
import axios from 'axios'

const imagePath = 'http://localhost:8088'

const HistoriqueEmploye = () => {

  const [employeHistorique, setEmployeHistorique] = useState([])

  const getDataHistoriqueEmploye = async () => {
    await axios.get('http://localhost:8088/api/user/employe/historique')
      .then(res => {
        console.log(res.data.dataHistoriqueEmploye)
        setEmployeHistorique(res.data.dataHistoriqueEmploye)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataHistoriqueEmploye()
  }, [])

  return (
    <div>
      <div className='container mt-5 duration-300 flex flex-wrap justify-center'>
        {employeHistorique.map((historique, index) => (
          <div key={index} className='max-w-sm mb-4 bg-white rounded-lg shadow-md mt-4 drop-shadow-2xl mr-6'>
            <div style={{ width: '23rem', border: 'none' }} className='bg-white flex justify-center flex-col shadow-xl'>
              {/* <img variant="top" src={ReactImg} style={{ height: '14rem' }} className='m-4' /> */}
              <img variant="top" src={`${imagePath}/${historique.formation.images}`} style={{ height: '14rem' }} className='m-4' />
              <div className='m-3 flex flex-col'>
                <h2 className='text-2xl font-bold ml-2'>{historique.formation === null ? 'You are not assigned Formation' : `${historique.formation.name}`}</h2>
                <span className='text-[#EFA3C8] text-xs font-light ml-4 mb-3'>{historique.formation === null ? 'You are not assigned Date Formation' : `${historique.formation.debut + '-' + historique.formation.fin}`}</span>
                <p className='text-sm font-normal mb-2'>
                  {historique.organisme === null ? 'You are not assigned Organisme' : `Organisme Pour Lire Cette Formation On : ${historique.organisme.name}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HistoriqueEmploye