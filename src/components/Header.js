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
        <div className='flex justify-between items-center gap-8'>
         <Link to = '/home'><h2 className='text-2xl' >หน้าแรก</h2></Link>
          <Link to = 'showproduct'><h2 className='text-2xl'>หน้าหนังสือ</h2></Link>
          <Link to = '/proflie'><h2 className='text-2xl'>โปรไฟล์</h2></Link>


        </div>
      </div>
    </header>

  );
};

export default Header;