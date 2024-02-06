import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className='bg-blue-500 w-full h-[25rem] flex   items-center justify-between px-24'>

            <div className='flex justify-center text-white h-full items-center gap-12'>
                <div className=''>
                    <p className='text-3xl '>Enjoy</p>
                    <p className='text-8xl font-semibold'>$300</p>
                </div>
                <div className='flex flex-col items-start justify-center gap-1 h-full'>
                    <p className='text-4xl'>New chase</p>
                    <p className='text-4xl'>Checking customers</p>
                    <p className='text-xl py-4'>Open a LOGO Total Checking® account with qualifying activities</p>
                    <button className='px-6  py-3 bg-[#398100] text-white rounded-lg hover:bg-green-800 transition-all duration-300 font-semibold '>open an account</button>
                </div>
            </div>
            <div className='flex items-center justify-center w-[30%] '>
                <div className='rounded-md bg-white p-6 flex items-start gap-6 w-full  justify-center flex-col'>
                    <p className='text-3xl'>Welcome</p>
                    <Link to="/login" className='px-4 py-2 min-w-full bg-blue-500 text-center text-white rounded-md hover:bg-blue-800 transition-all duration-300'>
                        Sign in
                    </Link>
                    <p className='text-blue-500'>Not enrolled? signup now. </p>
                </div>

            </div>

        </div>
    )
}

export default Hero