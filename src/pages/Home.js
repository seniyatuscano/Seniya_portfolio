import React, { useState } from "react";
import Header from "../components/Header/Header";
import Dropdown from "../components/Dropdown/Dropdown";
import CommandPalette from "../components/Interactive/CommandPalette";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import TechStack from "../components/TechStack/TechStack";
import Experience from "../components/Experience/Experience";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Achievements from "../components/Achievements/Achievements";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Header toggle={toggleDropdown} onOpenCommand={setIsCommandOpen} />
      <Dropdown isOpen={isDropdownOpen} toggle={toggleDropdown} />
      <CommandPalette isOpen={isCommandOpen} onClose={setIsCommandOpen} />

      <main>
        <Hero />
        <Experience />
        <TechStack />
        <Projects />
        <About />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
