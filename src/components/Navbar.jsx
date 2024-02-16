import React from 'react';
import { LuHome } from "react-icons/lu";
import { PiAddressBook, PiReadCvLogo  } from "react-icons/pi";
import { IoCubeOutline } from "react-icons/io5";
import { HiOutlinePencil } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <div className='mt-[12px] w-[212px] border-r flex-col flex-shrink-0 h-[95vh] text-[16px] text-start  hidden lg:flex justify-start lg:top-0'>
            <span id='logo' className='w-[145px] gap-x-2 flex items-center justify-between text-[26px] font-bold'><img src='/static/logo.jpg' className='rounded-xl h-8 w-8 bg-[#218147] text-white'/>VikasIpar</span>
            <div className='leading-[24px] mt-8 text-[#1f1f1f] space-y-2'>
                <NavLink style={({ isActive }) => ({color: isActive && "#00aa45"})} to='/' className='lg:py-[2.5px] flex flex-col lg:flex-row justify-between lg:justify-start gap-x-2 items-center overflow-y-auto'><LuHome className='text-2xl'/>Home</NavLink>
                <NavLink to='/projects' style={({ isActive }) => ({color: isActive && "#00aa45"})} className='lg:py-[2.5px] flex flex-col lg:flex-row justify-between lg:justify-start gap-x-2 items-center overflow-y-auto'><IoCubeOutline className='text-2xl'/>Projects</NavLink>
                <NavLink to='/contact' style={({ isActive }) => ({color: isActive && "#00aa45"})} className='lg:py-[2.5px] flex flex-col lg:flex-row justify-between lg:justify-start gap-x-2 items-center overflow-y-auto'><PiAddressBook className='text-2xl'/>Contact</NavLink>
                <NavLink to='/blog' style={({ isActive }) => ({color: isActive && "#00aa45"})} className='lg:py-[2.5px] flex flex-col lg:flex-row justify-between lg:justify-start gap-x-2 items-center overflow-y-auto'><HiOutlinePencil className='text-2xl'/>Blog</NavLink>
                <a href='https://drive.google.com/file/d/1TOKr8XDR9JiZQ5RmEDe-6GvwCIj7DNtb/view' target='_blank' className='lg:py-[2.5px] flex flex-col lg:flex-row justify-between lg:justify-start gap-x-2 items-center overflow-y-auto'><PiReadCvLogo className='text-2xl'/>Resume</a>
            </div>
        </div>
        <div className=' text-[#00aa45]/90 text-sm fixed bottom-1'>Developed by Vikas Ipar</div>
    </div>
  )
}

export default Navbar;