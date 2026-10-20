import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
  width: 100%;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.15s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out;
  transform: ${({ tiltX, tiltY }) => `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`};
  will-change: transform;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-card);

  /* Specular sheen overlay */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: ${({ sheenOpacity }) => sheenOpacity};
    background: ${({ sheenPos }) =>
      `radial-gradient(circle 350px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.5), transparent 70%)`};
    transition: opacity 0.3s ease;
    z-index: 5;
  }
`;

const TiltCard = ({ children, className, maxTilt = 5, ...rest }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [sheen, setSheen] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
    setSheen({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setSheen((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <CardWrapper ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className} {...rest}>
      <CardInner tiltX={tilt.x} tiltY={tilt.y} sheenPos={{ x: sheen.x, y: sheen.y }} sheenOpacity={sheen.opacity}>
        {children}
      </CardInner>
    </CardWrapper>
  );
};

export default TiltCard;
