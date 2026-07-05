import { areSensitiveFormsEnabled, storageFolders } from "../lib/workspace-config";
import type { Role, WorkspaceMode } from "../lib/workspace-types";
import { canShowSensitiveForms } from "../lib/workspace-permissions";
import { RoomCard } from "./RoomCard";

export function StorageStatusCard({ mode, role }: { mode: WorkspaceMode; role: Role }) {
  return <RoomCard id="storage" eyebrow="Storage Status" title="하나의 Workspace + 목적별 저장소"><div className="status-list"><p><strong>Workspace 구조:</strong> 하나의 Birdiaconia Workspace 안에서 공개/비공개/역할 권한을 분리합니다.</p><p><strong>현재 모드:</strong> {mode}</p><p><strong>현재 사용자 역할:</strong> {role}</p><p><strong>입력 방식:</strong> Google Forms</p><p><strong>저장 방식:</strong> 목적별 Google Sheets</p><p><strong>원본 위치:</strong> Google Drive / Birdiaconia OS</p><p><strong>개인정보/민감정보 입력:</strong> 모드와 권한에 따라 제한</p><p><strong>민감 Form 상태:</strong> {canShowSensitiveForms(mode, role) ? "활성화" : "비활성화"} (ENABLE_SENSITIVE_FORMS={String(areSensitiveFormsEnabled())})</p><p><strong>Google Sheets API:</strong> API Route에서 서비스 계정과 목적별 Spreadsheet ID를 연결할 준비 상태</p>{mode === "public" && <p className="warning-text">현재 공개 모드입니다. 개인정보·민감 사례 기록 Form은 비활성화되어 있습니다.</p>}</div><div className="storage-grid">{storageFolders.map((folder) => <div key={folder.folder} className="storage-folder"><strong>{folder.folder}</strong>{folder.sheets.map((sheet) => <span key={sheet}>{sheet}</span>)}</div>)}</div></RoomCard>;
}
