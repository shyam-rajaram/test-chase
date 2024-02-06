import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='h-[20vh] bg-white shadow-lg flex flex-col items-start justify-center w-full px-12 gap-2'>
            <Link to='/' className='font-bold text-3xl pl-3'>
                <img src='/newheaderlogo.png' alt='logo' className='w-36' />

            </Link>
            <div>
                <ul className='flex  items-start text-lg  justify-center w-full gap-16 p-3'>
                    <li className='hover:border-b-4 hover:border-blue-600 transition-all duration-200 border-b-4 border-white'>Checking</li>
                    <li className='hover:border-b-4 hover:border-blue-600 transition-all duration-200 border-b-4 border-white'>Saving & CDs</li>
                    <li className='hover:border-b-4 hover:border-blue-600 transition-all duration-200 border-b-4 border-white'>Credit Cards</li>
                    <li className='hover:border-b-4 hover:border-blue-600 transition-all duration-200 border-b-4 border-white'>Home Loans</li>
                    <li className='hover:border-b-4 hover:border-blue-600 transition-all duration-200 border-b-4 border-white'>Auto</li>
                </ul>
            </div>
        </div>
    )
}

export default Header