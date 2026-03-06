import React from "react";
import styled from "styled-components";
import { AchievementsList } from "../../data/Achievements";
import ScrollAnimation from "react-animate-on-scroll";

const AchievementsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 2rem;

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 4rem;
    text-align: center;
    background: linear-gradient(90deg, #fff 0%, var(--accent-yellow) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AchievementsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const AchievementCard = styled.div`
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  transition: 0.3s;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-yellow);
    box-shadow: 0 10px 30px rgba(250, 219, 20, 0.1);
  }

  &::before {
    content: '🏆';
    font-size: 1.5rem;
  }
`;

const AchievementText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

function Achievements() {
  return (
    <AchievementsSection id="achievements">
      <ScrollAnimation animateIn="fadeIn">
        <h2>Achievements</h2>
      </ScrollAnimation>
      <AchievementsContainer>
        {AchievementsList.map((achievement, index) => (
          <ScrollAnimation
            key={index}
            animateIn="zoomIn"
            delay={index * 100}
            animateOnce={true}
          >
            <AchievementCard>
              <AchievementText>{achievement}</AchievementText>
            </AchievementCard>
          </ScrollAnimation>
        ))}
      </AchievementsContainer>
    </AchievementsSection>
  );
}

export default Achievements;
