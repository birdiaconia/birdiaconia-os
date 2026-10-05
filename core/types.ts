export type CoreEntityType =
  | "PERSON"
  | "ORGANIZATION"
  | "PROJECT"
  | "PARTICIPATION"
  | "ACTIVITY"
  | "RELATIONSHIP"
  | "RESOURCE"
  | "TRANSACTION"
  | "RECORD";

export type BirdiaconiaEventType =
  | "PROJECT_APPLICATION_SUBMITTED";

export type EventSource =
  | "site"
  | "toss"
  | "google"
  | "operator"
  | "system";

export type BirdiaconiaEvent = {
  id: string;
  type: BirdiaconiaEventType;
  occurredAt: string;
  source: EventSource;
  payload: Record<string, unknown>;
};

export type CoreMutation = {
  operation: "UPSERT" | "APPEND";
  entityType: CoreEntityType;
  entityId: string;
  values: Record<string, unknown>;
};

export type ActionStatus =
  | "READY"
  | "WAITING_FOR_APPROVAL"
  | "WAITING_FOR_CONNECTOR";

export type AgentAction = {
  id: string;
  kind: string;
  target: string;
  summary: string;
  status: ActionStatus;
  requiresHumanApproval: boolean;
  payload?: Record<string, unknown>;
};

export type AuditLogEntry = {
  id: string;
  eventId: string;
  stage: "RECEIVED" | "CORE" | "ACTION" | "APPROVAL" | "COMPLETE";
  message: string;
  createdAt: string;
};

export type RuntimeResult = {
  runtimeVersion: string;
  event: BirdiaconiaEvent;
  coreMutations: CoreMutation[];
  actions: AgentAction[];
  auditLog: AuditLogEntry[];
  persistence: {
    mode: "connector-required";
    status: "not-configured";
    note: string;
  };
};
