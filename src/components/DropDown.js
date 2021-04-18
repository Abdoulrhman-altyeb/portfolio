import React from 'react';
import { Link } from 'react-router-dom'

const DropDown = ({setPage, isActive, toggle}) => {
    return (
        <div className={isActive ? "w-full flex flex-col bg-yellow-300 text-black items-center absolute transform" : "hidden"} onClick={toggle}>
                    <Link to='/' className='p-4 transition duration-300 ease-in-out hover:text-white' onClick={() => setPage(false)}>Home</Link>
                    <Link to='/about' className='p-4 transition duration-300 ease-in-out hover:text-white'>About</Link>
                    <Link to='/contact' className='p-4 transition duration-300 ease-in-out hover:text-white' onClick={() => setPage(true)}>Contact</Link>
            </div>
    )
}

export default DropDown
