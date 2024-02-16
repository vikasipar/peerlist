import React from 'react';

function Blog() {
  const blogdata=[
    {
      id: 1,
      topic: "APIs",
      url: "https://medium.com/@vikasipar/mastering-api-integration-in-react-a-practical-guide-with-examples-23748d68b3fa",
      title: "Mastering API Integration in React: A Practical Guide with Examples",
      img: "/static/api.png",
    },
    {
      id: 2,
      url: "https://medium.com/@vikasipar/understanding-redux-toolkit-a-practical-guide-with-an-e-commerce-application-938cf07d38a0",
      topic: "Redux Toolkit",
      title: "Understanding Redux Toolkit: A Practical Guide with an E-commerce Application",
      img: "/static/redux.jpg",
    },
    {
      id: 3,
      topic: "Recoil",
      url: "https://medium.com/@vikasipar/exploring-recoil-simplifying-state-management-in-react-projects-b19adbe3445b",
      title: "Exploring Recoil: Simplifying State Management in React Projects",
      img: "/static/recoil.png",
    },
    {
      id: 4,
      topic: "Router",
      url: "https://medium.com/@vikasipar/navigating-the-web-with-react-router-d68416bd79c8",
      title: "Navigating the Web with React Router",
      img: "/static/router.jpg",
    },
    {
      id: 5,
      topic: "Responsiveness",
      url: "https://medium.com/@vikasipar/flexbox-the-easiest-path-to-responsive-websites-688415a06c57",
      title: "Flexbox: The Easiest Path to Responsive Websites",
      img: "/static/responsive.png",
    },
  ];
  return (
    <div className='lg:w-[800px] lg:border-r border-b box-border'>
      <h1 className='m-5 text-2xl font-semibold'>Blog</h1>
      <div className='flex flex-wrap'>
      {
        blogdata.map((blog) => (
          <div key={blog.id} className='w-[45%] mx-auto border border-gray-300 px-2 py-2 my-3 hover:shadow rounded-lg'>
          <a href={blog.url} target='_blank' className='flex-col flex-wrap items-center'>
              <div className='w-[90%] mx-auto'>
                <img src={blog.img} alt={blog.title} className='rounded-lg'/>
              </div>
              <div className='w-[97%] mx-auto'>
                <h1 className='font-semibold text-[#333333] text-base border-t border-gray-300 pt-4 text-justify'>{blog.title}</h1>
              </div>
          </a>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Blog;