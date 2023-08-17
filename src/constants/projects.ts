import { Project } from './interfaces';
import dockyard from '../assets/images/dockyard.png';

const projects: Project[] = [
  {
    id: 'dockyard',
    name: 'Dockyard 🍺',
    desc: 'A single-page e-commerce website with an animated user interface, along with the integration of AWS S3 and CloudFront for the efficient retrieval of assets and data.',
    stacks: [
      'Next JS',
      'Tailwind + SCSS',
      'Redux',
      'AWS S3 + Cloudfront',
      'Framer motion',
    ],
    image: dockyard,
    repo: 'https://github.com/taesookang/dockyard',
    demo: 'https://dockyard.vercel.app/',
  },
];

export default projects;
