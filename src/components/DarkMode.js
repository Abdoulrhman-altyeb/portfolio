import React, { useState }from 'react'

const DarkMode = () => {
    const [sun, setSun] = useState(false);
    const darkMode = (e) => {
            setSun(!sun);
            document.firstElementChild.classList.toggle('dark');
    }
    return (
        <div onClick={(e) => darkMode(e)} className='fixed md:bottom-8 md:right-4  bottom-4 right-1'>
            {sun ? <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-10 sm:w-10 w-8 h-8 text-white cursor-pointer transition ease-in-out duration-300 animate-bounce hover:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" className="sm:h-10 sm:w-10 w-8 h-8 text-yellow-300 cursor-pointer transition ease-in-out duration-300 animate-bounce hover:text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>}
        </div>
    )
}

export default DarkMode
