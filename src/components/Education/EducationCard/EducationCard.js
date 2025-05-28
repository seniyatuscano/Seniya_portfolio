import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { EducationList } from "../../../data/EducationData";
import {
  Card,
  CollegeName,
  CourseCard,
  CourseContainer,
  DegreeTitle,
  DetailsContainer,
} from "./EducationCardElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function EducationCard() {
  return (
    <>
      {EducationList.map((list, index) => (
        <ScrollAnimation animateIn="slideInLeft" key={index} animateOnce={true}>
          <Card>
            <div>
              <DegreeTitle>{list.title}</DegreeTitle>
              <CollegeName>
                <span>{list.college}</span>
                <span>
                  {list.transcript && (
                    <a href={list.transcript} target="_blank">
                      <FontAwesomeIcon icon={faLink} />
                    </a>
                  )}
                </span>
              </CollegeName>
              <CourseContainer>
                {list.courses.map((course, index) => (
                  <CourseCard key={index}>{course}</CourseCard>
                ))}
              </CourseContainer>
              <DetailsContainer>
                <p>{list.date}</p>
                <p>{list.score}</p>
              </DetailsContainer>
            </div>
          </Card>
        </ScrollAnimation>
      ))}
    </>
  );
}

export default EducationCard;
