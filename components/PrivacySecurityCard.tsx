import { areSensitiveFormsEnabled, isAiSensitiveProcessingEnabled } from "../lib/workspace-config";
import type { Role, WorkspaceMode } from "../lib/workspace-types";
import { RoomCard } from "./RoomCard";

export function PrivacySecurityCard({ mode, role }: { mode: WorkspaceMode; role: Role }) {
  return (
    <RoomCard
      id="privacy-security"
      eyebrow="Privacy & Security"
      title="느슨한 입력, 엄격한 보호"
    >
      <p className="muted">
        사람은 편하게 기록할 수 있지만, 저장·조회·AI 처리 단계에서는
        최소수집·목적 제한·권한·보유기간·감사기록을 적용합니다.
      </p>
      <div className="status-list">
        <p><strong>현재 모드:</strong> {mode}</p>
        <p><strong>현재 역할:</strong> {role}</p>
        <p><strong>민감정보 입력:</strong> {areSensitiveFormsEnabled() ? "명시적 활성화" : "기본 차단"}</p>
        <p><strong>민감/식별정보 AI 처리:</strong> {isAiSensitiveProcessingEnabled() ? "명시적 활성화" : "기본 차단"}</p>
        <p><strong>공개 모드:</strong> 공개용 정보와 BIS 설명만 노출</p>
        <p><strong>AI 원칙:</strong> 목적에 필요한 최소 정보만 전달, 민감정보는 기본 차단</p>
        <p><strong>감사 원칙:</strong> 조회·수정·출력·삭제·AI 처리 이벤트를 추적 가능한 구조로 저장</p>
        <p><strong>보유 원칙:</strong> 레코드별 목적·근거·보유기한을 연결하고 만료 시 파기 검토</p>
      </div>
      <p className="warning-text">
        이 화면은 안전장치의 상태를 보여주는 운영 가드레일입니다. 실제 인증·DB
        암호화·감사로그 저장소는 운영 인프라 연결 전까지 미완성입니다.
      </p>
    </RoomCard>
  );
}
