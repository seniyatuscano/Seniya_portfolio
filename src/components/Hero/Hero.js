import React from "react";
import FooterBackground from "./FooterBackground";
import BrandLogo from "./BrandLogo";
import { scroller } from "react-scroll";

const Hero = () => {
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 400,
      offset: -90,
    });
  };

  return (
    <div className="footer" id="hero" aria-label="Hero and Studio Stage">
      <FooterBackground />

      <div className="jobs">
        <span className="tag">software &amp; ai engineer</span>
        <span className="headline job-title">
          software
          <br />
          meets applied ai
        </span>
        <div className="footer-nav">
          <span onClick={() => scrollTo("experience")} style={{ cursor: "pointer" }}>
            Experience
          </span>
          <span onClick={() => scrollTo("techstack")} style={{ cursor: "pointer" }}>
            In the lab
          </span>
          <span onClick={() => scrollTo("projects")} style={{ cursor: "pointer" }}>
            Projects
          </span>
          <span onClick={() => scrollTo("contact")} style={{ cursor: "pointer" }}>
            Say hey
          </span>
        </div>
      </div>

      <div className="logo" role="img" aria-label="Seniya Tuscano logo">
        <BrandLogo />
      </div>

      <div className="contact">
        <span className="tag">open for opportunities</span>
        <div className="headline contact-links">
          <span>actively seeking</span>
          <span>full-time roles*</span>
        </div>
        <p className="note">*ms in information systems @ ut arlington (3.78 gpa) · open for software, cloud &amp; ai roles.</p>
        <div className="socials">
          <span aria-label="GitHub">
            <a
              href="https://github.com/seniyatuscano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: "inherit" }}
            >
              <img src="/github.svg" alt="" width="35" height="35" />
            </a>
          </span>
          <span aria-label="LinkedIn">
            <a
              href="https://www.linkedin.com/in/seniya-tuscano/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: "inherit" }}
            >
              <img src="/linkedin.svg" alt="" width="35" height="35" />
            </a>
          </span>
          <span aria-label="Email">
            <a
              href="mailto:seniyatuscano3110@gmail.com"
              aria-label="Send Personal Email"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", color: "inherit" }}
            >
              <img src="/mail.svg" alt="" width="35" height="35" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
