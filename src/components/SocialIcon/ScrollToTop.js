import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";
import { animateScroll as scroll } from "react-scroll";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--background-card);
  border: 1px solid var(--rule);
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  z-index: 900;
  box-shadow: 0 4px 16px rgba(8, 9, 9, 0.12);
  transition: all var(--dur-short) var(--ease-out);
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transform: ${(props) => (props.visible ? "translateY(0)" : "translateY(10px)")};

  &:hover {
    border-color: var(--foreground);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(8, 9, 9, 0.18);
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    scroll.scrollToTop({ duration: 400 });
  };

  return (
    <FloatingButton
      type="button"
      visible={visible}
      onClick={handleClick}
      aria-label="Scroll back to top"
    >
      <FiArrowUp />
    </FloatingButton>
  );
};

export default ScrollToTop;