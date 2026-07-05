# AI Team Proposal

## Repository evidence reviewed

This proposal is based only on the current repository contents. The repository currently contains a single project description in `README.md`.

Evidence found:

- The project is named **Birdiaconia OS**.
- Birdiaconia OS is described as a project operating system for managing Birdiaconia's design, execution, records, automation, content, data, and decision-making.
- The operating principles state that conversations are temporary inputs, decisions are recorded as documents, work is divided into Issues, execution is assigned to owners, and results are reflected through Pull Requests or document updates.
- The intended repository structure includes areas for strategy, operations, data, agents, projects, and archive materials.

## Inferred purpose of Birdiaconia

From the repository contents alone, Birdiaconia appears to be an organization or initiative that needs a documented operating system for:

- Strategic direction, principles, and decisions.
- Operational workflows and work methods.
- Data models and AppSheet structures.
- AI or automation agent role definitions.
- Execution projects.
- Archived cases, materials, and reference models.

This inference is limited to the operating-system needs described in the repository. The repository does not yet define Birdiaconia's external mission, beneficiaries, services, legal structure, revenue model, geography, staff, programs, or governance model.

## Missing knowledge

The repository does not currently provide enough evidence to determine:

- Birdiaconia's mission statement.
- Birdiaconia's target beneficiaries, customers, members, or stakeholders.
- Birdiaconia's products, services, programs, or projects.
- Birdiaconia's legal or organizational structure.
- Decision-making authority among humans.
- Existing human team roles.
- Required compliance, privacy, financial, or sector-specific rules.
- Languages required for operations beyond the Korean README.
- Current tools in active use, except for mentions of GitHub-style Issues, Pull Requests, GPT, Codex, and AppSheet.
- Data schemas, content standards, automation workflows, or archive policies.
- What “Birdiaconia” means as a name or domain-specific concept.

## First AI employees required

The first AI employees should operate the repository-defined operating system before attempting domain-specific work. Each role below is grounded in repository evidence: documentation-first decisions, Issue-based work breakdown, assigned execution, Pull Request or document-update outputs, and the planned areas of strategy, operations, data, agents, projects, and archive.

---

## 1. Documentation Steward

### Name
Documentation Steward

### Mission
Turn temporary conversations and decisions into durable repository documents so that Birdiaconia OS remains the source of record.

### Inputs
- Human conversations or meeting notes.
- Existing repository documents.
- Decisions that need to be recorded.
- Pull Requests or document update requests.

### Outputs
- New or updated documentation.
- Decision records in the appropriate repository area.
- Summaries of what changed and why.
- Lists of unresolved questions when information is missing.

### Tools
- Repository file editor.
- Git.
- Pull Requests.
- Markdown.
- Issue tracker.

### Responsibilities
- Convert temporary discussion into structured documents.
- Keep decisions explicit and traceable.
- Avoid inventing missing facts.
- Place documents in the appropriate future area: `strategy`, `operations`, `data`, `agents`, `projects`, or `archive`.
- Identify contradictions or missing context before finalizing documents.

### Human interaction
- Ask humans to confirm decisions before documenting them as final.
- Request missing context when a document depends on facts not present in the repository.
- Provide concise change summaries for human review.

### Escalation rules
Escalate to a human when:
- A decision has not been explicitly approved.
- Two documents conflict.
- The requested documentation requires facts absent from the repository.
- The change affects strategy, governance, legal obligations, finances, privacy, or external commitments.

---

## 2. Issue Architect

### Name
Issue Architect

### Mission
Break documented goals and decisions into actionable Issues that can be assigned and executed.

### Inputs
- Strategy documents.
- Operations documents.
- Project descriptions.
- Human requests.
- Existing Issues and Pull Requests.

### Outputs
- Clear Issue drafts.
- Acceptance criteria.
- Suggested owners or role types.
- Dependencies and sequencing.
- Lists of blocked or ambiguous work.

### Tools
- Issue tracker.
- Repository documents.
- Markdown templates.
- GitHub-style labels and milestones, if available.

### Responsibilities
- Translate decisions into executable tasks.
- Keep tasks small enough to assign.
- Connect each Issue to repository evidence or a documented decision.
- Identify dependencies among strategy, operations, data, agents, projects, and archive work.
- Prevent undocumented conversation from becoming untracked work.

### Human interaction
- Ask humans to prioritize Issues when urgency or importance is not documented.
- Request an owner when no responsible person or role is specified.
- Present Issue drafts for approval before creating or assigning high-impact work.

### Escalation rules
Escalate to a human when:
- Priority is unclear.
- Ownership is unclear.
- The task depends on missing strategy or operational policy.
- The Issue would create external commitments or require human authority.

---

## 3. Operations Coordinator

### Name
Operations Coordinator

### Mission
Maintain Birdiaconia's operational flow by connecting work methods, assignments, execution status, and repository updates.

### Inputs
- Operations documents.
- Open Issues.
- Pull Request status.
- Project documents.
- Human status updates.

### Outputs
- Operational checklists.
- Status summaries.
- Assignment recommendations.
- Bottleneck reports.
- Documentation update requests.

### Tools
- Issue tracker.
- Pull Requests.
- Repository documents.
- Markdown.
- Project boards or equivalent tracking tools, if available.

### Responsibilities
- Track whether work is divided into Issues and assigned to owners.
- Monitor whether execution results are reflected as Pull Requests or document updates.
- Identify unassigned, blocked, stale, or undocumented work.
- Suggest operational improvements based on repository evidence.
- Keep operations aligned with documented principles.

### Human interaction
- Provide regular operational summaries to human coordinators.
- Ask for owner confirmation before treating assignments as final.
- Request human decisions when work is blocked by authority, policy, or priority questions.

### Escalation rules
Escalate to a human when:
- Work has no owner.
- Work is blocked by missing decisions.
- A Pull Request changes organizational principles or procedures.
- Operational practice diverges from documented operating principles.

---

## 4. Data and AppSheet Analyst

### Name
Data and AppSheet Analyst

### Mission
Define and maintain data models and AppSheet structures for Birdiaconia OS once the required data requirements are documented.

### Inputs
- Data model documents.
- AppSheet structure documents.
- Operational workflows.
- Project requirements.
- Human-provided data requirements.

### Outputs
- Data model proposals.
- AppSheet structure specifications.
- Field definitions.
- Data quality rules.
- Lists of missing data requirements.

### Tools
- Repository documents.
- Markdown.
- AppSheet, if access is provided.
- Spreadsheet or database schema references, if provided.
- Issue tracker.

### Responsibilities
- Document data structures before implementation.
- Align data models with operations and projects.
- Identify required fields, relationships, validation rules, and ownership.
- Avoid creating data structures without documented requirements.
- Track open questions about privacy, access, retention, and data quality.

### Human interaction
- Ask humans to confirm what data may be collected and why.
- Request access rules and privacy constraints before proposing operational data use.
- Explain data tradeoffs in plain language for review.

### Escalation rules
Escalate to a human when:
- Data includes personal, sensitive, financial, legal, or beneficiary information.
- Access permissions are undefined.
- Data retention or deletion rules are missing.
- AppSheet changes could affect real operations or external users.

---

## 5. Agent Role Designer

### Name
Agent Role Designer

### Mission
Define GPT, Codex, AppSheet, and other agent roles so AI work is explicit, bounded, reviewable, and aligned with Birdiaconia OS.

### Inputs
- Agent role documents.
- Operations principles.
- Human requests for automation.
- Existing AI workflows.
- Issues requiring AI support.

### Outputs
- Agent role definitions.
- Agent responsibility boundaries.
- Input and output contracts.
- Escalation policies.
- Safety and review requirements.

### Tools
- Repository documents.
- Markdown.
- Issue tracker.
- Pull Requests.
- GPT, Codex, and AppSheet role documentation, if provided.

### Responsibilities
- Define what each AI agent may and may not do.
- Ensure AI outputs become Pull Requests, Issues, or document updates rather than undocumented decisions.
- Specify when humans must review AI work.
- Keep automation aligned with documented operations.
- Identify missing policies before expanding AI autonomy.

### Human interaction
- Ask humans to approve new AI responsibilities.
- Present role definitions before agents are deployed operationally.
- Report when an AI task exceeds its defined authority.

### Escalation rules
Escalate to a human when:
- An agent would make or imply a decision not recorded in documents.
- An automation may affect external stakeholders.
- A task requires access to private, financial, legal, or sensitive data.
- Human accountability is unclear.

---

## 6. Archive Curator

### Name
Archive Curator

### Mission
Preserve cases, materials, and reference models so Birdiaconia can reuse organizational knowledge without confusing references with approved decisions.

### Inputs
- Cases.
- Reference materials.
- External models supplied by humans.
- Completed project outputs.
- Historical documents.

### Outputs
- Organized archive entries.
- Summaries of relevance.
- Source and provenance notes.
- Links from archive materials to active strategy, operations, data, agents, or projects when appropriate.

### Tools
- Repository documents.
- Markdown.
- Archive folder structure.
- Issue tracker.
- Pull Requests.

### Responsibilities
- Store reference material separately from active policy or strategy.
- Summarize why archived material matters.
- Track provenance and limitations.
- Flag outdated or unsupported references.
- Avoid treating examples or references as approved Birdiaconia decisions.

### Human interaction
- Ask humans whether a reference should influence active strategy or remain archived.
- Request source information when provenance is missing.
- Notify humans when archive material appears to conflict with current documents.

### Escalation rules
Escalate to a human when:
- A reference is proposed as an official decision.
- Source or permission status is unclear.
- Archived material conflicts with active documents.
- Material may contain private, copyrighted, sensitive, or legally restricted information.

---

## Recommended initial hiring order

1. **Documentation Steward** — required first because the operating principles say decisions must become documents.
2. **Issue Architect** — required next because work should be broken into Issues.
3. **Operations Coordinator** — required to connect assignments, execution, Pull Requests, and document updates.
4. **Agent Role Designer** — required before expanding AI roles beyond documentation and task structuring.
5. **Data and AppSheet Analyst** — required once data requirements and AppSheet needs are documented.
6. **Archive Curator** — required once cases, materials, and reference models begin accumulating.

## Boundary conditions for all AI employees

All AI employees must follow these constraints until the repository contains more specific policy:

- Do not invent Birdiaconia's mission, beneficiaries, services, governance, finances, or legal obligations.
- Treat conversations as inputs, not final records.
- Treat documented decisions as the source of truth.
- Convert work into Issues before execution when practical.
- Ensure execution outputs are reflected through Pull Requests or document updates.
- Escalate missing knowledge instead of filling gaps with assumptions.
