import { Skill, Competition, Project, TimelineItem } from './types';

// Import achievement images
import achievement101 from '@/assets/allpics/achievements/101.png';
import achievement102 from '@/assets/allpics/achievements/102.png';
import achievement103 from '@/assets/allpics/achievements/103.png';
import achievement104 from '@/assets/allpics/achievements/104.jpg';
import achievement105 from '@/assets/allpics/achievements/105.png';
import achievement106 from '@/assets/allpics/achievements/106.png';
import achievement107 from '@/assets/allpics/achievements/107.png';
import achievement108 from '@/assets/allpics/achievements/108.png';
import achievement109 from '@/assets/allpics/achievements/109.png';
import achievement110 from '@/assets/allpics/achievements/110.png';

// Import project images
import project1 from '@/assets/allpics/projects/1.png';
import project2 from '@/assets/allpics/projects/2.png';
import project3 from '@/assets/allpics/projects/3.png';
import project4 from '@/assets/allpics/projects/4.png';
import project5 from '@/assets/allpics/projects/5.png';
import project6 from '@/assets/allpics/projects/6.png';
import project7 from '@/assets/allpics/projects/7.png';
import project8 from '@/assets/allpics/projects/8.png';
import project9 from '@/assets/allpics/projects/9.png';
import project10 from '@/assets/allpics/projects/10.png';
import project11 from '@/assets/allpics/projects/11.png';
import project12 from '@/assets/allpics/projects/12.png';
import project13 from '@/assets/allpics/projects/13.png';
import project14 from '@/assets/allpics/projects/14.png';
import project15 from '@/assets/allpics/projects/15.png';

const generateId = () => Math.random().toString(36).substr(2, 9);

export const initialSkills: Skill[] = [
  { id: generateId(), name: 'React', icon: 'Atom', description: 'Modern UI development with React & React Native', level: 90, category: 'tech' },
  { id: generateId(), name: '.NET / C#', icon: 'Code', description: 'Backend development with ASP.NET and C#', level: 85, category: 'tech' },
  { id: generateId(), name: 'Node.js', icon: 'Server', description: 'Server-side JavaScript with Express & APIs', level: 88, category: 'tech' },
  { id: generateId(), name: 'Python', icon: 'Terminal', description: 'Scripting, automation, AI/ML prototyping', level: 82, category: 'tech' },
  { id: generateId(), name: 'AWS', icon: 'Cloud', description: 'Cloud deployment, S3, Lambda, EC2', level: 78, category: 'tech' },
  { id: generateId(), name: 'SQL', icon: 'Database', description: 'Database design, queries, PostgreSQL & MySQL', level: 85, category: 'tech' },
  { id: generateId(), name: 'C++', icon: 'Cpu', description: 'Competitive programming & system-level code', level: 80, category: 'tech' },
  { id: generateId(), name: 'Java', icon: 'Coffee', description: 'OOP, backend services, Android development', level: 75, category: 'tech' },
  { id: generateId(), name: 'Three.js', icon: 'Box', description: '3D web graphics and interactive experiences', level: 72, category: 'tech' },
  { id: generateId(), name: 'Docker', icon: 'Container', description: 'Containerization and deployment workflows', level: 70, category: 'tech' },
  { id: generateId(), name: 'JavaScript', icon: 'FileCode', description: 'Full-stack JS, ES6+, TypeScript', level: 92, category: 'tech' },
  { id: generateId(), name: 'Git', icon: 'GitBranch', description: 'Version control, branching, collaboration', level: 88, category: 'tech' },
  { id: generateId(), name: 'Digital Marketing', icon: 'TrendingUp', description: 'Growth strategies, Google Analytics, SEO', level: 80, category: 'other' },
  { id: generateId(), name: 'SEO', icon: 'Search', description: 'Technical SEO, on-page optimization, auditing', level: 80, category: 'other' },
  { id: generateId(), name: 'AI Prototyping', icon: 'Brain', description: 'LLM integration, AI product building', level: 85, category: 'other' },
  { id: generateId(), name: 'Sales & Client Hunting', icon: 'Users', description: 'B2B telemarketing, lead generation, CRM', level: 78, category: 'other' },
];

export const initialCompetitions: Competition[] = [
  {
    id: generateId(), name: 'Hackathon Winner — Green University', category: 'hackathon',
    image: achievement101,
    description: 'Recognized for outstanding contributions in full-stack development and innovative problem-solving in real-world agritech applications.',
    result: 'Winner', technologies: ['Full Stack', 'Agritech'],
    tags: ['Innovation', 'Agriculture'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_my-very-first-hackathon-in-my-very-first-activity-7377780541582090240-Qkys',
  },
  {
    id: generateId(), name: 'Hackathon — InnovateX', category: 'hackathon',
    image: achievement102,
    description: 'Won fourth place for developing an innovative web application that solved real-world problems with cutting-edge technology.',
    result: 'Finalist', technologies: ['React', 'Problem Solving'],
    tags: ['AI', 'Innovation'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_innovatex2025-hackathonjourney-ai-activity-7410340695250546688-e3Fz',
  },
  {
    id: generateId(), name: 'Excellence in Web Dev — YDB', category: 'certification',
    image: achievement103,
    description: 'Awarded for exceptional performance and 40% improvement in mobile responsiveness across projects.',
    result: 'Winner', technologies: ['Responsive Design', 'Frontend'],
    tags: ['Web Dev', 'Performance'], date: '2025',
    link: 'https://www.linkedin.com/in/rafid-siddique-3131b9216/details/certifications/',
  },
  {
    id: generateId(), name: 'Startup Working Award — AR Startup', category: 'startup',
    image: achievement104,
    description: 'Recognized for writing clean, efficient code and maintaining best practices in software and kernel changing and OS development.',
    result: 'Winner', technologies: ['Code Quality', 'Best Practices'],
    tags: ['Startup', 'AR'], date: '2025',
    link: 'https://www.linkedin.com/in/rafid-siddique-3131b9216/details/experience/',
  },
  {
    id: generateId(), name: 'Client Hunting & Communication — Trimindis', category: 'startup',
    image: achievement105,
    description: 'Awarded for client hunting and communication skills that led to acquiring 5 major clients, boosting company revenue by 25%.',
    result: 'Winner', technologies: ['Telemarketing', 'Optimization'],
    tags: ['Sales', 'Communication'], date: '2025',
    link: 'https://www.linkedin.com/in/rafid-siddique-3131b9216/details/experience/',
  },
  {
    id: generateId(), name: 'Datathon Winner — CUET', category: 'datathon',
    image: achievement106,
    description: 'Fine-tuned a model for meme understanding and context of Bangladesh. Secured top position in CUET CSE Fest 2025.',
    result: 'Winner', technologies: ['Kaggle', 'PyTorch'],
    tags: ['AI', 'NLP', 'Bangla'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_datathon-cuetcsefest2025-multimodalai-activity-7412080071513026561-n5hq',
  },
  {
    id: generateId(), name: 'Datathon Top 15 — North South University', category: 'datathon',
    image: achievement107,
    description: 'Placed in the top 15 in the North South University datathon competition with deep learning approaches.',
    result: 'Finalist', technologies: ['Keras', 'CNN'],
    tags: ['Data Science', 'Deep Learning'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_datathon-csefest2025-datascience-activity-7411419118635085824-9XZb',
  },
  {
    id: generateId(), name: 'Technical Excellence — Prime Bank', category: 'competition',
    image: achievement108,
    description: 'Recognized for mastering complex technical challenges and implementing scalable fintech solutions.',
    result: 'Participant', technologies: ['Performance', 'Scalability'],
    tags: ['FinTech', 'Technical'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_i-recently-participated-in-the-event-engaging-activity-7395150991186227200-GQma',
  },
  {
    id: generateId(), name: 'PCB Design Certificate — RUET', category: 'certification',
    image: achievement109,
    description: 'Certificate for PCB design from RUET Robotics Society. Hands-on hardware and sensor integration.',
    result: 'Winner', technologies: ['PCB Design', 'EEE Sensors'],
    tags: ['Hardware', 'Robotics'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_i-am-really-excited-to-share-that-i-have-activity-7369619066946265089-gQBH',
  },
  {
    id: generateId(), name: 'Solvio & Dubai Hackathon', category: 'hackathon',
    image: achievement110,
    description: 'Top 50 in an international hackathon where Harvard & MIT teams were among the winners.',
    result: 'Finalist', technologies: ['AI', 'International'],
    tags: ['Global', 'Hackathon'], date: '2025',
    link: 'https://www.linkedin.com/posts/rafid-siddique-3131b9216_hackathonjourney-globalcompetition-ai-activity-7406052820841459712-f_wk',
  },
];

export const initialProjects: Project[] = [
  {
    id: generateId(), title: 'ShopMap',
    screenshot: project1,
    techStack: ['React', 'MongoDB', 'Node.js'],
    description: 'Track, compare, and save on products across multiple websites. Get notified of price drops and uncover the best deals effortlessly.',
    demoLink: 'https://shopnearmenow.netlify.app', githubLink: 'https://github.com/RafidSiddiqueBangladesh/shopnearme',
    tags: ['E-Commerce', 'Price Tracking'],
  },
  {
    id: generateId(), title: 'Farm',
    screenshot: project2,
    techStack: ['Next.js', 'Data Scraping', 'React'],
    description: 'Track, compare, and save on agricultural products. A go-to tool for smarter online shopping in agritech.',
    demoLink: 'https://farmbd.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/farm',
    tags: ['AgriTech', 'Scraping'],
  },
  {
    id: generateId(), title: 'Extension Hub',
    screenshot: project3,
    techStack: ['React', 'Chrome Extensions', 'JavaScript'],
    description: 'Top 5 browser extensions that enhance productivity and workflow — all built from scratch.',
    demoLink: 'https://extentionbyrafidsiddiquenow.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/extentionbyme',
    tags: ['Extensions', 'Productivity'],
  },
  {
    id: generateId(), title: 'Edu AR',
    screenshot: project4,
    techStack: ['React', 'Node.js', 'Three.js'],
    description: 'AR and VR enabled lab for immersive, interactive education experiences.',
    demoLink: 'https://eduversebd.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/eduAR',
    tags: ['AR/VR', 'EdTech'],
  },
  {
    id: generateId(), title: 'Ad Making with AI',
    screenshot: project5,
    techStack: ['React', 'Firebase', 'Tailwind'],
    description: 'Comprehensive ad-making app with real-time collaboration and AI-powered content generation.',
    demoLink: 'https://bdad.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/ad',
    tags: ['AI', 'Marketing'],
  },
  {
    id: generateId(), title: 'Subway Surf Web',
    screenshot: project6,
    techStack: ['React', 'Three.js'],
    description: 'A web-based endless runner game inspired by Subway Surfers, built with 3D graphics.',
    demoLink: 'https://sunbwaysurf.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/gametwo',
    tags: ['Gaming', '3D'],
  },
  {
    id: generateId(), title: 'Social Game',
    screenshot: project7,
    techStack: ['MERN', 'Three.js', 'React'],
    description: 'A contextual game built for Bangladeshi and global audiences with social elements.',
    demoLink: 'https://webgamecontextbd.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/BUETGAMEJAM',
    tags: ['Gaming', 'Social'],
  },
  {
    id: generateId(), title: 'HealthTracker',
    screenshot: project8,
    techStack: ['Flutter', 'Node.js', 'PostgreSQL'],
    description: 'Personal health & fitness tracking app with beautiful charts and personalized recommendations.',
    demoLink: 'https://drive.google.com/drive/folders/1c8FcR5qeYeixgetTCTB9dr8D1aRgGkJT', githubLink: 'https://github.com/RafidSiddiqueBangladesh/healthproject',
    tags: ['Health', 'Mobile'],
  },
  {
    id: generateId(), title: 'Collaborate',
    screenshot: project9,
    techStack: ['React', 'WebSockets', 'Monaco Editor'],
    description: 'Real-time video, messaging, and code collaboration platform with rich features.',
    demoLink: 'https://communiation.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/comute',
    tags: ['Collaboration', 'Real-time'],
  },
  {
    id: generateId(), title: 'DigiCraft',
    screenshot: project10,
    techStack: ['Next.js', 'Stripe', 'AWS S3'],
    description: 'Online solution for managing and selling digital products with payment integration.',
    demoLink: 'https://digicraftai.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/digicraft',
    tags: ['E-Commerce', 'SaaS'],
  },
  {
    id: generateId(), title: 'Democracy BD',
    screenshot: project11,
    techStack: ['React', 'Vite', 'GraphQL'],
    description: 'A civic tech project built during a Norway hackathon — empowering citizen engagement.',
    demoLink: 'https://democracybd.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/citizen-shield-final-push',
    tags: ['CivicTech', 'Hackathon'],
  },
  {
    id: generateId(), title: 'Job AI',
    screenshot: project12,
    techStack: ['React', 'Web Speech API', 'AI'],
    description: 'From learning to job — an end-to-end AI-powered career and learning platform.',
    demoLink: 'https://jobforallbd.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/jobforall',
    tags: ['AI', 'Career'],
  },
  {
    id: generateId(), title: 'Express Server & Frontend',
    screenshot: project13,
    techStack: ['React', 'Express.js', 'Node.js'],
    description: 'A clean Express.js server paired with a React frontend for full-stack demonstration.',
    demoLink: 'https://expressfrontend.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/express-frontend',
    tags: ['Full-Stack', 'Backend'],
  },
  {
    id: generateId(), title: 'Home AI',
    screenshot: project14,
    techStack: ['React', 'AI', 'Automation'],
    description: 'AI-powered home automation with smart lighting, security, and energy management.',
    demoLink: 'https://homeaiautomation.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/homeai',
    tags: ['IoT', 'AI'],
  },
  {
    id: generateId(), title: 'Health App',
    screenshot: project15,
    techStack: ['React', 'Google Maps', 'Health API'],
    description: 'Comprehensive health planning app with itinerary builder and AI-powered recommendations.',
    demoLink: 'https://healthrafid.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/health',
    tags: ['Health', 'AI'],
  },
  {
    id: generateId(), title: 'Jewelry 3D',
    screenshot: project3,
    techStack: ['React', 'Three.js', 'E-Commerce'],
    description: 'Jewelry e-commerce frontend with stunning 3D product visualization.',
    demoLink: 'https://3drafid.netlify.app/', githubLink: 'https://github.com/RafidSiddiqueBangladesh/3d',
    tags: ['3D', 'E-Commerce'],
  },
];

export const initialTimeline: TimelineItem[] = [
  {
    id: generateId(), title: 'Foundation: Independent Delivery Across Clients',
    organization: 'Independent and Agency Collaboration', type: 'freelance',
    description: 'Delivered websites, CMS platforms, SEO improvements, and design support for multiple clients. This phase built the operational discipline that later shaped our agency process.',
    date: 'Jan 2020 – Dec 2023', icon: 'Code',
  },
  {
    id: generateId(), title: 'Agency Track: Full-Stack Product Delivery',
    organization: 'AleehaTech', type: 'internship',
    description: 'Built and shipped app and web solutions under production constraints. Improved architecture decisions, modernized state management, and supported cloud deployments for reliable delivery.',
    date: '2024 – 2025', icon: 'Briefcase',
  },
  {
    id: generateId(), title: 'Growth Track: Business and Market Execution',
    organization: 'TriMindis and Startup Environments', type: 'startup',
    description: 'Worked on B2B outreach, lead systems, campaign execution, and growth planning. This connected technical delivery with business outcomes and measurable revenue impact.',
    date: '2024 – 2025', icon: 'TrendingUp',
  },
  {
    id: generateId(), title: 'Real Problem Solving: Security and Applied AI',
    organization: 'Cross-Organization Projects', type: 'competition',
    description: 'Solved real product challenges in secure systems, data workflows, and AI-focused implementations through client work and challenge-based builds, validating practical solution patterns.',
    date: '2025', icon: 'Shield',
  },
  {
    id: generateId(), title: 'Capability Consolidation and Service Design',
    organization: 'Internal Service Framework', type: 'certification',
    description: 'Standardized delivery playbooks for web, app, AI integration, marketing support, and creative production to build a unified agency capability model.',
    date: 'Late 2025', icon: 'Award',
  },
  {
    id: generateId(), title: 'Founding SuperMind Cognigen',
    organization: 'SuperMind Cognigen', type: 'startup',
    description: 'Launched the agency to build fast, secure, and intelligent systems. Today we combine engineering, product strategy, and creative execution to help businesses scale in the AI-driven future.',
    date: '2026 – Present', icon: 'Rocket',
  },
];
