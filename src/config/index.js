module.exports = {
  siteTitle: 'Golam Rabbani | Software Engineer',
  siteDescription:
    'Golam Rabani is a Full Stack Software Engineer specializing in building (and occasionally designing) exceptional, high-quality websites and applications for both mobile and web.',
  siteKeywords:
    'Golam Rabbani, software engineer, front-end engineer, web developer, javascript, react developer',
  siteUrl: 'https://rabbani.dev',
  siteLanguage: 'en_US',
  name: 'Golam Rabbani',
  location: 'Karlsruhe, Germany',
  email: 'mgorabbani@gmail.com',
  github: 'https://github.com/mgorabbani',
  twitterHandle: '@mgorabbani',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/mgorabbani',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mgorabbani',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/mgorabbani',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/mgorabbani',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/mgorabbani',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
