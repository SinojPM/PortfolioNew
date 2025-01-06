import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AbtMe from '../assets/Group50.svg'
import SkillCard from '../components/SkillCard'
import reactIcon from "../assets/icons/react.svg"
import expressIcon from "../assets/icons/icons8-express-js.svg"
import nodeIcon from "../assets/icons/icons8-node-js.svg"
import mongodbIcon from "../assets/icons/mongodb.svg"
import htmlIcon from "../assets/icons/html.svg"
import cssIcon from "../assets/icons/css.svg"
import jsIcon from "../assets/icons/js.svg"
import bootstrapIcon from "../assets/icons/bootstrap.svg"
import tailwindIcon from "../assets/icons/tailwind-css.svg"
import gsapIcon from "../assets/icons/gsap.png"
import githubIcon from "../assets/icons/icons8-github.svg"


const Aboutme = () => {
    return (
        <div className='bg-dark w-full px-12'>
            <Navbar />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-2xl items-center">
                                <div>
                                    <p className='text-white'>Hello, i’m <span className='text-primary'>Sinoj</span>!</p>
                                    <br />
                                    <p className='text-gray'>
            
                                    a MERN Full Stack Developer with a strong passion for creating dynamic and responsive web applications. I recently completed <span className="text-primary">6 Months Internship in MERN Fullstack From Luminar Technolab Kakkanad</span> and am eager to apply my skills in real-world projects.
                                    </p><br />
                                    <p className='text-gray'>I began my journey in web development by learning HTML, CSS, and JavaScript. Over time, I delved into React for building dynamic frontends and Node.js with Express for the backend. Through hands-on projects, I gained experience integrating MongoDB databases and deploying applications.</p>
                                </div>
                                <div className="flex justify-center">
                                    <img width={"60%"} src={AbtMe} alt="" />
                                </div>
                            </div>
            <div className="w-100 mt-20">
                <h3 className="text-5xl text-white mb-12"><span className='text-primary'>#</span>Skills</h3>
                <div className="col-span-2 w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={reactIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">React.js</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={expressIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Express.js</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={nodeIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Node.js</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={mongodbIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Mongo DB</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={htmlIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">HTML</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={cssIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">CSS</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={bootstrapIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Bootstrap</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={tailwindIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Tailwind CSS</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={gsapIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Gsap</h3>
                                        </div>
                                        <div className="w-full flex flex-col items-center skillImg">
                                            <img src={githubIcon} width={"100px"} alt="" />
                                            <h3 className="text-white text-xl">Github</h3>
                                        </div>
                                        
                                        
                                    </div>
            </div>
            <Footer />
        </div>
    )
}

export default Aboutme