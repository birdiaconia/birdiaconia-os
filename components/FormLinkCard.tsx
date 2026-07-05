import type { FormType, Role, WorkspaceMode } from "../lib/workspace-types";
import { canOpenForm } from "../lib/workspace-permissions";

export function FormLinkCard({ formType, title, description, url, role, mode }: { formType: FormType; title: string; description: string; url: string; role: Role; mode: WorkspaceMode }) {
  const allowed = canOpenForm(role, formType, mode);
  const enabled = allowed && Boolean(url);
  return <div className={`form-card ${enabled ? "" : "disabled"}`}><div><strong>{title}</strong><p>{description}</p></div>{enabled ? <a href={url} target="_blank" rel="noreferrer">Google Form 열기</a> : <button disabled>{mode === "public" ? "공개 모드 비활성화" : allowed ? "URL 준비 필요" : "권한 없음"}</button>}</div>;
}
