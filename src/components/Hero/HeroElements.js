import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

/* Hallmark · hero: H5 Terminal / Split Preview · macrostructure: Workbench · theme: Obsidian-Cyan */
export const HeroSection = styled.section`
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 130px 24px 80px;
  position: relative;
  overflow: hidden;
  background: var(--color-paper);

  @media (max-width: 768px) {
    padding: 110px 16px 60px;
    min-height: auto;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 48px;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  background: var(--color-paper-2);
  border: 1px solid var(--color-rule);
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--color-ink-2);

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--color-success);
    box-shadow: 0 0 10px var(--color-success);
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.3rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.12;
  letter-spacing: -0.03em;
  color: var(--color-ink);

  span.highlight {
    color: var(--color-accent);
  }
`;

export const HeroDescription = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  line-height: 1.65;
  color: var(--color-ink-2);
  max-width: 580px;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-top: 8px;
`;

export const PrimaryAction = styled(LinkScroll)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-accent);
  color: var(--color-accent-ink);
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--color-accent-dim);
  }
`;

export const SecondaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  background: var(--color-paper-2);
  border: 1px solid var(--color-rule);
  color: var(--color-ink);
  font-weight: 500;
  font-size: 0.92rem;
  border-radius: var(--radius-pill);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--color-rule-active);
    background: var(--color-paper-3);
    color: var(--color-accent);
    transform: translateY(-1px);
  }
`;

export const MetricsBar = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  padding-top: 18px;
  border-top: 1px solid var(--color-rule);
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 18px;
  }
`;

export const MetricItem = styled.div`
  display: flex;
  flex-direction: column;

  .val {
    font-family: var(--font-mono);
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--color-ink);
    letter-spacing: -0.02em;
  }

  .label {
    font-size: 0.78rem;
    color: var(--color-ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
`;

export const HeroVisual = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
