export const PROJECTS = [
  {
    id: 1,
    slug: "association-website",

    // Hero
    name: "Association Website",

    subtitle:
      "A modern platform for managing members, events and registrations.",

    desc: "A website for organizing association members, events and registrations.",

    overview:
      "The Association Website was built to digitize the organization's workflow. Instead of managing members and events manually, administrators can create events, approve registrations, manage members and publish announcements through an intuitive dashboard. The project focuses on simplicity, accessibility and responsiveness while providing a scalable foundation for future features.",

    image: "/rokay.png",

    gallery: [
      "/rokay.png",
      "/rokay-dashboard.png",
      "/rokay-members.png",
      "/rokay-events.png",
    ],

    category: "Full Stack",

    date: "February 2026",

    duration: "3 Months",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://rokaichabab.vercel.app/",

    github: "https://github.com/Noufel-sf/Rokai_website",

    metrics: [
      {
        title: "Pages",
        value: "15+",
      },
      {
        title: "Components",
        value: "45+",
      },
      {
        title: "Responsive",
        value: "100%",
      },
      {
        title: "Development",
        value: "3 Months",
      },
    ],

    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],

      backend: ["Node.js", "Express.js"],

      database: ["MongoDB"],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Authentication",
        description: "Secure authentication system for administrators.",
      },

      {
        title: "Member Management",
        description: "Create, update and manage association members.",
      },

      {
        title: "Event Management",
        description: "Publish and organize association events.",
      },

      {
        title: "Registration System",
        description: "Users can register for events through an easy workflow.",
      },

      {
        title: "Responsive Design",
        description: "Optimized for desktop, tablet and mobile devices.",
      },

      {
        title: "Modern UI",
        description: "Clean interface with reusable React components.",
      },
    ],

    architecture: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],

      backend: ["Express.js", "REST API"],

      database: ["MongoDB"],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Keeping the project scalable while adding new features.",

        solution:
          "Designed reusable components and separated business logic from presentation.",
      },

      {
        problem: "Managing different administrator workflows.",

        solution: "Created reusable CRUD patterns that simplify maintenance.",
      },

      {
        problem: "Responsive layouts for multiple screen sizes.",

        solution: "Built a mobile-first UI using Tailwind CSS.",
      },
    ],

    learnings: [
      "Designing scalable React applications.",
      "Structuring reusable UI components.",
      "Improving responsive design skills.",
      "Building maintainable CRUD systems.",
    ],
  },

  {
    id: 2,

    slug: "library-management-api",

    name: "Library Management System API",

    subtitle:
      "A production-ready REST API for managing books, users and borrowing operations.",

    desc: "A scalable REST API built with NestJS, PostgreSQL and Redis.",

    overview:
      "The Library Management System API provides a robust backend for handling books, members, borrowing transactions and authentication. It follows a clean architecture using NestJS modules and integrates PostgreSQL through Prisma while Redis improves performance through caching. The project emphasizes scalability, security and maintainability.",

    image: "/b1.jpg",

    gallery: [
      "/b1.jpg",
      "/library-swagger.png",
      "/library-db.png",
      "/library-api.png",
    ],

    category: "Backend",

    date: "March 2026",

    duration: "2 Months",

    role: "Backend Developer",

    status: "Completed",

    preview: "https://github.com/Noufel-sf/nest_redis_library_system",

    github: "https://github.com/Noufel-sf/nest_redis_library_system",

    metrics: [
      {
        title: "REST Endpoints",
        value: "30+",
      },

      {
        title: "Modules",
        value: "10",
      },

      {
        title: "Database",
        value: "PostgreSQL",
      },

      {
        title: "Caching",
        value: "Redis",
      },
    ],

    tech: {
      frontend: [],

      backend: ["NestJS", "Node.js", "REST API", "JWT"],

      database: ["PostgreSQL", "Prisma ORM"],

      deployment: ["Redis", "Neon Database"],
    },

    features: [
      {
        title: "JWT Authentication",
        description: "Secure authentication and protected endpoints.",
      },

      {
        title: "Book Management",
        description: "Full CRUD operations for books.",
      },

      {
        title: "User Management",
        description: "Manage library members and permissions.",
      },

      {
        title: "Borrowing System",
        description: "Track book borrowing and return operations.",
      },

      {
        title: "Redis Caching",
        description: "Reduce database queries for frequently accessed data.",
      },

      {
        title: "Modular Architecture",
        description: "Independent NestJS modules improve maintainability.",
      },
    ],

    architecture: {
      frontend: [],

      backend: ["NestJS", "Node.js", "REST API"],

      database: ["PostgreSQL", "Prisma ORM"],

      deployment: ["Redis", "Neon"],
    },

    challenges: [
      {
        problem: "Designing a scalable backend architecture.",

        solution:
          "Used NestJS modules and dependency injection to isolate business logic.",
      },

      {
        problem: "Improving response performance.",

        solution:
          "Integrated Redis caching to reduce repeated database queries.",
      },

      {
        problem: "Maintaining database consistency.",

        solution: "Used Prisma ORM with PostgreSQL relations and validation.",
      },
    ],

    learnings: [
      "Building scalable NestJS applications.",
      "Working with dependency injection.",
      "Designing relational databases.",
      "Using Redis for performance optimization.",
      "Structuring production-ready REST APIs.",
    ],
  },

  {
    id: 3,

    slug: "developer-portfolio",

    name: "Developer Portfolio",

    subtitle:
      "A modern portfolio built to showcase projects, skills and professional experience.",

    desc: "A personal portfolio website with modern animations and responsive design.",

    overview:
      "This portfolio was designed to represent my work as a software engineer while providing visitors with an engaging browsing experience. Instead of using traditional templates, I focused on creating smooth interactions, reusable components and carefully crafted layouts. The project highlights my technical skills, featured projects and professional journey while maintaining excellent performance across all devices.",

    image: "/p2.jpg",

    gallery: [
      "/p2.jpg",
      "/portfolio-home.png",
      "/portfolio-projects.png",
      "/portfolio-contact.png",
    ],

    category: "Frontend",

    date: "2026",

    duration: "1 Month",

    role: "UI Designer & Frontend Developer",

    status: "Completed",

    preview: "https://abdou-portfolio-tau.vercel.app/",

    github: "https://github.com/Noufel-sf/Abdou_portfolio",

    metrics: [
      {
        title: "Pages",
        value: "8",
      },
      {
        title: "Animations",
        value: "30+",
      },
      {
        title: "Performance",
        value: "98",
      },
      {
        title: "Responsive",
        value: "100%",
      },
    ],

    tech: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Project Showcase",
        description: "Displays featured projects with smooth navigation.",
      },

      {
        title: "Modern Animations",
        description: "Built using GSAP and Framer Motion.",
      },

      {
        title: "Responsive Layout",
        description: "Optimized for every screen size.",
      },

      {
        title: "SEO",
        description: "Search engine optimized pages.",
      },

      {
        title: "Interactive UI",
        description: "Micro interactions improve user engagement.",
      },

      {
        title: "Performance",
        description: "Optimized assets and lazy loading.",
      },
    ],

    architecture: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Creating a portfolio that stands out from common templates.",

        solution:
          "Designed custom layouts and implemented smooth animations with reusable components.",
      },

      {
        problem: "Keeping animations smooth without affecting performance.",

        solution: "Optimized animation timing and lazy-loaded assets.",
      },

      {
        problem: "Maintaining responsiveness while preserving visual quality.",

        solution: "Adopted a mobile-first design approach using Tailwind CSS.",
      },
    ],

    learnings: [
      "Advanced animation techniques with GSAP.",
      "Creating reusable UI components.",
      "Improving accessibility and SEO.",
      "Building polished user experiences.",
    ],
  },

  {
    id: 4,

    slug: "social-media-platform",

    name: "Social Media Platform",

    subtitle:
      "A full-stack social networking platform with real-time communication and interactive user features.",

    desc: "A MERN-based social media platform where users can create posts, connect with friends and interact in real time.",

    overview:
      "The Social Media Platform was built to simulate a real-world social networking application. Users can register, authenticate securely, publish posts, like and comment on content, and communicate through real-time updates. The application combines REST APIs with Socket.IO to provide an engaging experience similar to modern social platforms.",

    image: "/p3.png",

    gallery: [
      "/p3.png",
      "/social-feed.png",
      "/social-profile.png",
      "/social-chat.png",
    ],

    category: "Full Stack",

    date: "2025",

    duration: "4 Months",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://github.com/Noufel-sf/Social_mediaApp",

    github: "https://github.com/Noufel-sf/Social_mediaApp",

    metrics: [
      {
        title: "REST APIs",
        value: "25+",
      },
      {
        title: "Real-Time",
        value: "Socket.IO",
      },
      {
        title: "Database",
        value: "MongoDB",
      },
      {
        title: "Modules",
        value: "15+",
      },
    ],

    tech: {
      frontend: ["React", "Tailwind CSS"],

      backend: [
        "Express.js",
        "Node.js",
        "Socket.IO",
        "REST API",
        "Express Session",
      ],

      database: ["MongoDB"],

      deployment: [],
    },

    features: [
      {
        title: "Authentication",
        description: "Secure user registration and login.",
      },

      {
        title: "User Profiles",
        description: "Personal profiles with editable information.",
      },

      {
        title: "Posts",
        description: "Create, edit and delete posts.",
      },

      {
        title: "Likes & Comments",
        description: "Users can interact with posts in real time.",
      },

      {
        title: "Real-Time Communication",
        description: "Socket.IO updates content instantly without refreshing.",
      },

      {
        title: "Responsive Interface",
        description: "Fully responsive social feed experience.",
      },
    ],

    architecture: {
      frontend: ["React", "Tailwind CSS"],

      backend: ["Node.js", "Express", "Socket.IO"],

      database: ["MongoDB"],

      deployment: [],
    },

    challenges: [
      {
        problem: "Synchronizing data between connected users.",

        solution: "Integrated Socket.IO to broadcast updates instantly.",
      },

      {
        problem: "Managing authentication sessions securely.",

        solution:
          "Implemented Express Session middleware with protected routes.",
      },

      {
        problem: "Keeping the codebase organized as features increased.",

        solution:
          "Separated controllers, routes, middleware and services into reusable modules.",
      },
    ],

    learnings: [
      "Building real-time applications with Socket.IO.",
      "Managing authentication and sessions.",
      "Structuring scalable MERN applications.",
      "Handling complex application state.",
    ],
  },
  {
  id: 5,

  slug: "restaurant-reservation-system",

  name: "Restaurant Reservation System",

  subtitle:
    "A modern full-stack restaurant platform for reservations, online ordering and menu management.",

  desc:
    "A restaurant management platform built with Next.js, PostgreSQL and Drizzle ORM.",

  overview:
    "The Restaurant Reservation System was developed to modernize restaurant operations by allowing customers to browse the menu, reserve tables and place food orders online. The application includes a responsive customer interface and a scalable backend powered by PostgreSQL and Drizzle ORM. The project focuses on performance, user experience and maintainability while demonstrating modern full-stack development with Next.js.",

  image: "/r2.png",

  gallery: [
    "/r2.png",
    "/restaurant-menu.png",
    "/restaurant-booking.png",
    "/restaurant-dashboard.png",
  ],

  category: "Full Stack",

  date: "2025",

  duration: "3 Months",

  role: "Full Stack Developer",

  status: "Completed",

  preview: "https://github.com/Noufel-sf/Restorent_postgress",

  github: "https://github.com/Noufel-sf/Restorent_postgress",

  metrics: [
    {
      title: "Pages",
      value: "18",
    },
    {
      title: "Database",
      value: "PostgreSQL",
    },
    {
      title: "Reservations",
      value: "Online",
    },
    {
      title: "Responsive",
      value: "100%",
    },
  ],

  tech: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    backend: [
      "Next.js API",
      "Drizzle ORM",
    ],

    database: [
      "PostgreSQL",
    ],

    deployment: [
      "Vercel",
    ],
  },

  features: [
    {
      title: "Restaurant Menu",
      description:
        "Browse food categories and menu items.",
    },

    {
      title: "Table Reservation",
      description:
        "Reserve restaurant tables online.",
    },

    {
      title: "Online Ordering",
      description:
        "Customers can place food orders digitally.",
    },

    {
      title: "Responsive Design",
      description:
        "Optimized for desktop and mobile devices.",
    },

    {
      title: "Animated UI",
      description:
        "Smooth page transitions using Framer Motion.",
    },

    {
      title: "Modern Database",
      description:
        "Efficient relational data management using PostgreSQL.",
    },
  ],

  architecture: {
    frontend: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    backend: [
      "Next.js API Routes",
      "Drizzle ORM",
    ],

    database: [
      "PostgreSQL",
    ],

    deployment: [
      "Vercel",
    ],
  },

  challenges: [
    {
      problem:
        "Designing an intuitive reservation workflow.",

      solution:
        "Created a streamlined booking experience with clear validation and user feedback.",
    },

    {
      problem:
        "Managing relational restaurant data.",

      solution:
        "Used PostgreSQL with Drizzle ORM for type-safe database operations.",
    },

    {
      problem:
        "Maintaining responsiveness while displaying rich content.",

      solution:
        "Adopted a mobile-first design using Tailwind CSS.",
    },
  ],

  learnings: [
    "Building production-ready applications with Next.js.",
    "Working with Drizzle ORM.",
    "Designing relational database schemas.",
    "Creating responsive booking experiences.",
  ],
},

{
  id: 6,

  slug: "dz-young-leaders",

  name: "DZ Young Leaders",

  subtitle:
    "A modern landing website introducing the DZ Young Leaders initiative and its mission.",

  desc:
    "A responsive website presenting the DZ Young Leaders project with engaging animations.",

  overview:
    "This project was developed to present the DZ Young Leaders initiative through a clean and modern user experience. The website highlights the organization's mission, objectives, team and activities while providing visitors with an engaging browsing experience powered by GSAP animations and responsive layouts.",

  image: "/khadijahome.png",

  gallery: [
    "/khadijahome.png",
    "/khadija-about.png",
    "/khadija-team.png",
    "/khadija-contact.png",
  ],

  category: "Frontend",

  date: "2026",

  duration: "1 Month",

  role: "Frontend Developer",

  status: "Completed",

  preview: "https://rowad-chabab.vercel.app/",

  github: "https://rowad-chabab.vercel.app/",

  metrics: [
    {
      title: "Sections",
      value: "10",
    },
    {
      title: "Animations",
      value: "25+",
    },
    {
      title: "Performance",
      value: "97",
    },
    {
      title: "Responsive",
      value: "100%",
    },
  ],

  tech: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    backend: [],

    database: [],

    deployment: [
      "Vercel",
    ],
  },

  features: [
    {
      title: "Modern Landing Page",
      description:
        "Beautiful hero section introducing the project.",
    },

    {
      title: "Storytelling Layout",
      description:
        "Content organized to guide visitors naturally through the website.",
    },

    {
      title: "GSAP Animations",
      description:
        "Smooth scroll-based animations improve user engagement.",
    },

    {
      title: "Responsive Design",
      description:
        "Fully optimized for mobile, tablet and desktop.",
    },

    {
      title: "SEO Friendly",
      description:
        "Built with Next.js for better indexing and performance.",
    },

    {
      title: "Reusable Components",
      description:
        "Modular UI components improve maintainability.",
    },
  ],

  architecture: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    backend: [],

    database: [],

    deployment: [
      "Vercel",
    ],
  },

  challenges: [
    {
      problem:
        "Balancing rich animations with website performance.",

      solution:
        "Optimized GSAP timelines and animated only visible elements.",
    },

    {
      problem:
        "Creating a professional visual identity.",

      solution:
        "Designed reusable layouts with consistent spacing and typography.",
    },

    {
      problem:
        "Ensuring responsiveness across devices.",

      solution:
        "Used Tailwind CSS with a mobile-first approach.",
    },
  ],

  learnings: [
    "Advanced GSAP animation techniques.",
    "Building landing pages focused on storytelling.",
    "Improving UI consistency.",
    "Optimizing performance in animated websites.",
  ],
},
{
  id: 5,

  slug: "restaurant-reservation-system",

  name: "Restaurant Reservation System",

  subtitle:
    "A modern full-stack restaurant platform for reservations, online ordering and menu management.",

  desc:
    "A restaurant management platform built with Next.js, PostgreSQL and Drizzle ORM.",

  overview:
    "The Restaurant Reservation System was developed to modernize restaurant operations by allowing customers to browse the menu, reserve tables and place food orders online. The application includes a responsive customer interface and a scalable backend powered by PostgreSQL and Drizzle ORM. The project focuses on performance, user experience and maintainability while demonstrating modern full-stack development with Next.js.",

  image: "/r2.png",

  gallery: [
    "/r2.png",
    "/restaurant-menu.png",
    "/restaurant-booking.png",
    "/restaurant-dashboard.png",
  ],

  category: "Full Stack",

  date: "2025",

  duration: "3 Months",

  role: "Full Stack Developer",

  status: "Completed",

  preview: "https://github.com/Noufel-sf/Restorent_postgress",

  github: "https://github.com/Noufel-sf/Restorent_postgress",

  metrics: [
    {
      title: "Pages",
      value: "18",
    },
    {
      title: "Database",
      value: "PostgreSQL",
    },
    {
      title: "Reservations",
      value: "Online",
    },
    {
      title: "Responsive",
      value: "100%",
    },
  ],

  tech: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    backend: [
      "Next.js API",
      "Drizzle ORM",
    ],

    database: [
      "PostgreSQL",
    ],

    deployment: [
      "Vercel",
    ],
  },

  features: [
    {
      title: "Restaurant Menu",
      description:
        "Browse food categories and menu items.",
    },

    {
      title: "Table Reservation",
      description:
        "Reserve restaurant tables online.",
    },

    {
      title: "Online Ordering",
      description:
        "Customers can place food orders digitally.",
    },

    {
      title: "Responsive Design",
      description:
        "Optimized for desktop and mobile devices.",
    },

    {
      title: "Animated UI",
      description:
        "Smooth page transitions using Framer Motion.",
    },

    {
      title: "Modern Database",
      description:
        "Efficient relational data management using PostgreSQL.",
    },
  ],

  architecture: {
    frontend: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],

    backend: [
      "Next.js API Routes",
      "Drizzle ORM",
    ],

    database: [
      "PostgreSQL",
    ],

    deployment: [
      "Vercel",
    ],
  },

  challenges: [
    {
      problem:
        "Designing an intuitive reservation workflow.",

      solution:
        "Created a streamlined booking experience with clear validation and user feedback.",
    },

    {
      problem:
        "Managing relational restaurant data.",

      solution:
        "Used PostgreSQL with Drizzle ORM for type-safe database operations.",
    },

    {
      problem:
        "Maintaining responsiveness while displaying rich content.",

      solution:
        "Adopted a mobile-first design using Tailwind CSS.",
    },
  ],

  learnings: [
    "Building production-ready applications with Next.js.",
    "Working with Drizzle ORM.",
    "Designing relational database schemas.",
    "Creating responsive booking experiences.",
  ],
},

{
  id: 6,

  slug: "dz-young-leaders",

  name: "DZ Young Leaders",

  subtitle:
    "A modern landing website introducing the DZ Young Leaders initiative and its mission.",

  desc:
    "A responsive website presenting the DZ Young Leaders project with engaging animations.",

  overview:
    "This project was developed to present the DZ Young Leaders initiative through a clean and modern user experience. The website highlights the organization's mission, objectives, team and activities while providing visitors with an engaging browsing experience powered by GSAP animations and responsive layouts.",

  image: "/khadijahome.png",
  category: "Frontend",

  date: "2026",

  duration: "1 Month",

  role: "Frontend Developer",

  status: "Completed",

  preview: "https://rowad-chabab.vercel.app/",

  github: "https://rowad-chabab.vercel.app/",

  metrics: [
    {
      title: "Sections",
      value: "10",
    },
    {
      title: "Animations",
      value: "25+",
    },
    {
      title: "Performance",
      value: "97",
    },
    {
      title: "Responsive",
      value: "100%",
    },
  ],

  tech: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    backend: [],

    database: [],

    deployment: [
      "Vercel",
    ],
  },

  features: [
    {
      title: "Modern Landing Page",
      description:
        "Beautiful hero section introducing the project.",
    },

    {
      title: "Storytelling Layout",
      description:
        "Content organized to guide visitors naturally through the website.",
    },

    {
      title: "GSAP Animations",
      description:
        "Smooth scroll-based animations improve user engagement.",
    },

    {
      title: "Responsive Design",
      description:
        "Fully optimized for mobile, tablet and desktop.",
    },

    {
      title: "SEO Friendly",
      description:
        "Built with Next.js for better indexing and performance.",
    },

    {
      title: "Reusable Components",
      description:
        "Modular UI components improve maintainability.",
    },
  ],

  architecture: {
    frontend: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
    ],

    backend: [],

    database: [],

    deployment: [
      "Vercel",
    ],
  },

  challenges: [
    {
      problem:
        "Balancing rich animations with website performance.",

      solution:
        "Optimized GSAP timelines and animated only visible elements.",
    },

    {
      problem:
        "Creating a professional visual identity.",

      solution:
        "Designed reusable layouts with consistent spacing and typography.",
    },

    {
      problem:
        "Ensuring responsiveness across devices.",

      solution:
        "Used Tailwind CSS with a mobile-first approach.",
    },
  ],

  learnings: [
    "Advanced GSAP animation techniques.",
    "Building landing pages focused on storytelling.",
    "Improving UI consistency.",
    "Optimizing performance in animated websites.",
  ],
},
];
