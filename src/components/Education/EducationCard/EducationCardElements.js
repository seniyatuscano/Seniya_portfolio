import styled from "styled-components";

export const Card = styled.div`
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  transition: 0.3s;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-purple);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.1);
  }
`;

export const DegreeTitle = styled.h4`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
`;

export const CollegeName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--accent-purple);
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const CourseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const CourseCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-secondary);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(138, 43, 226, 0.1);
    border-color: var(--accent-purple);
    color: var(--text-primary);
  }
`;

export const DetailsContainer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;

  span {
    color: var(--accent-yellow);
    font-weight: 600;
  }
`;