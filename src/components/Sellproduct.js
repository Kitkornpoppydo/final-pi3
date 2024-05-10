import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';


const Sellproduct = () => {
    const [users,setUsers]=useState([]);

    const {id}=useParams()

    let navigate=useNavigate()
  
    useEffect(()=>{
      loadUsers()
    },[]);
  
    const loadUsers=async()=>{
      const result=await axios.get("http://localhost:8080/user/"+id)
      setUsers(result.data);
    }
  
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }
  return (
    <div>
    <div>
        <h2 className='text-8xl lg:text-[58px] font-semibold leading-none mb-6'>โปรดติดต่อ</h2>
    </div>
    <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              
              <th scope="col" className="px-6 py-4">ชื่อ</th>
              <th scope="col" className="px-6 py-4">เบอร์โทร</th>
              <th scope="col" className="px-6 py-4">คณะ</th>
            </tr>
          </thead>
          <tbody>
            
            
                <tr>
                  
                  <th scope="col" className="px-6 py-4">{users.name}</th>
                  <th scope="col" className="px-6 py-4">{users.phone}</th>
                  <th scope="col" className="px-6 py-4">{users.faculty}</th>
                  <th scope='col' className='px-6 py-4'>
                  <div class="flex items-center justify-center gap-4 h-full p-auto">
<button class="bg-gray-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-l"
onClick={()=>navigate("/showproduct")}>
กลับ
</button>
</div>
                  </th>
                  
                  
                </tr>

              
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

</div>

  );
}

export default Sellproduct