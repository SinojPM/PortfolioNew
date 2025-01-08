import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger)
const ContactForm = () => {
    const [name,setName] = useState("")
    const [Email,setEmail] = useState("")
    const [Message,setMessage] = useState("")
    useGSAP(() => {
        gsap.from(".Contact-form", {
            opacity: 0,
            x: 50,
            duration: 2,
            scrollTrigger: {
                trigger: ".Contact-form"
            }
        })
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault()
        const serviceId  = "service_yso24za"
        const templateId = "template_j7mji5k"
        const publicKey = "aQXLXldvjnAplrmKN"
    
        const templateParams = {
            from_name:name,
            from_email:Email,
            to_name:"sinoj",
            message:Message
        }
        emailjs.send(serviceId,templateId,templateParams,publicKey).then((response)=>{
            alert("email sent successfully",response)
            setName("")
            setEmail("")
            setMessage("")
        }).catch((err)=>{
            console.error(err)
        })
        
    }
    return (
        <div className='w-full Contact-form flex justify-center'>
            <form onSubmit={handleSubmit} className="flex sm:w-full lg:w-5/6 md:w-5/6 flex-col gap-5 mt-5">
                <input className='w-full h-16 p-5 rounded text-primary' type="text" value={name} onChange={e=>setName(e.target.value)} placeholder='Name' />
                <input className='w-full h-16 p-5 rounded text-primary ' type="Email" value={Email} onChange={e=>setEmail(e.target.value)} placeholder='Email' />
                <textarea className='w-full p-5 rounded' cols={30} rows={5}  type="text" value={Message} onChange={e=>setMessage(e.target.value)} placeholder='Name' />
                <button type='submit' className='w-3/6 p-5 border border-primary mt-5 text-white text-xl float-right hover:border-white hover:bg-primary'>Submit</button>
            </form>


        </div>
    )
}

export default ContactForm