import { React, useState, useEffect } from 'react'
import axios from 'axios'

function Admin() {

  const [statistique, setStatistique] = useState([])

  const getStatistique = async () => {
    await axios.get('http://localhost:8088/api/user/admin/statistique')
      .then(res => {
        setStatistique(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getStatistique()
  }, [])

  return (
    <div>
      <div className={`mb-4 duration-300 flex flex-wrap justify-center`}>
          <div  className={`duration-300 flex justify-center`}>
            <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Employe</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400"> {statistique.employe} </p>
            </div>
            <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Formation</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400"> {statistique.formation} </p>
            </div>
            <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Organisme</h5>
              <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">{statistique.organisme}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Admin
