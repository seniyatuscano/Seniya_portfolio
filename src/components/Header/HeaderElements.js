import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: var(--glass-blur);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: sticky;
  top: 0;
  padding: 0 2rem;
  border-bottom: 1px solid var(--glass-border);
  width: 100%;
`;

export const NavLink = styled(ScrollLink)`
  color: var(--text-secondary);
  display: flex;
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;
  padding: 0 1rem;

  &:hover {
    color: var(--accent-purple);
  }

  &.active {
    color: var(--accent-yellow);
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  img {
    width: 40px;
    height: 40px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  .PrimaryBtn {
    background: var(--accent-purple);
    color: white;
    padding: 8px 20px;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      background: #a04ef6;
      box-shadow: 0 0 15px rgba(138, 43, 226, 0.4);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
