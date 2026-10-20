import React from "react";
import styled from "styled-components";
import { AchievementsList } from "../../data/Achievements";
import { FiAward, FiBookOpen, FiUsers } from "react-icons/fi";

const Section = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 100px 24px;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 28px;
  display: flex;
  gap: 18px;
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  .badge-icon {
    width: 38px;
    height: 38px;
    border-radius: var(--radius-sm);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--foreground);
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h4 {
      font-family: var(--font-display);
      font-size: 1.05rem;
      font-weight: 900;
      color: var(--foreground);
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 4px;

      li {
        font-family: var(--font-body);
        font-size: 0.9rem;
        color: var(--foreground-muted);
        line-height: 1.55;
        position: relative;
        padding-left: 14px;

        &::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--foreground);
        }
      }
    }

    p {
      font-family: var(--font-body);
      font-size: 0.94rem;
      color: var(--foreground-muted);
      line-height: 1.6;
    }
  }
`;

const Achievements = () => {
  const getIcon = (type) => {
    switch (type) {
      case "publication":
        return <FiBookOpen />;
      case "volunteering":
        return <FiUsers />;
      default:
        return <FiAward />;
    }
  };

  return (
    <Section id="achievements">
      <SectionHeader>
        <Eyebrow>Leadership &amp; Milestones</Eyebrow>
        <Title>Key Recognitions</Title>
      </SectionHeader>

      <Container>
        {AchievementsList.map((item, idx) => (
          <Card key={idx}>
            <div className="badge-icon">
              {getIcon(item.type)}
            </div>
            <div className="content">
              {item.title && <h4>{item.title}</h4>}
              {item.bullets ? (
                <ul>
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{typeof item === "string" ? item : item.description}</p>
              )}
            </div>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Achievements;
