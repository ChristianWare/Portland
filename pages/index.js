import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Projects from "../src/components/Projects";
import Time from "../src/components/Time";
import ScrollIndicator from "../src/components/ScrollIndicator";



export default function Home() {

  return (
    <>
      <ScrollIndicator />
      <div className={styles.container}>
        <Head>
          <title>Chris Ware&apos;s Portfolio</title>
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
        {/* <Projects />
        <Contact />
        <Footer /> */}
      </div>
    </>
  );
}
