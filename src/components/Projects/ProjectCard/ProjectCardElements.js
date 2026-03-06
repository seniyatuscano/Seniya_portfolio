import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  padding: 2rem;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(138, 43, 226, 0.15);
    border: 1px solid rgba(138, 43, 226, 0.3);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.2fr;
  }
`;

export const CardLeft = styled.div`
  justify-self: center;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h4 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-family: 'Space Grotesk', sans-serif;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;
`;

export const TechCard = styled.div`
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--accent-yellow);
  font-weight: 500;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    padding: 10px 24px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;
  }

  .SecondaryBtn {
    background: transparent;
    border: 1px solid var(--accent-purple);
    color: var(--text-primary);

    &:hover {
      background: var(--accent-purple);
      box-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
    }
  }

  .PrimaryBtn {
    background: var(--accent-purple);
    color: white;

    &:hover {
      background: #a04ef6;
      box-shadow: 0 0 20px rgba(138, 43, 226, 0.4);
    }
  }
`;
