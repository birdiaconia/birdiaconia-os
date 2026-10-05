"use client";

import { useState } from "react";

type ProbeResult = {
  runtimeVersion?: string;
  coreMutations?: Array<{ entityType: string; entityId: string; operation: string }>;
  actions?: Array<{ kind: string; status: string; requiresHumanApproval: boolean; summary: string }>;
  auditLog?: Array<{ stage: string; message: string }>;
  persistence?: { note?: string };
  error?: string;
  message?: string;
};

export function RuntimeProbe() {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [result, setResult] = useState<ProbeResult | null>(null);

  async function runProbe() {
    setState("loading");
    setResult(null);

    try {
      const response = await fetch("/api/events", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          type: "PROJECT_APPLICATION_SUBMITTED",
          source: "operator",
          payload: {
            projectId: "sorokdo-runtime-test",
            applicantId: "test-person-001",
          },
        }),
      });
      const data = (await response.json()) as ProbeResult;
      setResult(data);
      setState(response.ok ? "done" : "error");
    } catch (error) {
      setResult({ message: error instanceof Error ? error.message : "runtime probe failed" });
      setState("error");
    }
  }

  return (
    <section className="room-card runtime-probe" id="runtime">
      <div className="section-heading">
        <p className="eyebrow">Event Runtime</p>
        <h2>서버 실행엔진 확인</h2>
      </div>
      <p className="muted">
        프론트에서 계획을 흉내 내는 것이 아니라 Vercel 서버의 <code>/api/events</code>에
        실제 이벤트를 보내 Core 변경안, Action, 승인선과 Audit Log가 생성되는지 확인합니다.
      </p>
      <div className="runtime-probe-actions">
        <button type="button" onClick={runProbe} disabled={state === "loading"}>
          {state === "loading" ? "처리 중…" : "PROJECT_APPLICATION_SUBMITTED 테스트"}
        </button>
        <a href="/api/runtime" target="_blank" rel="noreferrer">Runtime 상태 JSON</a>
      </div>

      {result && (
        <div className="runtime-result">
          <p><strong>상태:</strong> {state === "done" ? `Runtime ${result.runtimeVersion ?? ""} 응답 성공` : result.error ?? "오류"}</p>
          {result.coreMutations && <p><strong>Core 변경:</strong> {result.coreMutations.map((item) => `${item.entityType}:${item.operation}`).join(", ")}</p>}
          {result.actions && (
            <div>
              <strong>Action:</strong>
              <ul>
                {result.actions.map((action) => (
                  <li key={action.kind}>
                    <b>{action.kind}</b> · {action.status}{action.requiresHumanApproval ? " · 사람 승인" : ""}<br />
                    <span>{action.summary}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {result.auditLog && <p><strong>Audit:</strong> {result.auditLog.map((item) => item.stage).join(" → ")}</p>}
          {result.persistence?.note && <p className="muted"><strong>저장소:</strong> {result.persistence.note}</p>}
          {result.message && <p>{result.message}</p>}
        </div>
      )}
    </section>
  );
}
