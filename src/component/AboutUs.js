import React from 'react'
import Bg from '../assests/Bg.png'
import Lottie from 'lottie-react';
import Animation from '../assests/Animation.json'
import{motion} from 'framer-motion';

const bgImage ={
  backgroundImage: `url(${Bg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize:"cover",
  width:"100%",
  height:"100%",
  backgroundPosition:"center"
}

export default function AboutUs() {
  return (
    <div id='about' style={bgImage}className=' md:py-20  py-40'>
      <motion.h1
      initial={{opacity:0, y:100}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:1.5, delay:0.5}}
       className='text-amber-900 text-4xl text-center font-cursive font-bold mb-20' >About Us</motion.h1>
<div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto '>
{/* image section */}

<motion.div
initial={{opacity:0, scale:0.5}}
      whileInView={{opacity:1, scale:1}}
      transition={{duration:1.5, delay:0.5}}>
  
  <Lottie animationData={Animation} className='md:w-[600px]' />
  </motion.div>
<motion.div
initial={{opacity:0, y:100}}
whileInView={{opacity:1, y:0}}
transition={{duration:1.5, delay:0.5}}
>
  <div className='space-y-4 px-4 md:px-0 ' >
    <h1 className='text-amber-900 text-2xl font-cursive2 pt-2'>Passion for Prefect Brew</h1>
    <p className='font-medium leading-6 font-cursive2'>Founded in 2010, Bean Haven started as a small coffee
       cart in the heart of the city. Our founder, Jane Doe, had a vision to bring the finest, ethically sourced coffee to our community. What began as a love for the perfect cup of joe has grown into a thriving business, but our core values remain the same. We believe that great coffee is an art form. From carefully selecting the best beans from sustainable farms around the world to meticulously
       roasting them to perfection, every step in our process is crafted with love and expertise.</p>
  </div>
</motion.div>
</div>

    </div>
  )
}
