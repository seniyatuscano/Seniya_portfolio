import styled from "@emotion/styled";
import React from "react";
import { AchievementsList } from "../../data/Achievements";
function Achievements() {
  return (
    <>
      <div className="ProjectWrapper" id="achievements">
        <div className="Container">
          <div className="SectionTitle">Achievements</div>
          <ContributionsContainer>
            {AchievementsList.map((contribution, index) => (
              <ContributionsCard key={index}>{contribution}</ContributionsCard>
            ))}
          </ContributionsContainer>
        </div>
      </div>
    </>
  );
}

// Styling for the courses container
export const ContributionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
`;

// Individual course card style
export const ContributionsCard = styled.li`
  padding: 7px 14px;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.7);
  cursor: default;
  box-shadow: 0px 2px 6px rgba(160, 170, 180, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #e5e5e5;
    box-shadow: 0px 4px 10px rgba(160, 170, 180, 0.5);
  }
`;

export default Achievements;
