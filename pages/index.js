import Head from 'next/head'
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";

const projectData = []

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Chris Ware's Portfolio</title>
      <meta name='description' content="Christian Ware's Portfolio Landing Page" />
      <link rel="icon" href="favicon.ico" />
    </Head>
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
    </div>
  );
}
