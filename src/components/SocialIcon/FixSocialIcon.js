import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  z-index: 100;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
    padding: 1rem 0.8rem;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 50px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  a {
    font-size: 1.6rem;
    color: var(--text-secondary);
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: var(--accent-purple);
      transform: scale(1.2);
    }
  }

  @media screen and (max-width: 1000px) {
    position: static;
    transform: none;
    margin: 2rem 0;
    
    ul {
      flex-direction: row;
      justify-content: center;
      background: transparent;
      backdrop-filter: none;
      border: none;
      box-shadow: none;
    }
    
    a {
      font-size: 2rem;
    }
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/seniya-tuscano-503239205/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="item">
            <a
              href="https://github.com/seniyatuscano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li className="item">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="item">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;
