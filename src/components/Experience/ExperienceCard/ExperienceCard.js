import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ExperienceList } from "../../../data/ExperienceData";
import {
  Card,
  CollegeName,
  ContributionsCard,
  ContributionsContainer,
  DegreeTitle,
} from "./ExperienceCardElements";

function ExperienceCard() {
  return (
    <>
      {ExperienceList?.map((list, index) => (
        <ScrollAnimation animateIn="slideInLeft" key={index} animateOnce={true}>
          <Card>
            <div>
              <DegreeTitle>{list.title}</DegreeTitle>
              <CollegeName>
                {list.organization}
                <p>{list.date}</p>
              </CollegeName>
              <ContributionsContainer>
                {list.contributions.map((contribution, index) => (
                  <ContributionsCard key={index}>
                    {contribution}
                  </ContributionsCard>
                ))}
              </ContributionsContainer>
            </div>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default ExperienceCard;
