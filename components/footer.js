import React from 'react'

export default function Footer() {
    return (
        <div className="max-w  bg-slate-500 mt-4">
            <div className='flex justify-center gap-20 py-6 flex-wrap '>
                <div className='flex flex-col '>
                    <p className='text-2xl text-gray-50 font-semibold'>Company</p>
                    <a href="/about" className="text-gray-100 py-2  hover:text-blue-300">About</a>
                    <a href="/about" className="text-gray-100 py-2  hover:text-blue-300">Contact</a>
                </div>
                <div className='flex flex-col'>
                    <p className='text-2xl text-gray-50 font-semibold'>Services</p>
                    <a href="/services/develop" className="text-gray-100 py-2  hover:text-blue-300">Software Dev</a>
                    <a href="/services/develop" className="text-gray-100 py-2  hover:text-blue-300">Data Analysis</a>
                    <a href="/services/develop" className="text-gray-100 py-2  hover:text-blue-300">Consulting</a>
                </div>
                <div className='flex flex-col '>
                    <p className='text-2xl text-gray-50 font-semibold'>Socials</p>
                    <a href="https://linkedin.com/company/atticgismw" className="text-gray-100 py-2 px-1 hover:text-blue-300">LinkedIn</a>
                    <a href="https://instagram.com/atticgismw" className="text-gray-100 py-2 px-1 hover:text-blue-300">Instagram</a>
                    <a href="/services/develop" className="text-gray-100 py-2 px-1 hover:text-blue-300">Facebook</a>
                    <a href="https://twitter.com/atticgismw1" className="text-gray-100 py-2 px-1 hover:text-blue-300">Twitter</a>
                </div>

            </div>

            <div className='flex justify-center gap-5'>
                <p className='text-2xl font-semibold text-gray-50 '>Attic GIS Consultants</p>
                <p className='text-2xl font-semibold text-gray-50'> 2022</p>
            </div>


        </div>
    )
}
