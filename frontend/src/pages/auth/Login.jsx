import { React, useState, useEffect } from "react"
import LoginImage from '../../assets/login.jpg'
import LogoImage from '../../assets/logo.png'
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import apiLogin from "../../actions/auth"

function Login() {

  const InputLogin = [
    { type: 'email', name: 'email', id: 'email', placeholder: 'Email' },
    { type: 'password', name: 'password', id: 'password', placeholder: 'Password' }
  ]

  const [user, setUser] = useState({ email: '', password: '' })

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const dispatch = useDispatch()
  

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(apiLogin(user.email, user.password))
  }

  
  const select = useSelector((state) => state.isLoggedIn)

  if(select){
    // return <Navigate to={`/dashboard/${user.role}`} />;
    return <Navigate to="/dashboard/admin" />
  }

  return (
    <div>
      <div className="h-screen flex" style={{ background: '#eee', width: '100%' }}>
        <div className="img_ops " style={{ width: '50%' }}>
          <img className="h-full w-full " id="imgLogin" src={LoginImage} alt="Image_Login" />
        </div>
        <div className="flex flex-col justify-center" style={{ width: '50%' }}>
          <div className="h-56 flex justify-center">
            <img src={LogoImage} className='w-56' alt="Logo_Image" />
          </div>

          <div className="h-58 px-24 flex flex-col justify-center ">
            <form onSubmit={onSubmit}>
              {
                InputLogin.map((inputChild, index) => (
                  <div key={index} class="relative z-0 w-full mb-6 group">
                    <Input type={inputChild.type} name={inputChild.name} onChange={onChange} id={inputChild.id} className='block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-300 peer' placeholder={inputChild.placeholder} />
                  </div>
                ))
              }
              <div className="flex justify-center w-full">
                <Button type='submit' className="mt-5 text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center" style={{ background: '#82C3EC' }} btn='Login' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login