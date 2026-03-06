import styled from "styled-components";

export const ContactWrapper = styled.section`
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

  .BigCard {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    border: 1px solid var(--glass-border);
    border-radius: 30px;
    padding: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    @media screen and (max-width: 768px) {
      padding: 2rem;
    }
  }
`;

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(138, 43, 226, 0.3);
  }

  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    
    span {
      font-size: 0.9rem;
    }
  }
`;
