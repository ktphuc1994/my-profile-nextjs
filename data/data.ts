import { commonConst } from '../core/constants/common.const';

export const skillList = [
  {
    skillName: 'Front-end',
    skills: [
      'HTML',
      'CSS',
      'Responsive',
      'Bootstrap',
      'TailwindCSS',
      'Ant Design',
      'ReactJS',
      'Redux',
      'React Query',
    ],
  },
  {
    skillName: 'Back-end',
    skills: ['MySQL', 'ExpressJS', 'Sequelize', 'Prisma', 'NestJS', 'Docker'],
  },
  {
    skillName: 'Other',
    skills: ['REST APIs', 'JavaScript', 'TypeScript', 'Git', 'Vercel', 'Yarn'],
  },
];

export const projectList = [
  {
    name: 'Samar',
    time: '2022-06-01',
    framework: ['HTML', 'CSS'],
    demo: ['https://bc04-samar-project.vercel.app/'],
    git: ['https://gitlab.com/ktphuc1994/bc04-ktphuc-samar'],
    image: '/img/samar.jpg',
    youtube: null,
    description:
      'The first case study, buidling a simple website using only HTML and CSS.',
    contribution: ['Develop & Optimized Code.'],
  },
  {
    name: 'Studious',
    time: '2022-06-01',
    framework: ['HTML', 'CSS', 'JavaScript'],
    demo: ['http://bc04-nhom4-studious.surge.sh/'],
    git: ['https://gitlab.com/ktphuc1994/bc04-nhom4-capstone-bootstrap'],
    image: '/img/studious.jpg',
    youtube: 'https://youtu.be/7seq_f36R38',
    description:
      'A case study for using JavaScript along with HTML and CSS. JavaScript mostly used for the video popup and carousel',
    contribution: [
      'Develop front page, combine with JavaScript to control carousel and video popup.',
      'Setup and code responsive with Bootstrap.',
    ],
  },
  {
    name: 'The Miracle Movie',
    time: '2022-10-01',
    framework: ['ReactJS', 'Redux Toolkit', 'Ant Design', 'TailwindCSS'],
    demo: ['https://bc04-capstone-movie-phuc-huy-userview.vercel.app/'],
    git: ['https://github.com/ktphuc1994/bc04-capstone-movie-phuc-huy-useview'],
    image: '/img/the-miracle-movie.jpg',
    youtube: 'https://youtu.be/QOGyzXV76UE',
    description:
      'A simple movie website using framework of ReactJS and Redux Toolkits, assisted by Ant Design and TailwindCSS UI Library',
    contribution: [
      'Develop component with ReactJS.',
      'Setup Axios Services for REST APIs calls.',
      'Setup Redux, TailwindCSS and Ant Design.',
      'Setup Git repository and deploy to Vercel.',
    ],
  },
  {
    name: 'Jira Clone',
    time: '2022-11-01',
    framework: [
      'ReactJS',
      'Redux Toolkit',
      'TypeScript',
      'Ant Design',
      'TailwindCSS',
    ],
    demo: ['https://bc04-capstone-final-jira-clone-huy-phuc-viet.vercel.app/'],
    git: ['https://github.com/huytran0794/bc04_capstone_final_jira_clone'],
    image: '/img/jira-clone.jpg',
    youtube: 'https://youtu.be/GvNoHRpC8-w',
    description:
      'A case study and simple task management. It is not a 100% clone of Jira, but inspired from it.',
    contribution: [
      'Develop component for Project Management, Header, Footer and Sidebar with ReactJS.',
      'Design responsive for mobile components.',
      'Setup Axios Services for REST APIs calls.',
      'Optimize CSS of Ant Design component to match design requirement.',
    ],
  },
  {
    name: 'React Query Movie',
    time: '2023-01-01',
    framework: [
      'React Query',
      'Ant Design',
      'TailwindCSS',
      'MySQL',
      'Prisma',
      'NestJS',
      'Docker',
    ],
    demo: [
      'http://react-query-movie.khucthienphuc.name.vn',
      'http://api-nestjs-movie.khucthienphuc.name.vn/swagger',
    ],
    git: [
      'https://github.com/ktphuc1994/movie-react-query',
      'https://github.com/ktphuc1994/node25-capstone-nestjs',
    ],
    image: '/img/react-query-movie.jpg',
    youtube: 'https://youtu.be/_poeXs6tApU',
    description:
      'A simple movie website run by React Query as front-end, and supported by NestJS/Prisma as back-end. Running on EC2 of AWS via Docker Container.',
    contribution: [
      'Transcode The Miracle Movie Project from JavaScript to TypeScript, from React Toolkit to React Query.',
      'Setup database models.',
      'Create NestJS module and API Routing.',
      'Setup NestJS guards, validation, exception, interceptor.',
      'Docker related work (Dockerfile, docker-compose).',
    ],
  },
];

const allSkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'REST APIs',
  'ReactJS',
  'Redux',
  'Redux Toolkit',
  'React Query',
  'Ant Design',
  'Responsive',
  'Bootstrap',
  'TailwindCSS',
  'MySQL',
  'ExpressJS',
  'Sequelize',
  'Prisma',
  'NestJS',
  'Docker',
  'Yarn',
  'Git',
  'Vercel',
];

interface InterfaceFrameworkColor {
  name: string;
  color: 'darkMBlue' | 'brightRed' | 'darkOrange' | 'limeGreen' | 'darkPink';
  variant: 'outlined' | 'filled';
}
export const skillColor: Array<InterfaceFrameworkColor> = allSkills.map(
  (fw, i) => {
    const colorIndex = i % 5;
    const variantType = i % 2;
    return {
      name: fw,
      color: commonConst.customColor[colorIndex],
      variant: variantType === 0 ? 'filled' : 'outlined',
    };
  }
);

export const educationList = [
  {
    center: 'Cybersoft Academy',
    major: 'Backend NodeJS',
    time: '2023-01-01',
  },
  {
    center: 'Cybersoft Academy',
    major: 'Frontend ReactJS',
    time: '2022-11-01',
  },
  {
    center: 'Foreign Trade University',
    major: 'BBA: International Business',
    time: '2016-04-01',
  },
];
