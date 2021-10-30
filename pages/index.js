import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import SectionHeader from "../src/components/SectionHeader";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Projects from "../src/components/Projects";
import Time from "../src/components/Time";



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
      <Time />
      <Hero />
       <About />
       <Skills />
      {/* <SectionHeader>Projects</SectionHeader> */}
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}
