import type { Role, WorkspaceMode } from "../lib/workspace-types";
import { RoomCard } from "./RoomCard";

const privateItems = [
  "오늘 due인 할 일: 주간 운영 우선순위 확정",
  "오늘 일정: 아침 운영 점검, 현장 파트너 통화",
  "현장 기록: 확인 필요 상태 1건, 민감정보 포함 기록 있음(원문 숨김)",
  "연구/사업: 대표 검토 메모 1건",
  "AI 작업: 생성 대기 1건, 검토 대기 1건",
  "보고서 후보: 초안 가능 1건",
  "결정 요청: 미결정 1건",
];

export function TodayRoom({ mode, role }: { mode: WorkspaceMode; role: Role }) {
  const isPublic = mode === "public" || role === "Guest";
  const items = isPublic ? ["공개 모드 샘플: 오늘의 운영 흐름은 Private Mode에서 권한에 따라 표시됩니다.", "민감정보 원문과 실제 Google Sheets 데이터는 공개 화면에 표시하지 않습니다."] : privateItems;
  return <RoomCard id="today" eyebrow="Today Room" title="오늘 판단할 운영 항목" tone="priority"><p className="muted">모든 데이터를 나열하지 않고 오늘 결정·확인·보고로 이어질 항목만 모읍니다.</p><div className="flow-list">{items.map((item) => <div className="flow-row" key={item}><strong>{item}</strong>{item.includes("민감정보") && <p>personName, phone, address, sensitiveMemo 원문은 표시하지 않습니다.</p>}</div>)}</div></RoomCard>;
}
