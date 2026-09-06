import ecommerceImg from '../assets/screenshots/ecommerce.png'
import eventbookingImg from '../assets/screenshots/eventbooking.png'
import frontcommerceImg from '../assets/screenshots/frontcommerce.png'
import frontcommerce1Img from '../assets/screenshots/frontcommerce1.png'
import proexamImg from '../assets/screenshots/proexam.png'
import whattowatch from '../assets/screenshots/whattowatch.png'
import carrentalimg from '../assets/screenshots/carrental.png'
import cyberpunkImg from '../assets/screenshots/cyberpunk.png'
import menuflowImg from '../assets/screenshots/menuflow_iq.png'
import digitalaquariumImg from '../assets/screenshots/digitalaquarium.png'
export const projects = [
  {
    id: 2,
    title: 'Event Booking System',
    description: 'Full-featured online booking system with ability to create, edit and delete events.',
    icon: '📝',
    screenshot: eventbookingImg,
    technologies: ['React', 'Flask', 'MySQL','TailwindCSS'],
    github: 'https://github.com/Real3dn/EventBookingSystem',
    live: 'https://real3dneventbooking.netlify.app/',
  },
  {
    id: 3,
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
    title: 'Digital Aquarium',
    description: 'Digital simulation of hunter and prey using Python.',
    icon: '📚',
    screenshot: digitalaquariumImg,
    technologies: ['Python'],
    github: 'https://github.com/Real3dn/digital-aquarium',
    //live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
  {
    id:6,
    title: 'Car Renting Management',
    description: "Full-Stack web application for managing cars",
    icon: '',
    screenshot: carrentalimg,
    technologies: ['React','Python','MySQL','TailwindCSS'],
    //github: '',
    
  },
    {
    id: 1,
    title: 'MenuFlow IQ - Restaurant SaaS',
    description: 'Smart Restaurant SaaS platform built for local restaurants in Iraq (Baghdad, Erbil, Basra). Features dual currency (IQD د.ع / USD $), bilingual AR/EN UI, instant WhatsApp order dispatch, live Kitchen Display Board (KDS), and revenue analytics.',
    icon: '🍲',
    screenshot: menuflowImg,
    technologies: ['JavaScript (ES6+)', 'Web Audio API', 'HTML5 Canvas', 'CSS Glassmorphism', 'Bilingual LTR/RTL', 'Vite'],
    github: 'https://github.com/Real3dn/menuflow-iq-saas',
    live: null,
  },
  {
    id: 2,
    title: 'Cyberpunk Command Center',
    description: 'Interactive Sci-Fi HUD & Audio/Visual Studio featuring Web Audio API sound synthesizer, 60 FPS HTML5 Canvas particle visualizer, live telemetry monitoring, tactical radar, and an interactive Cyber Terminal CLI.',
    icon: '⚡',
    screenshot: cyberpunkImg,
    technologies: ['JavaScript (ES6+)', 'Web Audio API', 'HTML5 Canvas', 'CSS Glassmorphism', 'Vite'],
    github: 'https://github.com/Real3dn/cyberpunk-command-center',
    live: null,
  },
    {
    id: 6,
    title: 'E-Commerce Frontend',
    description: 'Online Store Front.',
    icon: '🛍️',
    screenshot: frontcommerceImg,
    technologies: ['React'],
    github: 'https://github.com/Real3dn/odin-shoppingcart',
    live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
  {
    id: 7,
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
