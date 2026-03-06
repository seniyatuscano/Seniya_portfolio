import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import styled from "styled-components";

const ExperienceSection = styled.section`
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
    background: linear-gradient(90deg, #fff 0%, var(--accent-purple) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Experience() {
  return (
    <ExperienceSection id="experience">
      <h2>My Career & Experience</h2>
      <ExperienceCard />
    </ExperienceSection>
  );
}

export default Experience;
