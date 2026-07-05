# Birdiaconia Intelligence System (BIS)

Birdiaconia Intelligence System (BIS) is the AI command layer of Birdiaconia OS. It is not a homepage feature. It is the operating architecture that helps the Workspace coordinate research, policy, funding, pilots, data, documents, community engagement, cases, strategy, and executive decisions.

## Position inside Birdiaconia OS

- **GitHub is the backend.** Issues, pull requests, documents, standards, research objects, and decisions are stored and reviewed in the repository.
- **Workspace is the operations room.** The dashboard shows the current command modules and lets operators decide which AI role should process the next task.
- **Google Sheets + AppSheet is the input system.** Structured field records, case records, pilot records, partner records, and operational tables enter BIS through these tools before being organized in GitHub.
- **Outputs are operational documents.** BIS prepares PDF, PPT, Word, grant proposals, policy reports, field execution documents, dashboards, briefs, memos, plans, and checklists.

## Relationship to OS components

BIS connects four core Birdiaconia OS layers:

1. **Research Objects** — evidence, public data, source maps, field materials, and reference models that can be reused.
2. **Workflow Standards** — repeatable rules for turning inputs into issues, documents, pilots, reports, and final outputs.
3. **Mission Control** — priorities, timelines, active work, risks, decisions, and execution status.
4. **Final Outputs** — PDF, PPT, Word, grant proposals, policy reports, field execution documents, manuals, and templates.

## Agent modules

BIS uses the following operational modules:

- Research AI: organizes research objects, evidence, public data, and references.
- Policy AI: converts field problems and research into policy logic.
- Funding AI: structures grants, budgets, calendars, and proposal packages.
- Pilot AI: designs and tracks field pilots.
- Data AI: manages records from Google Sheets, AppSheet, GitHub issues, and research objects.
- Output AI: converts internal materials into final documents.
- Community AI: manages volunteer, resident, partner, and local engagement logic.
- Case AI: supports welfare case documentation, assessment, service planning, monitoring, and evaluation.
- Strategy AI: connects projects, resources, risks, timelines, and decision logic.
- Executive AI: summarizes the operating system for decision-making.

The source configuration for these modules is `data/bisAgents.ts`. The Workspace imports that file so the BIS structure is not hardcoded only in the UI.

## How to use BIS in the Workspace

1. Open the Workspace dashboard.
2. Go to **Birdiaconia Intelligence System (BIS)** in the AI section.
3. Select the module that matches the current operation.
4. Provide the module inputs from GitHub, Google Sheets, AppSheet, Research Objects, Mission Control, or Workflow Standards.
5. Run the example command pattern or adapt it to the current task.
6. Save outputs back to GitHub as documents, issues, pull requests, or approved final files.

## Status meanings

- **Draft**: the module definition exists, but operating standards or templates still need review.
- **Active**: the module can be used for current Workspace operations.
- **Needs Data**: the module requires better structured input data before reliable operation.
