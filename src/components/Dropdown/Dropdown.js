import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { FiX, FiFileText } from "react-icons/fi";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(240, 238, 250, 0.98);
  backdrop-filter: blur(20px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
  transition: opacity 0.25s ease-out, visibility 0.25s ease-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 1.8rem;
  color: var(--foreground);
  padding: 8px;
  border-radius: 50%;
  transition: opacity var(--dur-short) var(--ease-out);

  &:hover {
    opacity: 0.6;
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const MenuItem = styled(ScrollLink)`
  color: var(--foreground);
  font-size: 1.6rem;
  font-family: var(--font-display);
  font-weight: 900;
  cursor: pointer;
  transition: opacity var(--dur-short) var(--ease-out);

  &:hover {
    opacity: 0.6;
  }
`;

const ResumeLink = styled.a`
  margin-top: 32px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: var(--foreground);
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  border-radius: var(--radius-pill);
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Overlay isOpen={isOpen}>
      <CloseButton type="button" onClick={toggle} aria-label="Close menu">
        <FiX />
      </CloseButton>

      <MenuList>
        <MenuItem onClick={toggle} to="experience" smooth={true} duration={400} offset={-40}>
          Experience
        </MenuItem>
        <MenuItem onClick={toggle} to="techstack" smooth={true} duration={400} offset={-40}>
          In the lab
        </MenuItem>
        <MenuItem onClick={toggle} to="projects" smooth={true} duration={400} offset={-40}>
          Made
        </MenuItem>
        <MenuItem onClick={toggle} to="about" smooth={true} duration={400} offset={-40}>
          Story
        </MenuItem>
        <MenuItem onClick={toggle} to="education" smooth={true} duration={400} offset={-40}>
          Education
        </MenuItem>
        <MenuItem onClick={toggle} to="contact" smooth={true} duration={400} offset={-40}>
          Say hey
        </MenuItem>
      </MenuList>

      <ResumeLink
        href="https://drive.google.com/file/d/1P1suUREmwq4sC80dsQ72TAMeHa-TFt52/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        onClick={toggle}
      >
        <FiFileText />
        <span>Resume</span>
      </ResumeLink>
    </Overlay>
  );
};

export default Dropdown;
