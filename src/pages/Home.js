import React from 'react';

//import components
import Banner from '../components/Banner';
import Facultylist from '../components/Facultylist';


const Home = () => {
  return (
     <div className='min-h-[1800px]'>
      <Banner />
      <Facultylist />
     </div>
  );
};

export default Home;
