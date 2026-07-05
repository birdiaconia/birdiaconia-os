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
  const activeRoom = mode === "public" ? "public-home" : "today";
  const activeAgents = bisAgents.filter((agent) => agent.status === "Active").length;

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
        <div className="mode-pill">{mode} · {role}</div>
        <nav className="nav-list">
          {visibleRooms.map((room) => (
            <a
              className={room.id === activeRoom ? "active" : ""}
              href={`#${room.id}`}
              key={room.id}
              title={room.description}
            >
              {room.label}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content-panel">
        {mode === "public" && (
          <header className="page-header" id="public-home">
            <p className="eyebrow">Workspace v0.2 MVP</p>
            <h1>Birdiaconia Workspace 운영실</h1>
            <p>
              Public Home은 운영실 구조를 안내하고, 실제 판단의 중심은 Today
              Room과 Input Room으로 이동합니다.
            </p>
            <p className="integration-note">
              현재 사용자: {user.name} · 실제 운영 데이터는 Private Mode에서
              Google Sheets 응답을 불러와 표시됩니다.
            </p>
          </header>
        )}

        <section className="operation-flow" aria-label="Workspace 운영 흐름">
          <span>Google Forms 입력</span>
          <strong>→</strong>
          <span>목적별 Google Sheets</span>
          <strong>→</strong>
          <span>Private Workspace 표시</span>
          <strong>→</strong>
          <span>Today Room 판단</span>
          <strong>→</strong>
          <span>AI/보고/결정</span>
        </section>

        {canViewRoom(role, "today", mode) && <TodayRoom mode={mode} role={role} />}
        {canViewRoom(role, "input", mode) && <InputRoom mode={mode} role={role} />}

        {bisSystem && canViewRoom(role, "bis", mode) && (
          <RoomCard id="bis" eyebrow="BIS Command Layer" title={bisSystem.name}>
            <p className="muted">
              명령 레이어는 Workspace 운영실에서 AI 작업을 실행하기 위한
              구조입니다. Storage 하위 설명이 아니라 Today Room과 Input Room의
              운영 흐름을 지원하는 별도 섹션입니다.
            </p>
            <div className="status-list">
              <p><strong>등록된 BIS 에이전트 수:</strong> {bisAgents.length}개</p>
              <p><strong>Active 에이전트 수:</strong> {activeAgents}개</p>
              <p><strong>운영 설명:</strong> {bisSystem.description}</p>
            </div>
          </RoomCard>
        )}

        {canViewRoom(role, "storage", mode) && <StorageStatusCard mode={mode} role={role} />}
      </section>
    </main>
  );
}
