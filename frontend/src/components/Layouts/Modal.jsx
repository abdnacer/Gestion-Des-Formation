import { React, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import Input from '../Input'
import Button from '../Button'

const Modal = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState(props.name)
  const [phone, setPhone] = useState(props.phone)
  const [ville, setville] = useState(props.ville)
  const [address, setAddress] = useState(props.address)
  
  const modalAdd = [
    { name: 'name', type: 'text', onChange: `${(e) => setName(e.target.value)}`, id: 'name', placeholder: 'Name Organisme' },
    { name: 'phone', type: 'text', onChange: `${(e) => setPhone(e.target.value)}`, id: 'phone', placeholder: 'Phone' },
    { name: 'ville', type: 'text', onChange: `${(e) => setville(e.target.value)}`, id: 'ville', placeholder: 'Ville' },
    { name: 'address', type: 'text', onChange: `${(e) => setAddress(e.target.value)}`, id: 'address', placeholder: 'Address' }
  ]


  // const onChangeAdd = (e) => {
  //   setName(e.target.value)
  //   setPhone(e.target.value)
  //   setville(e.target.value)
  //   setAddress(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(phone)
  }

  return (
    <div>
      {showModal ?
        <form onSubmit={handleSubmit} className={`duration-300 p-4 pt-9`}>
          {modalAdd.map((addmodal, index) => (
            <div key={index} className="relative z-0 mb-6 w-full group">
              <Input type={addmodal.type} name={addmodal.name} onChange={addmodal.onChange} id={addmodal.id} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder={addmodal.placeholder} required />
            </div>
          ))}
          <Button type="submit" onClick={() => setShowModal(false)} className="text-white bg-[#9999FF] hover:bg-[#9999FF] mr-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" btn="Cancel" />
          <Button type="button" className="text-white bg-[#9999FF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto mt-3 px-9 py-2 text-center dark:bg-blue-600 dark:hover:bg-[#9999FF] dark:focus:ring-blue-300" btn="Create" />
        </form>
        : null}
      <Button type='submit' onClick={() => setShowModal(true)} className='w-16 h-16 fixed bg-[#00C1FE] z-10 rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn={<IoIosAddCircle />} />
    </div>
  )
}

export default Modal