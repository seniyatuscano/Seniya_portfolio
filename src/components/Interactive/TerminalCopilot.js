import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiTerminal, FiCornerDownLeft } from 'react-icons/fi';

const TerminalWrapper = styled.div`
  width: 100%;
  max-width: 540px;
  background: var(--background-card);
  border: 1px solid var(--rule);
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(8, 9, 9, 0.08);
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  display: flex;
  flex-direction: column;
  transition: border-color var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--foreground);
  }
`;

const TerminalHeader = styled.div`
  background: var(--color-paper-3);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-rule);
  user-select: none;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: var(--color-ink-muted);

  svg {
    color: var(--color-accent);
  }
`;

const WindowButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--color-rule);
    display: inline-block;
  }
`;

const TerminalBody = styled.div`
  padding: 16px;
  height: 270px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: var(--color-paper);
  color: var(--color-ink-2);
  line-height: 1.5;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-rule);
  }
`;

const CommandLine = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  color: var(--color-ink);
`;

const PromptLabel = styled.span`
  color: var(--color-accent);
  font-weight: 600;
  white-space: nowrap;
`;

const CommandInputForm = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
  border-top: 1px dashed var(--color-rule);
`;

const CommandInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--color-ink);
  font-family: var(--font-mono);
  font-size: var(--text-sm);

  &::placeholder {
    color: var(--color-ink-muted);
  }
`;

const CommandOutput = styled.div`
  color: var(--color-ink-2);
  white-space: pre-wrap;
  font-size: 0.82rem;

  .highlight {
    color: var(--color-accent);
    font-weight: 600;
  }
  .tag {
    color: var(--color-accent-2);
  }
  .success {
    color: var(--color-success);
  }
`;

const QuickChips = styled.div`
  padding: 10px 16px;
  background: var(--color-paper-2);
  border-top: 1px solid var(--color-rule);
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  span.label {
    font-size: 0.72rem;
    color: var(--color-ink-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const ChipButton = styled.button`
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  background: var(--color-paper-3);
  border: 1px solid var(--color-rule);
  color: var(--color-ink);
  font-size: 0.76rem;
  font-family: var(--font-mono);
  white-space: nowrap;
  transition: all var(--dur-short) var(--ease-out);

  &:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
    background: var(--color-accent-dim);
  }
`;

const initialHistory = [
  {
    type: 'system',
    text: 'Seniya Tuscano Software & AI Copilot v2.4 (x86_64-darwin)\nType "help" to list commands or click command chips below.',
  },
  {
    type: 'command',
    command: 'status',
  },
  {
    type: 'output',
    text: '● Status: LIVE | Open for Software, Cloud & AI Engineering Roles\n● Focus: Cloud Engineering · AWS/GCP · Agentic AI & Modern Full-Stack',
  },
];

const TerminalCopilot = () => {
  const [history, setHistory] = useState(initialHistory);
  const [inputVal, setInputVal] = useState('');
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output = '';

    switch (trimmed) {
      case 'help':
        output =
          'Available commands:\n  • skills       - Technical capabilities & cloud stack\n  • projects     - Key engineering architectures\n  • experience   - Career milestones & leadership\n  • status       - Engineering availability & focus\n  • contact      - Direct mail & professional links\n  • clear        - Wipe copilot history';
        break;
      case 'skills':
        output =
          'Domain Matrix:\n  [Languages]     Python, Java, JavaScript/TypeScript, C, C++, Go, SQL\n  [AI & ML]       Agentic AI (LangGraph, LangChain), RAG, MCP, LLMs (Claude, OpenAI, Llama, Vertex), Evals\n  [Full-Stack]    React, Next.js, Node.js, Spring Boot, FastAPI, Flask, Flutter, Material-UI, REST APIs\n  [Cloud & DevOps]AWS (EC2, S3, Lambda, VPC), GCP, Docker, Kubernetes, Terraform, Jenkins, CI/CD, Linux\n  [Databases]     PostgreSQL & pgvector, MySQL, MongoDB, Redis, Elasticsearch, ChromaDB, Data Pipelines\n  [Core Practices]Distributed Systems, OOD, Algorithms & Data Structures, JUnit/Pytest, Agile';
        break;
      case 'projects':
        output =
          '1. Kestrel AI (LangGraph · Gemini · RAG · FastAPI · React)\n   - Automated patch-verification loops with human approval dashboard.\n2. Multi-Tenant Enterprise RAG (Go · Python · Docker · PostgreSQL · pgvector)\n   - Go API gateway, pgvector tenant isolation, containerized microservices.\n3. Live Stream Engagement Engine (Go WebSockets · FastAPI · React · Terraform)\n   - Real-time event streaming with goroutines, AWS Fargate via Terraform.\n4. Social Tweet Analysis (Manifest V3 · FastAPI · Gemini 2.5 Flash Lite)\n   - Async Service Workers, web scraping, real-time sentiment & toxicity filtering.';
        break;
      case 'experience':
        output =
          '• Software Engineer (DevSecOps) @ Saayam for All (Aug 2026 – Present)\n  - Terraform IaC, AWS Secrets Manager, least-privilege IAM.\n• IT Assistant @ HBS 2026 LLC (FIFA World Cup 2026) (Mar 2026 – Jul 2026)\n  - 100+ Entra ID workstations, Meraki LAN/WAN, 99% uptime.\n• Software Engineer Intern @ Media Stream AI (Jan 2025 – Jun 2025)\n  - Flask + Celery/Redis scheduling, MongoDB to Cosmos DB migration.\n• Software Engineer @ Spider Software Pvt. Ltd (Jun 2023 – Nov 2023)\n  - High-performance mobile architecture, 35% performance boost.';
        break;
      case 'contact':
        output =
          'Get in touch:\n  • Email:      seniyatuscano3110@gmail.com\n  • LinkedIn:   linkedin.com/in/seniya-tuscano/\n  • GitHub:     github.com/seniyatuscano';
        break;
      case 'status':
        output =
          '● Status: LIVE | Open for Software, Cloud & AI Engineering Roles\n● MS in Information Systems @ UT Arlington (3.78 GPA)';
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      default:
        output = `Command not recognized: "${trimmed}". Type "help" for a list of available commands.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'command', command: cmd },
      { type: 'output', text: output },
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  return (
    <TerminalWrapper>
      <TerminalHeader>
        <HeaderLeft>
          <FiTerminal />
          <span>seniya@copilot: ~/portfolio</span>
        </HeaderLeft>
        <WindowButtons>
          <span />
          <span />
          <span />
        </WindowButtons>
      </TerminalHeader>

      <TerminalBody ref={bodyRef}>
        {history.map((item, i) => {
          if (item.type === 'system') {
            return (
              <CommandOutput key={i} style={{ color: 'var(--color-ink-muted)' }}>
                {item.text}
              </CommandOutput>
            );
          }
          if (item.type === 'command') {
            return (
              <CommandLine key={i}>
                <PromptLabel>sys:~$</PromptLabel>
                <span>{item.command}</span>
              </CommandLine>
            );
          }
          return <CommandOutput key={i}>{item.text}</CommandOutput>;
        })}

        <CommandInputForm onSubmit={handleSubmit}>
          <PromptLabel>sys:~$</PromptLabel>
          <CommandInput
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or command..."
            aria-label="Terminal command input"
          />
          <button type="submit" aria-label="Submit command" style={{ color: 'var(--color-accent)' }}>
            <FiCornerDownLeft size={14} />
          </button>
        </CommandInputForm>
      </TerminalBody>

      <QuickChips>
        <span className="label">Quick:</span>
        {['skills', 'projects', 'experience', 'status', 'contact'].map((cmd) => (
          <ChipButton key={cmd} type="button" onClick={() => runCommand(cmd)}>
            &gt; {cmd}
          </ChipButton>
        ))}
      </QuickChips>
    </TerminalWrapper>
  );
};

export default TerminalCopilot;
