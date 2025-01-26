import React from 'react'
import Bg from '../assests/Bg.png'
import { motion } from 'framer-motion'
const bgImage ={
    backgroundImage: `url(${Bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    width:"100%",
    height:"100%",
    backgroundPosition:"center"
  }


export default function Contact() {
  return (
    <div id='contact' className='min-h-screen flex items-center justify-center p-6' style={bgImage} >
        <motion.div className='w-full max-w-3xl bg-amber-900/20 rounded-lg shadow-md px-8 py-4'
        initial={{opacity:0, scale:0.5}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1.5, delay:0.5}}
        >
            <h1 className='text-amber-900 text-4xl text-center font-cursive font-bold mb-6'>Contact Us</h1>
            <p className='text-gray-700 text-center text-lg mb-8 font-cursive2'>
                We would love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
                <form className='space-y-3'>
                    <div>
                        <label htmlFor='name' className='text-lg block text-gray-700 mb-1 font-medium'>Name:</label>
                        <input type='text' id='name' placeholder='Your name' className='w-full px-4 py-2 
                        rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none'/>
                    </div>
                    <div>
                        <label htmlFor='email' className='text-lg block text-gray-700 mb-1 font-medium'>Email:</label>
                        <input type='email' id='email' placeholder='Your Email' className='w-full px-4 py-2 rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none'/>
                    </div>
                    <div>
                        <label htmlFor='message' className='text-lg block text-gray-700 mb-1 font-medium'>Message:</label>
                        <textarea name='message' id='message' placeholder='Your Message' className='w-full px-4 py-2 
                        rounded-md border border-gray-300 
                        focus:ring-2 focus:ring-amber-900 focus:outline-none mb-3' rows='5'></textarea>
                    </div>
                    <button className='w-full py-2 px-4 bg-amber-900 text-white font-semibold rounded-lg
                    shadow-md  mb-1 hover:bg-amber-700 '>Send Message</button>
                </form>
                <div className='mt-6 text-center'>
                    <p className='text-gray-700 '>Or reach us directly </p>
                    <p className='text-black font-semibold'>+1 (123) 456-7890</p>
                    <p className='text-black font-semibold' >nfo@coffeewebsite.com</p>

                </div>
        </motion.div>
    </div>
  )
}
