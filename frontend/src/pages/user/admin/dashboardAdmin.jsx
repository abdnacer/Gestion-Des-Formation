import React from 'react'

function Admin() {
  return (
    <div>
      <div className={`mb-4 duration-300 flex flex-wrap justify-center`}>
        <div className={`duration-300 flex justify-center`}>
          <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Repas</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end  dark:text-gray-400">1</p>
          </div>
          <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Categories</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">4</p>
          </div>
          <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Commands</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">5</p>
          </div>
          <div class="w-64 p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-md drop-shadow-2xl dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">repas</h5>
            <p class="mb-3 font-normal text-gray-500 flex justify-end dark:text-gray-400">7 </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
