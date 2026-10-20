import React from "react";
import styled from "styled-components";
import { ExperienceList } from "../../data/ExperienceData";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";

const ExperienceSection = styled.section`
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

const Subtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--foreground-muted);
  max-width: 620px;
  line-height: 1.6;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 20px;
    width: 2px;
    background: var(--rule);

    @media (max-width: 768px) {
      left: 14px;
    }
  }
`;

const TimelineNode = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 24px;
  position: relative;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const Marker = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: ${(props) => (props.active ? "var(--foreground)" : "var(--background-card)")};
  border: 1px solid ${(props) => (props.active ? "var(--foreground)" : "var(--rule)")};
  box-shadow: ${(props) => (props.active ? "0 4px 12px rgba(8, 9, 9, 0.15)" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? "#ffffff" : "var(--foreground-muted)")};
  flex-shrink: 0;
  z-index: 1;
  transition: all var(--dur-short) var(--ease-out);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 0.85rem;
  }
`;

const Card = styled.div`
  flex: 1;
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 24px 28px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const RoleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--foreground);
    font-weight: 900;
  }

  .org {
    font-size: 0.95rem;
    color: var(--foreground);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }
`;

const DateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--background-badge);
  border: 1px solid var(--rule);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--foreground);
`;

const ContributionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--rule);

  li {
    font-size: 0.92rem;
    color: var(--foreground-muted);
    line-height: 1.6;
    display: flex;
    align-items: flex-start;
    gap: 10px;

    svg {
      color: var(--foreground);
      flex-shrink: 0;
      margin-top: 4px;
    }
  }
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionHeader>
        <Eyebrow>Career &amp; Engineering Track</Eyebrow>
        <Title>Production Experience</Title>
        <Subtitle>
          Proven track record across DevSecOps, cloud infrastructure automation, live broadcast operations, and scalable software.
        </Subtitle>
      </SectionHeader>

      <Timeline>
        {ExperienceList.map((exp, idx) => (
          <TimelineNode key={idx}>
            <Marker active={idx === 0}>
              <FiBriefcase size={16} />
            </Marker>

            <Card>
              <RoleHeader>
                <TitleBlock>
                  <h3>{exp.title}</h3>
                  <span className="org">
                    <FiMapPin size={13} />
                    <span>{exp.organization}</span>
                  </span>
                </TitleBlock>

                <DateBadge>
                  <FiCalendar size={12} />
                  <span>{exp.date}</span>
                </DateBadge>
              </RoleHeader>

              <ContributionsList>
                {exp.contributions.map((bullet, i) => (
                  <li key={i}>
                    <FiCheck size={14} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ContributionsList>
            </Card>
          </TimelineNode>
        ))}
      </Timeline>
    </ExperienceSection>
  );
};

export default Experience;
