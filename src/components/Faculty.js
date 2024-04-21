import React from 'react';


const Faculty = ({ house }) => {
  const { image, description } = house;
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto
     cursor-pointer hover:shadow-2x1 transition'>
      <img className='mb-8' src={image} alt=''/>
      <div className='text-lg font-semibold max-w-[260px]'>{description}</div>

    </div>
  );
};

export default Faculty;