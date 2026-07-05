import { formLinks } from "../lib/form-links";
import type { Role, WorkspaceMode } from "../lib/workspace-types";
import { FormLinkCard } from "./FormLinkCard";
import { RoomCard } from "./RoomCard";

const sections = [
  { title: "운영 입력", items: [["tasks", "할 일 입력하기"], ["schedules", "일정 입력하기"], ["decisions", "결정 요청하기"]] },
  { title: "현장 입력", items: [["fieldRecords", "현장 기록 입력하기"], ["fieldPrivate", "민감 사례 기록 입력하기"]] },
  { title: "연구/사업 입력", items: [["research", "연구 메모 입력하기"], ["business", "사업 메모 입력하기"], ["grants", "공모사업 후보 입력하기"]] },
  { title: "AI/보고서 입력", items: [["aiRequests", "AI 작업 요청하기"], ["reportCandidates", "보고서 후보 등록하기"]] },
] as const;

export function InputRoom({ role, mode }: { role: Role; mode: WorkspaceMode }) {
  return <RoomCard id="input" eyebrow="Input Room" title="Google Forms 입력 포털"><p className="muted">Input Room은 직접 입력 폼이 아니라 목적별 Google Forms로 들어가는 운영 포털입니다. 입력 응답은 목적별 Google Sheets에 저장되고 Private Workspace의 Today Room 판단 재료가 됩니다.</p>{mode === "public" && <p className="warning-text">현재 공개 모드입니다. 개인정보·민감 사례 기록 Form은 비활성화되어 있습니다.</p>}<div className="input-sections">{sections.map((section) => <section key={section.title}><h3>{section.title}</h3><div className="form-grid">{section.items.map(([formType, title]) => <FormLinkCard key={formType} formType={formType} title={title} description="Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정" url={formLinks[formType]} role={role} mode={mode} />)}</div></section>)}</div></RoomCard>;
}
