import Head from "next/head";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Contact from "../src/components/Contact";
import Projects from "../src/components/Projects";
import Time from "../src/components/Time";
import ScrollIndicator from "../src/components/ScrollIndicator";
import Layout from "../src/components/Layout";

export default function Home() {

  return (
    <>
      <ScrollIndicator />
      <div>
        <Head>
          <title>Chris Ware&apos;s Portfolio</title>
          <meta
            name='description'
            content="Christian Ware's Portfolio Landing Page"
          />
          <link rel='icon' href='favicon.ico' />
        </Head>

        {/* <Navbar /> */}
        <Layout>
          <Time />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          {/* <Footer /> */}
        </Layout>
      </div>
    </>
  );
}
