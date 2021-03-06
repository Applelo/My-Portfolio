export default {
  meta: {
    title: 'Loïs Boubault | Portfolio',
    description:
      'You can find here my resume, all my projects and how to contact me.',
  },
  header: {
    title: 'Loïs Boubault',
    nav: {
      title: 'Main navigation',
      items: {
        projects: 'Projects',
        contact: 'Contact',
      },
    },
  },
  about: {
    title: 'About',
    cv: 'Download my resume',
    cv_mobile: 'Resume',
    cv_path: '/files/cv.pdf',
  },
  projects: {
    title: 'Projects',
    filters: {
      title: 'Projects filters navigation',
      items: {
        highlighted: 'Highlighted',
        all: 'All',
        principal: 'Principal',
        itineraireb: 'itinéraire B',
        hobby: 'Hobby',
      },
    },
    origins: {
      principal: 'Developed at [Principal](https://principal.studio)',
      itineraireb: 'Developed at itinéraire B',
      hobby: 'Developed on my free time',
    },
  },
  contact: {
    title: 'Contact',
    socials: {
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      email: 'Contactez moi',
      github: 'GitHub',
    },
  },
  footer: {
    credits: '[Source code](https://github.com/Applelo/Portfolio)',
  },
  goToTop: 'Return to the top of the page',
  error: {
    title: '{statusCode} Error',
    back: 'Back to the portfolio',
    404: 'This page could not be found',
  },
};
