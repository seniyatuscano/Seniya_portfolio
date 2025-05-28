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
                sequence={["Hi, I'm Prajakta.", () => setShowSubtitle(true)]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    "A Full-Stack Developer.",
                    500,
                    "Machine Learning Enthusiast.",
                    500,
                    "A problem solver.",
                    500,
                    "An innovative thinker.",
                    500,
                    "A lifelong learner.",
                    500,
                    "Always growing, always coding.",
                    500,
                    "A tech explorer.",
                    500,
                    "I turn ideas into code.",
                    500,
                    "Ok, enough with the titles...",
                    500,
                    "You can scroll down to see my projects now...",
                    300,
                    () => setShowScrollDown(true),
                    // 1000,
                    // "Seriously, my projects are worth checking out!",
                    // 1000,
                    // "Still here? Cool, you're awesome.",
                    // 1000,
                    // "Alright, time to reset the loop...",
                    // 1000,
                    // "Catch you later! :)",
                    // 500,
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
