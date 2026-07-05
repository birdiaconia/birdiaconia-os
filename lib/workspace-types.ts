export type Role = "Owner" | "Operator" | "Field" | "Researcher" | "Partner" | "Viewer" | "Guest";

export type WorkspaceMode = "public" | "private";

export type DataClassification = "PUBLIC" | "INTERNAL" | "PRIVATE" | "SENSITIVE";

export type RoomId =
  | "public-home"
  | "today"
  | "input"
  | "tasks"
  | "schedules"
  | "fields"
  | "research"
  | "business"
  | "ai-requests"
  | "reports"
  | "decisions"
  | "storage"
  | "settings";

export type FormType =
  | "tasks"
  | "schedules"
  | "decisions"
  | "fieldRecords"
  | "fieldPrivate"
  | "research"
  | "business"
  | "grants"
  | "aiRequests"
  | "reportCandidates";

export type WorkspaceObjectBase = {
  id: string;
  objectType: string;
  title?: string;
  name?: string;
  content?: string;
  description?: string;
  status?: string;
  priority?: "low" | "medium" | "high" | "urgent";
  source: string;
  dataClassification: DataClassification;
  visibility: "public" | "private" | "role";
  createdBy: string;
  createdByRole: Role;
  assignedTo?: string;
  accessLevel: "public" | "internal" | "restricted" | "sensitive";
  reviewStatus?: string;
  createdAt: string;
  updatedAt: string;
};

export type UserObject = {
  userId: string;
  name: string;
  email: string;
  role: Role;
  active: boolean;
  canViewPrivate: boolean;
  canEditPrivate: boolean;
  canAccessSensitiveForms: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ActivityLogObject = WorkspaceObjectBase & { objectType: "activityLog"; action: string };
export type TaskObject = WorkspaceObjectBase & { objectType: "task"; due: string; nextAction: string };
export type ScheduleObject = WorkspaceObjectBase & { objectType: "schedule"; date: string; time: string; location: string };
export type FieldObject = WorkspaceObjectBase & { objectType: "field"; recordId: string; siteName: string; category: string; summary: string; issueLevel: string; nextAction: string; hasSensitiveRecord?: boolean };
export type FieldPrivateObject = { privateId: string; recordId: string; personName: string; phone: string; address: string; birthYear: string; sensitiveMemo: string; accessLevel: "sensitive"; createdBy: string; dataClassification: "SENSITIVE" };
export type ResearchObject = WorkspaceObjectBase & { objectType: "research"; topic: string };
export type BusinessObject = WorkspaceObjectBase & { objectType: "business"; deadline?: string };
export type AIRequestObject = WorkspaceObjectBase & { objectType: "aiRequest"; output: string };
export type ReportObject = WorkspaceObjectBase & { objectType: "report"; readiness: "초안 가능" | "자료 보강" | "검토 대기" };
export type DecisionObject = WorkspaceObjectBase & { objectType: "decision"; neededBy: string };
