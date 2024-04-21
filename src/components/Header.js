import React from 'react';

//import  link
import {Link} from 'react-router-dom';

//import logo
import Logo from '../asstse/img/logo.png';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        { /* logo */}
        <Link to = '/'>
          <img src ={Logo} alt='' width={140} />
        </Link>
        { /* button */}
        <div className='flex items-center'>
          <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to = ''>scan line</Link>
        </div>
      </div>
    </header>

  );
};

export default Header;