import React from 'react'
import Navbar from '../components/Navbar'
import heroImg from '../assets/Group46.svg'
import ProjectCard from '../components/ProjectCard'
import dots from "../assets/Frame27.svg"
import logo from "../assets/Logo.svg"
import SkillCard from '../components/SkillCard'
import AbtMe from '../assets/Group50.svg'
import Footer from '../components/Footer'
import { projectData } from '../data/ProjectDetails'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
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
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import TextPlugin from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/all'
import resume from "../assets/SINOJ-PM-CV.pdf"

gsap.registerPlugin(useGSAP,ScrollTrigger,TextPlugin)

const Home = () => {
    const tl = gsap.timeline({
        yoyo:true
    })
    useGSAP(()=>{
        gsap.from(".name",{
            duration:3,
            text:"************",
        })
        gsap.from(".heroImg",{
            opacity:0,
            y:100,
            duration:3
        })
        gsap.from(".name1",{
            duration:3,
            text:"#####@@@@@ %%%%%^^^^&&&",
        })
        gsap.from(".skillImg",{
            opacity:0,
            y:-50,
            duration:2,
            stagger:.5,
            scrollTrigger:{
                trigger:".skillImg",
                start:"top 80%",
                end:"top -10%",
                scrub:true
                
            }
            
        })
        
    },[])

    const navigate = useNavigate()
    return (
        <div className='bg-dark w-full'>
            <Navbar insideHome={true}/>
            <div id='home' className="grid lg:grid-cols-2 sm:grid-cols-1 lg:h-screen gap 2 px-12 h-5/6 w-full items-center">
                <div className="w-full flex flex-col items-start justify-center">
                    <h1 className='text-white text-5xl'>Sinoj is a <span className='text-primary name'>web designer</span> and <span className='text-primary name1'>Full-stack developer</span></h1>
                    <p className='text-gray text-xl mt-5'>He crafts responsive websites where technologies meet creativity</p>
                    <a href={resume} download={"sinoj-resume"} className='p-5 border border-primary mt-12 text-white text-xl hover:border-white hover:bg-primary'>Download CV!!</a>
                </div>
                <div className='w-full flex items-center justify-center flex-col'>
                    <img className='w-4/5 h-5/6 heroImg' src={heroImg} alt="" />
                    <div className="w-4/5 border border-white h-1/6 p-5 text-white text-xl flex justify-evenly">
                        <div className="border rounded-full w-6 bg-primary me-5">
                        </div>
                        <span>Currently working on <span className='font-extrabold'>Portfolio</span></span>
                    </div>
                </div>
            </div>
            <div id='projects' className="mt-20 w-full px-12 lg:h-screen ">
                <div className="w-full flex justify-between mb-16">
                    <div className="flex w-4/5 items-center">
                        <h3 className='text-white text-5xl'><span className="text-primary">#</span>Projects</h3>
                        <div className="border h-0 border-primary w-4/5"></div>
                    </div>
                    <a onClick={() => navigate('/projects')} className='text-white hover:text-primary text-xl'>View all <span><i className="fa-solid fa-arrow-right"></i></span></a>
                </div>
                <div className='w-full grid lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-center'>
                    {
                        projectData.length > 0 &&
                        projectData.map(item => (
                            <div className='flex justify-center w-full'><ProjectCard data={item} /></div>
                        ))
                    }

                </div>
            </div>
            <div id='skills' className='mt-20 w-full px-12 lg:h-screen'>
                <div className="w-full flex justify-between mb-16">
                    <div className="flex w-4/5 items-center">
                        <h3 className='text-white text-5xl'><span className="text-primary">#</span>Skills</h3>
                        <div className="border h-0 border-primary w-4/5"></div>
                    </div>
                </div>
                <div className="w-full grid lg:grid-cols-3 grid-cols-1 justify-center gap-12">
                    <div className="grid grid-cols-3 w-full gap-5">
                        <img className='mt-12 p-5' src={dots} width={"100%"} alt="" />
                        <div></div>
                        <div className="w-100 h-48 border border-white"></div>
                        <img className='mt-12 p-5' src={logo} alt="" />
                        <img src={dots} className='mt-5 flex justify-center' width={"70%"} alt="" />
                        <div className='w-full  mt-12'><div className="w-4/5 h-40 border border-white float-end"></div></div>

                    </div>
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
            </div>
            <div id='abtme' className="mt-20 w-full px-12 lg:h-screen">
                <div className="w-full flex justify-between mb-16">
                    <div className="flex w-4/5 items-center">
                        <h3 className='text-white text-5xl'><span className="text-primary">#</span>About-me</h3>
                        <div className="border h-0 border-primary w-4/5"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-2xl items-center">
                    <div>
                        <p className='text-white'>Hello, i’m <span className='text-primary'>Sinoj</span>!</p>
                        <br />
                        <p className='text-gray'>

                        a MERN Full Stack Developer with a strong passion for creating dynamic and responsive web applications. I recently completed <span className="text-primary">6 Months Internship in MERN Fullstack From Luminar Technolab Kakkanad</span> and am eager to apply my skills in real-world projects.
                        </p><br />
                        <p className='text-gray'>I began my journey in web development by learning HTML, CSS, and JavaScript. Over time, I delved into React for building dynamic frontends and Node.js with Express for the backend. Through hands-on projects, I gained experience integrating MongoDB databases and deploying applications.</p>
                        <button onClick={() => navigate("/about")} className='p-5 border border-primary mt-12 text-white text-xl hover:bg-primary'>Read More <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="flex justify-center">
                        <img width={"60%"} src={AbtMe} alt="" />
                    </div>
                </div>
            </div>
            <div id='contacts' className="mt-20 w-full px-12">
                <div className="w-full flex justify-between mb-16">
                    <div className="flex w-4/5 items-center">
                        <h3 className='text-white text-5xl'><span className="text-primary">#</span>Contacts</h3>
                        <div className="border h-0 border-primary w-4/5"></div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                    <div className='w-full'><p className='text-gray text-xl'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                        <div className="w-full border border-2 border-white text-center p-5 mt-5 flex justify-center items-center">
                            <div className='w-full lg:w-3/6'>
                                <h3 className="text-xl text-white mb-5">Message Me Here</h3>
                                <hr className='text-white' />
                                <h3 className="text-xl text-white my-5"><i className="fa-solid fa-envelope"></i> sinojpm97@gmail.com</h3>
                                <h3 className="text-xl text-white my-5"><i className="fa-solid fa-phone"></i> 9747103774</h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <ContactForm />
                    </div>
                </div>

            </div>
            <div className="footer w-100 mt-20">
                <Footer />
            </div>
        </div>
    )
}

export default Home