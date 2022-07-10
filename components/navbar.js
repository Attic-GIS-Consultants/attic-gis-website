import Link from 'next/link'


import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from 'react'
export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className="py-2">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <div>
                            <Link href="/" className="flex items-center py-5 px-3">
                                <div>
                                    <img src="https://res.cloudinary.com/attic-gis/image/upload/v1657485317/Asset_5_ide1xh.svg" width={100} height={40}/>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-3">
                            <a href="/services/develop" className="text-gray-700 py-5 px-3 hover:text-gray-900">Services</a>
                            <a href="/projects" className="text-gray-700 py-5 px-3 hover:text-gray-900">Projects</a>
                            <a href="" className="text-gray-700 py-5 px-3 hover:text-gray-900">About</a>
                        </div>

                    </div>

                    <div className="hidden md:flex items-center space-x-3 px-8">
                        <a href="" className="py-2 px-3  bg-blue-400 rounded hover:bg-blue-300 tranition duration-300">Contact</a>
                    </div>

                    <div className="md:hidden flex items-center px-8">
                        <div className="md:hidden flex items-center">
                            {(clicked) ? (
                                <>
                                    <button onClick={() => { setClicked(false) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                </>) :
                                (
                                    <>
                                        <button onClick={() => { setClicked(true) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                            </svg>
                                        </button>
                                    </>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <div className={clicked ? "block md:hidden" : "hidden md:hidden"}>
                <a href="" className="block py-2 px-4 text-sm hover: bg-gray-200">Services</a>
                <a href="" className="block py-2 px-4 text-sm hover: bg-gray-200">About</a>
                <a href="" className="block py-2 px-4 text-sm hover: bg-gray-200">Contact</a>
            </div>
        </nav>
    )
}


