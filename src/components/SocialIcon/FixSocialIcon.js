import React from "react";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import styled from "styled-components";

const SocialRail = styled.div`
  position: fixed;
  bottom: 32px;
  left: 28px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: 1100px) {
    display: none;
  }

  &::after {
    content: '';
    width: 1px;
    height: 48px;
    background: var(--rule);
    margin-top: 4px;
  }

  a {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--background-card);
    border: 1px solid var(--rule);
    color: var(--foreground-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
    transition: all var(--dur-short) var(--ease-out);

    &:hover {
      border-color: var(--foreground);
      color: var(--foreground);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
    }
  }
`;

const FixSocialIcon = () => {
  return (
    <SocialRail aria-label="Social navigation">
      <a
        href="https://github.com/seniyatuscano"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/seniya-tuscano/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <FiLinkedin />
      </a>
      <a
        href="mailto:seniyatuscano3110@gmail.com"
        aria-label="Send Personal Email"
      >
        <FiMail />
      </a>
    </SocialRail>
  );
};

export default FixSocialIcon;
