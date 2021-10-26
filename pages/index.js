import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import SectionHeader from "../src/components/SectionHeader";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";

const projectData = [
  {
    title: "Project1",
    id: "1",
    subheading:
      "My first project is my personal portfolio site, which you are currently viweing. I built it using NextJS and CSS Modules.",
    description:
      "This projects was initiated with the create-next-app cli. From here the only dependency used was react-icons. Then I set up my pages, components, and global style sheet. to completed the process, it was tested with gest, and then pushed to github. Finally, the site was deployed on Vercel.",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    gitHubUrl: "https://github.com/ChristianWare/Portland",
  },
  {
    title: "Project2",
    id: "2",
    subheading:
      "My first project is my personal portfolio site, which you are currently viweing. I built it using NextJS and CSS Modules.",
    description:
      "This projects was initiated with the create-next-app cli. From here the only dependency used was react-icons. Then I set up my pages, components, and global style sheet. to completed the process, it was tested with gest, and then pushed to github. Finally, the site was deployed on Vercel.",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    gitHubUrl: "https://github.com/ChristianWare/Portland",
    sampleUrl: "https://google.com",
  },
  {
    title: "Project3",
    id: "3",
    subheading:
      "My first project is my personal portfolio site, which you are currently viweing. I built it using NextJS and CSS Modules.",
    description:
      "This projects was initiated with the create-next-app cli. From here the only dependency used was react-icons. Then I set up my pages, components, and global style sheet. to completed the process, it was tested with gest, and then pushed to github. Finally, the site was deployed on Vercel.",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    gitHubUrl: "https://github.com/ChristianWare/Portland",
    sampleUrl: "https://google.com",
  },
  {
    title: "Project4",
    id: "4",
    subheading:
      "My first project is my personal portfolio site, which you are currently viweing. I built it using NextJS and CSS Modules.",
    description:
      "This projects was initiated with the create-next-app cli. From here the only dependency used was react-icons. Then I set up my pages, components, and global style sheet. to completed the process, it was tested with gest, and then pushed to github. Finally, the site was deployed on Vercel.",
    skills: ["react.js", "next.js", "HTML", "CSS"],
    gitHubUrl: "https://github.com/ChristianWare/Portland",
    sampleUrl: "https://google.com",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Ware's Portfolio</title>
        <meta
          name='description'
          content="Christian Ware's Portfolio Landing Page"
        />
        <link rel='icon' href='favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <SectionHeader>Projects</SectionHeader>
      <div id='projects' className={styles.projects}>
        {projectData.map((data) => (
          <Projects {...data} />
        ))}
      </div>
      <Contact />
    </div>
  );
}
