import type { RoomId, WorkspaceMode } from "./workspace-types";

export function getWorkspaceMode(): WorkspaceMode {
  const mode = process.env.NEXT_PUBLIC_WORKSPACE_MODE ?? process.env.WORKSPACE_MODE ?? "public";
  return mode === "private" ? "private" : "public";
}

export function isPublicMode() { return getWorkspaceMode() === "public"; }
export function isPrivateMode() { return getWorkspaceMode() === "private"; }

export function areSensitiveFormsEnabled() {
  const value = process.env.NEXT_PUBLIC_ENABLE_SENSITIVE_FORMS ?? process.env.ENABLE_SENSITIVE_FORMS ?? "false";
  return value === "true";
}

export const rooms: { id: RoomId; label: string; description: string }[] = [
  { id: "public-home", label: "Public Home", description: "공개 가능한 Workspace 구조 안내" },
  { id: "today", label: "Today Room", description: "오늘 판단할 운영 항목" },
  { id: "input", label: "Input Room", description: "Google Forms 입력 포털" },
  { id: "tasks", label: "Tasks", description: "할 일 응답 조회 준비" },
  { id: "schedules", label: "Schedules", description: "일정 응답 조회 준비" },
  { id: "fields", label: "Fields", description: "일반 현장 기록" },
  { id: "research", label: "Research", description: "연구 메모" },
  { id: "business", label: "Business", description: "사업/공모 기록" },
  { id: "ai-requests", label: "AI Requests", description: "AI 작업 요청" },
  { id: "reports", label: "Reports", description: "보고서 후보" },
  { id: "decisions", label: "Decisions", description: "결정 요청" },
  { id: "storage", label: "Storage", description: "Drive/Sheets 저장소 상태" },
  { id: "settings", label: "Settings", description: "Workspace 설정" },
];

export const storageFolders = [
  { folder: "00_System", sheets: ["Birdiaconia_Users", "Birdiaconia_Settings", "Birdiaconia_Activity_Log"] },
  { folder: "01_Operations", sheets: ["Birdiaconia_Tasks_Responses", "Birdiaconia_Schedules_Responses", "Birdiaconia_Decisions_Responses"] },
  { folder: "02_Field", sheets: ["Birdiaconia_Field_Records_Responses", "Birdiaconia_Field_Private_Responses"] },
  { folder: "03_Research", sheets: ["Birdiaconia_Research_Responses"] },
  { folder: "04_Business", sheets: ["Birdiaconia_Business_Responses", "Birdiaconia_Grant_Responses"] },
  { folder: "05_AI", sheets: ["Birdiaconia_AI_Requests_Responses"] },
  { folder: "06_Reports", sheets: ["Birdiaconia_Report_Candidates_Responses", "Birdiaconia_Report_Index"] },
];
