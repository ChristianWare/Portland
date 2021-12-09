import img1 from '../../public/images/img1.png'
import img2 from '../../public/images/img2.png'
import img3 from '../../public/images/img3.png'

const projects = [
  {
    id: 1,
    title: "Portland",
    description:
      "The first project is my portfolio landing page, or Portland for short. This is the page you are currently viewing. I built this static site using NextJS. I styled it with CSS Modules. The purpose of this site is to introduce myself to the world, and showcase some of my web developer skills. Feel free to view the source code on GitHub.",
    tech: "This Single Page Application was built with Next JS and React. The Data for the menu items is being pulled from a headless CMS, Contentful, with the 'getStaticProps' function in NextJs. It is styled using CSS Modules. The dependencies used were react-icons, and the Contentful CLI. The API keys were stored in a .env.local file, to be hidden from the public. The images were optimized for production, and are lazy loaded on the page. This is all possible because of the Image component from Next JS.",
    github: "https://github.com/ChristianWare/Portland",
    url: "chrisware.io",
    image: img1,
    width: 500,
    height: 308,
  },
  {
    id: 2,
    title: "Periodic Table of Telements",
    description:
      "The Periodic Table of Telements (television + elements = 'tele'ments) is a reference chart showing the most up to date movie data from each major streaming platform. It is organized so that you can quickly get information on individual telements such as their title, a brief overview, the movie runtime, its' release date, and the average viewer rating.",
    tech: "This project was built with Next JS and React. Each page has data being pulled from the TMDB API on the server with the 'getServerSideProps' function in NextJs. It is styled using CSS Modules. The only dependency used was react-icons.",
    github: "https://github.com/ChristianWare/Periodic-Table-Of-Telements",
    url: "https://telements.co/",
    image: img2,
    width: 700,
    height: 583,
  },
  {
    id: 3,
    title: "Taco Bell",
    description:
      "This website is a redesign of Taco Bell's web page. I thought their website could use a refresh so I took it upon myself to take on this challenge. I wanted the main focus on the site to be the menu, since the menu on Taco Bell's website is not currently on their home page (you have to navigate to another page to see it). The menu I created is able to be filtered to show breakfast, lunch, and all items on the menu at the same time. The Site is mobile responsive, and received high scores on Google's Page Speed Insights. There is also a brief 'about' section, a social media section with links to external pages, and a newsletter sign up area towards the bottom. Feel free to visit the demo link above.",
    tech: "This Single Page Application was built with Next JS and React. The Data for the menu items is being pulled from a headless CMS, Contentful, with the 'getStaticProps' function in NextJs. It is styled using CSS Modules. The dependencies used were react-icons, and the Contentful CLI. The API keys were stored in a .env.local file, to be hidden from the public. The images were optimized for production, and are lazy loaded on the page. This is all possible because of the Image component from Next JS.",
    github: "https://github.com/ChristianWare/Taco-Bell",
    url: "https://livemas.io/",
    image: img3,
    width: 700,
    height: 608,
  },
];

export default projects;
