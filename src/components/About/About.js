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
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/appleProfileMac.png" alt="profilePicture" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hi, I’m <strong>Seniya Tuscano</strong> — a passionate software engineer and current Master’s student in Information Systems at the University of Texas at Arlington, graduating in May 2025. I bring hands-on experience across cloud computing, full-stack development, and technical support, built from roles at DWS India, LTIMindtree, and other dynamic tech environments.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              My current focus lies in distributed systems, cloud architecture, and solving complex engineering problems. I enjoy building impactful solutions and continuously learning new tools and technologies, with a deep interest in platforms like AWS and Azure.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Outside of work, I’m an avid traveler and dancer, always looking for new perspectives and experiences. I’m actively seeking full-time roles starting May 2025 where I can grow, contribute, and collaborate with forward-thinking teams to build robust systems and innovative products.
              <div className="tagline2">
                Here are some technologies I've worked with:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
