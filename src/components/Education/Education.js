import React from "react";
import EducationCard from "./EducationCard/EducationCard";
import styled from "styled-components";

const EducationSection = styled.section`
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

function Education() {
  return (
    <EducationSection id="education">
      <h2>Education</h2>
      <EducationCard />
    </EducationSection>
  );
}

export default Education;
