import telements from "../../public/images/telements.png";
import drone from "../../public/images/drone.png";
import livemas from "../../public/images/livemas.png";
import portland from "../../public/images/portland.png";
import fonts from "../../public/images/fonts.png";
import laws from "../../public/images/48laws.png";
import johnnie from "../../public/images/johnnie.png";

const projects = [
  {
    id: 1,
    title: "Johnnie Walker E-Commerce",
    github: "https://github.com/ChristianWare/JW-Redesign",
    url: "https://johnniewalks.com/",
    image: johnnie,
    frontEnd: "React/Next.js",
    backEnd: "Node.js, MongoDB",
    npmDep:
      "axios, bcrypt, cloudinary, js-cookie, mongoose, next-auth, react-hook-form, react-toastify",
    styling: "CSS Modules",
    description:
      "Johinne Walks is an e-commerce store, inspired by the current Johnnie Walker website. It showcases the different labels that Johnnie Walker currently has to offer, including the popular Blue, Red, and Green labels.",
  },
  {
    id: 2,
    title: "Taco Bell",
    description:
      "This website is a redesign of Taco Bell's web page. I wanted the main focus on the site to be the menu so that it is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights.",
    tech: "Next JS/React, CMS Contentful, CSS Modules, React-Icons",
    github: "https://github.com/ChristianWare/Taco-Bell",
    url: "https://livemas.io/",
    image: livemas,
    frontEnd: "React/Next.js",
    backEnd: "Contentful Headless CMS",
    npmDep: "contentful, react-icons",
    styling: "CSS Modules",
  },
  {
    id: 3,
    title: "Telements",
    description:
      "The Periodic Table of Telements (television + elements = 'tele'ments) is a reference chart showing the most up to date movie data from each major streaming platform. It is organized so that you can quickly get information on individual telements such as their title, a brief overview, the movie runtime, its' release date, and the average viewer rating.",
    tech: "Next JS/React, TMDB API, CSS Modules, React-Icons",
    github: "https://github.com/ChristianWare/Periodic-Table-Of-Telements",
    url: "https://telements.co/",
    image: telements,
    frontEnd: "React/Next.js",
    backEnd: "TMDB API",
    npmDep: "react-icons",
    styling: "CSS Modules",
  },
  {
    id: 4,
    title: "Fonts & Footers",
    github: "https://github.com/ChristianWare/Fonts-and-Footers",
    url: "https://www.fontsandfooters.com/",
    image: fonts,
    frontEnd: "React/Next.js",
    backEnd: "Node.js for contact form functionality",
    npmDep: "email.js, nodemailer, react-icons",
    styling: "CSS Modules",
    description:
      "This website is for a digital marketing agency in Phoenix, AZ called Fonts & Footers. The purpose of this site is to introduce themselves to the Phoenix area as the go to source for all things web related.",
  },
  {
    id: 5,
    title: "48 Laws of Power",
    description:
      "This project is made with Next.Js and Markdown with MDX. The purpose of this site is to show all 48 laws with details for how to apply each law in your personal life. The Images are stored on Cloudinary, and are being imported statically.",
    tech: "Next JS/React, Markdown, Cloudinary",
    github: "https://github.com/ChristianWare/48-laws",
    url: "https://laws48.com/",
    image: laws,
    width: 2868,
    height: 1418,
    frontEnd: "React/Next.js",
    backEnd: "Node.js to access File System - fs",
    npmDep:
      "gray-matter, next-mdx-remote, rehype-autolink-headings, rehype-code-titles, rehype-slug",
    styling: "CSS Modules",
  },

  // {
  //   id: 6,
  //   title: "Dronopoly",
  //   description:
  //     "This is a fictional drone company that I created. They specialize in drone photography and videography. It currently has a home, services, about, gallery, and contact page that can all be easily accessed on the navbar. There is a contact form that is fully functional. The site is mobile friendly and recieived high scores on Google page speed insights. ",
  //   tech: "Next JS/React, CSS Modules, React-Icons, Framer Motion",
  //   github: "https://github.com/ChristianWare/templateOne",
  //   url: "https://dronopoly.com/",
  //   image: drone,
  //   frontEnd: "React/Next.js",
  //   backEnd: "Node.js for contact form functionality",
  //   npmDep: "emailjs-com, nodemailer, react-icons",
  //   styling: "CSS Modules",
  // },
  // {
  //   id: 6,
  //   title: "Portland",
  //   description:
  //     "The first project is my portfolio landing page, or Portland for short. This is the page you are currently viewing. I built this static site using NextJS. I styled it with CSS Modules. The purpose of this site is to introduce myself to the world, and showcase some of my web developer skills. Feel free to view the source code on GitHub.",
  //   tech: "Next JS/React, CSS Modules, React-Icons, Framer Motion, Nodemailer",
  //   github: "https://github.com/ChristianWare/Portland",
  //   url: "https://chrisware.io/",
  //   image: portland,
  //   frontEnd: "React/Next.js",
  //   backEnd: "Node.js for contact form functionality",
  //   npmDep: "emailjs-com, nodemailer, react-icons",
  //   styling: "CSS Modules",
  // },
];

export default projects;
