import React from 'react'

const Cards = () => {
    return (
        <div className='w-full px-24 pt-16'>
            <div className='flex items-center justify-between gap-4 w-full h-full'>
                <div className="relative flex flex-col mt-6 text-gray-700 min-h-[30rem] bg-white shadow-md bg-clip-border  w-96 border-gray-300 border-2">
                    <div className="">
                        <div className='flex items-center min-h-36 justify-between px-6 bg-blue-900 py-3'>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-3xl text-white'>Business</p>
                                <p className='text-3xl text-white'>Complete</p>
                                <p className='text-3xl text-white'>Checking</p>

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="w-12 h-12 mb-4 text-white">
                                <path fill-rule="evenodd"
                                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                    clip-rule="evenodd"></path>
                                <path
                                    d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                                </path>
                            </svg>
                        </div>
                        <div className='pt-12 px-6 min-h-[14rem]'>
                            <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                $400 for new business checking customers
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Get $400 when you open a chase Business Complete checking account. qualifying activities apply.
                            </p>
                        </div>

                    </div>
                    <div className="px-6 py-5">
                        <a href="#" className="inline-block">
                            <button
                                className="flex bg-blue-500 text-white items-center gap-2 px-6 py-4 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Open Account
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative flex min-h-[30rem] flex-col mt-6  text-gray-700 bg-white shadow-md bg-clip-border  w-96 border-gray-300 border-2">
                    <div className="">
                        <div className='flex items-center min-h-36 justify-between px-6 bg-blue-800 py-3'>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-3xl text-white'>Payment</p>
                                <p className='text-3xl text-white'>Solutions</p>


                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="w-12 h-12 mb-4 text-white">
                                <path fill-rule="evenodd"
                                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                    clip-rule="evenodd"></path>
                                <path
                                    d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                                </path>
                            </svg>
                        </div>
                        <div className='pt-12 px-6 min-h-[14rem]'>
                            <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Credit card processing
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Get a free consultaion with a Payments Advisor to discuss your unique payment accepance needs
                            </p>
                        </div>

                    </div>
                    <div className="px-6 py-5">
                        <a href="#" className="inline-block">
                            <button
                                className="flex bg-blue-500 text-white items-center gap-2 px-6 py-4 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Contact with us
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="relative min-h-[30rem] flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border  w-96 border-gray-300 border-2">
                    <div className="">
                        <div className='flex min-h-36 items-center justify-between px-6 bg-blue-600 py-3'>
                            <div className='flex flex-col items-start justify-start'>
                                <p className='text-3xl text-white'>Chase</p>
                                <p className='text-3xl text-white'>Freedom</p>
                                <p className='text-3xl text-white'>Unlimited</p>

                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                className="w-12 h-12 mb-4 text-white">
                                <path fill-rule="evenodd"
                                    d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                                    clip-rule="evenodd"></path>
                                <path
                                    d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z">
                                </path>
                            </svg>
                        </div>
                        <div className='pt-12 px-6 min-h-[14rem]' >
                            <h5 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                Earn a $200 bonus + 5% gas and grocery store offer
                            </h5>
                            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                                Plus, earn Unlimited 1.5% cash back or more on all purchases, including 3% on dining and drugstores - all with no annual fee
                            </p>
                        </div>

                    </div>
                    <div className="px-6 py-5">
                        <a href="#" className="inline-block">
                            <button
                                className="flex bg-blue-500 text-white items-center gap-2 px-6 py-4 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                                type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-4 h-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cards