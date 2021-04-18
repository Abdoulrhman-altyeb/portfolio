import React from 'react'
import { skills } from './data';

const Contant = () => {
    return (
        <div className='md:py-32 lg:py-44 ms:py-24 py-10  flex flex-col justify-center items-center dark:bg-black dark:bg-opacity-90'  id='Info'>
            <div className="flex flex-col h-16 mb-10 md:mb-20">
                <h3 className='font-semibold  text-3xl dark:text-white text-center'>About me</h3>
                <div className="flex items-center">
                    <span className='w-10 h-1 bg-yellow-300 mr-2'></span>
                    <p className='text-black dark:text-white'>Who i am</p>
                     <span className='w-10 h-1 bg-yellow-300 ml-2'></span>
                </div>
           </div>
           <div>
                <div className="lg:px-20 px-5 m-auto flex lg:flex-row flex-col gap-5 ">
                    <div className='max-w-md  md:mb-0 mb-10 sm:pr-20  pr-0'>
                        <p className='mb-5 text-gray-600 dark:text-white'>My name is Abdulrahman Atabey Ahmed I'am A Web Developer I'm from Shambat . Khartoum Bahary .</p>
                        <p className='text-gray-600 dark:text-white'>I enjoy taking complex problem and turning them  into a simple and beautiful interface designs . 
                            I like coding that it is part of my blood and I'm also a face learner take me just a little amount of time to learn I love to face problem cause I love to know more and to solve more problem.</p>
                    </div>
                    <div className='max-w-xl flex flex-col justify-center '>
                        <h3 className='font-bold text-lg mb-4 text-center sm:text-left sm:pl-2 pl-0 dark:text-white flex self-center md:self-start'>SKILLS 🔥</h3>
                        <div className="flex max-w-sm flex-wrap gap-5 sm:justify-start justify-center text-white sm:max-w-md md:max-w-sm">
                            {skills.map((skill, index) => {
                                return (
                                    <div key={index} className="px-4 py-2 flex justify-center items-center w-24" style={{background:'#3277B3'}}>
                                        <p className='text-sm'>{skill}</p>
                                    </div>  
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contant;
