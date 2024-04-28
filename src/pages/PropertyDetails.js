import React, { useState, useRef } from 'react';



//import data
import { utccData } from '../data';

////import use parma
import { Link, useParams } from 'react-router-dom';




const PropertyDetails = () => {
// get the Utcc id
  const {id} = useParams();

  const house = utccData.find((house) => {
    return house.id === parseInt(id);
  });

  //input file form
  const [file, setFile] = useState([]);
  const inputFile = useRef(null);

  const handleChange = (e) => {
    setFile([...file, e.target.files[0]]);
  };

  return (
    <section>
    <div className="container mx-auto min-h-[800px] mb-14">
      <div>
        <div>
          <h2 className='text-5xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.description}</h3>
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.image} alt='' />
          </div>
        </div>
        <div className='flex-1 bg-white-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='font-bold text-2xl'>{house.information}</div>
          </div>
          {/* from */}
          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='ชื่อ-นามสกุล'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='เบอร์โทร'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='โปรดระบุคณะ'/>
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='โปรดระบุชนิดที่ต้องการขาย'/>
            <input className='bg-white-700 text-black px-4 py-3 rounded-lg transition'  type='file' onChange={handleChange} ref={inputFile} />
            {file.map((x) => x.name).join}
            <input className='border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm' type='number' placeholder='โปรดระบุราคา'/>
            <div>
            <button className='bg-green-700 text-white rounded p-4 text-sm w-full transition'>ตกลง</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>


  );
};

export default PropertyDetails;
