import React from 'react'
import { Link } from 'react-router-dom';

//images 
import logo from '../images/logo.svg';



const Navbar = ({setPage, toggle}) => {
    return (
        <>
            <nav className='flex justify-between items-center h-16 px-6 pt-3 text-white sm:px-8 md:px-10 lg:px-14 '>
                <Link to='/' className="text-2xl pl-6"><img src={logo} alt=""/> </Link>
                <div className="px-4 md:hidden cursor-pointer" onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
                <div className="pr-6 hidden md:block">
                    <Link to='/' className='navButton text-yellow-400' onClick={() => setPage(false)}>Home</Link>
                    <Link to='/about' className='navButton'>About</Link>
                    <Link to='/contact' className='navButton' onClick={() => setPage(true)}>Contact</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
