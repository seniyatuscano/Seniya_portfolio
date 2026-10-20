// --------------------------------------- Project List
export const ProjectList = [
  {
    id: "kestrel-ai",
    category: "Agentic AI & Security",
    img: "/jobDetect.png",
    title: "Kestrel AI (Enterprise Agentic Code Security)",
    tagline: "Automated patch-verification loops with human approval dashboard",
    description:
      "Enterprise agentic code security system built with LangGraph on Gemini and RAG to run automated patch-verification loops, secured by a FastAPI gateway and React dashboard.",
    architecture: [
      "Architected a LangGraph agent on Gemini using RAG to run automated patch-verification loops for code security",
      "Built FastAPI gateway securing RAG endpoints for React front end, automating CI/CD through GitHub Actions",
      "Added human approval in React dashboard showing verified patches with context, so only agent-tested fixes merge",
    ],
    tech_stack: ["Python", "FastAPI", "LangGraph", "React", "RAG", "Gemini API", "GitHub Actions"],
    dates: "2026",
    metrics: "Automated Patch Verification · Human-in-the-Loop",
    demo_url: "",
    github_url: "https://github.com/seniyatuscano",
  },
  {
    id: "multi-tenant-rag",
    category: "Cloud & AI Engineering",
    img: "/nn.png",
    title: "Multi-Tenant Enterprise RAG Infrastructure",
    tagline: "High-isolation vector search & inference platform",
    description:
      "Production multi-tenant RAG platform routing Go API gateway traffic to LangChain and pgvector inference workers with strict JWT tenant isolation at the PostgreSQL layer.",
    architecture: [
      "Built a multi-tenant RAG platform with a Go API gateway routing to LangChain/pgvector inference workers",
      "Enforced JWT-based tenant isolation at the PostgreSQL layer and containerized each microservice with Docker",
      "Wrote tests confirming pgvector never leaked cross-tenant documents, catching isolation failures",
    ],
    tech_stack: ["Go", "Python", "React", "Docker", "PostgreSQL", "pgvector", "LangChain"],
    dates: "2026",
    metrics: "Zero Cross-Tenant Leakage · Containerized Isolation",
    demo_url: "",
    github_url: "https://github.com/seniyatuscano",
  },
  {
    id: "live-stream-engine",
    category: "Cloud & Infrastructure",
    img: "/chat.png",
    title: "Live Stream Engagement Engine (Streaming Analytics)",
    tagline: "High-concurrency streaming analytics & real-time telemetry",
    description:
      "Real-time streaming analytics engine processing thousands of concurrent viewer events via a Go WebSocket backend and Scikit-Learn inference microservice on AWS Fargate.",
    architecture: [
      "Engineered a high-concurrency Go WebSocket backend using goroutines, processing thousands of real-time viewer events.",
      "Built a FastAPI microservice linking Scikit-Learn logic to a Vite/React dashboard for instant streaming data metrics.",
      "Provisioned AWS Fargate via Terraform, integrating Docker Compose and LocalStack to ensure seamless local deployment.",
    ],
    tech_stack: ["Go", "Python", "FastAPI", "React", "Docker", "Terraform", "AWS Fargate", "WebSockets"],
    dates: "2026",
    metrics: "Thousands of Concurrent Events · AWS Fargate IaC",
    demo_url: "",
    github_url: "https://github.com/seniyatuscano",
  },
  {
    id: "social-tweet-analysis",
    category: "Applied AI & Extensions",
    img: "/dynamic_form.jpg",
    title: "Social Tweet Analysis (AI Browser Extension)",
    tagline: "Manifest V3 Chrome Extension with Gemini sentiment & toxicity analysis",
    description:
      "Manifest V3 Chrome Extension powered by asynchronous Service Workers and a high-concurrency Python FastAPI backend, integrated with Gemini 2.5 Flash Lite for real-time sentiment synthesis and toxicity filtering.",
    architecture: [
      "Developed a Manifest V3 Chrome Extension using asynchronous Service Workers to ensure non-blocking UI rendering",
      "Engineered a high-concurrency Python FastAPI backend to efficiently scrape and process real-time web documents",
      "Integrated Google Gemini 2.5 Flash Lite for low-latency sentiment analysis, data synthesis, and toxicity filtering",
    ],
    tech_stack: ["Python", "FastAPI", "JavaScript", "Manifest V3", "Gemini API", "Service Workers"],
    dates: "2026",
    metrics: "Gemini 2.5 Flash Lite · Non-blocking UI Rendering",
    demo_url: "",
    github_url: "https://github.com/seniyatuscano",
  },
];

// --------------------------------------- Skills
export const stackList = [
  // Languages
  { name: "Python", category: "Languages", level: "Advanced" },
  { name: "Java", category: "Languages", level: "Advanced" },
  { name: "JavaScript / TypeScript", category: "Languages", level: "Advanced" },
  { name: "Go", category: "Languages", level: "Proficient" },
  { name: "C / C++", category: "Languages", level: "Proficient" },
  { name: "SQL", category: "Languages", level: "Advanced" },

  // AI & Machine Learning
  { name: "Agentic AI (LangGraph, LangChain)", category: "AI & Machine Learning", level: "Advanced" },
  { name: "RAG Workflows", category: "AI & Machine Learning", level: "Advanced" },
  { name: "Model Context Protocol (MCP)", category: "AI & Machine Learning", level: "Proficient" },
  { name: "LLMs (Claude, OpenAI, Llama, Vertex)", category: "AI & Machine Learning", level: "Advanced" },
  { name: "Prompt & Agent Design", category: "AI & Machine Learning", level: "Advanced" },
  { name: "Guardrails & Safety", category: "AI & Machine Learning", level: "Proficient" },
  { name: "Evals (LLM-as-Judge, Ragas, LangSmith)", category: "AI & Machine Learning", level: "Proficient" },
  { name: "Natural Language Processing (NLP)", category: "AI & Machine Learning", level: "Advanced" },

  // Full-Stack & Frameworks
  { name: "React & Next.js", category: "Full-Stack & Frameworks", level: "Advanced" },
  { name: "Node.js", category: "Full-Stack & Frameworks", level: "Advanced" },
  { name: "Spring Boot", category: "Full-Stack & Frameworks", level: "Proficient" },
  { name: "FastAPI & Flask", category: "Full-Stack & Frameworks", level: "Advanced" },
  { name: "Flutter", category: "Full-Stack & Frameworks", level: "Proficient" },
  { name: "Material-UI", category: "Full-Stack & Frameworks", level: "Proficient" },
  { name: "REST APIs & Microservices", category: "Full-Stack & Frameworks", level: "Advanced" },

  // Cloud & DevOps
  { name: "AWS (EC2, S3, Lambda, VPC)", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Google Cloud Platform (GCP)", category: "Cloud & DevOps", level: "Proficient" },
  { name: "Docker & Kubernetes", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Terraform (IaC)", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Jenkins & GitHub Actions CI/CD", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Linux & Shell Scripting", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Infrastructure Automation", category: "Cloud & DevOps", level: "Advanced" },
  { name: "Monitoring & Observability", category: "Cloud & DevOps", level: "Proficient" },

  // Databases & Data
  { name: "PostgreSQL & pgvector", category: "Databases & Data", level: "Advanced" },
  { name: "MySQL", category: "Databases & Data", level: "Advanced" },
  { name: "MongoDB", category: "Databases & Data", level: "Advanced" },
  { name: "Redis", category: "Databases & Data", level: "Advanced" },
  { name: "Elasticsearch", category: "Databases & Data", level: "Proficient" },
  { name: "ChromaDB (Vector)", category: "Databases & Data", level: "Proficient" },
  { name: "Data Pipelines & Modeling", category: "Databases & Data", level: "Advanced" },

  // Core Practices
  { name: "Distributed Systems", category: "Core Practices", level: "Advanced" },
  { name: "Object-Oriented Design (OOD)", category: "Core Practices", level: "Advanced" },
  { name: "Algorithms & Data Structures", category: "Core Practices", level: "Advanced" },
  { name: "Automated Testing (JUnit, Pytest)", category: "Core Practices", level: "Advanced" },
  { name: "Agile & Scrum Methodologies", category: "Core Practices", level: "Proficient" },
  { name: "End-to-End Ownership", category: "Core Practices", level: "Advanced" },
];
