import type { BISAgent, BISSystem } from "../data/bisAgents";
import { getCurrentUser, getCurrentUserRole } from "../lib/workspace-auth";
import { getWorkspaceMode, rooms } from "../lib/workspace-config";
import { canViewRoom } from "../lib/workspace-permissions";
import { InputRoom } from "./InputRoom";
import { RoomCard } from "./RoomCard";
import { StorageStatusCard } from "./StorageStatusCard";
import { TodayRoom } from "./TodayRoom";

type WorkspaceShellProps = {
  bisAgents?: BISAgent[];
  bisSystem?: BISSystem;
};

export function WorkspaceShell({
  bisAgents = [],
  bisSystem,
}: WorkspaceShellProps = {}) {
  const mode = getWorkspaceMode();
  const role = getCurrentUserRole();
  const user = getCurrentUser();
  const visibleRooms = rooms.filter((room) => canViewRoom(role, room.id, mode));
  return <main className="workspace-shell"><aside className="sidebar" aria-label="Birdiaconia Workspace 탐색"><div className="brand"><span className="brand-mark">B</span><div><strong>Birdiaconia</strong><span>버디아코니아 Workspace</span></div></div><div className="mode-pill">{mode} · {role}</div><nav className="nav-list">{visibleRooms.map((room) => <a className={room.id === "public-home" ? "active" : ""} href={`#${room.id}`} key={room.id}>{room.label}</a>)}</nav></aside><section className="content-panel"><header className="page-header" id="public-home"><p className="eyebrow">Workspace v0.2</p><h1>Birdiaconia Workspace 운영실</h1><p>Birdiaconia Workspace는 Google Forms로 입력된 운영 데이터를 목적별 Google Sheets에 저장하고, Private Workspace에서 오늘의 판단·AI 작업·보고서 생성을 준비하는 운영실입니다.</p><p className="integration-note">현재 사용자: {user.name} · Google Login 및 Users Sheet 연동 전 placeholder currentUser.role 구조입니다.</p></header><section className="operation-flow"><span>Google Forms 입력</span><strong>→</strong><span>목적별 Sheets 저장</span><strong>→</strong><span>Private Workspace</span><strong>→</strong><span>Today Room 판단</span><strong>→</strong><span>보고/결정</span></section>{canViewRoom(role, "today", mode) && <TodayRoom mode={mode} role={role} />}{canViewRoom(role, "input", mode) && <InputRoom mode={mode} role={role} />}<StorageStatusCard mode={mode} role={role} /><RoomCard eyebrow="Implementation Ready" title="Google Sheets API 서버 연동 준비"><p className="muted">서비스 계정 키와 Spreadsheet ID는 클라이언트에 노출하지 않고 API Route에서만 사용합니다. Users, Activity Log, Tasks, Schedules, Decisions, Field, Research, Business, AI, Reports는 목적별 Sheet ID 환경변수로 연결합니다.</p></RoomCard></section></main>;
  return (
    <main className="workspace-shell">
      <aside className="sidebar" aria-label="Birdiaconia Workspace 탐색">
        <div className="brand">
          <span className="brand-mark">B</span>
          <div>
            <strong>Birdiaconia</strong>
            <span>버디아코니아 Workspace</span>
          </div>
        </div>
        <div className="mode-pill">
          {mode} · {role}
        </div>
        <nav className="nav-list">
          {visibleRooms.map((room) => (
            <a
              className={room.id === "public-home" ? "active" : ""}
              href={`#${room.id}`}
              key={room.id}
            >
              {room.label}
            </a>
          ))}
        </nav>
      </aside>
      <section className="content-panel">
        <header className="page-header" id="public-home">
          <p className="eyebrow">Workspace v0.2</p>
          <h1>Birdiaconia Workspace 운영실</h1>
          <p>
            Birdiaconia / 버디아코니아는 하나의 Workspace 안에서 Public Mode,
            Private Mode, Role Permission을 분리합니다.
          </p>
          <p className="integration-note">
            현재 사용자: {user.name} · Google Login 및 Users Sheet 연동 전
            placeholder 구조입니다.
          </p>
        </header>
        <section className="operation-flow">
          <span>Google Forms 입력</span>
          <strong>→</strong>
          <span>목적별 Sheets 저장</span>
          <strong>→</strong>
          <span>Private 조회</span>
          <strong>→</strong>
          <span>Today 판단</span>
          <strong>→</strong>
          <span>보고/결정</span>
        </section>
        {canViewRoom(role, "today", mode) && (
          <TodayRoom mode={mode} role={role} />
        )}
        {canViewRoom(role, "input", mode) && (
          <InputRoom mode={mode} role={role} />
        )}
        <StorageStatusCard mode={mode} role={role} />
        {bisSystem && (
          <RoomCard eyebrow="BIS Command Layer" title={bisSystem.name}>
            <p className="muted">{bisSystem.description}</p>
            <p className="integration-note">
              등록된 BIS 에이전트: {bisAgents.length}개 · Active:{" "}
              {bisAgents.filter((agent) => agent.status === "Active").length}개
            </p>
          </RoomCard>
        )}
        <RoomCard
          eyebrow="Implementation Ready"
          title="Google Sheets API 서버 연동 준비"
        >
          <p className="muted">
            서비스 계정 키와 Spreadsheet ID는 클라이언트에 노출하지 않고 API
            Route에서만 사용합니다. Users, Activity Log, Tasks, Schedules,
            Decisions, Field, Research, Business, AI, Reports는 목적별 Sheet ID
            환경변수로 연결합니다.
          </p>
        </RoomCard>
      </section>
    </main>
  );
}
