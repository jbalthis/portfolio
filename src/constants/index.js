import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  docker,
  aaa,
  cisco,
  mrtech,
  messenger,
  portfolio,
  threejs,
  logopng,
  nextjs,
  vuejs,
  quasar,
  aiImagen,
  chatbot,
  spotify,
  ecommerce,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Fullstack Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'API Archetect',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
  {
    name: 'Quasar',
    icon: quasar,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Developer',
    company_name: 'XanthianDesigns, Inc.',
    icon: javascript,
    iconBg: '#383E56',
    date: 'August 2010 - August 2011',
    points: [
      "Acted as Server Administrator for the firm's FreeBSD dedicated server, using various tools to complete routine tasks, including but not limited to, SSH, sFTP, Cron, Git, package managers, and resource monitors; Wrote custom scripts to deal with the automation of routine server tasks.",
      'Designed and developed various websites using PHP/HTML, JavaScript/jQuery, and CSS. Created custom images for use as icons and other front-end assets using the Adobe Tools (PhotoShop and Illustrator).',
      'Used the core Joomla!  functions and MVC design in order to write PHP, JavaScript/jQuery, and CSS on top of to create a custom employee login and data management system for a client that included the use of AJAX to make server requests more seamless.',
      "Designed and launched a custom MySQL database that was to store customer’s information rather than have it be in the same database as the framework's functional data for the business.",
      'Created a variety of icons for a touch screen mobile device that was  to be used by both state and fed law enforcement officers.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'WebProfessionalDirect',
    icon: html,
    iconBg: '#E6DEDD',
    date: 'Dec 2012 - July 2013',
    points: [
      'Developed multiple web-pages and an informational website using PHP, HTML5, CSS3, and JavaScript to be used as part of a marketing sales funnel.',
      "Acted as Server Administrator for the group's dedicated Arch-Linux (PHP, MySQL, Apache) hosting machine, as well as a FreeBSD application server.",
      'sed JavaScript to communicate via AJAX requests to PHP, and then PHP to a MySQL database in order to develop an automated email list building plugin that was incorporated into a marketing campaign.',
      'Customized the Joomla! CMS by striping it to its core functions and admin backend for use as a boilerplate framework in order to be developed into a highly customized website.',
    ],
  },
  {
    title: 'Mobile Application Developer',
    company_name: 'AAA',
    icon: aaa,
    iconBg: '#383E56',
    date: 'Nov 2013 - Jan 2014',
    points: [
      'Personally tested several frameworks, including Appcelerator Titanium, Apache Cordova/PhoneGap, ApGyver Steroids, et. al (with their respective IDE’s when applicable) for the purpose of creating ‘platform independent’ native-like mobile device applications.',
      'The creation of a codebase written in JavaScript that could be ran on either type of device and thus producing the platform independence native look and feel that was desired',
      'Incorporated the use of some of the utility libraries for JavaScript, i.e. BackBone.js, UnderScore.js, Require.js, etc., in order to help ease both development and deployment.',
      'Created a RESTful API using Node.js, Express, and MongoDB in order to serve up JSON formatted data to the test versions of the application throughout its development process.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Cisco',
    icon: cisco,
    iconBg: '#E6DEDD',
    date: 'Apr 2014 - June 2015',
    points: [
      'Developed an enterprise level web application on top of the Wordpress platform that was used to solve the problem of internal collaboration among the senior Technical Marketing Engineers for each division within Cisco, i.e. Routing, Wireless, Switching, etc',
      'Employed virtualization solutions in order to increase redundancy and downtime. This included the use of VMWare products such as vSphere and consisted of the daily routine tasks associated with the operation of a virtual data center, including the creation and maintenance of virtual server clusters and the individual virtual machine servers themselves.',
      'Administered both Windows and *nix servers, including a freeBSD server running Nginx that served up certain application specific tasks, an Ubuntu Linux server that served as the primary web host running Apache and MySQL, a Windows 2k12 server that acted as the vCenter Server for the VMWare virtualization suite, and a Synology file server that was NFS mounted and used to store user file uploads.',
      'Gained a thorough understanding of and large amount of experience with Active Directory and the scripting in both Python and Perl to integrate it with both PHP and Wordpress in general.',
    ],
  },
  {
    title: 'Senior Full Stack Developer',
    company_name: 'M&R Technologies',
    icon: mrtech,
    iconBg: '#E6DEDD',
    date: 'Apr 2018 - Feb 2021',
    points: [
      'Developed a mobile-ready web application using VueJS and the Quasar framework in order for the administrative arm of the business to better track and manage the technical field reps, assets, payroll, etc.',
      'Wrote custom JavaScript plugins for VueJS in order to best tailor the app to the company&apos;s needs.',
      'Administered linux containers and virtual servers used in the development of the application and its related components.',
      'Developed a couple different mobile-ready web applications for the tech field reps to use in aiding them in performing various technical feats related to the field in which this business operates.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Freelance',
    icon: logopng,
    iconBg: '#E6DEDD',
    date: 'Mar 2022 - Present',
    points: [
      'Developed web applications using Next.js, React and VueJS and the Quasar framework to solve various problems for different customers and myself.',
      'Became experienced in the use of TypeScript in projects that tradionally would have used JavaScript.',
      'Began to use AWS to manage various cloud resources such as containers to host VMs and serverless apps.',
      'Focused on using workflows for the GIT source repository that would allow for hosting of static page apps.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jason does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Jason optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Portfolio',
    description:
      'A React SPA that serves as a means of supplying my portfolio to the web. Built with React, Vite, TailwindCSS, Three.js and more.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threejs',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/jbalthis/portfolio',
  },
  {
    name: 'Realtime Messenger',
    description:
      'A realtime messenger that will eventually incorporate voice and video capabilities. It was built using Next.js, React, MongoDB, Prism, TailwindCSS, and more',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: messenger,
    source_code_link: 'https://github.com/jbalthis/messenger',
  },
  {
    name: 'Chatbot',
    description:
      'A simple ChatGPT client written in Python and making use of Flask, Jinja and Bootstrap to render the template.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'chatgpt',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: chatbot,
    source_code_link: 'https://github.com/jbalthis/chatbot',
  },
  {
    name: 'AI-Imagen',
    description:
      'An OpenAI themed image generator using the DALL-E API and built on a MERN stack with React, Express, Mongo, Tailwind, Node and more. Try it out at https://ai-imagen.barelyjason.online',
    tags: [
      {
        name: 'MERN',
        color: 'blue-text-gradient',
      },
      {
        name: 'DALL-E',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenAI',
        color: 'pink-text-gradient',
      },
    ],
    image: aiImagen,
    source_code_link: 'https://github.com/jbalthis/ai-imagen',
  },
  {
    name: 'Spotify Clone',
    description:
      'A Next.js application that incorporates Stripe checkout to process payments and TailwindCSS to handle frontend styling',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: spotify,
    source_code_link: 'https://github.com/jbalthis/spotify-clone',
  },
  {
    name: 'NextJS ECommerce Storefront and Admin Dashboard',
    description:
      'A Next.js application that includes Stripe checkout, Tailwind styles, Clerk auth, and more! Generate and administer ecommerce stores with ease!',
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    source_code_link: 'https://github.com/jbalthis/ecommerce-store-with-admin',
  },
];

export { services, technologies, experiences, testimonials, projects };
