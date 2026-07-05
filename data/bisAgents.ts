export type BISAgentStatus = "Draft" | "Active" | "Needs Data";

export type BISAgent = {
  name: string;
  role: string;
  inputs: string[];
  outputs: string[];
  exampleCommand: string;
  status: BISAgentStatus;
};

export const bisAgents: BISAgent[] = [
  {
    name: "Research AI",
    role: "Collects and organizes research objects, field evidence, public data, and reference materials.",
    inputs: [
      "Research Objects",
      "field evidence",
      "public data",
      "reference materials",
    ],
    outputs: ["research briefs", "source maps", "evidence summaries"],
    exampleCommand:
      "Create an evidence summary for the housing pilot using Research Objects and field notes.",
    status: "Active",
  },
  {
    name: "Policy AI",
    role: "Converts field problems and research into policy logic.",
    inputs: [
      "field problems",
      "research briefs",
      "Workflow Standards",
      "government requirements",
    ],
    outputs: ["policy briefs", "ordinance drafts", "government-facing reports"],
    exampleCommand:
      "Draft a policy brief from the latest field problem log and research brief.",
    status: "Draft",
  },
  {
    name: "Funding AI",
    role: "Structures grant applications, budgets, funding calendars, and proposal packages.",
    inputs: [
      "funding notices",
      "budget data",
      "project plans",
      "GitHub issues",
    ],
    outputs: ["grant proposals", "budget tables", "funding strategy memos"],
    exampleCommand:
      "Build a grant proposal package from the pilot plan and budget table.",
    status: "Needs Data",
  },
  {
    name: "Pilot AI",
    role: "Designs and tracks field pilots.",
    inputs: [
      "Mission Control priorities",
      "field sites",
      "Google Forms responses",
      "execution standards",
    ],
    outputs: [
      "pilot plans",
      "execution checklists",
      "field logs",
      "evaluation notes",
    ],
    exampleCommand: "Create a 30-day pilot execution checklist for the community care test.",
    status: "Active",
  },
  {
    name: "Data AI",
    role: "Manages structured records from Google Sheets, Google Forms responses, GitHub issues, and research objects.",
    inputs: ["Google Sheets", "Google Forms responses", "GitHub issues", "Research Objects"],
    outputs: ["dashboards", "indicators", "summaries", "data quality checks"],
    exampleCommand:
      "Check Google Sheets records for missing status and owner fields.",
    status: "Needs Data",
  },
  {
    name: "Output AI",
    role: "Turns internal materials into final documents.",
    inputs: ["briefs", "case notes", "strategy memos", "approved templates"],
    outputs: ["PDF", "PPT", "Word", "reports", "proposals", "manuals", "templates"],
    exampleCommand: "Turn the policy brief into a PDF report and PPT deck outline.",
    status: "Active",
  },
  {
    name: "Community AI",
    role: "Manages volunteer, resident, partner, and local community engagement logic.",
    inputs: [
      "community contacts",
      "resident needs",
      "partner records",
      "participation logs",
    ],
    outputs: [
      "recruitment plans",
      "community maps",
      "participation records",
      "communication drafts",
    ],
    exampleCommand:
      "Map partner roles and draft a resident participation message.",
    status: "Draft",
  },
  {
    name: "Case AI",
    role: "Supports welfare case documentation, assessment, service planning, monitoring, and evaluation.",
    inputs: ["case records", "assessment notes", "service plans", "monitoring data"],
    outputs: ["case summaries", "service plans", "monitoring notes", "evaluation reports"],
    exampleCommand: "Summarize this welfare case record into a service plan and monitoring checklist.",
    status: "Needs Data",
  },
  {
    name: "Strategy AI",
    role: "Connects projects, resources, risks, timelines, and decision logic.",
    inputs: [
      "Mission Control",
      "project issues",
      "resource records",
      "risk notes",
    ],
    outputs: ["roadmaps", "priority maps", "risk memos", "strategy reports"],
    exampleCommand:
      "Create a priority map from current GitHub issues and Mission Control goals.",
    status: "Active",
  },
  {
    name: "Executive AI",
    role: "Summarizes the whole operating system for decision-making.",
    inputs: [
      "agent outputs",
      "dashboards",
      "GitHub activity",
      "weekly reports",
    ],
    outputs: [
      "executive briefs",
      "weekly reports",
      "issue summaries",
      "decision memos",
    ],
    exampleCommand:
      "Prepare a weekly executive brief from active pilots, risks, and funding deadlines.",
    status: "Draft",
  },
];

export const bisSystem = {
  name: "Birdiaconia Intelligence System (BIS)",
  description:
    "AI command layer for operating Birdiaconia OS from the Workspace operations room.",
  operatingLanguage: [
    "GitHub is the backend.",
    "Workspace is the operations room.",
    "Google Forms responses flow into purpose-specific Google Sheets.",
    "Outputs include PDF, PPT, Word, grant proposals, policy reports, and field execution documents.",
  ],
};

export type BISSystem = typeof bisSystem;