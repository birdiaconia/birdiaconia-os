import { areSensitiveFormsEnabled } from "./workspace-config";
import type { DataClassification, FormType, Role, RoomId, UserObject, WorkspaceMode } from "./workspace-types";

const privateRoomPermissions: Record<Role, RoomId[]> = {
  Owner: ["today", "input", "tasks", "schedules", "fields", "research", "business", "ai-requests", "reports", "decisions", "bis", "storage", "privacy-security", "settings"],
  Operator: ["today", "input", "tasks", "schedules", "fields", "ai-requests", "reports", "decisions", "bis", "storage", "privacy-security", "settings"],
  Field: ["today", "input", "fields", "bis", "storage", "privacy-security"],
  Researcher: ["today", "input", "research", "reports", "ai-requests", "bis", "storage", "privacy-security"],
  Partner: ["today", "input", "business", "bis", "storage"],
  Viewer: ["today", "tasks", "schedules", "fields", "research", "business", "ai-requests", "reports", "decisions", "bis", "storage"],
  Guest: [],
};

const formPermissions: Record<Role, FormType[]> = {
  Owner: ["tasks", "schedules", "decisions", "fieldRecords", "fieldPrivate", "research", "business", "grants", "aiRequests", "reportCandidates"],
  Operator: ["tasks", "schedules", "decisions", "fieldRecords", "aiRequests", "reportCandidates"],
  Field: ["fieldRecords"],
  Researcher: ["research", "aiRequests", "reportCandidates"],
  Partner: ["business", "grants"],
  Viewer: [],
  Guest: [],
};

export const publicRooms: RoomId[] = ["public-home", "bis"];
export const sensitiveFormTypes: FormType[] = ["fieldPrivate"];

export function canViewRoom(role: Role, room: RoomId, mode: WorkspaceMode = "public") {
  if (mode === "public") return publicRooms.includes(room);
  return privateRoomPermissions[role].includes(room);
}

export function canViewSensitive(role: Role) { return role === "Owner"; }
export function canEditSensitive(role: Role) { return role === "Owner"; }

export function canUseClassification(role: Role, classification: DataClassification) {
  if (classification === "PUBLIC") return true;
  if (role === "Guest") return false;
  if (classification === "INTERNAL") return true;
  if (classification === "PRIVATE") return ["Owner", "Operator", "Field", "Researcher"].includes(role);
  if (classification === "SENSITIVE") return role === "Owner";
  if (classification === "IDENTITY") return ["Owner", "Operator"].includes(role);
  if (classification === "SECRET") return false;
  return false;
}

export function canShowSensitiveForms(mode: WorkspaceMode, role: Role) {
  return mode === "private" && areSensitiveFormsEnabled() && canEditSensitive(role);
}

export function canOpenForm(role: Role, formType: FormType, mode: WorkspaceMode = "public") {
  if (sensitiveFormTypes.includes(formType)) return canShowSensitiveForms(mode, role);
  if (mode === "public") return false;
  return formPermissions[role].includes(formType);
}

export function getFormStatus(role: Role, formType: FormType, mode: WorkspaceMode, url: string) {
  if (sensitiveFormTypes.includes(formType) && mode === "public") return "비공개 전용";
  if (!canOpenForm(role, formType, mode)) return "권한 필요";
  if (!url) return "연결 대기";
  return "연결됨";
}

export function canAccessPrivateWorkspace(user: UserObject) {
  return user.active && user.canViewPrivate && user.role !== "Guest";
}
