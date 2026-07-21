import ecommerceImg from '../assets/screenshots/ecommerce.png'
import eventbookingImg from '../assets/screenshots/eventbooking.png'
import frontcommerceImg from '../assets/screenshots/frontcommerce.png'
import frontcommerce1Img from '../assets/screenshots/frontcommerce1.png'
import proexamImg from '../assets/screenshots/proexam.png'
import whattowatch from '../assets/screenshots/whattowatch.png'

export const projects = [
      {
    id: 1,
    title: 'Event Booking System',
    description: 'Full-featured online booking system with ability to create, edit and delete events.',
    icon: '📝',
    screenshot: eventbookingImg,
    technologies: ['React', 'Flask', 'MySQL','TailwindCSS'],
    github: 'https://github.com/Real3dn/EventBookingSystem',
    live: 'https://real3dneventbooking.netlify.app/',
  },
  {
    id: 2,
    title: 'E-Commerce Application',
    description: 'Full Stack E-Commerce Web Application.',
    icon: '🛍️',
    screenshot: ecommerceImg,

    technologies: ['React', 'Flask', 'SQLite','TailwindCSS'],
    github: 'https://github.com/Real3dn/ECommerceApplication',
    live: null,
  },
      {
    id: 3,
    title: 'Pro Exam',
    description: 'AI-Powered Platform for Studying.',
    icon: '📚',
    screenshot: proexamImg,
    technologies: ['React',"Django","JWT","Vite","SQLite"],
    github: 'https://github.com/Real3dn/ProExam',
    //live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
        {
    id: 4,
    title: 'What To Watch',
    description: 'A Platform To Discover Movies.',
    icon: '📚',
    screenshot: whattowatch,
    technologies: ['React',"SQLite","RESTful API"],
    github: 'https://github.com/Real3dn/WhatToWatch',
    //live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
    {
    id: 5,
    title: 'E-Commerce Frontend',
    description: 'Online Store Front.',
    icon: '🛍️',
    screenshot: frontcommerceImg,
    technologies: ['React'],
    github: 'https://github.com/Real3dn/odin-shoppingcart',
    live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
  {
    id: 6,
    title: 'Sounder Recorder',
    description: 'Robust FLAC Voice Recorder',
    icon: '🎤',
    technologies: ['Python'],
    github: 'https://github.com/Real3dn/sound-recorder-python',
    live: null,
  },


  //   {
//     id: 4,
//     title: 'Task Management App',
//     description: 'Kanban-style project management tool with drag-and-drop, real-time updates, and team collaboration.',
//     icon: '✅',
//     technologies: ['React', 'Laravel', 'MySQL'],
//     github: 'https://github.com/johndoe/task-manager',
//     live: null,
//   },
//   {
//     id: 5,
//     title: 'Portfolio Website',
//     description: 'Modern developer portfolio with dark mode, animations, and responsive design.',
//     icon: '🎨',
//     technologies: ['React', 'CSS3', 'JavaScript'],
//     github: 'https://github.com/johndoe/portfolio',
//     live: 'https://johndoe.dev',
//   },
//   {
//     id: 6,
//     title: 'API Gateway Service',
//     description: 'Microservices API gateway with rate limiting, authentication, and request routing.',
//     icon: '🔌',
//     technologies: ['Flask', 'PHP', 'MySQL'],
//     github: 'https://github.com/johndoe/api-gateway',
//     live: null,
//   },
]