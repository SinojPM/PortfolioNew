import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({data}) => {
  return (
    <div style={{width:"370px",minHeight:"500px"}} className='border border-white text-white proCard hover:animate-pulse'>
        <img src={data?.projectImg} alt="" className="w-full h-2/6" />
        <div className="w-full border border-white p-2 text-center h-auto flex items-center justify-center">
           {data.technologies}
        </div>
        <div className='p-5'>
            <h2 className='text-3xl font-xl'>{data.projectName}</h2>
            <p className="text-l text-gray p-2">
                {data.des}
            </p>
            <div className="flex justify-evenly">
            <a href={data.live} target='_blank' className='p-1 border border-primary mt-5 text-white text-l hover:bg-primary'>Live</a>
            <a href={data.gitFrontEnd} target='_blank' className='p-1 border border-primary mt-5 text-white text-l hover:bg-primary'>GitHub</a>
            {
                data.gitBackEnd&&
                <a href={data.gitBackEnd} target='_blank' className='p-1 border border-primary mt-5 text-white text-l hover:bg-primary'>GitHub Server</a>
            }
            </div>
        </div>
    </div>
  )
}

export default ProjectCard