import React from "react";
import styled from "styled-components";
import TiltCard from "../Interactive/TiltCard";
import { FiCompass, FiCpu, FiServer } from "react-icons/fi";

const AboutSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 100px 24px;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
`;

const Eyebrow = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--foreground);
  letter-spacing: -0.02em;
`;

const BentoContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProfileCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 36px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const BioHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .avatar-box {
    width: 64px;
    height: 64px;
    border-radius: var(--radius-card);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h3 {
      font-family: var(--font-display);
      font-size: 1.35rem;
      color: var(--foreground);
      font-weight: 900;
    }

    .role {
      font-size: 0.88rem;
      color: var(--foreground-muted);
      font-family: var(--font-mono);
    }
  }
`;

const BioText = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--foreground-muted);
  line-height: 1.7;
`;

const SecondaryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FocusCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  .head {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--foreground);
    font-weight: 600;
    font-size: 1rem;

    svg {
      color: var(--foreground);
    }
  }

  p {
    font-family: var(--font-body);
    font-size: 0.88rem;
    color: var(--foreground-muted);
    line-height: 1.55;
  }
`;

const HighlightsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 12px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
`;

const HighlightStat = styled.div`
  display: flex;
  flex-direction: column;

  .stat-num {
    font-family: var(--font-mono);
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--foreground);
  }

  .stat-label {
    font-size: 0.78rem;
    color: var(--foreground-subtle);
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionHeader>
        <Eyebrow>Background &amp; Philosophy</Eyebrow>
        <Title>Engineering Profile</Title>
      </SectionHeader>

      <BentoContainer>
        <TiltCard maxTilt={3}>
          <ProfileCard>
            <BioHeader>
              <div className="avatar-box">
                <img src="/appleProfileMac.png" alt="Seniya Tuscano" />
              </div>
              <div className="meta">
                <h3>Seniya Tuscano</h3>
                <span className="role">AI Software Engineer &amp; Cloud Engineer</span>
              </div>
            </BioHeader>

            <BioText>
              I am a software engineer and Master of Science student in Information Systems at The University of Texas at Arlington (graduating Dec 2025). My core engineering work focuses on cloud software engineering, scalable architectures, and applied AI automation.
            </BioText>

            <BioText>
              Throughout my internship and software engineering roles, I’ve architected AI task allocation engines, automated enterprise deployments on AWS and DigitalOcean, and improved operational uptime to 99.9%. I approach engineering challenges from first principles—prioritizing concurrency, fault isolation, and measurable business impact.
            </BioText>

            <HighlightsRow>
              <HighlightStat>
                <span className="stat-num">3.78 GPA</span>
                <span className="stat-label">MS Information Systems</span>
              </HighlightStat>
              <HighlightStat>
                <span className="stat-num">3.90 CGPA</span>
                <span className="stat-label">BE Computer Science</span>
              </HighlightStat>
            </HighlightsRow>
          </ProfileCard>
        </TiltCard>

        <SecondaryGrid>
          <FocusCard>
            <div className="head">
              <FiServer />
              <span>Cloud &amp; Infrastructure Mastery</span>
            </div>
            <p>
              Designing automated AWS VPC architectures, Dockerized service layers, and zero-downtime deployment pipelines with Jenkins and GitHub Actions.
            </p>
          </FocusCard>

          <FocusCard>
            <div className="head">
              <FiCpu />
              <span>Applied AI &amp; Algorithmic Optimization</span>
            </div>
            <p>
              Developing predictive scheduling algorithms, RESTful microservices with Python and Flask, and production-ready machine learning tooling.
            </p>
          </FocusCard>

          <FocusCard>
            <div className="head">
              <FiCompass />
              <span>Cloud Reliability &amp; Precision</span>
            </div>
            <p>
              Monitoring production health via UptimeRobot, SSH diagnostics, and comprehensive error logging to ensure low latency and resilient operations.
            </p>
          </FocusCard>
        </SecondaryGrid>
      </BentoContainer>
    </AboutSection>
  );
};

export default About;
