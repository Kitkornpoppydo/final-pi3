import React from 'react'



const ShowProduct = () => {
  return (
    <div>
        <div>
            <h2 className='text-8xl lg:text-[58px] font-semibold leading-none mb-6'>หน้าหนังสือ</h2>
        </div>
        <div className="flex flex-col">
             <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">ชื่อผู้ขาย</th>
                  <th scope="col" className="px-6 py-4">เบอร์โทร</th>
                  <th scope="col" className="px-6 py-4">คณะ</th>
                  <th scope="col" className="px-6 py-4">ประเภท</th>
                  <th scope="col" className="px-6 py-4">รูป</th>
                  <th scope="col" className="px-6 py-4">ราคา</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
        
    </div>
  );
}

export default ShowProduct;