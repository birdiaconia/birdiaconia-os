import { areSensitiveFormsEnabled } from "./workspace-config";
import type { FormType, Role, RoomId, UserObject, WorkspaceMode } from "./workspace-types";

const roomPermissions: Record<Role, RoomId[]> = {
  Owner: ["public-home", "today", "input", "tasks", "schedules", "fields", "research", "business", "ai-requests", "reports", "decisions", "storage", "sensitive", "settings"],
  Operator: ["public-home", "today", "input", "tasks", "schedules", "fields", "ai-requests", "reports", "decisions", "storage"],
  Field: ["public-home", "input", "fields", "storage"],
  Researcher: ["public-home", "research", "reports", "ai-requests", "storage"],
  Partner: ["public-home", "input", "business", "storage"],
  Viewer: ["public-home", "today", "storage"],
  Guest: ["public-home", "storage"],
};

const formPermissions: Record<Role, FormType[]> = {
  Owner: ["tasks", "schedules", "decisions", "fieldRecords", "fieldPrivate", "casePrivate", "crisisRecord", "healthCareMemo", "research", "business", "grants", "aiRequests", "reportCandidates"],
  Operator: ["tasks", "schedules", "decisions", "fieldRecords", "aiRequests", "reportCandidates"],
  Field: ["fieldRecords"],
  Researcher: ["research", "aiRequests", "reportCandidates"],
  Partner: ["business", "grants"],
  Viewer: [],
  Guest: [],
};

export const sensitiveFormTypes: FormType[] = ["fieldPrivate", "casePrivate", "crisisRecord", "healthCareMemo"];

export function canViewRoom(role: Role, room: RoomId, mode: WorkspaceMode = "public") {
  if (mode === "public") return ["public-home", "storage"].includes(room);
  return roomPermissions[role].includes(room);
}

export function canViewSensitive(role: Role) { return role === "Owner"; }
export function canEditSensitive(role: Role) { return role === "Owner"; }

export function canShowSensitiveForms(mode: WorkspaceMode, role: Role) {
  return mode === "private" && areSensitiveFormsEnabled() && canEditSensitive(role);
}

export function canOpenForm(role: Role, formType: FormType, mode: WorkspaceMode = "public") {
  if (mode === "public") return false;
  if (sensitiveFormTypes.includes(formType)) return canShowSensitiveForms(mode, role);
  return formPermissions[role].includes(formType);
}

export function canAccessPrivateWorkspace(user: UserObject) { return user.active && user.canViewPrivate && user.role !== "Guest"; }
