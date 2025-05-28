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
              Hello, my name is <strong>Prajakta Nisal</strong>, and I am currently pursuing a Master’s in Computer Science at the University of Texas at Arlington, graduating in May 2025. With over two years of experience as a Software Engineer at Deutsche Bank, India, I have a proven track record of developing scalable, high-performance solutions that address complex challenges and drive impactful results.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              These days, I am exploring cutting-edge technologies in distributed computing, large-scale system design, and artificial intelligence to design innovative systems that transform user experiences and solve real-world problems. My academic projects and professional experience have strengthened my technical expertise and problem-solving mindset, enabling me to thrive in dynamic and collaborative environments.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I am actively seeking opportunities to grow as an engineer, contributing to innovative projects that challenge the status quo and drive progress. Passionate about continuous learning and teamwork, I am excited to connect with like-minded professionals and work on impactful solutions that make a meaningful difference.<div className="tagline2">
              
              I have gained proficiency and confidence in working with the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
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
