import { Project } from './interfaces';
import dockyard from '/images/dockyard.png';
import wordle from '/images/wordle.png';
import mygpt from '/images/mygpt.png';

const projects: Project[] = [
  {
    id: 'mygpt',
    name: 'MyGPT 🤖💬',
    desc: 'An AI chatbot app which leverages the latest in natural language processing technology to provide you with intelligent and personalized responses. ',
    stacks: ['React', 'Tailwind', 'AWS Lambda'],
    image: mygpt,
    repo: 'https://github.com/taesookang/my_gpt',
    demo: 'https://main.docovffuexzxo.amplifyapp.com/',
    themeColor: ['#343541', '#FFFFFF'],
  },
  {
    id: 'dockyard',
    name: 'Dockyard 🍔🍺',
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
    themeColor: ['#FCD37E', '#B8434B'],
  },
  {
    id: 'wordle',
    name: 'Wordle 🧩🎮',
    desc: 'Wordle is a word puzzle game where players deduce a 5-letter mystery word in limited tries, using color-coded hints.  It offers a captivating test of deduction and vocabulary skills.',
    stacks: ['Next JS', 'Tailwind + SCSS', 'Redux', 'Framer motion'],
    image: wordle,
    repo: 'https://github.com/taesookang/wordle',
    demo: 'https://wordlebytaesoo.vercel.app/',
    themeColor: ['#EAE9E9', '#3A3A3C'],
  },
];

export default projects;
