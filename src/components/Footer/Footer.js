import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";

/* Hallmark · footer: Ft5 Statement Colophon · theme: Obsidian-Cyan */
const FooterWrapper = styled.footer`
  background: var(--background);
  border-top: 1px solid var(--rule);
  padding: 64px 24px 40px;
  width: 100%;
`;

const FooterContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  flex-wrap: wrap;
`;

const BrandCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 440px;

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 900;
    color: var(--foreground);
  }

  p {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--foreground-muted);
    line-height: 1.6;
  }
`;

const TelemetryCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--foreground-subtle);

  .telemetry-row {
    display: flex;
    align-items: center;
    gap: 8px;

    span.live-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--color-success);
    }

    span.val {
      color: var(--foreground);
      font-weight: 600;
    }
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--rule);
  font-size: 0.82rem;
  color: var(--foreground-subtle);
  font-family: var(--font-mono);
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    color: var(--foreground-muted);
    font-size: 1.15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--dur-short) var(--ease-out);

    &:hover {
      color: var(--foreground);
    }
  }
`;

const ScrollTopBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--foreground);
  font-size: 0.78rem;
  font-family: var(--font-mono);
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--background-card);
  border: 1px solid var(--rule);
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 4px 12px rgba(8, 9, 9, 0.08);
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <TopRow>
          <BrandCol>
            <h3>Seniya Tuscano // Software &amp; AI Portfolio</h3>
            <p>
              Engineered with first-principles craft, resilient cloud architectures, and modern applied AI. Available for software and AI engineering opportunities.
            </p>
          </BrandCol>

          <TelemetryCol>
            <div className="telemetry-row">
              <span className="live-dot" />
              <span>Status: <span className="val">Open to Full-Time Roles</span></span>
            </div>
            <div className="telemetry-row">
              <span>Focus: Software, Cloud &amp; Applied AI</span>
            </div>
            <div className="telemetry-row">
              <span>Location: Dallas-Fort Worth, TX (CST)</span>
            </div>
          </TelemetryCol>
        </TopRow>

        <BottomRow>
          <span>&copy; {new Date().getFullYear()} Seniya Tuscano. All rights reserved.</span>

          <SocialLinks>
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
          </SocialLinks>

          <ScrollTopBtn type="button" onClick={() => scroll.scrollToTop({ duration: 400 })}>
            <span>Top</span>
            <FiArrowUp size={12} />
          </ScrollTopBtn>
        </BottomRow>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
