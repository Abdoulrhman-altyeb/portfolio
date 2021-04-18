import React from 'react';
import project1 from '../projects_images/desktop-preview.jpg'


const Projects = () => {
    return (
        <div className='h-auto dark:bg-black dark:bg-opacity-90 flex flex-col items-center p-5'>

            <div className="flex flex-col h-16 md-5 md:mb-0">
                <h3 className='font-semibold  text-3xl dark:text-white text-center pt-2'>Projects</h3>
                <div className="flex items-center">
                    <span className='w-10 h-1 bg-yellow-300 mr-2'></span>
                    <p className='text-black dark:text-white'>My work </p>
                    <span className='w-10 h-1 bg-yellow-300 ml-2'></span>
                </div>
            </div>
            {/* card container  */}
            <div className="md:p-5 p-0 md:px-20 px-0 py-10 h-full text-white grid md:grid-cols-2 grid-cols-1 gap-y-14 items-center justify-center  ">
                {/* card  */}
                <div className="md:p-5 flex md:flex-row flex-col p-0 ">
                    <div className="rounded md:m-auto m-0 lg:h-80 lg:w-96 md:w-72 md:h-72 sm:h-60 sm:w-72 h-60 w-72 shadow-md hero"></div>
                    <div className="p-5 rounded lg:w-72 lg:h-58 h-58 w-72 shadow-md bg-gray-200 text-black dark:text-white dark:bg-gray-600 relative">
                            <h4 className='text-lg font-semibold mb-5'>Project Name.</h4>
                            <p className='text-sm mb-5 text-gray-600 dark:text-white'>Info about the project : Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iste inventore perferendis voluptatibus eligendi earum?</p>
                            <div className="flex md:absolute md:bottom-10 relative">
                                <span className='tags'>#HTML</span>
                                <span className='tags'>#CSS</span>
                                <span className='tags'>#JS</span>
                            </div>
                    </div>
                </div>
                <div className="md:p-5 flex md:flex-row flex-col p-0 ">
                    <a target='_blank' rel="noreferrer" href='https://infallible-jennings-e4a7d0.netlify.app' className="rounded md:m-auto m-0 lg:h-80 lg:w-96 md:w-72 md:h-72 sm:h-60 sm:w-72 h-60 w-72 shadow-md ">
                        <img src={project1} className='project1 h-full' alt=""/>
                    </a>
                    <div className="p-5 rounded lg:w-72 lg:h-58 h-58 w-72 shadow-md bg-gray-200 text-black dark:text-white dark:bg-gray-600 relative">
                            <h4 className='text-lg font-semibold mb-5'>FrentEnd moniter</h4>
                            <p className='text-sm mb-5 text-gray-600 dark:text-white'>A simple responsive layout page made Worked with basic Programing knowlage</p>
                            <div className="flex md:absolute md:bottom-10 relative">
                                <span className='tags'>#HTML</span>
                                <span className='tags'>#SCSS</span>
                                <span className='tags'>#JS</span>
                            </div>
                    </div>
                </div>
                <div className="md:p-5 flex md:flex-row flex-col p-0 ">
                    <div className="rounded md:m-auto m-0 lg:h-80 lg:w-96 md:w-72 md:h-72 sm:h-60 sm:w-72 h-60 w-72 shadow-md hero"></div>
                    <div className="p-5 rounded lg:w-72 lg:h-58 h-58 w-72 shadow-md bg-gray-200 text-black dark:text-white dark:bg-gray-600 relative">
                            <h4 className='text-lg font-semibold mb-5'>Project Name.</h4>
                            <p className='text-sm mb-5 text-gray-600 dark:text-white'>Info about the project : Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iste inventore perferendis voluptatibus eligendi earum?</p>
                            <div className="flex md:absolute md:bottom-10 relative">
                                <span className='tags'>#HTML</span>
                                <span className='tags'>#CSS</span>
                                <span className='tags'>#JS</span>
                            </div>
                    </div>
                </div>
                <div className="md:p-5 flex md:flex-row flex-col p-0 ">
                    <div className="rounded md:m-auto m-0 lg:h-80 lg:w-96 md:w-72 md:h-72 sm:h-60 sm:w-72 h-60 w-72 shadow-md hero"></div>
                    <div className="p-5 rounded lg:w-72 lg:h-58 h-58 w-72 shadow-md bg-gray-200 text-black dark:text-white dark:bg-gray-600 relative">
                            <h4 className='text-lg font-semibold mb-5'>Project Name.</h4>
                            <p className='text-sm mb-5 text-gray-600 dark:text-white '>Info about the project : Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora iste inventore perferendis voluptatibus eligendi earum?</p>
                            <div className="flex md:absolute md:bottom-10 relative">
                                <span className='tags'>#HTML</span>
                                <span className='tags'>#CSS</span>
                                <span className='tags'>#JS</span>
                            </div>
               
                    </div>
                </div>

            </div>
            <button className='uppercase px-3 py-2 bg-yellow-300 w-40 rounded-lg hover:bg-yellow-200 duration-300 transition ease-in-out mt-5'>More Projects</button>
        </div>
    )
}

export default Projects
