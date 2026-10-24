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
    images: [
      "/rokay.png",
      "/rockay2.PNG",
      "/rockay3.PNG",
      "/rockay4.PNG",
      "/rockay5.PNG"
    ],

    category: "full Stack",

    date: "February 2026",

    duration: "3 Months",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://rokaichabab.vercel.app/",

    github: "https://github.com/Noufel-sf/Rokai_website",

    

    tech: {
      frontend: ["React", "TypeScript", "Tailwind CSS"],

      backend: ["Node.js", "Express.js"],

      database: ["MongoDB"],

      deployment: ["Vercel" , "hostinger domain" , "Dz security"],
    },

    features: [
      // {
      //   title: "Authentication",
      //   description: "Secure authentication system for administrators.",
      // },

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
    images: [
      "/nothosted.png",
      "/nothosted.png",
      "/nothosted.png",
      "/nothosted.png",
      "/nothosted.png"
    ],

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
    id: 9,

    slug: "Full stack E-commerce & job matching platform",

    name: "Ecommerce & job matching platform",

    subtitle:
      "A modern full-stack e-commerce & job matching platform like wad kniss.",

    desc: "A ecommerce and job matching platform built with Next.js, TypeScript, PostgreSQL, Spring Boot and Cloudinary.",

    overview:
      "The platform allows customers to browse products, add them to their cart, and complete purchases online while offering job matching listings. The application includes a responsive customer interface and a scalable backend powered by PostgreSQL and Spring Boot. The project focuses on performance, user experience and maintainability while demonstrating modern full-stack development with Next.js.",

    image: "/Sauqli.png",
    images: [
      "/Sauqli.png",
      "/so2.PNG",
      "/so3.PNG",
      "/so4.PNG",
      "/so5.PNG"
    ],
  
    category: "full Stack",

    date: "2026",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://www.souaqlidz.shop/",

    github: "https://www.souaqlidz.shop/",

    tech: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI"],

      backend: ["Cloudinary", "Spring boot" ],

      database: ["PostgreSQL"],

      deployment: ["Dz security" , "Vercel" ],
    },

    features: [
      {
        title: "Job Matching",
        description: "Browse job listings and apply directly.",
      },

      {
        title: "Online Ordering",
        description: "Customers can place food orders digitally.",
      },

      {
        title: "Responsive Design",
        description: "Optimized for desktop and mobile devices.",
      },

      {
        title: "Admin Dashboards",
        description: "Manage products, orders and job listings with ease.",
      },

      {
        title: "Modern Database",
        description: "Efficient relational data management using PostgreSQL.",
      },
      {
        title: "Secure Authentication",
        description: "Implementing robust user authentication and authorization.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],

      backend: ["Next.js API Routes", "Drizzle ORM", "Spring boot"],

      database: ["PostgreSQL"],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Designing an intuitive ordering workflow.",

        solution:
          "Created a streamlined booking experience with clear validation and user feedback.",
      },

      {
        problem: "Managing relational website data.",

        solution:
          "Used Spring boot and PostgreSQL for type-safe database operations.",
      },

      {
        problem: "Maintaining responsiveness while displaying rich content.",

        solution: "Adopted a mobile-first design using Tailwind CSS.",
      },
      {
        problem: "Server-side rendering and SEO optimization.",

        solution: "Implemented Next.js SSR features and optimized meta tags for better search engine visibility.",
      },
    ],

    learnings: [
      "Building production-ready applications with Next.js.",
      "Working with ShadCn UI and Tailwind CSS for responsive design.",
      "Implementing secure authentication and authorization.",
      "Seo optimization and server-side rendering techniques.",
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
      "The Social Media Platform was built to simulate a real-world social networking application. The full system was developed with a complete backend (Node.js, Express, Socket.IO, MongoDB). Because the live backend is not hosted on a remote cluster, an interactive client-side LocalStorage database layer is implemented for the live demo so visitors can test creating posts, profiles, and real-time UI interactions live.",

    notice:
      "Full-Stack Architecture Note: Built with a complete backend & database (Node.js, Express, Socket.IO, MongoDB). For the live demo deployment, since the backend server is not hosted remotely, an interactive client-side LocalStorage database is implemented to allow testing all posting, profile, and interaction features seamlessly.",

    image: "/p3.png",
    images: [
      "/p3.png",
      "/social2.PNG",
      "/social3.PNG",
      "/social4.PNG",
      "/social5.PNG",
    ],

    category: "full Stack",

    date: "2025",

    duration: "4 Months",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://social-media-app-chi-umber.vercel.app/",

    github: "https://github.com/Noufel-sf/Social_mediaApp",

    tech: {
      frontend: ["React", "Tailwind CSS"],

      backend: [
        "Express.js",
        "Node.js",
        "Socket.IO",
        "REST API",
        "Express Session",
      ],

      database: ["MongoDB", "LocalStorage (Demo Fallback)"],

      deployment: ["Vercel (Client Demo)"],
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

      database: ["MongoDB", "LocalStorage"],

      deployment: ["Vercel"],
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
        problem: "Demonstrating dynamic database persistence on unhosted live demo.",

        solution:
          "Engineered a resilient LocalStorage client-side database simulation that mirrors the MongoDB data structure.",
      },
    ],

    learnings: [
      "Building real-time applications with Socket.IO.",
      "Managing authentication and sessions.",
      "Structuring scalable MERN applications.",
      "Handling complex application state and client-side database adapters.",
    ],
  },
  {
    id: 5,

    slug: "restaurant-reservation-system",

    name: "Restaurant Reservation System",

    subtitle:
      "A modern full-stack restaurant platform for reservations, online ordering and menu management.",

    desc: "A restaurant management platform built with Next.js, PostgreSQL and Drizzle ORM.",

    overview:
      "The Restaurant Reservation System was developed to modernize restaurant operations by allowing customers to browse the menu, reserve tables and place food orders online. The application was built with a complete backend and real database powered by PostgreSQL and Drizzle ORM. Because the backend is not hosted on a remote cluster for the live demo, a full client-side LocalStorage database was implemented so all reservations, cart flows, and ordering can be actively tested.",

    notice:
      "Full-Stack Architecture Note: Developed with a full backend and real database (PostgreSQL with Drizzle ORM). Because the live backend is not hosted on a remote server, an interactive LocalStorage mock database layer is implemented for the live demo so visitors can test reservations, menu filtering, and ordering workflows end-to-end.",

    image: "/r2.png",
    images: [
      "/food1.PNG",
      "/food2.PNG",
      "/food3.PNG",
      "/food4.PNG",
      "/food5.PNG"
    ],
  
    category: "full Stack",

    date: "2025",

    role: "Full Stack Developer",

    status: "Completed",

    preview: "https://restorent-postgress-taxf.vercel.app/",

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
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],

      backend: ["Next.js API", "Drizzle ORM"],

      database: ["PostgreSQL", "LocalStorage (Demo Fallback)"],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Restaurant Menu",
        description: "Browse food categories and menu items.",
      },

      {
        title: "Online Ordering",
        description: "Customers can place food orders digitally.",
      },

      {
        title: "Responsive Design",
        description: "Optimized for desktop and mobile devices.",
      },

      {
        title: "Animated UI",
        description: "Smooth page transitions using Framer Motion.",
      },

      {
        title: "Modern Database",
        description: "Efficient relational data management using PostgreSQL & LocalStorage fallback.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],

      backend: ["Next.js API Routes", "Drizzle ORM"],

      database: ["PostgreSQL", "LocalStorage"],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Designing an intuitive reservation workflow.",

        solution:
          "Created a streamlined booking experience with clear validation and user feedback.",
      },

      {
        problem: "Managing relational restaurant data on live unhosted demo.",

        solution:
          "Built a LocalStorage data adapter simulating PostgreSQL relational queries for seamless client interaction.",
      },

      {
        problem: "Maintaining responsiveness while displaying rich content.",

        solution: "Adopted a mobile-first design using Tailwind CSS.",
      },
    ],

    learnings: [
      "Building production-ready applications with Next.js.",
      "Working with Drizzle ORM.",
      "Designing relational database schemas.",
      "Creating responsive booking experiences and client-side persistence fallback.",
    ],
  },

  {
    id: 6,

    slug: "dz-young-leaders",

    name: "DZ Young Leaders project",

    subtitle:
      "A modern landing website introducing the DZ Young Leaders initiative and its mission.",

    desc: "A responsive website presenting the DZ Young Leaders project with engaging animations.",

    overview:
      "This project was developed to present the DZ Young Leaders initiative through a clean and modern user experience. The website highlights the organization's mission, objectives, team and activities while providing visitors with an engaging browsing experience powered by GSAP animations and responsive layouts.",

    image: "/khadijahome.png",
    images: [
      "/khadijahome.png",
      "/kh2.PNG",
      "/kh3.PNG",
      "/kh4.PNG",
      "/kh5.PNG"
    ],

    category: "Frontend",

    date: "2026",


    role: "Frontend Developer",

    status: "Completed",

    preview: "https://rowad-chabab.vercel.app/",

    github: "https://rowad-chabab.vercel.app/",

  

    tech: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Modern Landing Page",
        description: "Beautiful hero section introducing the project.",
      },

      {
        title: "Storytelling Layout",
        description:
          "Content organized to guide visitors naturally through the website.",
      },

      {
        title: "GSAP Animations",
        description: "Smooth scroll-based animations improve user engagement.",
      },

      {
        title: "Responsive Design",
        description: "Fully optimized for mobile, tablet and desktop.",
      },

      {
        title: "SEO Friendly",
        description: "Built with Next.js for better indexing and performance.",
      },

      {
        title: "Reusable Components",
        description: "Modular UI components improve maintainability.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Balancing rich animations with website performance.",

        solution:
          "Optimized GSAP timelines and animated only visible elements.",
      },

      {
        problem: "Creating a professional visual identity.",

        solution:
          "Designed reusable layouts with consistent spacing and typography.",
      },

      {
        problem: "Ensuring responsiveness across devices.",

        solution: "Used Tailwind CSS with a mobile-first approach.",
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
    id: 7,

    slug: "dz-young-leaders",

    name: "DZ Young Leaders project",

    subtitle:
      "A modern landing website introducing the DZ Young Leaders initiative and its mission.",

    desc: "A responsive website presenting the DZ Young Leaders project with engaging animations.",

    overview:
      "This project was developed to present the DZ Young Leaders initiative through a clean and modern user experience. The website highlights the organization's mission, objectives, team and activities while providing visitors with an engaging browsing experience powered by GSAP animations and responsive layouts.",

    image: "/ilyas1.PNG",
    images: [
      "/ilyas1.PNG",
      "/ilyas2.PNG",
      "/ilyas3.PNG",
      "/ilyas4.PNG",
      "/ilyas5.PNG"
    ],
    category: "Frontend",

    date: "2026",

    duration: "1 Month",

    role: "Frontend Developer",

    status: "Completed",

    preview:  "https://i-bawsala.vercel.app/",

    github: "https://i-bawsala.vercel.app/",

   

    tech: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Modern Landing Page",
        description: "Beautiful hero section introducing the project.",
      },

      {
        title: "Storytelling Layout",
        description:
          "Content organized to guide visitors naturally through the website.",
      },

     

      {
        title: "Responsive Design",
        description: "Fully optimized for mobile, tablet and desktop.",
      },

      {
        title: "SEO Friendly",
        description: "Built with Next.js for better indexing and performance.",
      },

      {
        title: "Reusable Components",
        description: "Modular UI components improve maintainability.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "framer Motion"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Balancing rich animations with website performance.",

        solution:
          "Optimized framer Motion and animated only visible elements.",
      },

      {
        problem: "Creating a professional visual identity.",

        solution:
          "Designed reusable layouts with consistent spacing and typography.",
      },

      {
        problem: "Ensuring responsiveness across devices.",

        solution: "Used Tailwind CSS with a mobile-first approach.",
      },
    ],

    learnings: [
      "trying framer Motion animation techniques.",
      "Building landing pages focused on storytelling.",
      "Improving UI consistency.",
      "Optimizing performance in animated websites.",
    ],
  },
 {
    id: 8,

    slug: "dz-young-leaders",

    name: "DZ Young Leaders project",

    subtitle:
      "A modern landing website introducing the DZ Young Leaders initiative and its mission.",

    desc: "A responsive website presenting the DZ Young Leaders project with engaging animations.",

    overview:
      "This project was developed to present the DZ Young Leaders initiative through a clean and modern user experience. The website highlights the organization's mission, objectives, team and activities while providing visitors with an engaging browsing experience powered by GSAP animations and responsive layouts.",

    image: "/lina.png",
    images: [
      "/lina.png",
      "/li2.PNG",
      "/li3.PNG",
      "/li4.PNG",
      "/li5.PNG"
    ],

    category: "Frontend",

    date: "2026",


    role: "Frontend Developer",

    status: "Completed",

    preview: "https://dz-yound-leaders3-lina.vercel.app/",

    github: "https://dz-yound-leaders3-lina.vercel.app/",

  

    tech: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "Modern Landing Page",
        description: "Beautiful hero section introducing the project.",
      },

      {
        title: "Storytelling Layout",
        description:
          "Content organized to guide visitors naturally through the website.",
      },

      {
        title: "GSAP Animations",
        description: "Smooth scroll-based animations improve user engagement.",
      },

      {
        title: "Responsive Design",
        description: "Fully optimized for mobile, tablet and desktop.",
      },

      {
        title: "SEO Friendly",
        description: "Built with Next.js for better indexing and performance.",
      },

      {
        title: "Reusable Components",
        description: "Modular UI components improve maintainability.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP"],

      backend: [],

      database: [],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Balancing rich animations with website performance.",

        solution:
          "Optimized GSAP timelines and animated only visible elements.",
      },

      {
        problem: "Creating a professional visual identity.",

        solution:
          "Designed reusable layouts with consistent spacing and typography.",
      },

      {
        problem: "Ensuring responsiveness across devices.",

        solution: "Used Tailwind CSS with a mobile-first approach.",
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
    id: 3,

    slug: "designer-portfolio",

    name: "Developer Portfolio",

    subtitle:
      "A modern portfolio built to showcase projects, skills and professional experience.",

    desc: "A personal portfolio website with modern animations and responsive design.",

    overview:
      "This portfolio was designed to represent my work as a software engineer while providing visitors with an engaging browsing experience. Instead of using traditional templates, I focused on creating smooth interactions, reusable components and carefully crafted layouts. The project highlights my technical skills, featured projects and professional journey while maintaining excellent performance across all devices.",

    image: "/p2.jpg",
    images: [
      "/p2.jpg",
      "/abdou2.PNG",
      "/abdou3.PNG",
      "/abdou4.PNG",
      "/abdou3.PNG"
    ],

    category: "Frontend",

    date: "2026",

    duration: "1 Month",

    role: "UI Designer & Frontend Developer",

    status: "Completed",

    preview: "https://abdou-portfolio-tau.vercel.app/",

    github: "https://github.com/Noufel-sf/Abdou_portfolio",

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
    id: 10,

    slug: "ai-technical-interview-coach",

    name: "AI Technical Interview Coach & RAG Simulator",

    subtitle:
      "A high-caliber technical interview practice platform simulating realistic engineering interviews with multi-axis scoring and grounded evaluations.",

    desc: "A technical interview practice platform simulating realistic engineering interviews with multi-axis scoring, semantic concept coverage, and grounded evaluations using an end-to-end RAG pipeline.",

    overview:
      "The AI Technical Interview Coach is a high-caliber interview simulation and preparation platform built with Next.js, Google Gemini, and Vector Embeddings. It provides candidates with dynamic, role-specific technical questions, evaluates answers against authoritative engineering documentation using a custom RAG pipeline, and generates comprehensive 4-axis feedback reports with benchmark senior engineer model answers.",

    image: "/ai.PNG",
    img: "/ai.PNG",
    images: [
      "/ai.PNG",
      "/ai2.PNG",
      "/ai3.PNG",
      "/ai4.PNG",
      "/ai5.PNG"
    ],

    category: "full Stack",

    date: "2026",

    duration: "2 Months",

    role: "Full Stack & AI Engineer",

    status: "Completed",

    preview: "https://github.com/Noufel-sf/Ai_interviewer",

    github: "https://github.com/Noufel-sf/Ai_interviewer",

    tech: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

      backend: ["Google Gemini API", "Vector Embeddings", "RAG Pipeline", "Zod"],

      database: ["Vector Store"],

      deployment: ["Vercel"],
    },

    features: [
      {
        title: "RAG-Grounded Evaluations",
        description:
          "Retrieval-Augmented Generation (RAG) grounding evaluations in verified engineering docs using cosine similarity and vector embeddings.",
      },
      {
        title: "4-Axis Granular Scoring",
        description:
          "Rigorous rubric covering Knowledge Depth, Technical Accuracy, Problem-Solving Clarity, and Completeness.",
      },
      {
        title: "Adaptive Follow-Up Probing",
        description:
          "Dynamically targets candidate concept gaps using Gemini function calling and semantic coverage analysis.",
      },
      {
        title: "Senior Engineer Model Answers",
        description:
          "Exemplar benchmark responses featuring production-grade code, architectural trade-offs, and design patterns.",
      },
      {
        title: "Structured Output Validation",
        description:
          "Guaranteed deterministic scoring schema through Zod validation and structured JSON decoding.",
      },
    ],

    architecture: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],

      backend: ["Next.js API Routes", "Google Gemini API", "Vector Embeddings"],

      database: ["Vector Store"],

      deployment: ["Vercel"],
    },

    challenges: [
      {
        problem: "Preventing hallucinated scoring and ensuring objective technical feedback.",
        solution:
          "Constructed an end-to-end RAG architecture with vector embeddings to ground scoring against authoritative engineering references.",
      },
      {
        problem: "Extracting deterministic multi-axis scores from LLM completions.",
        solution:
          "Enforced strict Zod schema validation on structured JSON outputs with automated validation fallbacks.",
      },
      {
        problem: "Generating dynamic, contextual follow-up questions tailored to candidate weak spots.",
        solution:
          "Integrated function calling and semantic similarity metrics to identify missed concepts and probe deeper.",
      },
    ],

    learnings: [
      "Building production-ready RAG architectures with Vector Stores and Cosine Similarity.",
      "Calibrating strict evaluation prompts with low-temperature LLM outputs.",
      "Implementing resilient structured JSON generation and Zod schema validation.",
      "Building adaptive AI systems using LLM Tool/Function Calling.",
    ],
  },

  {
    id: 11,

    slug: "flutter-travel-app",

    name: "Flutter Travel Discovery & Booking App",

    subtitle:
      "A modern cross-platform mobile travel and exploration application built with Flutter & Dart.",

    desc: "A sleek mobile travel application crafted with Flutter and Dart featuring dynamic destination discovery, travel booking UI, custom micro-animations, and modern UI/UX design.",

    overview:
      "The Flutter Travel App was built to deepen mobile development expertise and implement modern UI/UX design principles with Flutter and Dart. The application offers users an engaging travel planning experience, allowing exploration of top destinations, category filtering, trip bookings, and wishlist management with fluid native transitions and responsive layouts across all mobile screen sizes.",

    image: "/travelapp.png",
    images: [
      "/travelapp.png",
      "/travelapp.png",
      "/travelapp.png",
      "/travelapp.png",
      "/travelapp.png"
    ],

    category: "Frontend",

    date: "2026",

    duration: "1 Month",

    role: "Mobile App Developer & UI/UX Designer",

    status: "Completed",

    preview: "https://github.com/Noufel-sf/Flutter_Travel_app",

    github: "https://github.com/Noufel-sf/Flutter_Travel_app",

    tech: {
      frontend: ["Flutter", "Dart", "Material 3", "Cupertino Widgets"],

      backend: [],

      database: [],

      deployment: ["Android / iOS Build"],
    },

    features: [
      {
        title: "Destination Discovery",
        description:
          "Interactive feed showcasing featured travel destinations with high-resolution imagery, ratings, and reviews.",
      },
      {
        title: "Smart Filtering & Search",
        description:
          "Filter trips by category, price range, popularity, and climate for rapid itinerary discovery.",
      },
      {
        title: "Interactive Booking Workflow",
        description:
          "Streamlined booking interface with interactive calendar date pickers, guest selection, and trip confirmations.",
      },
      {
        title: "Saved Wishlist & Favorites",
        description:
          "Save and manage dream destinations for offline review and trip planning.",
      },
      {
        title: "Fluid Hero Micro-Animations",
        description:
          "Polished page transitions, interactive cards, and haptic-friendly mobile micro-interactions.",
      },
      {
        title: "Adaptive Responsive Layout",
        description:
          "Responsive mobile layouts crafted to render consistently on diverse phone and tablet form factors.",
      },
    ],

    architecture: {
      frontend: ["Flutter SDK", "Dart", "Custom Widgets", "Flutter Animations"],

      backend: [],

      database: [],

      deployment: ["Android / iOS Build"],
    },

    challenges: [
      {
        problem: "Building a responsive and pixel-perfect UI across different screen sizes and aspect ratios.",
        solution:
          "Utilized Flutter flexible layout widgets (LayoutBuilder, MediaQuery, and Flex containers) for adaptive rendering.",
      },
      {
        problem: "Creating smooth, seamless page navigation and hero image transitions.",
        solution:
          "Leveraged Flutter Hero animations and customized page route transitions for high frame-rate native animations.",
      },
      {
        problem: "Designing an intuitive, modern travel UI/UX from scratch.",
        solution:
          "Designed clean card-based layouts, curated color palettes, and balanced typography inspired by modern travel platforms.",
      },
    ],

    learnings: [
      "Mastering Flutter widget hierarchy, custom layouts, and reactive UI patterns.",
      "Cross-platform mobile architecture and Dart best practices.",
      "Designing engaging UI/UX with fluid micro-animations and tactile user feedback.",
      "Managing local mobile state and optimizing asset performance.",
    ],
  },
  {
    id: 12,
    slug: "lumina-books",
    name: "React Native Books Ecommerce app",
    subtitle:
      "A state-of-the-art mobile commerce application and digital reading platform built with React Native, Expo SDK 57 & TypeScript.",
    desc: "A playful Neo-Pop mobile bookstore and digital reader built with React Native, Expo SDK 57, and Zustand 5 featuring tactile 2.5D hard offset shadows, gesture interactions, dynamic pricing, and an in-app e-reader.",
    overview:
      "Lumina Books is a mobile commerce application and digital reading platform built with React Native, Expo SDK 57, and TypeScript. Designed in a playful Neo-Pop / Gumroad aesthetic with crisp 2px black outlines and 2.5D hard offset shadows, the app delivers a tactile sticker feel. It combines a rich storefront with trending showcases, spotlight book carousels, dynamic free-shipping progress indicators, multi-step checkout with simulated digital receipts, and a comprehensive in-app E-Reader featuring warm sepia, OLED dark, and classic light themes with real-time font scaling.",
    image: "/mobileReact.png",
    images: [
      "/mobileReact.png",
      "/mobileReact.png",
      "/mobileReact.png",
      "/mobileReact.png",
      "/mobileReact.png"
    ],
    category: "Mobile",
    date: "2026",
    duration: "1.5 Months",
    role: "Mobile App Developer & UI/UX Designer",
    status: "Completed",
    preview: "https://github.com/Noufel-sf/React_Native-Books-Ecommerce-app",
    github: "https://github.com/Noufel-sf/React_Native-Books-Ecommerce-app",
    tech: {
      frontend: [
        "React Native",
        "Expo SDK 57",
        "TypeScript",
        "Zustand 5",
        "Reanimated 4",
        "Gesture Handler"
      ],
      backend: ["Expo Router v4", "Flux State Flow", "AsyncStorage"],
      database: ["Zustand Atomic Stores", "Local Persistence"],
      deployment: ["Expo Go", "iOS & Android Builds"],
    },
    features: [
      {
        title: "Playful Neo-Pop / Gumroad Design System",
        description:
          "Crisp 1.8px–2px solid black borders, 2.5D hard offset shadows, tactile micro-haptics, and high-energy color blocking.",
      },
      {
        title: "Comprehensive In-App E-Reader",
        description:
          "Integrated reader with 3 themes (Classic Light, Warm Sepia, OLED Dark), real-time font scaling (A- / A+), and reading progress tracking.",
      },
      {
        title: "Interactive Gestures & Micro-Interactions",
        description:
          "Pinch-to-zoom book covers, smooth swipe-to-delete reading list items, and spring-animated floating dock navigation.",
      },
      {
        title: "Dynamic Cart & Free Shipping Bar",
        description:
          "Real-time free shipping threshold calculation, reactive QTY steppers, and automated discount & subtotal summaries.",
      },
      {
        title: "3-Step Checkout & Digital Receipt",
        description:
          "Visual checkout stepper (Shipping ➔ Payment ➔ Confirm), interactive credit card preview, and ticket receipt with barcode graphic.",
      },
      {
        title: "Curated Storefront & Reading Habits",
        description:
          "Trending showcases, spotlight book cards, reading streak ribbons (5-Day Streak 🔥), and segmented library controls.",
      },
    ],
    architecture: {
      frontend: [
        "React Native 0.86+",
        "Expo SDK 57",
        "TypeScript 5.3+",
        "Vanilla StyleSheet Tokens"
      ],
      backend: [
        "Flux / Unidirectional State (Zustand 5)",
        "Observer / Pub-Sub Toast System",
        "Facade Store Hooks"
      ],
      database: ["Zustand Local Storage", "AsyncStorage Persistence"],
      deployment: ["Expo Router v4", "Android APK / iOS IPA"],
    },
    challenges: [
      {
        problem:
          "Maintaining smooth 60fps gesture animations and interactive physics across iOS and Android.",
        solution:
          "Leveraged React Native Reanimated 4 and Gesture Handler 2 to run gesture calculations directly on the UI thread.",
      },
      {
        problem:
          "Achieving authentic 2.5D zero-blur hard offset shadows consistently on Android without elevation blur artifacts.",
        solution:
          "Designed cross-platform shadow token abstractions and layered border offsets that render identical crisp shadows on both platforms.",
      },
      {
        problem:
          "Building an in-app e-reader with fluid real-time typography scaling and theme switches without re-rendering entire screen trees.",
        solution:
          "Isolated reading preferences inside atomic Zustand stores and wrapped the reading canvas in memoized render trees.",
      },
    ],
    learnings: [
      "Architecting complex mobile apps using React Native 0.86+ and Expo SDK 57.",
      "Implementing custom tactile design systems (Neo-Pop/Gumroad aesthetic) with rigid tokens.",
      "Mastering Reanimated 4 worklets and off-thread native gesture handling.",
      "Unidirectional data flow, facade patterns, and atomic store design with Zustand 5.",
    ],
  },

  // {
  //   id: 13,
  //   slug: "cinematch-movie-recommendation",
  //   name: "CineMatch — AI Movie Recommendation Platform",
  //   subtitle:
  //     "An end-to-end, enterprise-grade movie recommendation platform featuring multi-stage ML algorithms, pgvector HNSW search, and Next.js 15 streaming interface.",
  //   desc: "An enterprise-grade movie recommendation platform built with FastAPI, Next.js 15, PostgreSQL, and pgvector. Features multi-stage ML models (Matrix Factorization, Content-Based TF-IDF, Bayesian Popularity, and Hybrid Ensembles), cold-start onboarding, 64-dimensional dense vector embeddings with HNSW index, and transparent recommendation explanations.",
  //   overview:
  //     "CineMatch is an end-to-end, enterprise-grade movie recommendation platform engineered with a high-throughput FastAPI backend, Next.js 15 streaming frontend, and PostgreSQL 16 with pgvector. The system features a multi-stage machine learning recommendation engine combining Matrix Factorization (Latent Factor SGD, k=20), Content-Based filtering with TF-IDF, IMDb Bayesian weighted popularity, and a 60/25/15 Hybrid Ensemble. It solves the cold-start problem with an interactive onboarding taste centroid projection (User #999), provides sub-millisecond semantic search via 64-dimensional dense vector embeddings indexed with HNSW, and delivers transparent, model-derived explanations for every recommended title.",
  //   image: "/Aimovie.jpg",
  //   images: [
  //     "/Aimovie.jpg",
  //     "/Aimovie.jpg",
  //     "/Aimovie.jpg",
  //     "/Aimovie.jpg",
  //     "/Aimovie.jpg"
  //   ],
  //   category: "full Stack",
  //   date: "2026",
  //   duration: "2 Months",
  //   role: "Full Stack & Machine Learning Engineer",
  //   status: "Completed",
  //   preview: "https://github.com/Noufel-sf/Movie_Recommendation_System",
  //   github: "https://github.com/Noufel-sf/Movie_Recommendation_System",
  //   tech: {
  //     frontend: [
  //       "Next.js 15",
  //       "React",
  //       "TypeScript",
  //       "Tailwind CSS",
  //       "Radix UI",
  //       "Lucide React"
  //     ],
     

  //     deployment: [
  //       "Vercel",
  //     ],
  //   },
  //   features: [
  //     {
  //       title: "Multi-Stage ML Recommendation Engine",
  //       description:
  //         "Hybrid ensemble combining 60% Matrix Factorization (Latent SGD k=20), 25% Content-Based TF-IDF, and 15% IMDb Bayesian popularity baseline.",
  //     },
  //     {
  //       title: "Cold-Start Interactive Onboarding (User #999)",
  //       description:
  //         "Instant taste centroid vector projection calculated across seed movies in 6 core genres to activate zero-history user profiles without retraining.",
  //     },
  //     {
  //       title: "Dense Vector Embeddings & pgvector HNSW",
  //       description:
  //         "64-dimensional dense vectors combining genre distributions, rating priors, and title projections with sub-millisecond approximate nearest neighbor search.",
  //     },
  //     {
  //       title: "Transparent Recommendation Explainability",
  //       description:
  //         "Model-derived rationales for every item indicating whether recommendations stem from latent factor alignment, content similarity, or community popularity.",
  //     },
  //     {
  //       title: "High-Throughput FastAPI REST Gateway",
  //       description:
  //         "Dual-route endpoints (/api/v1/...) supporting paginated catalogs, semantic similarity, real-time ratings, watch telemetry, and interactive OpenAPI Swagger docs.",
  //     },
  //     {
  //       title: "Next.js 15 Streaming Interface",
  //       description:
  //         "Modern streaming UI with dynamic genre filtering, real-time user taste profiles, interactive modals, and responsive catalog browsing.",
  //     },
  //   ],
  //   architecture: {
  //     frontend: [
  //       "Next.js 15 App Router",
  //       "React 19 & TypeScript",
  //       "Tailwind CSS & Radix UI",
  //       "Client-Side State & Streaming"
  //     ],
  //     backend: [
  //       "FastAPI Asynchronous Gateway",
  //       "Decoupled RecommendationEngineService",
  //       "Multi-Model Ensemble Pipeline",
  //       "Pydantic Validation"
  //     ],
  //     database: [
  //       "PostgreSQL 16 + pgvector",
  //       "HNSW Cosine Index (m=16, ef=64)",
  //       "Optimized B-tree & Composite Indexes",
  //       "MovieLens 100k + TMDB Parquet Caches"
  //     ],
  //     deployment: [
  //       "Docker Containerization",
  //       "Uvicorn ASGI Server",
  //       "Pytest ML & API Test Suite"
  //     ],
  //   },
  //   challenges: [
  //     {
  //       problem:
  //         "Eliminating the cold-start barrier for new users with zero interaction history.",
  //       solution:
  //         "Engineered an onboarding survey that projects seed movie choices into a mathematical taste centroid vector (C_u), instantly generating personalized recommendations.",
  //     },
  //     {
  //       problem:
  //         "Performing real-time similarity search across large embedding spaces without latency degradation.",
  //       solution:
  //         "Implemented 64-dimensional dense L2-normalized embeddings paired with PostgreSQL pgvector HNSW index, achieving sub-millisecond approximate nearest neighbor lookups.",
  //     },
  //     {
  //       problem:
  //         "Balancing accuracy with discovery in recommendation lists (avoiding over-fitting to narrow user history).",
  //       solution:
  //         "Created a weighted hybrid ensemble blending collaborative filtering (SVD), content-based TF-IDF features, and time-decay exponential popularity.",
  //     },
  //   ],
  //   learnings: [
  //     "Designing and implementing production-grade recommendation systems from Bayesian baselines to matrix factorization and hybrid ensembles.",
  //     "Working with pgvector and tuning HNSW indexing parameters (m, ef_construction) for sub-millisecond vector similarity.",
  //     "Building asynchronous, high-throughput machine learning inference APIs with FastAPI and Pydantic.",
  //     "Cold-start resolution techniques using taste centroid synthesis and interactive user onboarding.",
  //   ],
  // },

  {
    id: 13,
    slug: "dar-chabab-platform",
    name: "Dar Chabab — Youth & Cultural Platform",
    subtitle:
      "A modern, accessible, and high-performance youth center platform built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    desc: "A bilingual, high-performance web platform built for Dar Chabab El Aifa Salah (Chelghoum Laïd, Mila) featuring fluid Framer Motion animations, interactive clubs carousel, values showcase, and responsive RTL design.",
    overview:
      "Dar Chabab El Aifa Salah is a prominent youth and cultural institution located in Chelghoum Laïd, Mila province. Built as a freelance production platform, this web application connects local youth with educational workshops, specialized clubs (robotics, technology, arts, theatre, music, and environmental initiatives), and community events. Developed with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion, it features seamless Right-to-Left (RTL) Arabic typography, hardware-accelerated animations, infinite club marquees, and optimized media delivery for exceptional Core Web Vitals.",
    image: "/darchabab1.png",
    images: [
      "/darchabab1.png",
      "/darchabab2.png",
      "/darchabab3.png",
      "/darchabab4.png",
      "/darchabab5.png"
    ],
    category: "Frontend",
    date: "2026",
    duration: "1 Month",
    role: "Frontend Developer & UI/UX Designer",
    status: "Completed",
    preview: "https://dar-chabab.vercel.app/",
    github: "https://dar-chabab.vercel.app/",
    tech: {
      frontend: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide Icons"
      ],
      deployment: ["Vercel"],
    },
    features: [
      {
        title: "Hero Storytelling & Announcement Slider",
        description:
          "High-impact introductory showcase with dynamic announcements, call-to-action triggers, and responsive hero carousel.",
      },
      {
        title: "Interactive Specialized Youth Clubs Marquee",
        description:
          "Continuous smooth horizontal ticker slider highlighting specialized clubs in robotics, theatre, music, digital arts, and volunteering.",
      },
      {
        title: "Values & Institutional Pillars 3D Cards",
        description:
          "Engaging 3D hover cards illustrating institutional pillars including inclusivity, youth empowerment, cognitive curiosity, and civic responsibility.",
      },
      {
        title: "Interactive 3D Carousel & Memory Album",
        description:
          "Dynamic card carousel and photo memory album documenting community events, childhood workshops, and youth achievements.",
      },
      {
        title: "Seamless RTL Arabic Typography & UI/UX",
        description:
          "Fully accessible Right-to-Left Arabic typography, tailored color theory (Forest Green #007A3D and Warm Amber #D48B28), and micro-haptics.",
      },
      {
        title: "Fast Inquiries & Registration Portal",
        description:
          "Direct contact channels, interactive club exploration routes, and responsive mobile navigation drawer.",
      },
    ],
    architecture: {
      frontend: [
        "Next.js App Router",
        "React 19 & TypeScript",
        "Tailwind CSS",
        "Framer Motion Hardware Acceleration"
      ],
   
      deployment: [
        "Vercel ",
      ],
    },
    challenges: [
      {
        problem:
          "Designing an authentic Arabic RTL interface that feels fluid, contemporary, and visually engaging without layout shifts or text alignment glitches.",
        solution:
          "Implemented strict RTL direction tokens, custom Arabic typography pairings, and bidirectional Flexbox/Grid layouts.",
      },
      {
        problem:
          "Delivering buttery smooth 60fps animations across complex photo sliders and infinite club marquees on low-powered mobile devices.",
        solution:
          "Leveraged Framer Motion layout animations and hardware-accelerated CSS transform3d infinite tracks with hover-pause states.",
      },
      {
        problem:
          "Optimizing heavy cultural photography and gallery assets for fast mobile loading across mobile networks.",
        solution:
          "Utilized Next.js Image optimization with responsive WebP generation, blur placeholders, and progressive lazy loading.",
      },
    ],
    learnings: [
      "Mastering modern RTL web design and Arabic typography hierarchy in Next.js and Tailwind CSS.",
      "Crafting high-engagement youth community interfaces with fluid Framer Motion micro-interactions.",
      "Building accessible, high-performance institutional websites with perfect Core Web Vitals.",
      "Translating client requirements into clean, scalable frontend architecture for real-world cultural organizations.",
    ],
  },

  {
    id: 14,
    slug: "noor-desktop-prayer-assistant",
    name: "Noor (نور) — Desktop Prayer & Daily Dikr Companion",
    subtitle:
      "A distraction-free, cross-platform desktop application built with Electron 34, React 18, and TypeScript to help developers maintain daily prayers and spiritual habits while working.",
    desc: "A lightweight cross-platform desktop application built with Electron 34, React 18, TypeScript, and Tailwind CSS. Designed specifically for developers and desk workers to stay mindful of daily prayers without workflow interruptions. Features accurate offline Adhan.js calculation, floating desktop mini-widget, Quran reader with progress tracking, interactive electronic Tasbih, Adhkar collections, Qibla compass, and Hijri calendar.",
    overview:
      "Noor (نور) is a calming, distraction-free desktop companion engineered for developers and professionals who spend long hours in front of screens. Built with Electron 34, React 18, TypeScript, and Vite, the application addresses the common problem of losing track of prayer times during intense coding or work sessions. It operates 100% offline using Adhan.js for multi-method prayer calculations and Web Audio API for customizable Adhan audio alerts. In addition to a persistent floating desktop mini-widget that always indicates the next prayer and countdown, Noor features a Quranic reading tracker with last-read bookmarking and daily ayah tafsir, an interactive digital Tasbih with morning/evening/post-prayer Adhkar, dynamic Qibla compass direction, dual Hijri/Gregorian calendars, and responsive dark/light modes designed for minimal CPU and memory overhead.",
    image: "/dikr1.png",
    images: [
      "/dikr1.png",
      "/dikr2.png",
      "/dikr3.png",
      "/dikr4.png",
      "/dikr5.png"
    ],
    category: "Desktop App",
    date: "October 2026",
    duration: "1 Month",
    role: "Desktop & Frontend Developer",
    status: "Completed",
    preview: "https://github.com/Noufel-sf/salah-reminder",
    github: "https://github.com/Noufel-sf/salah-reminder",
    tech: {
      frontend: [
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Lucide React",
        "Vite"
      ],
      backend: [
        "Electron 34",
        "Node.js",
        "Adhan.js",
        "Web Audio API",
        "Electron IPC"
      ],
      database: [
        "Local Storage",
        "JSON Store",
        "Offline-First Storage"
      ],
      deployment: [
        "Electron Builder",
        "GitHub Releases",
        "Cross-Platform (Windows / Linux / macOS)"
      ],
    },
    features: [
      {
        title: "Accurate Prayer Times & Audio Adhan",
        description:
          "Multi-convention prayer calculation via Adhan.js with configurable calculation methods, automatic location-based timings, and customizable Adhan sound notifications.",
      },
      {
        title: "Floating Desktop Mini-Widget",
        description:
          "A compact, draggable always-on-top desktop widget displaying upcoming prayer times and a live countdown to keep developers mindful without window switching.",
      },
      {
        title: "Quran Reading Tracker & Daily Ayah",
        description:
          "Track Quranic reading progression, automatically save last-read bookmarks, and explore a daily featured Ayah with concise Tafsir reflection.",
      },
      {
        title: "Daily Adhkar & Interactive Electronic Tasbih",
        description:
          "Curated morning, evening, and post-prayer Adhkar collections paired with a tactile, interactive digital counter for mindful Tasbih.",
      },
      {
        title: "Qibla Compass & Dual Hijri Calendar",
        description:
          "Accurate Qibla direction calculation based on geographic coordinates alongside synchronized Hijri and Gregorian calendar tracking.",
      },
      {
        title: "Distraction-Free Dark/Light Interface",
        description:
          "Calming modern aesthetics with smooth dark and light themes, engineered for near-zero idle CPU and memory consumption during intensive work.",
      },
    ],
    architecture: {
      frontend: [
        "React 18 Single-Page Application",
        "TypeScript Strict Typings",
        "Tailwind CSS Dark/Light Theming",
        "Lucide React UI Icons"
      ],
      backend: [
        "Electron 34 Main & Preload Process Architecture",
        "Secure IPC Channel Synchronization",
        "Adhan.js Astronomical Prayer Calculations",
        "Web Audio API Sound Engine"
      ],
      database: [
        "Persistent Local Storage",
        "Zero-Cloud Dependency (100% Offline Capability)",
        "JSON Configuration Cache"
      ],
      deployment: [
        "Electron Builder Packaging Pipeline",
        "Portable Executables (Windows, macOS, Linux)",
        "Open-Source GitHub Repository Distribution"
      ],
    },
    challenges: [
      {
        problem:
          "Designing non-intrusive desktop notifications that alert the user without interrupting deep coding flow or stealing window focus.",
        solution:
          "Engineered an always-on-top borderless floating mini-widget with smooth countdown transitions, coupled with gentle background Web Audio chime alerts.",
      },
      {
        problem:
          "Ensuring total offline reliability for accurate prayer calculations anywhere in the world without third-party API dependencies.",
        solution:
          "Embedded Adhan.js directly within the client bundle, enabling mathematical astronomical calculation across multiple international conventions directly on-device.",
      },
      {
        problem:
          "Minimizing memory and CPU footprint so the application can run in the background all day alongside heavy developer IDEs and dev servers.",
        solution:
          "Decoupled calculation intervals from the render loop, purged unnecessary Electron modules, and utilized lightweight SVG icons and native browser Web Audio APIs.",
      },
    ],
    learnings: [
      "Building robust, cross-platform desktop applications with Electron 34, React 18, and Vite.",
      "Designing secure, bi-directional IPC (Inter-Process Communication) protocols between main and renderer processes.",
      "Implementing astronomical algorithms and timezone calculations with Adhan.js.",
      "Developing distraction-free floating desktop widgets and background audio notifications.",
    ],
  },
];
