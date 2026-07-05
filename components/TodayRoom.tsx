import type { Role, WorkspaceMode } from "../lib/workspace-types";
import { RoomCard } from "./RoomCard";

const todayCards = [
  { title: "오늘 해야 할 일", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "주간 운영 우선순위 확정 대기" },
  { title: "오늘 일정", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "아침 운영 점검, 현장 파트너 통화" },
  { title: "현장 확인", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "현장 기록 검토 대기 · 민감정보 포함 기록 있음" },
  { title: "연구/사업 검토", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "대표 검토 메모 및 공모사업 후보 확인" },
  { title: "AI 작업", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "생성 대기 1건 · 검토 대기 1건" },
  { title: "보고서 생성 후보", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "초안 가능 후보 1건" },
  { title: "미처리 결정사항", publicText: "Google Forms 응답 → 목적별 Google Sheets → Private Workspace 표시 예정", privateText: "대표 결정 필요 항목 1건" },
];

export function TodayRoom({ mode, role }: { mode: WorkspaceMode; role: Role }) {
  const isPublic = mode === "public" || role === "Guest";

  return <RoomCard id="today" eyebrow="Today Room" title="대표가 오늘 판단할 운영실" tone="priority"><p className="muted">Today Room은 전체 Storage 설명이 아니라 오늘 결정·확인·AI 작업·보고서 생성으로 이어지는 운영 항목을 전면에 모읍니다.</p><div className="policy-box"><strong>현재 모드: {isPublic ? "Public / Guest" : `Private / ${role}`}</strong><span>{isPublic ? "실제 운영 데이터는 Private Mode에서만 표시됨" : "권한에 따라 목적별 Google Sheets 응답 요약을 표시할 예정"}</span><span>개인정보와 민감정보는 Today Room에 원문 표시하지 않음</span></div>{isPublic && <p className="warning-text">현재 Public Mode입니다. 실제 운영 데이터는 Private Mode에서 Google Sheets 응답을 불러와 표시됩니다.</p>}<div className="today-card-grid">{todayCards.map((card) => <article className="today-card" key={card.title}><strong>{card.title}</strong><p>{isPublic ? card.publicText : card.privateText}</p></article>)}</div><p className="privacy-note">원칙: Today Room에는 이름, 연락처, 주소, 생년월일, 건강/위기/사례 상세 메모 원문을 표시하지 않습니다. 허용 표시는 “민감정보 포함 기록 있음”, “담당자 확인 필요”, “현장 기록 검토 대기”, “대표 결정 필요” 같은 비식별 운영 신호입니다.</p></RoomCard>;
}
