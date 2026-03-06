import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { ExperienceList } from "../../../data/ExperienceData";
import {
  Card,
  CollegeName,
  ContributionsCard,
  ContributionsContainer,
  DegreeTitle,
  TimelineContainer,
  TimelineItem,
  TimelineDot,
  DateLabel,
} from "./ExperienceCardElements";

function ExperienceCard() {
  return (
    <TimelineContainer>
      {ExperienceList?.map((list, index) => (
        <TimelineItem key={index} index={index}>
          <TimelineDot />
          <DateLabel index={index}>{list.date}</DateLabel>
          <ScrollAnimation
            animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            animateOnce={true}
            style={{ width: '100%', display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end' }}
          >
            <Card>
              <DegreeTitle>{list.title}</DegreeTitle>
              <CollegeName>{list.organization}</CollegeName>
              <ContributionsContainer>
                {list.contributions.map((contribution, index) => (
                  <ContributionsCard key={index}>
                    {contribution}
                  </ContributionsCard>
                ))}
              </ContributionsContainer>
            </Card>
          </ScrollAnimation>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}

export default ExperienceCard;
