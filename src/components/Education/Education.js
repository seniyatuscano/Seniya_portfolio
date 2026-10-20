import React from "react";
import styled from "styled-components";
import { EducationList } from "../../data/EducationData";
import { FiExternalLink, FiCalendar } from "react-icons/fi";

const EducationSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 100px 24px;
  position: relative;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 48px;
`;

const Eyebrow = styled.span`
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Title = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: var(--foreground);
  letter-spacing: -0.02em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const EduCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }
`;

const DegreeHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    color: var(--foreground);
    font-weight: 900;
  }

  .institution {
    font-size: 0.92rem;
    color: var(--foreground);
    font-weight: 500;
  }
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--foreground-subtle);
  padding: 8px 0;
  border-bottom: 1px solid var(--rule);

  .date {
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--foreground-muted);
  }

  .score {
    padding: 2px 8px;
    border-radius: var(--radius-pill);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    color: var(--foreground);
    font-weight: 600;
  }
`;

const CourseGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
`;

const CourseChip = styled.span`
  font-size: 0.76rem;
  font-family: var(--font-mono);
  padding: 3px 9px;
  background: var(--background-badge);
  border: 1px solid var(--rule);
  border-radius: var(--radius-sm);
  color: var(--foreground-muted);
`;

const TranscriptLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--foreground);
  transition: opacity var(--dur-short) var(--ease-out);

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionHeader>
        <Eyebrow>Academic Foundation</Eyebrow>
        <Title>Degrees &amp; Graduate Studies</Title>
      </SectionHeader>

      <Grid>
        {EducationList.map((item, idx) => (
          <EduCard key={idx}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <DegreeHeader>
                <h3>{item.title}</h3>
                <span className="institution">{item.college}</span>
              </DegreeHeader>

              <MetaRow>
                <span className="date">
                  <FiCalendar size={12} />
                  <span>{item.date}</span>
                </span>
                <span className="score">{item.score}</span>
              </MetaRow>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-ink-muted)", textTransform: "uppercase" }}>
                  Selected Coursework:
                </span>
                <CourseGrid>
                  {item.courses.map((course, i) => (
                    <CourseChip key={i}>{course}</CourseChip>
                  ))}
                </CourseGrid>
              </div>
            </div>

            {item.transcript && (
              <TranscriptLink
                href={item.transcript}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Verified Transcript</span>
                <FiExternalLink size={12} />
              </TranscriptLink>
            )}
          </EduCard>
        ))}
      </Grid>
    </EducationSection>
  );
};

export default Education;
