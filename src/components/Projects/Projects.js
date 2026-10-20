import React, { useState } from "react";
import styled from "styled-components";
import { ProjectList } from "../../data/ProjectData";
import TiltCard from "../Interactive/TiltCard";
import {
  FiGithub,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiCpu,
  FiCheck,
} from "react-icons/fi";

const ProjectsWrapper = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 120px 24px 64px;
  position: relative;
  scroll-margin-top: 80px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;
`;

const SectionEyebrow = styled.span`
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--foreground);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  font-weight: 900;
  color: var(--foreground);
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-size: 1.08rem;
  color: var(--foreground-muted);
  max-width: 640px;
  line-height: 1.6;
`;

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const FilterBtn = styled.button`
  padding: 8px 18px;
  border-radius: var(--radius-pill);
  background: ${(props) => (props.active ? "var(--foreground)" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "var(--foreground)")};
  font-size: 0.84rem;
  font-weight: 500;
  border: 1px solid ${(props) => (props.active ? "var(--foreground)" : "var(--rule)")};
  box-shadow: ${(props) => (props.active ? "0 4px 14px rgba(8, 9, 9, 0.15)" : "0 2px 6px rgba(8, 9, 9, 0.04)")};
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
  }
`;

const SliderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NavBtn = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid var(--rule);
  color: var(--foreground);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover:not(:disabled) {
    border-color: var(--foreground);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(8, 9, 9, 0.08);
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;

const SliderViewport = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const SliderTrack = styled.div`
  display: flex;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${(props) => `translateX(-${props.currentIndex * 100}%)`};
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 4px;
`;

const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  overflow: hidden;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 0;
  box-shadow: 0 10px 30px rgba(8, 9, 9, 0.06);
  transition: border-color var(--dur-short) var(--ease-out), box-shadow var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 16px 40px rgba(8, 9, 9, 0.1);
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const VisualPane = styled.div`
  position: relative;
  background: var(--background-badge);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 36px;
  border-right: 1px solid var(--rule);
  min-height: 360px;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid var(--rule);
    min-height: 240px;
    padding: 24px;
  }
`;

const ProjectTagline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .category {
    font-family: var(--font-body);
    font-size: 0.8rem;
    color: var(--foreground-muted);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  h3 {
    font-size: clamp(1.5rem, 2.5vw, 2rem);
    color: var(--foreground);
    font-weight: 900;
    line-height: 1.25;
  }

  p.tagline {
    font-size: 0.95rem;
    color: var(--foreground-muted);
    line-height: 1.5;
  }
`;

const MetricsChip = styled.div`
  align-self: flex-start;
  padding: 6px 14px;
  background: var(--foreground);
  color: #ffffff;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 500;
`;

const ContentPane = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    padding: 24px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--foreground-muted);
  line-height: 1.7;
`;

const ArchitectureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .title {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--foreground);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    font-size: 0.9rem;
    color: var(--foreground);
    display: flex;
    align-items: flex-start;
    gap: 10px;
    line-height: 1.5;

    svg {
      color: var(--foreground);
      flex-shrink: 0;
      margin-top: 4px;
    }
  }
`;

const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechPill = styled.span`
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  background: var(--background-badge);
  border: 1px solid var(--rule);
  font-size: 0.78rem;
  font-family: var(--font-body);
  font-weight: 500;
  color: var(--foreground);
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 16px;
  border-top: 1px solid var(--rule);
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;
  border-radius: var(--radius-pill);
  font-size: 0.86rem;
  font-weight: 600;
  transition: all var(--dur-short) var(--ease-out);

  &.primary {
    background: var(--foreground);
    color: #ffffff;
    &:hover {
      opacity: 0.85;
      transform: translateY(-1px);
    }
  }

  &.secondary {
    background: #ffffff;
    border: 1px solid var(--rule-strong);
    color: var(--foreground);
    &:hover {
      background: var(--background-badge);
      transform: translateY(-1px);
    }
  }
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 28px;
`;

const Dot = styled.button`
  width: ${(props) => (props.active ? "26px" : "8px")};
  height: 8px;
  border-radius: var(--radius-pill);
  background: ${(props) => (props.active ? "var(--foreground)" : "var(--rule-strong)")};
  transition: all var(--dur-short) var(--ease-out);
  cursor: pointer;

  &:hover {
    background: var(--foreground);
  }
`;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All", ...Array.from(new Set(ProjectList.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? ProjectList
      : ProjectList.filter((p) => p.category === selectedCategory);

  const handleNext = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <ProjectsWrapper id="projects">
      <SectionHeader>
        <SectionEyebrow>Featured Work // Architecture &amp; Code</SectionEyebrow>
        <SectionTitle>Software, Cloud &amp; AI Projects</SectionTitle>
        <SectionSubtitle>
          Production architectures spanning agentic AI security loops, multi-tenant RAG vector search, and high-concurrency event streaming.
        </SectionSubtitle>
      </SectionHeader>

      <ControlsRow>
        <FilterGroup>
          {categories.map((cat) => (
            <FilterBtn
              key={cat}
              active={selectedCategory === cat}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </FilterBtn>
          ))}
        </FilterGroup>

        <SliderControls>
          <NavBtn
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous project slide"
          >
            <FiChevronLeft />
          </NavBtn>
          <NavBtn
            onClick={handleNext}
            disabled={currentIndex >= filteredProjects.length - 1}
            aria-label="Next project slide"
          >
            <FiChevronRight />
          </NavBtn>
        </SliderControls>
      </ControlsRow>

      <SliderViewport>
        <SliderTrack currentIndex={currentIndex}>
          {filteredProjects.map((project) => (
            <Slide key={project.id}>
              <TiltCard maxTilt={3}>
                <CardContainer>
                  <VisualPane>
                    <ProjectTagline>
                      <span className="category">{project.category} · {project.dates}</span>
                      <h3>{project.title}</h3>
                      <p className="tagline">{project.tagline}</p>
                    </ProjectTagline>

                    {project.metrics && <MetricsChip>⚡ {project.metrics}</MetricsChip>}
                  </VisualPane>

                  <ContentPane>
                    <Description>{project.description}</Description>

                    {project.architecture && (
                      <ArchitectureList>
                        <span className="title">
                          <FiCpu size={14} /> Architectural Highlights
                        </span>
                        <ul>
                          {project.architecture.map((item, i) => (
                            <li key={i}>
                              <FiCheck size={14} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ArchitectureList>
                    )}

                    <TechRow>
                      {project.tech_stack.map((t) => (
                        <TechPill key={t}>{t}</TechPill>
                      ))}
                    </TechRow>

                    <ActionRow>
                      {project.github_url && (
                        <ActionLink
                          className="secondary"
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiGithub size={15} />
                          <span>Codebase</span>
                        </ActionLink>
                      )}
                      {project.demo_url && (
                        <ActionLink
                          className="primary"
                          href={project.demo_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FiExternalLink size={15} />
                          <span>Live Demo</span>
                        </ActionLink>
                      )}
                    </ActionRow>
                  </ContentPane>
                </CardContainer>
              </TiltCard>
            </Slide>
          ))}
        </SliderTrack>
      </SliderViewport>

      <PaginationDots>
        {filteredProjects.map((_, i) => (
          <Dot
            key={i}
            active={currentIndex === i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </PaginationDots>
    </ProjectsWrapper>
  );
};

export default Projects;
