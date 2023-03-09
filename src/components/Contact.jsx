import React from 'react'
import { FiPhone } from "react-icons/fi"

const Contact = () => {
    return (
    
        <div name='contact' id='contact' className='w-full h-screen bg-[#fff] flex justify-center items-center p-4 shadow'>
            <div className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <FiPhone className="w-10 inline-block mb-4 text-2xl"/>
                    <p className='text-4xl font-bold inline border-b-4 border-[#418aff] text-black'>Contact</p>
                    <p className='text-[#636576] py-4'>Send me a message</p>
                </div>
                <input className='bg-[#f7f7f8] text-[#636576] p-2 rounded outline-none text-sm' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#f7f7f8] text-[#636576] rounded outline-none text-sm' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#f7f7f8] p-2 text-[#636576] outline-none rounded text-sm' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white text-base border-2 rounded outline-none px-4 py-3 my-8 mx-auto flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 font-medium'>Let's Collaborate</button>
            </div>
        </div>
    )
}
export default Contact