import styled from "styled-components";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 2rem;

  .BigCard {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 30px;
    padding: 3rem;
    display: flex;
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 992px) {
      flex-direction: column;
      text-align: center;
      padding: 2rem;
    }
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  filter: drop-shadow(0 0 15px rgba(250, 219, 20, 0.2));
  
  @media screen and (max-width: 992px) {
    width: 180px;
    height: 180px;
  }
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: flex-start;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
    
    img {
      filter: drop-shadow(0 0 8px var(--accent-purple));
    }
  }
`;

export const TechImg = styled.img`
  width: 45px;
  height: 45px;
  transition: 0.3s;
`;

export const TechName = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  font-weight: 500;
`;
