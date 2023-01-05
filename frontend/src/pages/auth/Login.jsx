import React from "react"
import LoginImage from '../../assets/login.jpg'
import LogoImage from '../../assets/logo.png'

function Login() {
  return (
    <div>
      <div className="h-screen flex" style={{ background: '#eee', width: '100%' }}>
        <div className="img_ops" style={{ width: '50%' }}>
          <img className="h-full w-full" id="imgLogin" src={LoginImage} alt="Image_Login" />
        </div>
        {/* flex flex-col justify-center  */}
        <div className="flex flex-col justify-center" style={{ width: '50%' }}>
          <div className="h-56 flex justify-center">
            <img src={LogoImage} className='w-56' alt="Logo_Image" />
          </div>

          <div className="h-58 px-24 flex flex-col justify-center">
            <form>
              <div class="relative z-0 w-full mb-6 group">
                <input type="email" name="email" id="email" className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder="Email" required />
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-300 focus:outline-none focus:ring-0 focus:border-blue-300 peer" placeholder="Password" required />
              </div>
              <div className="flex justify-center w-full">
                <button type="submit" className="mt-5  text-white font-medium rounded-lg text-sm w-full sm:w-auto px-11 py-2.5 text-center" style={{ background: '#82C3EC' }}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login