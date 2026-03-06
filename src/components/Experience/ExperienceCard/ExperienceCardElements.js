import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent-purple), var(--accent-yellow));
    box-shadow: 0 0 15px var(--accent-purple);
    z-index: 0;

    @media screen and (max-width: 768px) {
      left: 30px;
    }
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.index % 2 === 0 ? 'flex-start' : 'flex-end'};
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 60px;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: var(--primary-bg);
  border: 4px solid var(--accent-yellow);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--accent-yellow);
  z-index: 2;

  @media screen and (max-width: 768px) {
    left: 30px;
  }
`;

export const Card = styled.div`
  width: 45%;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.2);
    border: 1px solid rgba(138, 43, 226, 0.4);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const DateLabel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 45%;
  text-align: ${props => props.index % 2 === 0 ? 'left' : 'right'};
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0 2rem;
  ${props => props.index % 2 === 0 ? 'right: 0;' : 'left: 0;'}

  @media screen and (max-width: 768px) {
    position: relative;
    top: 0;
    transform: none;
    width: 100%;
    padding: 0;
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: var(--accent-yellow);
  }
`;

export const DegreeTitle = styled.h4`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const CollegeName = styled.p`
  font-size: 1rem;
  color: var(--accent-purple);
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const ContributionsContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContributionsCard = styled.li`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--accent-yellow);
  }
`;
