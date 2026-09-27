import { isAiSensitiveProcessingEnabled } from "./workspace-config";
import type {
  DataClassification,
  PrivacyMetadata,
  Role,
} from "./workspace-types";
import { canUseClassification } from "./workspace-permissions";

export type PrivacyDecision = {
  allowed: boolean;
  requiresRedaction: boolean;
  requiresHumanReview: boolean;
  reason: string;
};

export function evaluateDataAccess(
  role: Role,
  classification: DataClassification,
  privacy?: PrivacyMetadata,
): PrivacyDecision {
  if (!canUseClassification(role, classification)) {
    return {
      allowed: false,
      requiresRedaction: false,
      requiresHumanReview: true,
      reason: "현재 역할은 이 데이터 분류에 접근할 수 없습니다.",
    };
  }

  if (privacy?.retentionUntil && new Date(privacy.retentionUntil) < new Date()) {
    return {
      allowed: false,
      requiresRedaction: false,
      requiresHumanReview: true,
      reason: "보유기간이 만료된 데이터입니다. 파기 또는 별도 보존근거 검토가 필요합니다.",
    };
  }

  return {
    allowed: true,
    requiresRedaction: classification === "PRIVATE" || classification === "SENSITIVE" || classification === "IDENTITY",
    requiresHumanReview: classification !== "PUBLIC",
    reason: "역할과 보유기간 기준을 통과했습니다.",
  };
}

export function evaluateAiProcessing(
  role: Role,
  classification: DataClassification,
  privacy?: PrivacyMetadata,
): PrivacyDecision {
  const access = evaluateDataAccess(role, classification, privacy);
  if (!access.allowed) return access;

  if (!privacy?.aiAllowed) {
    return {
      allowed: false,
      requiresRedaction: false,
      requiresHumanReview: true,
      reason: "이 레코드는 AI 처리 허용 근거가 설정되지 않았습니다.",
    };
  }

  if ((classification === "SENSITIVE" || classification === "IDENTITY") && !isAiSensitiveProcessingEnabled()) {
    return {
      allowed: false,
      requiresRedaction: true,
      requiresHumanReview: true,
      reason: "민감/식별정보 AI 처리는 기본 차단 상태입니다.",
    };
  }

  return {
    allowed: true,
    requiresRedaction: privacy.aiRedactionRequired || access.requiresRedaction,
    requiresHumanReview: true,
    reason: "AI 처리는 최소정보·가명화 후 사람 검토를 전제로 허용됩니다.",
  };
}

export function shouldDeleteRecord(privacy?: PrivacyMetadata, now = new Date()) {
  if (!privacy?.retentionUntil) return false;
  return new Date(privacy.retentionUntil) < now;
}
