import bodyeraEcommerceImage from '../assets/images/projects/bodyera-ecommerce.png';
import pokemonCMSImage from '../assets/images/projects/pokemon-cms.png';

export interface Project {
  title: string;
  description: string;
  image: string;
  githublink: string;
  liveLink?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: 'BodyEra E-Commerce',
    description:
      'A Ruby on Rails e-commerce application for browsing fitness apparel. The project includes products, categories, product variants, search, image uploads, and responsive Bootstrap styling.',
    image: bodyeraEcommerceImage,
    githublink: 'https://github.com/Nyles-Ler/bodyera-ecommerce',
    technologies: [
      'Ruby on Rails',
      'SQLite',
      'Bootstrap',
      'Active Storage',
      'Kaminari',
      'Docker',
    ],
  },
  {
    title: 'Pokemon CMS',
    description:
      'A PHP and MySQL content management system with CRUD features, authentication, search, filtering, comments, and moderation.',
    image: pokemonCMSImage,
    githublink: 'https://github.com/Nyles-Ler/Pokedex-CMS',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
  },
];
