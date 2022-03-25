import img2 from "../../public/images/img2.png";
import img3 from "../../public/images/img3.png";
import img5 from "../../public/images/img5.png";

const projects = [
  {
    id: 1,
    title: "Portland",
    description:
      "The first project is my portfolio landing page, or Portland for short. This is the page you are currently viewing. I built this static site using NextJS. I styled it with CSS Modules. The purpose of this site is to introduce myself to the world, and showcase some of my web developer skills. Feel free to view the source code on GitHub.",
    tech: "Next JS/React, CSS Modules, React-Icons, Framer Motion, Nodemailer.",
    github: "https://github.com/ChristianWare/Portland",
    url: "https://chrisware.io/",
    image: img5,
    width: 500,
    height: 308,
  },
  {
    id: 2,
    title: "Periodic Table of Telements",
    description:
      "The Periodic Table of Telements (television + elements = 'tele'ments) is a reference chart showing the most up to date movie data from each major streaming platform. It is organized so that you can quickly get information on individual telements such as their title, a brief overview, the movie runtime, its' release date, and the average viewer rating.",
    tech: "Next JS/React, TMDB API, CSS Modules, react-icons.",
    github: "https://github.com/ChristianWare/Periodic-Table-Of-Telements",
    url: "https://telements.co/",
    image: img2,
    width: 500,
    height: 413,
  },
  {
    id: 3,
    title: "Taco Bell",
    description:
      "This website is a redesign of Taco Bell's web page. I thought their website could use a refresh so I took it upon myself to take on this challenge. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
    tech: "Next JS/React, CMS Contentful, CSS Modules, React-icons.",
    github: "https://github.com/ChristianWare/Taco-Bell",
    url: "https://livemas.io/",
    image: img3,
    width: 510,
    height: 438,
  },
];

export default projects;
