import type { BISAgent, BISSystem } from "../data/bisAgents";
import { getCurrentUser, getCurrentUserRole } from "../lib/workspace-auth";
import { getWorkspaceMode, rooms } from "../lib/workspace-config";
import { canViewRoom } from "../lib/workspace-permissions";
import { AgentCommandCenter } from "./AgentCommandCenter";
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
  const activeCapabilities = bisAgents.filter((agent) => agent.status === "Active").length;

  return (
    <main className="workspace-shell">
      <aside className="sidebar" aria-label="Birdiaconia Workspace 탐색">
        <div className="brand">
          <span className="brand-mark">B</span>
          <div>
            <strong>Birdiaconia</strong>
            <span>AI-operated OS</span>
          </div>
        </div>
        <div className="mode-pill">{mode} · {role}</div>
        <nav className="nav-list">
          <a className="active" href="#agent-command">Agent Command</a>
          {visibleRooms.map((room) => (
            <a href={`#${room.id}`} key={room.id} title={room.description}>
              {room.label}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content-panel">
        <header className="page-header" id="public-home">
          <p className="eyebrow">Birdiaconia OS · Agent-first</p>
          <h1>홈페이지가 아니라, 일을 수행하는 운영체제.</h1>
          <p>
            사용자가 메뉴를 찾아 반복 입력하는 대신 목표를 말하면 Agent가 기존
            사실을 읽고, 필요한 도구와 승인선을 구성해 실제 운영 흐름으로
            연결하는 구조를 지향합니다.
          </p>
          <p className="integration-note">
            현재 사용자: {user.name} · 확인된 사실은 재입력하지 않고 Core에서 재사용
          </p>
        </header>

        <section className="operation-flow" aria-label="Agent 운영 흐름">
          <span>목표 입력</span>
          <strong>→</strong>
          <span>Core 사실 조회</span>
          <strong>→</strong>
          <span>Agent 실행계획</span>
          <strong>→</strong>
          <span>도구/API 실행</span>
          <strong>→</strong>
          <span>의미 있는 결정 승인</span>
          <strong>→</strong>
          <span>로그·성과·정산 기록</span>
        </section>

        <AgentCommandCenter />

        {canViewRoom(role, "today", mode) && <TodayRoom mode={mode} role={role} />}
        {canViewRoom(role, "input", mode) && <InputRoom mode={mode} role={role} />}

        {bisSystem && canViewRoom(role, "bis", mode) && (
          <RoomCard id="bis" eyebrow="BIS Internal Capabilities" title="하나의 Agent, 여러 내부 기능">
            <p className="muted">
              Research, Policy, Funding, Case, Data 같은 기능은 사용자가 각각 골라 쓰는
              챗봇이 아니라 Birdiaconia Agent가 필요할 때 호출하는 내부 역량입니다.
            </p>
            <div className="status-list">
              <p><strong>등록된 내부 기능:</strong> {bisAgents.length}개</p>
              <p><strong>즉시 활용 가능:</strong> {activeCapabilities}개</p>
              <p><strong>운영 원칙:</strong> Human in every step이 아니라 Human at meaningful decisions</p>
              <p><strong>현재 설명:</strong> {bisSystem.description}</p>
            </div>
          </RoomCard>
        )}

        {canViewRoom(role, "storage", mode) && <StorageStatusCard mode={mode} role={role} />}
      </section>
    </main>
  );
}
