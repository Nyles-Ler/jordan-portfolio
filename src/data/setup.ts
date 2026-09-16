export interface SetupGroup {
  title: string;
  description: string;
  items: string[];
}

export const setupGroups: SetupGroup[] = [
  {
    title: 'VS Code Setup',
    description:
      'Visual Studio Code is my primary editor. I use extensions that support formatting, linting, version control, Docker, and full-stack development.',
    items: [
      'Prettier',
      'ESLint',
      'GitLens',
      'Docker',
      'Github Pull Requests',
      'Ruby LSP',
      'Thunder Client',
    ],
  },
  {
    title: 'Terminal Setup',
    description:
      'I use the VS Code integrated terminal with PowerShell for Windows projects and WSL Ubuntu for Linux-based workflows, Ruby on Rails, and Docker development.',
    items: [
      'PowerShell',
      'WSL Ubuntu',
      'VS Code Terminal',
      'Git',
      'npm',
      'Bundler',
    ],
  },
  {
    title: 'Preferred Editor Font',
    description:
      'I use Consolas as my primary editor font because it keeps code readable and makes indentation, symbols, and file structure easier to follow.',
    items: ['Consolas'],
  },
  {
    title: 'Supporting Tools',
    description:
      'These tools support my local development, testing, database work, deployment, and project workflow.',
    items: [
      'Docker Desktop',
      'GitHub',
      'Node.js',
      'npm',
      'MySQL',
      'SQLite',
      'PostgreSQL',
      'XAMPP',
      'phpMyAdmin',
    ],
  },
];
