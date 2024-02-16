import React from 'react';
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiMedium } from "react-icons/si";

function Sidebar() {
  return (
    <div className='w-[248px] py-5 pl-5 text-justify mt-16 text-[#1f1f1f] space-y-2 hidden lg:block '>
      <a href='https://github.com/vikasipar' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <FaSquareGithub className='text-2xl'/>
        <span className='text-sm'>github.com/vikasipar</span>
      </a>
      <a href='https://twitter.com/vikas_ipar?t=xdfw_bSJLdFN8dykcCSWZw&s=08' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <FaTwitterSquare className='text-2xl text-blue-500'/>
        <span className='text-sm'>twitter.com/vikasipar</span>
      </a>
      <a href='https://medium.com/@vikasipar' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <SiMedium className='text-2xl'/>
        <span className='text-sm'>medium.com/@vikasipar</span>
      </a>
      <a href='https://www.linkedin.com/in/vikas-ipar-705b6922a/' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <FaLinkedin className='text-2xl text-blue-800'/>
        <span className='text-sm'>linkedin.com/in/vikasipar</span>
      </a>
      <a href='mailto:vikasipar.scoe.it@gmail.com' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <MdEmail className='text-2xl text-[#00aa45]'/>
        <span className='text-sm'>vikasipar.scoe.it@gmail.com</span>
      </a>
      <a href='https://vikasipar.vercel.app/' target='_blank' className='flex flex-wrap items-center text-base gap-x-2'>
        <img src='/static/vikas.png' className='w-5 rounded'/>
        <span className='text-sm'>portfolio/vikasipar</span>
      </a>
    </div>
  )
}

export default Sidebar