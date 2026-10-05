import type {
  AgentAction,
  AuditLogEntry,
  BirdiaconiaEvent,
  CoreMutation,
  RuntimeResult,
} from "../core/types";

const RUNTIME_VERSION = "0.2.0";

function requiredString(payload: Record<string, unknown>, key: string) {
  const value = payload[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Missing required field: ${key}`);
  }
  return value.trim();
}

function log(
  event: BirdiaconiaEvent,
  suffix: string,
  stage: AuditLogEntry["stage"],
  message: string,
): AuditLogEntry {
  return {
    id: `${event.id}:${suffix}`,
    eventId: event.id,
    stage,
    message,
    createdAt: new Date().toISOString(),
  };
}

function processProjectApplication(event: BirdiaconiaEvent): RuntimeResult {
  const projectId = requiredString(event.payload, "projectId");
  const applicantId = requiredString(event.payload, "applicantId");
  const participationId = `participation:${projectId}:${applicantId}`;

  const coreMutations: CoreMutation[] = [
    {
      operation: "UPSERT",
      entityType: "PARTICIPATION",
      entityId: participationId,
      values: {
        projectId,
        personId: applicantId,
        status: "APPLIED",
        source: event.source,
        appliedAt: event.occurredAt,
      },
    },
  ];

  const actions: AgentAction[] = [
    {
      id: `${event.id}:core-participation`,
      kind: "UPSERT_CORE_ENTITY",
      target: participationId,
      summary: "신청자를 기존 PERSON과 PROJECT 사이의 PARTICIPATION으로 연결합니다.",
      status: "READY",
      requiresHumanApproval: false,
      payload: { entityType: "PARTICIPATION", entityId: participationId },
    },
    {
      id: `${event.id}:capacity-check`,
      kind: "CHECK_PROJECT_CAPACITY",
      target: projectId,
      summary: "현재 프로젝트 정원과 승인 가능한 참여 상태를 확인합니다.",
      status: "READY",
      requiresHumanApproval: false,
    },
    {
      id: `${event.id}:confirmation`,
      kind: "SEND_APPLICATION_CONFIRMATION",
      target: applicantId,
      summary: "연결된 알림 채널을 통해 신청 접수 결과를 안내합니다.",
      status: "WAITING_FOR_CONNECTOR",
      requiresHumanApproval: false,
    },
    {
      id: `${event.id}:approval-gate`,
      kind: "REVIEW_PARTICIPATION_DECISION",
      target: participationId,
      summary: "선발·거절·비용·민감정보 판단이 필요한 경우 운영자의 의미 있는 결정을 요청합니다.",
      status: "WAITING_FOR_APPROVAL",
      requiresHumanApproval: true,
    },
  ];

  const auditLog: AuditLogEntry[] = [
    log(event, "received", "RECEIVED", "PROJECT_APPLICATION_SUBMITTED 이벤트를 수신했습니다."),
    log(event, "core", "CORE", `PARTICIPATION ${participationId} 변경안을 만들었습니다.`),
    log(event, "actions", "ACTION", `${actions.length}개의 후속 Action을 생성했습니다.`),
    log(event, "approval", "APPROVAL", "사람의 판단이 필요한 승인 지점을 분리했습니다."),
    log(event, "complete", "COMPLETE", "이벤트 처리 계획 생성을 완료했습니다."),
  ];

  return {
    runtimeVersion: RUNTIME_VERSION,
    event,
    coreMutations,
    actions,
    auditLog,
    persistence: {
      mode: "connector-required",
      status: "not-configured",
      note: "현재 Runtime은 실제 처리 결과를 생성합니다. 영속 저장은 Google/DB 등 승인된 Core 저장소 connector가 연결되면 적용됩니다.",
    },
  };
}

export function processEvent(event: BirdiaconiaEvent): RuntimeResult {
  switch (event.type) {
    case "PROJECT_APPLICATION_SUBMITTED":
      return processProjectApplication(event);
    default: {
      const exhaustive: never = event.type;
      throw new Error(`Unsupported event type: ${exhaustive}`);
    }
  }
}

export const runtimeManifest = {
  name: "Birdiaconia Event Runtime",
  version: RUNTIME_VERSION,
  architecture: ["EVENT", "CORE", "ACTION", "APPROVAL", "LOG"],
  handlers: ["PROJECT_APPLICATION_SUBMITTED"],
  persistence: "connector-required",
};
