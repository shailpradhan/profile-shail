export const resumeContent = {
  profile: {
    name: 'Shail Pradhan',
    shortName: 'Shail',
    title: 'Software Engineer',
    location: 'Chennai, Tamil Nadu, India',
    tagline:
      'Building thoughtful software, intelligent systems, and reliable digital experiences.',
    summary: [
      'I like building software that is simple, maintainable, and useful. My work and interests span software engineering, AI-powered applications, developer tooling, and machine learning.',
      'I build and explore software across AI applications, developer tools, and machine learning.',
    ],
    emailPlaceholder: 'shail.pradhan@icloud.com',
    profiles: [
      {
        label: 'GitHub',
        href: 'https://github.com/shailpradhan',
        description: 'View Shail Pradhan on GitHub',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/shail-pradhan',
        description: 'View Shail Pradhan on LinkedIn',
      },
    ],
  },
  skills: [
    { category: 'Programming', technologies: ['Python', 'TypeScript', 'JavaScript'] },
    { category: 'Frontend', technologies: ['React', 'HTML', 'CSS', 'Vite'] },
    {
      category: 'AI and machine learning',
      technologies: [
        'AI application development',
        'Machine learning',
        'Computer vision',
        'LLM evaluation',
      ],
    },
    {
      category: 'Testing and evaluation',
      technologies: ['pytest', 'Deterministic testing', 'Evaluation datasets'],
    },
    {
      category: 'Developer tooling',
      technologies: ['Git', 'GitHub', 'Browser extensions'],
    },
    {
      category: 'Observability',
      technologies: ['OpenTelemetry concepts', 'Agent trajectory recording'],
    },
    { category: 'Data validation', technologies: ['Pydantic'] },
  ],
  experience: {
    employer: 'NCompass TechStudio',
    location: 'Chennai, Tamil Nadu, India',
    verificationNote:
      'Please confirm the role titles and dates before public launch. Responsibilities and achievements have not been supplied; additional roles are omitted until verified.',
    roles: [
      {
        title: 'Software Developer',
        dates: 'July 2026 – Present',
      },
      {
        title: 'Software Developer Intern',
        dates: 'September 2025 – June 2026',
      },
    ],
  },
  projects: [
    {
      title: 'Agent Evaluation & Observability Harness',
      category: 'AI Engineering / Developer Tools',
      period: undefined,
      description:
        'An evaluation and observability framework for systematically testing AI agents and detecting behavioral regressions across changes to models, prompts, and tools.',
      repository:
        'https://github.com/shailpradhan/Agent-Evaluation-Observability-Harness',
      technologies: [
        'Python',
        'Pydantic',
        'pytest',
        'OpenTelemetry',
        'YAML / JSON',
        'SQLite / PostgreSQL design',
      ],
      repositoryNote:
        'The repository describes structured agent trajectories and tool calls, evaluation datasets, deterministic replay, rubric-based evaluation, and regression metrics. Verify the current implementation before presenting every described capability as complete.',
    },
    {
      title: 'AI Coding Mentor Extension',
      category: 'AI / Browser Extension',
      period: undefined,
      description:
        'A browser extension project exploring AI-powered coding assistance with Chrome’s built-in AI capabilities.',
      repository: 'https://github.com/shailpradhan/Coding-Mentor-Extension',
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'Chrome extension APIs',
        'Chrome built-in AI',
      ],
      repositoryNote:
        'The repository documents extension build and loading steps and setup requirements for Chrome’s experimental built-in AI. Feature-level claims require an implementation review.',
    },
    {
      title: 'Nepali Sign Language Gesture Recognition',
      category: 'Computer Vision / Machine Learning',
      period: undefined,
      description:
        'An academic project using transfer learning with ResNet-50 and VGG16, alongside a custom DNN using MediaPipe hand landmarks, to recognize Nepali Sign Language gestures.',
      repository:
        'https://github.com/shailpradhan/hand-gesture-recognition-Mediapipe',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'MediaPipe', 'ResNet-50', 'VGG16'],
      repositoryNote:
        'LinkedIn reports 99% accuracy with ResNet-50, 91% with VGG16, and 90% with the custom model. These figures are profile-reported and have not been independently validated against the linked repository.',
    },
  ],
  education: {
    institution: 'Sikkim Manipal Institute of Technology (SMIT)',
    dates: '2022–2026',
    degree: 'Bachelor of Technology',
    specialization: 'Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
    grade: 'CGPA 8.7',
  },
  certifications: {
    items: [
      'Cyber Risk & Regulatory Certificate, PwC Acceleration Center India (July 2025)',
      'The Complete Full-Stack Web Development Bootcamp, Udemy (June 2025)',
      'Developing AI Applications using Python and Flask, IBM (February 2025)',
      'HackerRank Skill Certificate: Problem Solving (Basic) (December 2024)',
      'HackerRank Skill Certificate: Python (Basic) (December 2024)',
      'Programming in Python, Meta (November 2024)',
      'AI ML for Geodata Analysis, Indian Space Research Organisation (ISRO) (August 2024)',
      'Introduction to TensorFlow for Artificial Intelligence, Machine Learning and Deep Learning, DeepLearning.AI (May 2024)',
    ],
    emptyMessage: 'No certifications have been provided yet.',
  },
  resumePdf: {
    available: true,
    path: '/resume.pdf',
  },
}
