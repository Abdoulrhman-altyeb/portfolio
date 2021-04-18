import React from 'react'
import emailjs from 'emailjs-com';

const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ve8z4wm', 'template_mfnw40h', e.target, 'user_yWs6uYl4FFnOeIlV65Nhp')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
            e.target.reset()
    }

    return (
        <div id='contact' className='pt-10 pb-32 flex flex-col items-center md:px-20 px-10 dark:bg-black dark:bg-opacity-90 gap-5 '>
            {/* contact header  */}
            <div className="flex flex-col h-16 mb-5 md:mb-10">
                <h3 className='font-semibold  text-3xl dark:text-white text-center pt-2'>Contact Me</h3>
                <div className="flex items-center">
                    <span className='w-10 h-1 bg-yellow-300 mr-2'></span>
                    <p className='text-black dark:text-white'>get in touch</p>
                    <span className='w-10 h-1 bg-yellow-300 ml-2'></span>
                </div>
            </div>

            {/* contact body  */}
            <div className="flex gap-5 md:flex-row flex-col ">
                {/* contact context */}
                <div className='max-w-xl dark:text-white'>
                    <h3 className='font-semibold text-lg capitalize mb-2'>get in touch</h3>
                    <p className='text-gray-600 mb-5 dark:text-white'>Contact me any time I'm 24 hours a day 7 days a week 31 days a month online Need help , Need for an advice Need for anything just contact me . </p>
                    <ul className= 'flex flex-col justify-center '>
                        <li className='flex items-center mb-2'>
                            <span className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#3277b3">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg></span>
                            <div>
                                <h4 className='font-semibold '>Name</h4>
                                <p className='text-gray-600 dark:text-gray-400'>Abdulrhman Altyeb</p>
                            </div>
                        </li>
                        <li className='flex  items-center mb-2'>
                            <span className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill=" #3277b3">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg></span>
                            <div>
                                <h4 className='font-semibold '>Address</h4>
                                <p className='text-gray-600 dark:text-gray-400'>Khartoum, bahry</p>
                            </div>
                        </li>
                        <li className='flex items-center'>
                            <span className='pr-3'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="#3277b3">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg></span>
                            <div>
                                <h4 className='font-semibold '>Email</h4>
                                <p className='text-gray-600 dark:text-gray-400'>wizardman0008@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* contact form */}
                <form className='max-w-xl flex flex-col' onSubmit={sendEmail}>
                    <h3 className='font-semibold text-lg capitalize mb-3 dark:text-white'>message me</h3>
                    <div className='flex xl:flex-row flex-col'>
                        <input type="text" name='name' className='px-3 py-2 mb-5 xl:mb-0 xl:mr-3 xl:max-w-form w-full border-2 rounded-lg' placeholder='Name' />
                        <input type="text" name='email' className='px-3 py-2 xl:max-w-form w-full border-2 rounded-lg' placeholder='Email'/>
                    </div>
                    <input type="text" name='subject' className='px-3 py-2 w-full border-2 rounded-lg mt-5 mb-5' placeholder='Subject' />
                    <textarea name='message' className=' px-3 py-2 block w-full border-2 rounded-lg mb-5' id="" cols="72" rows="3" placeholder='Message..'></textarea>
                    <button type='submit' className=' md:self-start self-center uppercase px-3 py-2 bg-yellow-300 w-40 rounded-lg hover:bg-yellow-200 transition duration-300 ease-in-out mt-5 '>Send Message</button>
                </form>
            </div>

        </div>
    )
}

export default ContactMe
