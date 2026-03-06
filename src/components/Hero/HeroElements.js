import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  background: var(--primary-bg);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: var(--accent-purple);
    filter: blur(150px);
    top: 10%;
    right: 10%;
    z-index: 0;
    opacity: 0.3;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  z-index: 1;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const HeroLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(90deg, #fff 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h5 {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    color: var(--accent-yellow);
    margin-bottom: 2rem;
    font-weight: 500;
  }

  @media screen and (max-width: 992px) {
    align-items: center;
    margin-bottom: 3rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.4));
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05) rotate(2deg);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.3s;

  &:hover {
    color: var(--accent-purple);
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img {
    width: 30px;
    height: 30px;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-10px);}
    60% {transform: translateY(-5px);}
  }
`;
