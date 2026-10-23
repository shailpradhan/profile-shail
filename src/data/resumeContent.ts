export const resumeContent = {
  profile: {
    name: 'Shail Pradhan',
    shortName: 'Shail',
    title: 'Software Engineer',
    location: 'Chennai, Tamil Nadu, India',
    tagline:
      'Building thoughtful software, intelligent systems, and reliable digital experiences.',
    summary: [
      'I enjoy building software that is simple, maintainable, and useful. My interests include software engineering, AI-powered applications, developer tooling, and reliable systems.',
      'I work on projects spanning AI agent evaluation, browser-based developer tools, and machine learning applications.',
    ],
    summaryReviewNote:
      'Based on publicly available profile information and project descriptions. Refine this to reflect current responsibilities and goals.',
    emailPlaceholder: 'Email address not provided',
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
      title: 'Hand Gesture Recognition using MediaPipe',
      category: 'Computer Vision / Machine Learning',
      description:
        'A Python sample that estimates hand pose with MediaPipe and recognizes hand signs and finger gestures from detected keypoints using a simple MLP.',
      repository:
        'https://github.com/shailpradhan/hand-gesture-recognition-Mediapipe',
      technologies: ['Python', 'Jupyter Notebook', 'MediaPipe', 'MLP'],
      repositoryNote:
        'The dataset, supported gesture classes, model details beyond the README, and measured accuracy have not been verified.',
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
    items: [] as string[],
    emptyMessage: 'No certifications have been provided yet.',
  },
  resumePdf: {
    available: false,
    path: '/resume.pdf',
  },
}
