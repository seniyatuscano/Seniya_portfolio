import React from "react";
import {
  NavWrapper,
  NavContainer,
  Brand,
  NavLinks,
  NavItem,
  CommandTrigger,
  ResumeBtn,
  MobileMenuToggle,
} from "./HeaderElements";
import { FiMenu, FiCommand, FiArrowUpRight } from "react-icons/fi";

const Header = ({ toggle, onOpenCommand }) => {
  return (
    <NavWrapper>
      <NavContainer>
        <Brand to="hero" smooth={true} duration={400}>
          <span>Seniya Tuscano</span>
          <span className="tag">SWE</span>
        </Brand>

        <NavLinks>
          <NavItem to="experience" smooth={true} spy={true} offset={-90} duration={400}>
            Experience
          </NavItem>
          <NavItem to="techstack" smooth={true} spy={true} offset={-90} duration={400}>
            Stack
          </NavItem>
          <NavItem to="projects" smooth={true} spy={true} offset={-90} duration={400}>
            Projects
          </NavItem>
          <NavItem to="about" smooth={true} spy={true} offset={-90} duration={400}>
            About
          </NavItem>
          <NavItem to="contact" smooth={true} spy={true} offset={-90} duration={400}>
            Contact
          </NavItem>
        </NavLinks>

        <CommandTrigger
          type="button"
          onClick={() => onOpenCommand && onOpenCommand(true)}
          aria-label="Open Command Menu"
        >
          <FiCommand size={12} />
          <span>Cmd+K</span>
        </CommandTrigger>

        <ResumeBtn
          href="https://drive.google.com/file/d/1P1suUREmwq4sC80dsQ72TAMeHa-TFt52/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Resume</span>
          <FiArrowUpRight size={13} />
        </ResumeBtn>

        <MobileMenuToggle type="button" onClick={toggle} aria-label="Open navigation menu">
          <FiMenu />
        </MobileMenuToggle>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
