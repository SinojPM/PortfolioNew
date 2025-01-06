import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = ({insideHome}) => {

  const navigate = useNavigate()
  return (
    <>
      <nav className='w-full bg-dark h-28 flex justify-between items-center px-12 text-white'>
        <div className="flex">
          <h1 onClick={()=>navigate('/')} className='text-3xl'>Sinoj</h1>
        </div>
        {
          insideHome&&
          <div className="lg:flex lg:justify-between gap-24 hidden">
          <a href='#home' className='text-xl  hover:text-gray'><span className="text-primary">#</span>Home</a>
          <a href='#projects' className='text-xl hover:text-gray'><span className="text-primary">#</span>Projects</a>
          <a href='#skills' className='text-xl hover:text-gray'><span className="text-primary">#</span>Skills</a>
          <a href='#abtme' className='text-xl hover:text-gray'><span className="text-primary">#</span>About_Me</a>
          <a href='#contacts' className='text-xl hover:text-gray'><span className="text-primary">#</span>Contacts</a>
        </div>
        }
      </nav>
      
    </>

  )
}

export default Navbar