import React from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Sent.");
    emailjs.sendForm(import.meta.env.VITE_SEVICEID, import.meta.env.VITE_TEMPLATEID, e.target, import.meta.env.VITE_EMAILJS_PUBLICKEY);
}

  return (
    <div className='lg:w-[800px] lg:border-r border-b box-border overflow-x-hidden'>
      <h1 className='m-5 text-2xl font-semibold'>Contact</h1>

      <div className='w-[90%] mx-auto text-center lg:text-left space-y-14 mt-10 lg:mt-20'>
        <div className='text-center'>
          <p className='text-sm lg:text-lg text-[#000000]'>Interested in adding a passionate frontend developer to your <span className='text-[#38b45d]'>team</span>?</p>
          <p className='text-xs lg:text-lg text-[#757575]'>Simply fill out the form below and send a message.😊</p>
        </div>
      </div>

      <form onSubmit={sendEmail} className='w-[80%] lg:w-[83%] mx-auto text-base lg:text-xl flex-wrap mt-12 md:mt-20'>
            <div className='flex items-center leading-loose'>
                <label htmlFor='sender'>Hi, I'm </label>
                <input type='text' placeholder='Name*' name='sender' id='sender' className='border-b-2 border-[#333333] text-[#1f4167] mx-2 pl-2 w-[11rem] md:w-[26rem] outline-none' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className='' htmlFor='from'>and I work with </label>
                <input name='from' id='from' className='outline-none ml-1 w-[9rem] md:w-[27rem] border-b-2 border-[#333333] text-[#00aa45] pl-2' type='text' placeholder='Company*' defaultValue='Peerlist' required/>
            </div>
            <div className='flex flex-wrap items-center leading-loose'>
                <label className='' htmlFor='email_from'>You can reach me at </label>
                <input className='outline-none ml-1 w-[17rem] lg:w-[24.5rem] pl-2 border-b-2 border-[#333333]  text-[#1f4167]' type='email' name='email_from' id='email_from' placeholder='Email*' required/>
            </div>
            <input className='hidden lg:flex w-full outline-none flex-wrap border-b-2 border-[#333333] leading-loose text-[#38aa34]' placeholder='Message*' defaultValue='Interested in discussing Frontend Developer opportunity with you.' id='message' name='message' required/>
            <input className='lg:hidden w-full outline-none flex flex-wrap text-base border-b-2 border-[#333333] leading-loose text-[#38aa34]' placeholder='Message*' defaultValue='Interested in further discussion.' id='message' name='message' required/><br/>
            <button type='submit' className='flex justify-center mx-auto my-7 lg:my-14 border-2 border-[#149735] bg-[#10b139] text-white hover:bg-[#0da834] px-5 py-1 rounded-2xl'>Send Message</button>
        </form>

    </div>
  )
}

export default Contact;