import axios from 'axios'
import { React, useState, useEffect } from 'react'
import Input from '../../../components/Input'
// import Button from '../../../components/Button'

const SettingAdmin = () => {

  const [getSetting, setGetSetting] = useState([])

  const dataSetting = async () => {
    await axios('http://localhost:8088/api/user/admin')
      .then(res => {
        setGetSetting(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    dataSetting()
  }, [])

  const formSetting = [
    { type: 'text', name: 'first_name', value: `${getSetting.first_name}`, id: 'first_name', placeholder: 'First Name' },
    { type: 'text', name: 'last_name', value: `${getSetting.last_name}`, id: 'last_name', placeholder: 'Last Name' },
    { type: 'text', name: 'Phone', value: `${getSetting.phone}`, id: 'Phone', placeholder: 'Phone' },
    { type: 'email', name: 'email', value: `${getSetting.email}`, id: 'email', placeholder: 'Email' },
  ]

  return (
    <div>
      <div className={`duration-300 p-3 font-bold text-3xl`}>
        <h1>Setting</h1>
      </div>
      <form className={`duration-300 p-4 pt-9`}>
        {
          formSetting.map((form, index) => (
            <div key={index} className="relative z-0 mb-6 w-full group">
              <Input key={index} type={form.type} value={form.value} name={form.name} id={form.id} className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={form.placeholder} required />
            </div>
          ))
        }
        {/* <Button type="submit" className="text-white bg-black hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Submit" /> */}
      </form>
    </div>
  )
}

export default SettingAdmin