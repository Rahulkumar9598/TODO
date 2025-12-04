
import React from 'react'

 const Navbar = () => {
  return (
    <div className='bg-blue-950 text-white flex justify-between   p-4'>
      <h1 className='text-lg font-bold'>My App</h1>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Login
        </button>
      </div>
    </div>
  )
}

    export default Navbar