/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site and the chatbot's knowledge — no UI changes needed.
 */

export const profile = {
  name: "Amar Pal",
  shortName: "Amar",
  roles: ["Full-Stack Developer", "Machine Learning Engineer", "FastAPI & React Specialist"],
  headline: ["Building scalable full-stack applications", "and intelligent ML systems."],
  intro:
    "Full-Stack Developer and Machine Learning Engineer specializing in modern web applications with React, TypeScript, and high-performance FastAPI backends, alongside training custom ML models and analyzing Large Language Models (LLMs).",
  status: "Full-Stack Developer · FastAPI, React & ML",
  available: true,
  location: "Kolkata, India · Open to Remote",
  bio: [
    "I am a Full-Stack Developer and Machine Learning Engineer focused on crafting production-ready web platforms and intelligent software systems. On the engineering side, I specialize in building responsive, type-safe user interfaces with React and TypeScript, paired with high-throughput asynchronous backend architectures primarily built using FastAPI and Python REST APIs.",
    "On the machine learning side, I develop end-to-end solutions: from training and evaluating custom ML models (classification, regression, and clustering with PyTorch and Scikit-learn) to analyzing, benchmarking, and integrating Large Language Models (LLMs) into real-world applications. My focus is delivering reliable, clean, and scalable software that connects intelligent AI capabilities with seamless user experiences.",
  ],
  philosophy: [
    "Clean architecture, type safety, and contract-first API design.",
    "Fast, responsive user interfaces backed by robust, high-performance APIs.",
    "Rigorous evaluation and benchmarking of ML models and LLM behaviors.",
    "Bridge the gap between modern AI intelligence and scalable web applications.",
  ],
  interests: [
    "Full-Stack Web Architectures with React, TypeScript & Tailwind CSS",
    "High-Performance Asynchronous APIs with FastAPI & PostgreSQL",
    "Training & Evaluating Machine Learning Models (PyTorch, Scikit-learn)",
    "LLM Analysis, Prompt Engineering & Generative AI Integration",
    "Cloud Deployments, Containerization (Docker) & Modern Tooling",
  ],
  enjoys: [
    "High-throughput FastAPI services with strict Pydantic validation",
    "Component-driven frontend design with React & TypeScript",
    "Training custom ML models and evaluating LLM outputs",
    "Database schema design, indexing & PostgreSQL optimization",
    "Fast iteration and competitive hackathons (SIH Finalist)",
  ],
} as const;

export const timeline = [
  {
    year: "2022",
    label: "Foundations",
    note: "Data structures, algorithms, object-oriented systems, and Python/C++ development at Techno Main Salt Lake.",
  },
  {
    year: "2023",
    label: "Full-Stack & Databases",
    note: "Building modern web apps, Django & React architectures, database schemas, and early machine learning exploration.",
  },
  {
    year: "2024",
    label: "Internship & Prototyping",
    note: "Software Developer Intern at Intelligent Creation; full-stack delivery with React, Django REST, and AI-assisted workflows.",
  },
  {
    year: "2025",
    label: "Full-Stack & ML (SIH Finalist)",
    note: "National Grand Finalist in Smart India Hackathon 2025; developing full-stack platforms and predictive ML model architectures.",
  },
  {
    year: "2026",
    label: "Software Engineer @ NuboNS",
    note: "Graduated with B.Tech in CSE (AI & ML). Engineering IoT solutions, FastAPI backend integrations, and production ML workflows at NuboNS.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  responsibilities: string[];
  tech: string[];
  note?: string;
};

export const experience: Experience[] = [
  {
    company: "NuboNS",
    role: "Software Engineer",
    duration: "July 2026 — Present",
    location: "Kolkata, India",
    summary:
      "Engineering IoT solutions and backend service integrations, building high-throughput asynchronous FastAPI APIs, scalable REST endpoints, and dynamic React user interfaces connected to machine learning services.",
    responsibilities: [
      "Architected high-performance asynchronous REST API endpoints using FastAPI, Python, and Pydantic schema validation for low-latency operations across IoT data streams.",
      "Developed modern, responsive frontend interfaces and telemetry dashboards with React and TypeScript, ensuring seamless end-to-end data flow.",
      "Built resilient backend microservices and database integration layers with PostgreSQL, handling authentication, caching, and request lifecycle management.",
      "Integrated client interfaces with deployed machine learning inference endpoints and automated anomaly detection services for IoT telemetry.",
      "Containerized backend API services and frontend applications with Docker, maintaining production engineering best practices and API reliability.",
    ],
    tech: [
      "FastAPI",
      "React",
      "TypeScript",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "Docker",
      "Machine Learning",
      "Pydantic",
    ],
    note: "Confidentiality Notice: Certain enterprise backend architectures, proprietary API endpoints, and client system specifications are withheld under NDA.",
  },
  {
    company: "Intelligent Creation",
    role: "Software Developer Intern",
    duration: "2025 — 2026",
    location: "Remote / Pune, India",
    summary:
      "Contributed across frontend and backend development for an evolving software product, building responsive user interfaces and robust server-side APIs.",
    responsibilities: [
      "Developed and maintained full-stack application features using React on the frontend and Django REST framework on the backend.",
      "Leveraged AI-assisted development tools (Claude / LLM tooling) to accelerate code refactoring, test coverage, and feature delivery.",
      "Managed development and staging environments on Ubuntu/Linux, handling service configuration, migrations, and deployment workflows.",
      "Collaborated in agile sprint cycles, bridging the gap between product requirements, database schema design, and seamless user experience.",
    ],
    tech: ["React", "Django", "Python", "JavaScript", "Linux / Ubuntu", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Smart India Hackathon & Open Source",
    role: "Full-Stack & ML Engineer (SIH 2025 Finalist)",
    duration: "2024 — 2025",
    location: "National Competition",
    summary:
      "Two-time Smart India Hackathon participant and SIH 2025 National Grand Finalist, architecting rapid-prototype software solutions under high-pressure constraints.",
    responsibilities: [
      "Conceptualized and developed an end-to-end working MVP within 36 hours, combining predictive intelligence, database persistence, and interactive web UIs.",
      "Led technical architecture and system integration within a multidisciplinary team under rapid problem-solving conditions.",
      "Presented technical system designs and live operational demonstrations to national evaluation panels, advancing to the final round.",
    ],
    tech: ["Python", "React", "Machine Learning", "FastAPI", "SQL", "Git"],
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: "Shipped" | "Active" | "Prototype" | "Archived";
  layout: "wide" | "split" | "center" | "minimal";
};

export type FeaturedProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  result: string;
  architecture: { step: string; note: string }[];
  tech: string[];
  github?: string;
  demo?: string;
};

export const featuredProject: FeaturedProject = {
  id: "campuscare",
  name: "CampusCare",
  tagline:
    "Comprehensive digital mental health platform for higher education with real-time multimodal emotion tracking and AI wellness support.",
  description:
    "A full-stack, privacy-first mental health platform engineered for college and university students. The application integrates real-time facial emotion recognition using MediaPipe 468-point landmark tracking and vocal mood analysis with Wav2Vec classifiers. Built with Next.js 14 App Router and PostgreSQL (Neon DB with Prisma ORM), CampusCare empowers students with PHQ-9/GAD-7 clinical self-assessments, OpenAI-assisted mental health reflection chatbots, confidential journaling, and anonymous peer support forums.",
  problem:
    "Higher education students face severe mental health pressures but lack access to timely, stigma-free, confidential support. Traditional institutional wellness systems are fragmented, overwhelming to navigate, and lack real-time multimodal check-ins.",
  result:
    "Engineered an accessible end-to-end platform combining computer vision & voice AI mood detection, standardized clinical assessment harnesses, and anonymous peer connectivity—delivering a private, proactive mental wellness hub designed for real-world impact.",
  architecture: [
    { step: "Multimodal Capture", note: "MediaPipe Vision · Wav2Vec Audio Stream" },
    { step: "Clinical Scoring", note: "PHQ-9 · GAD-7 · PSS Automated Harness" },
    { step: "AI Wellness Copilot", note: "OpenAI GPT · Crisis SOS Safeguards" },
    { step: "Full-Stack Engine", note: "Next.js 14 App Router · Node / Express" },
    { step: "Data & Privacy", note: "Neon PostgreSQL · Prisma · De-identified" },
  ],
  tech: [
    "Next.js 14",
    "TypeScript",
    "React",
    "PostgreSQL",
    "Prisma ORM",
    "MediaPipe",
    "Wav2Vec / ML",
    "OpenAI API",
    "Tailwind CSS",
    "Capacitor.js",
  ],
  github: "https://github.com/ANISHAGRWAL/SIH_25",
  demo: "https://campuscare.live/",
};

export const projects: Project[] = [
  /*
  {
    id: "campuscare",
    index: "01",
    name: "CampusCare",
    tagline:
      "Comprehensive digital mental health platform with real-time multimodal emotion tracking and AI support.",
    problem:
      "Students face increasing mental health challenges but encounter social stigma, fragmented resources, and lack of immediate, confidential emotional support.",
    solution:
      "Engineered an accessible Next.js 14 & PostgreSQL platform integrating real-time facial (MediaPipe) and voice (Wav2Vec) mood recognition, OpenAI-assisted mental health reflections, PHQ-9/GAD-7 clinical assessments, and anonymous peer support forums.",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "MediaPipe / ML",
      "OpenAI API",
      "Tailwind CSS",
      "Capacitor.js",
    ],
    github: "https://github.com/ANISHAGRWAL/SIH_25",
    demo: "https://campuscare.live/",
    status: "Shipped",
    layout: "wide",
  },
  */
  {
    id: "connecthub",
    index: "01",
    name: "ConnectHub",
    tagline:
      "Domain-specific professional networking platform for 30+ professions with real-time messaging and AI moderation.",
    problem:
      "Generic social networks suffer from excessive noise and unverified interactions, lacking tailored, domain-specific spaces for verified professional collaboration.",
    solution:
      "Architected a multi-domain professional ecosystem with Next.js 15 (React 19) and Spring Boot 3.x, featuring STOMP/SockJS real-time chat with read receipts, Twilio SMS OTP verification, OpenAI-powered content safety moderation, and verified job boards.",
    tech: [
      "Next.js 15 (React 19)",
      "TypeScript",
      "Spring Boot 3.x",
      "Java",
      "PostgreSQL",
      "WebSockets / STOMP",
      "OpenAI API",
      "Twilio SMS",
    ],
    github: "https://github.com/Musharraf2/Connect_Hub",
    status: "Shipped",
    layout: "split",
  },
  {
    id: "socialsphere",
    index: "02",
    name: "SocialSphere",
    tagline:
      "Modern developer community forum & Q&A platform with glassmorphism UI, markdown editor, and real-time updates.",
    problem:
      "Online developer discussion forums often lack modern visual aesthetics, rapid live previews, and clean hierarchical conversation threading.",
    solution:
      "Constructed a high-performance SPA using React 18, TypeScript, and Supabase featuring seamless GitHub OAuth, rich markdown post editor with syntax highlighting, nested comment tree structures, and real-time community upvoting.",
    tech: [
      "React 18",
      "TypeScript",
      "Vite",
      "Supabase",
      "Tailwind CSS",
      "GitHub OAuth",
      "Lucide Icons",
    ],
    github: "https://github.com/ITSAMARHERE/SocialSphere",
    status: "Shipped",
    layout: "split",
  },
  {
    id: "mini-linkedin",
    index: "03",
    name: "Mini_LinkedIn",
    tagline:
      "Production-ready professional networking platform with connection graphs and automated notification pipelines.",
    problem:
      "Building scalable social graphs requires secure session integrity, persistent connection state machines, and reliable media delivery.",
    solution:
      "Constructed a full-stack MERN platform featuring JWT authentication, user profile management with Cloudinary image processing, bidirectional connection request workflows, personalized activity feeds, and automated Mailtrap email notifications.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Cloudinary",
      "Tailwind CSS",
      "DaisyUI",
    ],
    github: "https://github.com/ITSAMARHERE/Mini_Linkedin",
    demo: "https://mini-linkedin-frontend-enib.onrender.com/",
    status: "Shipped",
    layout: "center",
  },
  {
    id: "talka",
    index: "04",
    name: "Talka",
    tagline:
      "Real-time instant messaging application with low-latency WebSocket communication and room multiplexing.",
    problem:
      "Synchronous chat platforms require sub-50ms message delivery, resilient socket reconnections, and real-time presence tracking without packet drop.",
    solution:
      "Developed a real-time messaging application using Socket.io, Express, and MongoDB, featuring room-based socket multiplexing, live presence indicators, Redux state synchronization, and secure authentication.",
    tech: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Socket.io", "WebSockets"],
    demo: "https://talka.onrender.com/",
    status: "Shipped",
    layout: "minimal",
  },
  {
    id: "ecommerce-platform",
    index: "05",
    name: "Full-Stack E-Commerce Platform",
    tagline:
      "Enterprise multi-role commerce engine with PayPal payment processing and dedicated administrative dashboard.",
    problem:
      "Modern commerce applications demand strict isolation between customer storefront operations and administrator catalog/order management with safe transaction handling.",
    solution:
      "Architected a modular full-stack application featuring role-based route guards, real-time cart state with Redux Toolkit, Cloudinary image upload workflows, and automated PayPal capture lifecycles.",
    tech: [
      "React 19",
      "Vite",
      "Redux Toolkit",
      "Node.js / Express",
      "MongoDB",
      "PayPal SDK",
      "Cloudinary",
      "Tailwind CSS",
    ],
    github: "https://github.com/ITSAMARHERE/ECommerce-",
    status: "Shipped",
    layout: "minimal",
  },
];

export type SkillCategory = {
  name: string;
  items: { name: string; level: "Daily" | "Strong" | "Working"; use: string; projects: string[] }[];
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      {
        name: "Python",
        level: "Daily",
        use: "ML pipelines, deep learning, backend services, automation",
        projects: ["Retraining Engine", "Customer Segmentation", "NuboNS"],
      },
      {
        name: "JavaScript / TypeScript",
        level: "Daily",
        use: "Full-stack development, React applications, modern web tooling",
        projects: ["ConnectHub", "SocialSphere"],
      },
      {
        name: "SQL",
        level: "Daily",
        use: "Relational schema design, complex analytical queries, indexing",
        projects: ["NuboNS", "ConnectHub", "SocialSphere"],
      },
      {
        name: "HTML5 & CSS3",
        level: "Daily",
        use: "Responsive modern interfaces, design systems, Tailwind styling",
        projects: ["ConnectHub", "SocialSphere"],
      },
    ],
  },
  {
    name: "Machine Learning & AI",
    items: [
      {
        name: "Model Training & PyTorch",
        level: "Daily",
        use: "Supervised & unsupervised learning, deep neural networks, classification & regression",
        projects: ["Retraining Engine", "NuboNS"],
      },
      {
        name: "LLM Analysis & Prompt Engineering",
        level: "Daily",
        use: "Analyzing LLM outputs, evaluation harnesses, structured prompt pipelines",
        projects: ["Intelligent Creation", "Lab Prototypes"],
      },
      {
        name: "Scikit-learn",
        level: "Daily",
        use: "Supervised regression, unsupervised clustering (K-Means), PCA dimensionality reduction",
        projects: ["Customer Segmentation", "Movie Recommendation"],
      },
      {
        name: "Model Evaluation & Benchmarking",
        level: "Strong",
        use: "Cross-validation, loss curves, precision-recall, golden test sets",
        projects: ["Movie Recommendation", "NuboNS"],
      },
      {
        name: "MLflow",
        level: "Strong",
        use: "Experiment tracking, model registry, artifact versioning",
        projects: ["NuboNS", "Retraining Engine"],
      },
    ],
  },
  {
    name: "Backend & Full-Stack",
    items: [
      {
        name: "FastAPI",
        level: "Daily",
        use: "High-throughput asynchronous microservices, Pydantic validation & ML serving",
        projects: ["Retraining Engine", "NuboNS"],
      },
      {
        name: "React & TypeScript",
        level: "Daily",
        use: "Component-driven user interfaces, state management, modern hooks",
        projects: ["ConnectHub", "Intelligent Creation", "SocialSphere"],
      },
      {
        name: "Django & REST APIs",
        level: "Daily",
        use: "Contract-first APIs, ORM, authentication, server-side business logic",
        projects: ["Intelligent Creation", "SocialSphere"],
      },
      {
        name: "PostgreSQL & Database Design",
        level: "Daily",
        use: "Relational schema design, complex analytical queries, indexing",
        projects: ["NuboNS", "ConnectHub", "SocialSphere"],
      },
    ],
  },
  {
    name: "Infrastructure & Cloud",
    items: [
      {
        name: "Kubernetes",
        level: "Daily",
        use: "Workload orchestration, automated retraining jobs, pod management",
        projects: ["NuboNS", "Retraining Engine"],
      },
      {
        name: "Docker",
        level: "Daily",
        use: "Multi-stage container builds, reproducible runtime environments",
        projects: ["NuboNS", "ConnectHub"],
      },
      {
        name: "Apache Airflow",
        level: "Daily",
        use: "Scheduled DAGs, automated retraining workflows, data pipelines",
        projects: ["NuboNS", "Retraining Engine"],
      },
      {
        name: "PostgreSQL",
        level: "Daily",
        use: "Primary relational datastore, model metadata, transactional records",
        projects: ["NuboNS", "ConnectHub", "SocialSphere"],
      },
      {
        name: "Linux / Ubuntu",
        level: "Daily",
        use: "Server administration, shell scripting, deployment pipelines",
        projects: ["Intelligent Creation", "NuboNS"],
      },
    ],
  },
];

export type Lab = {
  id: string;
  title: string;
  status: "EXPERIMENTING" | "STABLE" | "PAUSED" | "SHIPPED";
  note: string;
  stack: string[];
};

export const lab: Lab[] = [
  {
    id: "LAB_001",
    title: "Kubernetes Automated Retraining DAGs",
    status: "STABLE",
    note: "Automated trigger system where distribution drift kicks off an Airflow DAG on Kubernetes, streaming updated weights directly to MinIO.",
    stack: ["Kubernetes", "Airflow", "Python", "MinIO"],
  },
  {
    id: "LAB_002",
    title: "Time-Series Anomaly Detection Benchmark",
    status: "EXPERIMENTING",
    note: "Benchmarking statistical moving-window Z-scores against deep LSTM autoencoders on noisy multi-sensor time-series feeds.",
    stack: ["Python", "PyTorch", "LSTM", "NumPy"],
  },
  {
    id: "LAB_003",
    title: "Smart India Hackathon Prototype (SIH 2025)",
    status: "SHIPPED",
    note: "National Grand Finale rapid-prototype solution engineered within 36 hours under high-pressure competitive constraints.",
    stack: ["Python", "React", "Machine Learning", "REST APIs"],
  },
  {
    id: "LAB_004",
    title: "Zero-Knowledge Password Vault",
    status: "SHIPPED",
    note: "Cryptographic credential manager exploring symmetric encryption, PBKDF2 key derivation, and local secure storage.",
    stack: ["Python", "Cryptography", "Security"],
  },
  {
    id: "LAB_005",
    title: "Student Performance Predictive Modeling",
    status: "STABLE",
    note: "Supervised machine learning pipeline evaluating multi-variable regression models to forecast academic milestones with minimal variance.",
    stack: ["Python", "Scikit-learn", "Pandas"],
  },
];

export const openSource = {
  headline: "Public Repositories & Engineering Artifacts",
  note: "A curated selection of public repositories spanning full-stack web platforms, machine learning algorithms, and software utilities.",
  languages: [
    { name: "Python", share: 52 },
    { name: "JavaScript", share: 26 },
    { name: "TypeScript", share: 12 },
    { name: "SQL", share: 10 },
  ],
  repos: [
    {
      name: "ConnectHub",
      description: "Full-stack networking and collaboration platform for developers.",
      language: "JavaScript",
      stars: 14,
    },
    {
      name: "customer_segmentation",
      description: "Unsupervised machine learning customer persona clustering.",
      language: "Python",
      stars: 11,
    },
    {
      name: "SocialSphere",
      description: "Dynamic social media web platform with real-time feeds.",
      language: "Python",
      stars: 12,
    },
    {
      name: "Movie-recommendation",
      description: "Content-based & collaborative filtering recommendation engine.",
      language: "Python",
      stars: 9,
    },
  ],
};

export const education = [
  {
    school: "B.Tech. in Computer Science & Engineering (AI & ML)",
    detail:
      "Techno Main Salt Lake (Graduation: 2026 · DGPA: 7.72). In-depth coursework in Artificial Intelligence, Machine Learning, Deep Learning, Distributed Systems, Database Management, and Operating Systems.",
    duration: "2022 — 2026",
  },
  {
    school: "Smart India Hackathon (SIH 2025 National Finalist)",
    detail:
      "Participated twice in Smart India Hackathon; selected for the National Grand Finale in SIH 2025. Demonstrated rapid prototyping, software engineering under competition constraints, and team leadership.",
    duration: "2024 — 2025",
  },
  {
    school: "Leadership, Sports & Honors",
    detail:
      "Recipient of college honors including Titans of Situation award. Active involvement in sports organizing, tournament leadership, and team coordination under pressure.",
    duration: "2023 — 2025",
  },
];

export const contact = {
  email: "tmsl.aiml.amarpal@gmail.com",
  github: "https://github.com/ITSAMARHERE",
  linkedin: "https://www.linkedin.com/in/its-amar-here/",
  resume: "/resume.pdf",
  /**
   * Free email dispatch service (Web3Forms / Formspree):
   * Visitors can submit directly from the web without a backend.
   * To activate live web submission: Get your free Access Key at https://web3forms.com (takes 10 seconds)
   * and paste it below or in .env as VITE_WEB3FORMS_KEY.
   */
  web3FormsKey: (typeof import.meta !== "undefined" && import.meta.env?.VITE_WEB3FORMS_KEY) || "fa798bcf-b6e7-41dd-ad78-56cb2c6cae37",
  note: "Currently engineering software and ML systems at NuboNS. I am always open to discussing distributed systems, production AI pipelines, and impactful engineering opportunities.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contact" },
];
