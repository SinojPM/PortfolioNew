import React from 'react'

const Footer = () => {
  return (
    <div className='px-40 py-12 border-t-2 border-t-primary w-100 text-gray'>
        <div className="grid lg:grid-cols-3 text-cols-1 justify-center">
            <div className="lg:col-span-2 col-span-1">
                <div className="flex items-baseline">
                    <h3 className="text-3xl">Sinoj</h3>
                    <p className="ps-12 text-xl">sinojpm97@gmail.com</p>
                </div>
                <p className='text-primary text-xl'>Full Stack developer</p>
            </div>
            <div >
                <h3 className="text-3xl text-center underline mb-5">Media</h3>
                <ul className='flex justify-evenly text-gray'>
                    <li><a href='https://github.com/SinojPM' target='_blank'><i className="fa-brands fa-github text-5xl hover:text-primary"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/sinoj-pm' target='_blank'><i className="fa-brands fa-linkedin text-5xl hover:text-primary"></i></a></li>
                    <li><a href='https://wa.me/9747103774' target='_blank'><i className="fa-brands fa-whatsapp text-5xl hover:text-primary"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer