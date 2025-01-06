import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { projectData } from '../data/ProjectDetails'




const Projects = () => {
    return (

        <div className='w-100 bg-dark min-h-screen px-12 '>
            <Navbar />
            <h3 className="text-5xl text-gray mt-12"><span className="text-primary">/</span>Projects</h3>
            <h2 className='text-primary text-xl ms-5'>List of my Projects</h2>
            <div className="mt-20 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    projectData.length > 0 &&
                    projectData.map(item => (
                        <div className="flex justify-center">
                            <ProjectCard data={item} />
                        </div>
                    ))
                }

            </div>
            <div className='mt-20'><Footer /></div>
        </div>
    )
}

export default Projects