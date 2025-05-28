import React from "react";
import About from "../components/About/About";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <About />
      <Contact />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
