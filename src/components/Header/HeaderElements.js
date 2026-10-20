import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const NavWrapper = styled.header`
  position: fixed;
  top: 16px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 0 16px;
  pointer-events: none;
`;

export const NavContainer = styled.nav`
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 18px;
  background: rgba(223, 228, 242, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--rule);
  border-radius: var(--radius-pill);
  box-shadow: 0 8px 24px rgba(8, 9, 9, 0.08);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 12px 30px rgba(8, 9, 9, 0.12);
  }

  @media (max-width: 700px) {
    background: rgba(240, 238, 250, 0.9);
  }
`;

export const Brand = styled(LinkScroll)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 0.95rem;
  letter-spacing: -0.02em;
  color: var(--foreground);

  .tag {
    font-family: var(--font-body);
    font-size: 0.72rem;
    color: var(--foreground);
    padding: 2px 8px;
    background: var(--background-badge);
    border-radius: var(--radius-pill);
    border: 1px solid var(--rule);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 860px) {
    display: none;
  }
`;

export const NavItem = styled(LinkScroll)`
  padding: 6px 12px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--foreground-muted);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    color: var(--foreground);
    background: rgba(8, 9, 9, 0.05);
  }

  &.active {
    color: var(--foreground);
    background: #ffffff;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(8, 9, 9, 0.06);
  }
`;

export const CommandTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  background: var(--background-badge);
  border: 1px solid var(--rule);
  border-radius: var(--radius-pill);
  color: var(--foreground-muted);
  font-family: var(--font-body);
  font-size: 0.78rem;
  cursor: pointer;
  transition: all var(--dur-short) var(--ease-out);

  kbd {
    background: #ffffff;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 0.68rem;
    border: 1px solid var(--rule);
    color: var(--foreground);
  }

  &:hover {
    color: var(--foreground);
    border-color: var(--rule-strong);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  background: var(--foreground);
  color: #ffffff;
  font-size: 0.84rem;
  font-weight: 500;
  border-radius: var(--radius-pill);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
`;

export const MobileMenuToggle = styled.button`
  display: none;
  color: var(--foreground);
  font-size: 1.25rem;
  padding: 4px;

  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
