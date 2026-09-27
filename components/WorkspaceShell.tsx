import type { BISAgent, BISSystem } from "../data/bisAgents";
import { getCurrentUser, getCurrentUserRole } from "../lib/workspace-auth";
import { getWorkspaceMode, rooms } from "../lib/workspace-config";
import { canViewRoom } from "../lib/workspace-permissions";
import { InputRoom } from "./InputRoom";
import { PrivacySecurityCard } from "./PrivacySecurityCard";
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
            <p className="eyebrow">Workspace v0.3 · Privacy Baseline</p>
            <h1>Birdiaconia Workspace 운영실</h1>
            <p>
              Public Home은 공개 가능한 구조만 안내합니다. 실제 운영·입력·저장
              및 개인정보 처리는 Private Workspace 경계 안에서 수행합니다.
            </p>
            <p className="integration-note">
              현재 사용자: {user.name} · 공개 모드에서는 개인정보·운영 저장소를
              노출하지 않습니다.
            </p>
          </header>
        )}

        {mode === "private" && (
          <section className="operation-flow" aria-label="Workspace 운영 흐름">
            <span>느슨한 입력</span>
            <strong>→</strong>
            <span>분류·목적·권한 확인</span>
            <strong>→</strong>
            <span>Private Storage</span>
            <strong>→</strong>
            <span>Privacy Gate</span>
            <strong>→</strong>
            <span>AI/판단/출력</span>
          </section>
        )}

        {canViewRoom(role, "today", mode) && <TodayRoom mode={mode} role={role} />}
        {canViewRoom(role, "input", mode) && <InputRoom mode={mode} role={role} />}

        {bisSystem && canViewRoom(role, "bis", mode) && (
          <RoomCard id="bis" eyebrow="BIS Command Layer" title={bisSystem.name}>
            <p className="muted">
              BIS는 원본 개인정보 전체를 직접 소비하는 구조가 아니라, 목적과
              권한을 확인한 뒤 Privacy Gate를 통과한 최소 정보로 작업하는 것을
              기본 원칙으로 합니다.
            </p>
            <div className="status-list">
              <p><strong>등록된 BIS 에이전트 수:</strong> {bisAgents.length}개</p>
              <p><strong>Active 에이전트 수:</strong> {activeAgents}개</p>
              <p><strong>운영 설명:</strong> {bisSystem.description}</p>
            </div>
          </RoomCard>
        )}

        {canViewRoom(role, "privacy-security", mode) && (
          <PrivacySecurityCard mode={mode} role={role} />
        )}

        {canViewRoom(role, "storage", mode) && <StorageStatusCard mode={mode} role={role} />}
      </section>
    </main>
  );
}
