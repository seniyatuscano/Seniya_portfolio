import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from "../../data/ProjectData";
import {
  ContactWrapper,
  Image,
  Tech,
  TechImg,
  TechName,
  Technologies,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image src="/appleProfileMac.png" alt="profilePicture" />
        </ScrollAnimation>
        <div className="AboutBio">
          <ScrollAnimation animateIn="fadeIn">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--accent-yellow)' }}>About Me</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              Hi, I’m <strong>Seniya Tuscano</strong> — a passionate software engineer and current Master’s student in Information Systems at the University of Texas at Arlington, graduating in May 2025. I bring hands-on experience across cloud computing, full-stack development, and technical support.
            </p>
            <br />
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              My focus lies in distributed systems, cloud architecture, and solving complex engineering problems. I enjoy building impactful solutions and continuously learning new tools, with a deep interest in platforms like AWS and Azure.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
