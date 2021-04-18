import React, { useState } from 'react'
import { Link } from 'react-scroll';
const Hero = ({page}) => {


    return (
        <div className='h-screen flex flex-col justify-center hero -mt-16'>
            <h1 className=" text-white w-auto  text-xl ml-10  md:text-4xl lg:text-5xl sm:text-3xl lg:ml-96 md:ml-60 sm:ml-40  ">Abdulrhman <span>😁</span> <br/> And I'm A Web Developer <span>😎</span></h1>
            {page ? <Link to="contact" smooth={true} duration={1000} className="flex flex-col items-center justify-center cursor-pointer absolute bottom-20 md:left-1/2 left-1/4 ">
                <p className='text-yellow-300 inline-block' >more info ?</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg></Link>: <Link to="Info" smooth={true} duration={1000} className="flex flex-col items-center justify-center cursor-pointer absolute bottom-20 md:left-1/2 left-1/4 ">
                    <p className='text-yellow-300 inline-block' >more info ?</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                </Link>}
        </div>
    )
}

export default Hero
