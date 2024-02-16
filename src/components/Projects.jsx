import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Projects() {

    const projectdata = [
        {
            id: 0,
            title: "CoWatch",
            live: "https://cowatch.vercel.app/",
            github: "https://github.com/vikasipar/cowatch",
            stack: ['React.js', 'Recoil', 'Peerjs', 'Tailwind'],
            desc: "Redefining how users experience content on YouTube! It  can seamlessly watch YouTube videos together with their friends while enjoying integrated video call and screen sharing features. 🚀",
            img: "/static/cowatch.jpeg",
        },
        {
          id: 1,
          title: "E-commerce Application",
          live: "https://ezmartshop.vercel.app/",
          github: "https://github.com/vikasipar/ecommerce-app",
          stack: ['React.js', 'Redux', 'Tailwind', 'Firebase', 'FakeStoreAPI'],
          desc: "It imulates a real-world shopping experience with dynamic components for intuitive product listing and filtering. Ensured seamless cart operations, secure user authentication, and more. 🛒",
          img: "/static/ezmart.jpeg",
        },
        {
            id: 2,
            title: "Social Media App",
            live: "https://ezgram.vercel.app/",
            github: "https://github.com/vikasipar/social-media-app",
            stack: ['React.js', 'Tailwind', 'Firebase', 'Recoil'],
            desc: "It facilitates a vibrant social experience with features such as user authentication, posting content, liking, commenting, friend suggestions, and viewing stories. 📱",
            img: "/static/ezgram.jpeg",
          },
        {
          id: 3,
          title: "YouTube Clone",
          live: "https://betayoutube.vercel.app/",
          github: "https://github.com/vikasipar/youtube-clone",
          stack: ['React.js', 'Tailwind', 'YouTube API'],
          desc: "I led frontend development and API integration, ensuring smooth YouTube video streaming, content discovery with a user-friendly search bar & responsiveness. 🎬",
          img: "/static/ytclone.jpeg",
        },
        {
          id: 4,
          title: "Superhero App",
          live: "https://mysuperheros.vercel.app/",
          github: "https://github.com/vikasipar/superhero-app",
          stack: ['React.js', 'Tailwind', 'Superhero API'],
          desc: "Dive into the world of superheroes! Developed a dynamic web application that showcases my skills in frontend development and API integration. 🦸",
          img: "/static/superheros.jpeg",
        },
      ];
      
  return (
    <div className='lg:w-[800px] lg:border-r border-b box-border'>
        <h1 className='m-5 text-2xl font-semibold'>Projects</h1>
        {
            projectdata.map((project) => (
                <div key={project.id} className='flex flex-wrap items-center w-[80%] mx-auto border border-gray-300 px-2 py-4 my-4 hover:shadow rounded-lg'>
                    <div className='w-[40%] mx-auto'>
                        <img src={project.img} alt={project.title} className='rounded-lg border border-gray-300'/>
                    </div>
                    <div className='w-[50%] mx-auto'>
                        <h1 className='font-semibold text-[#333333] text-xl mb-1'>{project.title}</h1>
                        <p className='text-sm text-justify text-[#6a737d]'>{project.desc}</p>
                        <p className='flex justify-center flex-wrap my-2'>{project.stack.map(tech => (
                            <span key={tech} className='text-sm text-[#10b139] mx-1 w-fit border border-gray-400 rounded-lg px-2 my-[1px]'>{tech}</span>
                            ))}
                        </p>
                        <div className='flex flex-wrap items-center justify-around mt-4'>
                            <a href={project.github} target='_blank'><button className='px-2 py-[1px] border-2 bg-[#333333] hover:bg-[#555555] text-white rounded-2xl flex items-center gap-x-1'><FaGithub/>Code</button></a>
                            <a href={project.live} target='_blank'><button className='px-2 py-[1px] border-2 border-[#149735] bg-[#10b139] text-white hover:bg-[#0da834] rounded-2xl flex items-center gap-x-1'><TbWorld/>Live</button></a>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Projects