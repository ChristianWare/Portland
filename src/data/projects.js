import telements from "../../public/images/telements.png";
import razor from "../../public/images/razor.png";
import livemas from "../../public/images/livemas.png";
import portland from "../../public/images/portland.png";
import fonts from "../../public/images/fonts.png";

const projects = [
  {
    id: 1,
    title: "Taco Bell",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
    tech: "Next JS/React, CMS Contentful, CSS Modules, React-Icons.",
    github: "https://github.com/ChristianWare/Taco-Bell",
    url: "https://livemas.io/",
    image: livemas,
  },
  {
    id: 2,
    title: "Fonts & Footers",
    description:
      "This website is for a digital marketing agency in Phoenix, AZ called Fonts & Footers. The purpose of this site is to introduce themselves to the Phoenix area as the go to scource for all this web related. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
    tech: "Next JS/React, CSS Modules, React-Icons.",
    github: "https://github.com/ChristianWare/Fonts-and-Footers",
    url: "https://www.fontsandfooters.com/",
    image: fonts,
  },
  {
    id: 3,
    title: "Razor Edge Studio",
    description:
      "My personal barber recently expressed to me that he does not have a website, so I offered to build him one. When he accepted, I gave him a few desighs, and this is the one that he chose. In addition to the home page, it has a galler, about and services details page. It is mobile responsive, and and received high scores on Google's Page Speed Insights.",
    tech: "Next JS/React, CSS Modules, React-Icons, Framer Motion",
    github: "https://github.com/ChristianWare/Razor-Edge",
    url: "https://www.razoredgebarber.com/",
    image: razor,
  },
  {
    id: 4,
    title: "Periodic Table of Telements",
    description:
      "The Periodic Table of Telements (television + elements = 'tele'ments) is a reference chart showing the most up to date movie data from each major streaming platform. It is organized so that you can quickly get information on individual telements such as their title, a brief overview, the movie runtime, its' release date, and the average viewer rating.",
    tech: "Next JS/React, TMDB API, CSS Modules, React-Icons.",
    github: "https://github.com/ChristianWare/Periodic-Table-Of-Telements",
    url: "https://telements.co/",
    image: telements,
  },
  {
    id: 5,
    title: "Portland",
    description:
      "The first project is my portfolio landing page, or Portland for short. This is the page you are currently viewing. I built this static site using NextJS. I styled it with CSS Modules. The purpose of this site is to introduce myself to the world, and showcase some of my web developer skills. Feel free to view the source code on GitHub.",
    tech: "Next JS/React, CSS Modules, React-Icons, Framer Motion, Nodemailer.",
    github: "https://github.com/ChristianWare/Portland",
    url: "https://chrisware.io/",
    image: portland,
  },
];

export default projects;
