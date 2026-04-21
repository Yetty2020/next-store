import React from 'react'
import FooterImage from '../../public/images/FooterImage.svg'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../navbar/Logo';

export default function Footer() {
  return (
    <section className="flex justify-between items-center px-14 py-10">
        <div className='flex flex-col w-1/3 gap-5 '>
            <Logo/>
            <p>We are committed to providing quality furniture at affordable prices, so that everyone can find something they love without having to pay a high price.</p>
            <p>copyright @ 2025</p>
        </div>
        <div className="flex flex-col items-center gap-5">
            <h4>Follow Us</h4>
        <div className='flex gap-4'>
            <FaFacebookF/>
            <FaTwitter/>
            <FaInstagram/>
            <FaLinkedinIn/>

        </div>
        </div>
        <div className=''>
            <Image src={FooterImage} alt="Footer Image" width={300} height={300} />
        </div>
    </section>
  )
}
