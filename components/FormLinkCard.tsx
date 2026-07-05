import type { FormType, Role, WorkspaceMode } from "../lib/workspace-types";
import { canOpenForm, getFormStatus, sensitiveFormTypes } from "../lib/workspace-permissions";

export function FormLinkCard({ formType, title, description, url, role, mode }: { formType: FormType; title: string; description: string; url: string; role: Role; mode: WorkspaceMode }) {
  const status = getFormStatus(role, formType, mode, url);
  const isSensitive = sensitiveFormTypes.includes(formType);
  const enabled = canOpenForm(role, formType, mode) && Boolean(url);
  const disabledLabel = status === "비공개 전용" ? "Public Mode 차단" : status === "연결 대기" ? "URL 준비 필요" : "권한 필요";

  return <div className={`form-card ${enabled ? "" : "disabled"} ${isSensitive ? "sensitive" : ""}`}><div><div className="form-card-header"><strong>{title}</strong><span className={`status-badge ${enabled ? "ready" : "blocked"}`}>{status}</span></div><p>{description}</p>{isSensitive && <p className="warning-text">민감정보는 Private Mode와 권한 확인 후에만 접근할 수 있습니다.</p>}</div>{enabled ? <a href={url} target="_blank" rel="noreferrer">Google Form 열기</a> : <button disabled>{disabledLabel}</button>}</div>;
}
