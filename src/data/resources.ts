import ffcImage from '../assets/images/resources/freecodecamp-icon.png';
import reactImage from '../assets/images/resources/react-icon.png';
import railsImage from '../assets/images/resources/rails-icon.png';
import githubImage from '../assets/images/resources/github-icon.png';

export interface Resource {
  title: string;
  summary: string;
  image: string;
  link: string;
}

export const resources: Resource[] = [
  {
    title: 'FreeCodeCamp',
    summary:
      'A web development reference I use for learning HTML, CSS, JavaScript, browser APIs, accessibility, and web standards.',
    image: ffcImage,
    link: 'https://www.freecodecamp.org/',
  },
  {
    title: 'React Documentation',
    summary:
      'The official React documentation provides guidance on components, props, state, hooks, and building interactive user interfaces.',
    image: reactImage,
    link: 'https://react.dev/',
  },
  {
    title: 'Ruby on Rails Guides',
    summary:
      'The official Rails guides provide information about routing, models, controllers, views, Active Record, testing, and application development.',
    image: railsImage,
    link: 'https://guides.rubyonrails.org/',
  },
  {
    title: 'GitHub Documentation',
    summary:
      'A resource I use to learn about repositories, Git workflows, branches, pull requests, GitHub Actions, and project collaboration.',
    image: githubImage,
    link: 'https://docs.github.com/',
  },
];
