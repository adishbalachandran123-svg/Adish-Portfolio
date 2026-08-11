// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA
// Edit everything here. No need to touch component files for content
// changes — components just read from this file.
// ─────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Adish Balachandran',
  firstName: 'Adish',
  role: 'Computer Engineering Student',
  roleSecondary: 'Aspiring Software / Full-Stack Developer',
  tagline: 'I build software, explore emerging technologies, and turn ideas into practical digital solutions.',
  location: '[ADD CITY, COUNTRY]',
  resumeUrl: '/resume.pdf', // Place your resume PDF at public/resume.pdf
  email: '[ADD EMAIL ADDRESS]',
  social: {
    github: '[ADD GITHUB LINK]',
    linkedin: '[ADD LINKEDIN LINK]',
    instagram: '[ADD INSTAGRAM LINK]', // optional — leave as placeholder or remove usage in Contact.jsx / Footer.jsx
  },
}

export const about = {
  paragraphs: [
    "I'm a Computer Engineering student who enjoys building things end-to-end — from an idea, to a data pipeline, to a working interface someone can actually click through.",
    "My curiosity spans web development, artificial intelligence, machine learning, and data science. I like taking a real-world problem, breaking it down, and turning it into something functional, whether that's a deep learning model or a full-stack app.",
    "I'm early in my journey and learning constantly — every project is a chance to pick up a new tool, a new pattern, or a better way of thinking about a problem.",
  ],
  interests: [
    'Software Development',
    'Web Development',
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Cloud Computing',
    'Problem Solving',
  ],
  stats: [
    { label: 'Projects Built', value: '[ADD NUMBER]' },
    { label: 'Technologies Explored', value: '[ADD NUMBER]' },
    { label: 'Always', value: 'Learning' },
  ],
}

// Skill icons come from lucide-react (generic, clean icon set) plus a couple
// of custom inline glyphs for language logos that lucide doesn't cover.
export const skillCategories = [
  {
    title: 'Programming',
    icon: 'Code2',
    skills: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Web',
    icon: 'Globe',
    skills: ['HTML', 'CSS', 'JavaScript', 'Django'],
  },
  {
    title: 'Data & AI',
    icon: 'BrainCircuit',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Machine Learning', 'Deep Learning'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['MySQL'],
  },
  {
    title: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
  },
]

// Categories used for the Projects filter bar.
export const projectFilters = ['All', 'Web', 'AI/ML', 'Data Science', 'Java']

export const projects = [
  {
    id: 'blood-cell-detection',
    title: 'Blood Cell Type Detection',
    subtitle: 'Image Processing & Deep Learning',
    description:
      'An AI / deep learning based project that analyzes blood cell images and detects / classifies blood cell types.',
    tech: ['Python', 'Deep Learning', 'Image Processing', 'Machine Learning'],
    categories: ['AI/ML'],
    github: '[ADD GITHUB LINK]',
    demo: null,
    accent: 'cyan',
  },
  {
    id: 'indian-bikes-gst',
    title: 'Indian Bikes Price & GST Analysis',
    subtitle: 'Data Analysis',
    description:
      'A data analysis project studying Indian motorcycle pricing and GST-related data, with visual breakdowns of pricing trends.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Google Colab'],
    categories: ['Data Science'],
    github: '[ADD GITHUB LINK]',
    demo: null,
    accent: 'violet',
  },
  {
    id: 'f1-live-tracker',
    title: 'Formula One Live Tracker',
    subtitle: 'Web / Data',
    description:
      'A web and data project designed to display Formula One related information and live tracking features.',
    tech: ['[ADD TECH STACK]'],
    categories: ['Web', 'Data Science'],
    github: '[ADD GITHUB LINK]',
    demo: '[ADD LIVE DEMO LINK]',
    accent: 'cyan',
  },
  {
    id: 'fifa-world-cup-analysis',
    title: 'FIFA World Cup Data Analysis',
    subtitle: 'Data Analysis',
    description:
      'A data analysis project exploring FIFA World Cup datasets and extracting useful insights through visualization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    categories: ['Data Science'],
    github: '[ADD GITHUB LINK]',
    demo: null,
    accent: 'violet',
  },
  {
    id: 'edumate',
    title: 'EduMate',
    subtitle: 'Educational Collaboration Platform',
    description:
      'An educational collaboration platform inspired by online meeting and learning tools, featuring AI assistance, attendance management, and short-note generation.',
    tech: ['[ADD TECH STACK]'],
    categories: ['Web', 'AI/ML'],
    github: '[ADD GITHUB LINK]',
    demo: '[ADD LIVE DEMO LINK]',
    accent: 'cyan',
  },
  {
    id: 'java-food-ordering',
    title: 'Java Food Ordering System',
    subtitle: 'Desktop Application',
    description:
      'A Java-based food ordering application with both frontend and backend functionality.',
    tech: ['Java', '[ADD FRAMEWORK / DB]'],
    categories: ['Java'],
    github: '[ADD GITHUB LINK]',
    demo: null,
    accent: 'violet',
  },
]

export const education = [
  {
    id: 'degree',
    level: 'Computer Engineering / Computer Science Engineering',
    institution: '[ADD COLLEGE / UNIVERSITY NAME]',
    date: '[ADD START YEAR] — [ADD END YEAR]',
    detail: '[ADD RELEVANT COURSEWORK, CGPA, OR HIGHLIGHTS]',
  },
  {
    id: 'diploma',
    level: 'Diploma in Engineering',
    institution: '[ADD INSTITUTION NAME]',
    date: '[ADD DATE]',
    detail: '[ADD DETAIL]',
  },
  {
    id: 'plus-two',
    level: 'Plus Two',
    institution: '[ADD SCHOOL NAME]',
    date: '[ADD DATE]',
    detail: '[ADD STREAM / PERCENTAGE]',
  },
  {
    id: 'sslc',
    level: 'SSLC',
    institution: '[ADD SCHOOL NAME]',
    date: '[ADD DATE]',
    detail: '[ADD PERCENTAGE]',
  },
]

export const experience = [
  {
    id: 'internship-1',
    title: 'Software / Web Development Intern',
    company: '[ADD COMPANY NAME]',
    date: '[ADD DATE RANGE]',
    description:
      'Worked on practical software development tasks, learned industry workflows, collaborated with team members, and improved technical problem-solving skills.',
    highlights: [
      '[ADD SPECIFIC TASK OR TOOL USED]',
      '[ADD SPECIFIC CONTRIBUTION]',
      '[ADD OUTCOME OR LEARNING]',
    ],
  },
  // Add more roles by copying the object above.
]

export const certifications = [
  {
    id: 'cert-internship',
    name: 'Internship Certificate',
    org: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    link: '[ADD CERTIFICATE LINK]',
  },
  {
    id: 'cert-python',
    name: '[ADD PYTHON / PROGRAMMING CERTIFICATION NAME]',
    org: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    link: '[ADD CERTIFICATE LINK]',
  },
  {
    id: 'cert-web',
    name: '[ADD WEB DEVELOPMENT CERTIFICATION NAME]',
    org: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    link: '[ADD CERTIFICATE LINK]',
  },
  {
    id: 'cert-aiml',
    name: '[ADD AI / ML CERTIFICATION NAME]',
    org: '[ADD ORGANIZATION]',
    date: '[ADD DATE]',
    link: '[ADD CERTIFICATE LINK]',
  },
]

export const achievements = [
  {
    id: 'achievement-1',
    title: '[ADD HACKATHON NAME / RESULT]',
    category: 'Hackathon',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
  },
  {
    id: 'achievement-2',
    title: '[ADD ACADEMIC ACHIEVEMENT]',
    category: 'Academic',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
  },
  {
    id: 'achievement-3',
    title: '[ADD TECHNICAL EVENT / WORKSHOP]',
    category: 'Workshop',
    date: '[ADD DATE]',
    description: '[ADD DESCRIPTION]',
  },
  // Duplicate any object above to add more achievements — the grid
  // reflows automatically.
]

// Flat list of technologies for the floating Tech Stack section.
// "icon" refers to a lucide-react icon name where a dedicated logo
// glyph isn't available — see TechStack.jsx for the mapping.
export const techStack = [
  'Python',
  'Java',
  'C',
  'JavaScript',
  'HTML',
  'CSS',
  'Django',
  'MySQL',
  'Git',
  'GitHub',
  'NumPy',
  'Pandas',
  'Matplotlib',
  'Machine Learning',
  'Deep Learning',
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]
