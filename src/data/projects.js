import ecommerceImg from '../assets/screenshots/ecommerce.png'
import eventbookingImg from '../assets/screenshots/eventbooking.png'
import frontcommerceImg from '../assets/screenshots/frontcommerce.png'
import proexamImg from '../assets/screenshots/proexam.png'
import whattowatch from '../assets/screenshots/whattowatch.png'
import carrentalimg from '../assets/screenshots/carrental.png'
import cyberpunkImg from '../assets/screenshots/cyberpunk.png'
import menuflowImg from '../assets/screenshots/menuflow_iq.png'
import digitalaquariumImg from '../assets/screenshots/digitalaquarium.png'

export const projects = [
  {
    id: 1,
    title: 'MenuFlow IQ',
    category: 'Restaurant Platform',
    description: 'Bilingual restaurant ordering platform with dual-currency support (IQD / USD), WhatsApp dispatch, and live Kitchen Display interface.',
    screenshot: menuflowImg,
    technologies: ['JavaScript', 'HTML5 Canvas', 'Web Audio API', 'Vite'],
    github: 'https://github.com/Real3dn/menuflow-iq-saas',
    live: null,
  },
  {
    id: 2,
    title: 'Event Booking System',
    category: 'Full-Stack Management',
    description: 'Online booking platform with calendar event creation, seat scheduling, and relational database management.',
    screenshot: eventbookingImg,
    technologies: ['React', 'Flask', 'MySQL', 'TailwindCSS'],
    github: 'https://github.com/Real3dn/EventBookingSystem',
    live: 'https://real3dneventbooking.netlify.app/',
  },

  {
    id: 4,
    title: 'Pro Exam',
    category: 'Study Platform',
    description: 'Web testing and study workspace with secure JWT authentication, session handling, and relational question storage.',
    screenshot: proexamImg,
    technologies: ['React', 'Django', 'JWT', 'SQLite'],
    github: 'https://github.com/Real3dn/ProExam',
    live: null,
  },
  {
    id: 5,
    title: 'E-Commerce Application',
    category: 'E-Commerce',
    description: 'Full-stack store application featuring product catalog management, shopping cart state, and order workflows.',
    screenshot: ecommerceImg,
    technologies: ['React', 'Flask', 'SQLite', 'TailwindCSS'],
    github: 'https://github.com/Real3dn/ECommerceApplication',
    live: null,
  },
  {
    id: 6,
    title: 'Car Rental Management',
    category: 'Fleet Management',
    description: 'Database-driven vehicle management system with vehicle availability tracking and rental records.',
    screenshot: carrentalimg,
    technologies: ['React', 'Python', 'MySQL', 'TailwindCSS'],
    github: null,
    live: null,
  },
  {
    id: 7,
    title: 'What To Watch',
    category: 'Media Discovery',
    description: 'Media discovery client querying RESTful APIs with filtering, search categorization, and local favorites.',
    screenshot: whattowatch,
    technologies: ['React', 'RESTful API', 'SQLite'],
    github: 'https://github.com/Real3dn/WhatToWatch',
    live: null,
  },
  {
    id: 8,
    title: 'Digital Aquarium',
    category: 'Simulation',
    description: 'Autonomous multi-agent simulation modeling predator-prey behavioral patterns in Python.',
    screenshot: digitalaquariumImg,
    technologies: ['Python'],
    github: 'https://github.com/Real3dn/digital-aquarium',
    live: null,
  },
    {
    id: 8,
    title: 'Cyberpunk Command Center',
    category: 'Interactive Audio/Visual',
    description: 'Browser audio synthesizer and 60 FPS canvas visualizer featuring telemetry gauges and an interactive command interface.',
    screenshot: cyberpunkImg,
    technologies: ['JavaScript', 'Web Audio API', 'HTML5 Canvas', 'Vite'],
    github: 'https://github.com/Real3dn/cyberpunk-command-center',
    live: null,
  },
  {
    id: 9,
    title: 'Shopping Cart Frontend',
    category: 'Frontend Client',
    description: 'Modular storefront frontend featuring dynamic cart calculations and product filtering.',
    screenshot: frontcommerceImg,
    technologies: ['React', 'CSS3', 'Vite'],
    github: 'https://github.com/Real3dn/odin-shoppingcart',
    live: 'https://poetic-khapse-f62ada.netlify.app/home',
  },
  {
    id: 10,
    title: 'Sound Recorder',
    category: 'Audio Utility',
    description: 'Desktop voice recording utility featuring high-fidelity FLAC audio compression implemented in Python.',
    screenshot: null,
    technologies: ['Python'],
    github: 'https://github.com/Real3dn/sound-recorder-python',
    live: null,
  },
]
