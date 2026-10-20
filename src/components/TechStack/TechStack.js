import React, { useState } from "react";
import styled from "styled-components";
import { stackList } from "../../data/ProjectData";
import {
  FiCloud,
  FiCpu,
  FiDatabase,
  FiCode,
  FiSliders,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const TechSection = styled.section`
  max-width: 1240px;
  margin: 0 auto;
  padding: 100px 24px;
  position: relative;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
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
  color: var(--color-ink);
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-ink-2);
  max-width: 620px;
  line-height: 1.6;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: ${(props) => (props.active ? "var(--foreground)" : "var(--background-card)")};
  color: ${(props) => (props.active ? "#ffffff" : "var(--foreground)")};
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid ${(props) => (props.active ? "var(--foreground)" : "var(--rule)")};
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    color: ${(props) => (props.active ? "#ffffff" : "var(--foreground)")};
    border-color: var(--foreground);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

const SkillCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 18px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .name {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--foreground);
  }

  .category {
    font-size: 0.72rem;
    font-family: var(--font-mono);
    color: var(--foreground-muted);
  }

  .badge {
    font-size: 0.72rem;
    font-family: var(--font-mono);
    padding: 3px 8px;
    border-radius: var(--radius-pill);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    color: var(--foreground);
  }
`;

const SystemPillars = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--rule);
`;

const PillarCard = styled.div`
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 8px rgba(8, 9, 9, 0.04);
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
    box-shadow: 0 6px 16px rgba(8, 9, 9, 0.08);
  }

  .icon {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
    background: var(--background-badge);
    border: 1px solid var(--rule);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--foreground);
    font-size: 1.1rem;
  }

  h4 {
    font-size: 1.1rem;
    color: var(--color-ink);
    font-weight: 600;
  }

  p {
    font-size: 0.88rem;
    color: var(--color-ink-2);
    line-height: 1.55;
  }
`;

const TechStack = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = [
    { label: "All", icon: <FiSliders /> },
    { label: "Languages", icon: <FiCode /> },
    { label: "AI & Machine Learning", icon: <FiCpu /> },
    { label: "Full-Stack & Frameworks", icon: <FiLayers /> },
    { label: "Cloud & DevOps", icon: <FiCloud /> },
    { label: "Databases & Data", icon: <FiDatabase /> },
    { label: "Core Practices", icon: <FiCheckCircle /> },
  ];

  const filteredSkills =
    selectedFilter === "All"
      ? stackList
      : stackList.filter((s) => s.category === selectedFilter);

  return (
    <TechSection id="techstack">
      <HeaderBox>
        <Eyebrow>Technical Capabilities</Eyebrow>
        <Title>Skills &amp; Technology Matrix</Title>
        <Subtitle>
          A battle-tested stack spanning agentic AI, cloud infrastructure automation, and scalable software backends.
        </Subtitle>
      </HeaderBox>

      <FilterNav>
        {categories.map((c) => (
          <FilterButton
            key={c.label}
            active={selectedFilter === c.label}
            onClick={() => setSelectedFilter(c.label)}
          >
            {c.icon}
            <span>{c.label}</span>
          </FilterButton>
        ))}
      </FilterNav>

      <SkillsGrid>
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.name}>
            <div className="left">
              <span className="name">{skill.name}</span>
              <span className="category">{skill.category}</span>
            </div>
            <span className="badge">{skill.level}</span>
          </SkillCard>
        ))}
      </SkillsGrid>

      <SystemPillars>
        <PillarCard>
          <div className="icon">
            <FiCpu />
          </div>
          <h4>Agentic AI &amp; Applied Machine Learning</h4>
          <p>
            Architecting LangGraph/LangChain multi-agent workflows, production RAG pipelines with pgvector/ChromaDB, Model Context Protocol (MCP) integrations, and LLM evaluations via LangSmith and Ragas.
          </p>
        </PillarCard>

        <PillarCard>
          <div className="icon">
            <FiCloud />
          </div>
          <h4>Cloud &amp; DevOps Orchestration</h4>
          <p>
            Architecting infrastructure-as-code via Terraform, configuring AWS (EC2, S3, Lambda, VPC) and GCP topology, containerizing with Docker and Kubernetes, and automating zero-downtime CI/CD workflows.
          </p>
        </PillarCard>

        <PillarCard>
          <div className="icon">
            <FiDatabase />
          </div>
          <h4>High-Performance Data &amp; Core Practices</h4>
          <p>
            Structuring relational and document databases with PostgreSQL, Redis, MongoDB, and Elasticsearch, tuning queries for sub-10ms latency, and applying first-principles cloud and software engineering.
          </p>
        </PillarCard>
      </SystemPillars>
    </TechSection>
  );
};

export default TechStack;
