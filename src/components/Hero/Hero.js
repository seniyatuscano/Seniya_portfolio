import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { TypeAnimation } from "react-type-animation";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroLeft,
  HeroRight,
  HeroWrapper,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Hi, I'm Seniya Tuscano.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Cloud Enthusiast.",
                    500,
                    "A Full-Stack Developer.",
                    500,
                    "An AWS & Azure Explorer.",
                    500,
                    "A Data-Driven Thinker.",
                    500,
                    "A Creative Problem Solver.",
                    500,
                    "A Curious Learner.",
                    500,
                    "Building solutions that matter.",
                    500,
                    "Scroll down to see what I’ve built...",
                    300,
                    () => setShowScrollDown(true),
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/appleProfile.png" alt="profilePicture" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="projects" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img src="/scroll-down.svg" alt="scroll-down" />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;
