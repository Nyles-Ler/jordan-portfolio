export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    description:
      'Programming and markup languages I have used throughout the Full Stack Web Development program.',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Ruby',
      'Python',
      'SQL',
    ],
  },
  {
    title: 'Frameworks and Libraries',
    description:
      'Frameworks and libraries I have used to build responsive front-end and full-stack applications.',
    skills: [
      'React',
      'Ruby on Rails',
      'Flask',
      'Dash',
      'BootStrap',
      'Styled Components',
      'Storybook',
      'Kaminari',
      'Active Storage',
    ],
  },
  {
    title: 'Tools',
    description:
      'Development, testing, version control, and deployment tools used throughout my projects.',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'GitHub Actions',
      'Jest',
      'React Testing Library',
      'ESLint',
      'Prettier',
      'Husky',
      'VS Code',
      'MySQL',
      'SQLite',
      'phpMyAdmin',
      'XAMPP',
    ],
  },
];
