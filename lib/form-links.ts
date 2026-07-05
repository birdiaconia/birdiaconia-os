import type { FormType } from "./workspace-types";

export const formLinks: Record<FormType, string> = {
  tasks: process.env.NEXT_PUBLIC_FORM_TASKS_URL ?? "",
  schedules: process.env.NEXT_PUBLIC_FORM_SCHEDULES_URL ?? "",
  decisions: process.env.NEXT_PUBLIC_FORM_DECISIONS_URL ?? "",
  fieldRecords: process.env.NEXT_PUBLIC_FORM_FIELD_RECORDS_URL ?? "",
  fieldPrivate: process.env.NEXT_PUBLIC_FORM_FIELD_PRIVATE_URL ?? "",
  casePrivate: process.env.NEXT_PUBLIC_FORM_CASE_PRIVATE_URL ?? "",
  crisisRecord: process.env.NEXT_PUBLIC_FORM_CRISIS_RECORD_URL ?? "",
  healthCareMemo: process.env.NEXT_PUBLIC_FORM_HEALTH_CARE_MEMO_URL ?? "",
  research: process.env.NEXT_PUBLIC_FORM_RESEARCH_URL ?? "",
  business: process.env.NEXT_PUBLIC_FORM_BUSINESS_URL ?? "",
  grants: process.env.NEXT_PUBLIC_FORM_GRANTS_URL ?? "",
  aiRequests: process.env.NEXT_PUBLIC_FORM_AI_REQUESTS_URL ?? "",
  reportCandidates: process.env.NEXT_PUBLIC_FORM_REPORT_CANDIDATES_URL ?? "",
};
