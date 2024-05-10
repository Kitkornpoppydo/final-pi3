import React from 'react'
import Poy from '../asstse/img/poy.png'
import {Link} from 'react-router-dom';

const Proflie = () => {
  return (
    <section>
    <div class="border-b px-4 pb-6">
            <div class="text-center my-4">
               <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src={Poy} alt="" />
                <button className="mt-4 bg-green-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider">เพิ่มรูป</button>
                <div class="py-2">
                    <h3 class="font-bold text-2xl text-gray-800 dark:text-white mb-1">kittikorn phansamniang</h3>
                    <div class="inline-flex text-gray-700 dark:text-gray-300 items-center">
                        คณะวิทยาศาตร์
                        2110511101036
                    </div>
                </div>
            </div>
            <div class="flex gap-2 px-2">
               <Link to = "/"> <button
                    class="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
                    logout
                </button></Link>
            </div>
        </div>
</section>
  );
}

export default Proflie