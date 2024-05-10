import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate, useParams } from 'react-router-dom';



const ShowProduct = () => {
  const [users,setUsers]=useState([]);

  const {id}=useParams()

  let navigate=useNavigate()

  useEffect(()=>{
    loadUsers()
  },[]);

  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/users")
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }

  return (
    <div>
        <div className='flex  items-center gap-8'>
            <h2 className='text-8xl lg:text-[58px] font-semibold leading-none mb-6'>หน้าหนังสือ</h2>
            <button class="bg-yellow-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-r">ตะกร้า</button>
        </div>
        <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">เลข</th>
                  <th scope="col" className="px-6 py-4">ชื่อ</th>
                  <th scope="col" className="px-6 py-4">เบอร์โทร</th>
                  <th scope="col" className="px-6 py-4">คณะ</th>
                  <th scope="col" className="px-6 py-4">ประเภท</th>
                  <th scope="col" className="px-6 py-4">ชื่อสินค้า</th>
                  <th scope="col" className="px-6 py-4">ราคา</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((user,index)=>(
                    <tr>
                      <th scope="col" className="px-6 py-4" key={index}>{index+1}</th>
                      <th scope="col" className="px-6 py-4">{user.name}</th>
                      <th scope="col" className="px-6 py-4">{user.phone}</th>
                      <th scope="col" className="px-6 py-4">{user.faculty}</th>
                      <th scope="col" className="px-6 py-4">{user.type}</th>
                      <th scope="col" className="px-6 py-4">{user.nameproduct}</th>
                      <th scope="col" className="px-6 py-4">{user.price}</th>
                      <th scope='col' className='px-6 py-4'>
                      <div class="flex items-center justify-center gap-4 h-full p-auto">
<button class="bg-green-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-l"
onClick={()=>navigate("/sellproduct/"+user.id)}>
    ซื้อ
  </button>
  <button class="bg-red-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-r"
  onClick={()=>deleteUser(user.id)}>
    ลบ
  </button>
  <button class="bg-yellow-500 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded-r">
    เพิ่มลงตะกร้า
  </button>

</div>
                      </th>
                      
                      
                    </tr>

                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </div>

  );
}

export default ShowProduct;