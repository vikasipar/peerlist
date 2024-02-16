import React from 'react'

function Blog() {
  const blogdata=[
    {
      id: 1,
      topic: "APIs",
      url: "https://medium.com/@vikasipar/mastering-api-integration-in-react-a-practical-guide-with-examples-23748d68b3fa",
      title: "Mastering API Integration in React: A Practical Guide with Examples",
      img: "/static/api.png",
      desc: "What exactly is an API? Well, let's break it down. API stands for Application Programming Interface. Think of it as a",
    },
    {
      id: 2,
      url: "https://medium.com/@vikasipar/understanding-redux-toolkit-a-practical-guide-with-an-e-commerce-application-938cf07d38a0",
      topic: "Redux Toolkit",
      title: "Understanding Redux Toolkit: A Practical Guide with an E-commerce Application",
      img: "/static/redux.jpg",
      desc: "Introduction Redux Toolkit has revolutionized state management in React applications, offering a simpler and more",
    },
    {
      id: 3,
      topic: "Recoil",
      url: "https://medium.com/@vikasipar/exploring-recoil-simplifying-state-management-in-react-projects-b19adbe3445b",
      title: "Exploring Recoil: Simplifying State Management in React Projects",
      img: "/static/recoil.png",
      desc: "Recoil is a state management library for React that made my life as a developer so much easier. Being an enthusiast delving",
    },
    {
      id: 4,
      topic: "Router",
      url: "https://medium.com/@vikasipar/navigating-the-web-with-react-router-d68416bd79c8",
      title: "Navigating the Web with React Router",
      img: "/static/router.jpg",
      desc: "Hey coders! So, you've dipped your toes into the vast ocean of web development, and now you're eyeing that treasure",
    },
    {
      id: 5,
      topic: "Responsiveness",
      url: "https://medium.com/@vikasipar/flexbox-the-easiest-path-to-responsive-websites-688415a06c57",
      title: "Flexbox: The Easiest Path to Responsive Websites",
      img: "/static/responsive.png",
      desc: "Hey there! Are you ready to level up your web design game and make your websites look amazing on all devices?",
    },
  ];
  return (
    <div className='lg:w-[800px] lg:border-r border-b box-border'>
      <h1 className='m-5 text-2xl font-semibold'>Blog</h1>
      {
        blogdata.map((blog) => (
          <div key={blog.id} className='w-[60%] mx-auto border border-gray-300 px-4 py-4 my-6 hover:shadow-lg rounded-lg'>
          <a href={blog.url} target='_blank' className='flex-col flex-wrap items-center'>
              <div className='w-[90%] mx-auto'>
                <img src={blog.img} alt={blog.title} className='rounded-lg'/>
              </div>
              <div className='w-[90%] mx-auto'>
                <h1 className='font-semibold text-[#333333] text-xl border-t border-gray-300'>{blog.title}</h1>
                {/* <p className='text-sm text-justify text-[#6a737d]'>{blog.desc}</p> */}
              </div>
          </a>
          </div>
        ))
      }
    </div>
  )
}

export default Blog