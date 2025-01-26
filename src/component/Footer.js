import React from 'react'
import coffeefooter from '../assests/coffeefooter.jpg';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const bggImage ={
    backgroundImage: `url(${coffeefooter})`,
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    width:"100%",
    minHeight:"400px",
    backgroundPosition:"center"
  }


export default function Footer() {
  return (
    <div style={bggImage} className='text-white'>
        <div className='bg-black/40 min-h-[400px]'>
<div className='max-w-7xl grid md:grid-cols-3 mx-auto pb-20 pt-5'>
<div className='py-8 px-4'>
    <h3  className='font-semibold tracking-widest text-2xl font-cursive '>Brew Haven</h3>
    <p className='pt-4 font-medium'>Crafted Coffee, Cozy Vibes, Unforgettable Moments, Your Perfect Espresso Escape</p>
<button className='inline-block bg-[#3d2517] py-2 px-4 mt-5 rounded-full text-sm hover:bg-amber-700'>Visit our YouTube Channel</button>
</div>
{/* footer links */}
<div className=' col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
<div className='py-8 px-5'>
<h1 className='text-xl font-semibold sm:text-left mb-3'>Important Links</h1>
<ul className='space-y-3'>
    {FooterLinks.map((data, index)=>(
        <li key={index}>
            <a href={data.link} className='inline-block hover:scale-105 duration-200' >{data.title}</a>
        </li>
    ))}
</ul>
</div>

{/* second col links */}
<div className='py-8 px-5 '>
<h1 className='text-xl font-semibold sm:text-left mb-3' > Quick Links</h1>
<ul className='space-y-3' >
{FooterLinks.map((data, index)=>(
        <li key={index}>
            <a href={data.link} className='inline-block hover:scale-105 duration-200' >{data.title}</a>
        </li>
    ))}

</ul>
</div>
{/* company address */}
<div className='py-8 px-4 col-span-2 sm:col-auto ' >
<h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
<div>
    <p className='mb-3 '>Kolkata, West Bengal</p>
    <p>+91 12345467890</p>
    {/* social links */}
<div className='flex items-center gap-3 mt-6 '>
<a href='#'>
<FaInstagram className='text-3xl hover:text-amber-700 duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaFacebook className='text-3xl hover:text-amber-700 duration-300' />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className='text-3xl hover:text-amber-700 duration-300' />
                                    </a>

</div>
</div>
</div>
</div>

</div>
        </div>
      
    </div>
  )
}
