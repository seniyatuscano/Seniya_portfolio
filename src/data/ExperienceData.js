export const ExperienceList = [
  {
    title: "Software Engineer (DevSecOps)",
    organization: "Saayam for All (Remote)",
    contributions: [
      "Authored Terraform IaC (S3 state, DynamoDB locking) for least-privilege IAM, cutting onboarding 45 to 9 min",
      "Moved long-lived keys to AWS Secrets Manager (90-day rotation, RBAC), purging .env keys for 10 devs",
      "Built a boto3 CLI deviamsetup.py validating Secrets Manager creds via STS, cutting SDK auth from 30 to 15 min",
      "Gated every PR via GitHub Actions CI/CD on Flake8 and pytest, catching 30+ violations pre-merge for 12 devs",
      "Scoped project IAM roles (S3 upload-only) with docs, enabling 8 backend devs on Volunteer Microservice",
    ],
    date: "August 2026 – Present",
  },
  {
    title: "IT Assistant",
    organization: "HBS 2026 LLC (FIFA World Cup 2026) (Dallas, TX)",
    contributions: [
      "Provisioned and Entra ID-joined 100+ workstations for broadcast staff pre-tournament, zero day-one failures",
      "Resolved 300+ Tier 1/2 tickets across Windows, Meraki LAN/WAN and VoIP at 95% SLA during live broadcasts",
      "Sustained 99% LAN/WAN uptime by monitoring Meraki networks, VoIP & A/V conferencing for 100+ hub users",
      "Audited IT hardware via cycle counts to 99% accuracy and managed Azure AD credentials for 100+ hub users",
    ],
    date: "March 2026 – July 2026",
  },
  {
    title: "Software Engineer Intern",
    organization: "Media Stream AI (New York, NY)",
    contributions: [
      "Architected Flask + Celery/Redis microservice for async task scheduling, cutting p95 job processing from 11s to 6s",
      "Migrated 120 GB MongoDB from AWS EC2 to Azure Cosmos DB via DMS dual-write, 99.9% uptime",
      "Implemented Azure RBAC, Entra ID Conditional Access and Sentinel KQL rules, cutting critical incidents 40%",
      "Automated GitHub Actions CI/CD (pytest, Docker caching), Datadog monitors, cutting deploy 25 to 10 min",
    ],
    date: "January 2025 – June 2025",
  },
  {
    title: "Software Engineer",
    organization: "Spider Software Pvt. Ltd (Mumbai, India)",
    contributions: [
      "Developed a high-performance mobile app using Flutter and Dart, boosting responsiveness by 35% and improving user engagement.",
      "Designed an intuitive UI with Flutter widgets and state management, enhancing usability and boosting user experience by 40%.",
      "Integrated a backend API with Entity Framework and ADO.NET, ensuring 99% secure handling and efficient data processing.",
      "Collaborated with QA and backend teams to fix bugs, optimize load times, and ensure end-to-end deployment compatibility across Android platforms.",
    ],
    date: "Jun 2023 – Nov 2023",
  },
];
