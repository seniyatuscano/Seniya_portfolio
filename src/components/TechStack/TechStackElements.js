import styled, { keyframes } from "styled-components";

export const TechStackSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 2rem;
  overflow: hidden;
  position: relative;

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    margin-bottom: 5rem;
    text-align: center;
    background: linear-gradient(90deg, #fff 0%, var(--accent-yellow) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 10;
  }
`;

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33% { transform: translate(30px, -50px) rotate(5deg); }
  66% { transform: translate(-20px, 20px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

export const SpheresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  perspective: 1000px;
`;

export const Sphere = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 
    inset -10px -10px 20px rgba(0,0,0,0.5),
    inset 10px 10px 20px rgba(255,255,255,0.05),
    0 0 20px rgba(138, 43, 226, 0.1);
  animation: ${float} ${props => 5 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  transition: 0.5s;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
    margin-bottom: 8px;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
  }

  span {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 600;
  }

  &:hover {
    transform: scale(1.1);
    background: radial-gradient(circle at 30% 30%, rgba(138, 43, 226, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%);
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.3);
    border: 1px solid var(--accent-purple);
    
    span {
      color: var(--text-primary);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    
    img {
      width: 35px;
      height: 35px;
    }
  }
`;
