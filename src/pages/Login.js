import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../asstse/img/logo.png';

const Login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <img src={Logo} alt='' />
    <div className="md:w-1/3 max-w-sm">
      <div className="text-center md:text-left">
        <label className="mr-1">ล็อกอิน</label>
      </div>
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="text"
        placeholder="อีเมล์นักศึกษา"
      />
      <input
        className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
        type="text"
        placeholder="รหัส"
      />
      
      <div className="text-center md:text-left">
        <Link to = "profile">
        <button
          className="mt-4 bg-green-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
          type="submit"
        >
          ตกลง
        </button>
        </Link>
      </div>
    </div>
  </section>

  );
}

export default Login