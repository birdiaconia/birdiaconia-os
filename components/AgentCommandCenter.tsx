"use client";

import { FormEvent, useState } from "react";

type StepState = "auto" | "approval" | "connector";

type PlanStep = {
  label: string;
  detail: string;
  state: StepState;
};

type AgentPlan = {
  command: string;
  title: string;
  scope: string;
  steps: PlanStep[];
};

const quickCommands = [
  "소록도 1박2일 프로젝트를 기존 기준으로 준비해",
  "이번 달 활동 기록을 모아 보고서 후보를 만들어",
  "미분류 비용을 찾아 정산 전 확인사항을 정리해",
  "사례 기록에서 욕구·강점·가용자원을 분리해 검토안을 만들어",
];

const stateLabel: Record<StepState, string> = {
  auto: "자동",
  approval: "사람 승인",
  connector: "외부 연결",
};

function buildPlan(command: string): AgentPlan {
  const normalized = command.toLowerCase();

  if (/소록도|프로젝트|봉사|여행/.test(normalized)) {
    return {
      command,
      title: "프로젝트 운영 실행계획",
      scope: "기존 프로젝트 기준을 재사용하고, 새 사실만 확인한 뒤 모집·운영·기록·정산까지 한 흐름으로 연결합니다.",
      steps: [
        { label: "기존 기준 조회", detail: "GitHub의 운영 원칙과 이전 프로젝트 구조를 읽어 재사용 가능한 기준을 확인합니다.", state: "auto" },
        { label: "프로젝트 초안", detail: "일정·정원·역할·예상비용·준비물을 하나의 프로젝트 객체로 구성합니다.", state: "auto" },
        { label: "모집/신청 연결", detail: "Site·Toss·Google 입력 채널 중 승인된 도구를 사용해 참여 흐름을 엽니다.", state: "connector" },
        { label: "외부 공개 승인", detail: "모집 공지, 참가비, 개인정보 처리 등 대외 공개 항목을 운영자가 확인합니다.", state: "approval" },
        { label: "운영 후 구조화", detail: "출석·사진·메모를 참여·활동·기여·재정·기록 데이터로 연결합니다.", state: "auto" },
        { label: "정산/보고 승인", detail: "정산표와 결과보고서 초안을 만들고 공식 제출 전 운영자 승인을 요청합니다.", state: "approval" },
      ],
    };
  }

  if (/사례|케이스|욕구|강점|돌봄/.test(normalized)) {
    return {
      command,
      title: "사례·강점 기반 검토계획",
      scope: "결핍만 분류하지 않고 Need + Strength + Resource + Relationship을 함께 읽어 사람이 판단할 검토안을 만듭니다.",
      steps: [
        { label: "기존 기록 결합", detail: "확인된 사실을 다시 입력하지 않고 기존 사례·서비스·접촉 기록을 불러옵니다.", state: "connector" },
        { label: "사정 구조화", detail: "욕구, 강점, 가용자원, 관계, 위험 신호를 분리해 정리합니다.", state: "auto" },
        { label: "가용화 후보", detail: "부족·차이·경험을 활용 가능한 능력과 관계 자원으로 역산합니다.", state: "auto" },
        { label: "전문가 판단", detail: "서비스 계획, 종결, 권리 제한, 민감정보 사용은 사회복지사 판단을 요청합니다.", state: "approval" },
        { label: "기록 반영", detail: "승인된 내용만 후속 계획과 공식 기록에 반영합니다.", state: "auto" },
      ],
    };
  }

  if (/비용|회계|정산|입금|후원|분담금/.test(normalized)) {
    return {
      command,
      title: "재정 분류·정산 계획",
      scope: "거래를 프로젝트와 비용 목적에 연결하고, 모호한 거래만 사람에게 묻습니다.",
      steps: [
        { label: "거래 수집", detail: "승인된 회계/시트 입력에서 미분류 거래를 찾습니다.", state: "connector" },
        { label: "자동 분류", detail: "회비·후원금·보조금·분담금·실비성 참가비 기준으로 분류 후보를 만듭니다.", state: "auto" },
        { label: "프로젝트 연결", detail: "거래를 사람·프로젝트·활동과 연결해 중복 입력을 줄입니다.", state: "auto" },
        { label: "예외 확인", detail: "목적이 모호하거나 지급·환불이 필요한 항목만 운영자에게 확인을 요청합니다.", state: "approval" },
        { label: "정산 출력", detail: "승인 후 월간 실적과 정산·보고용 표를 생성합니다.", state: "auto" },
      ],
    };
  }

  if (/보고서|문서|제안서|출력|월간|실적/.test(normalized)) {
    return {
      command,
      title: "기록→산출물 실행계획",
      scope: "이미 축적된 사실과 활동 기록을 다시 입력하지 않고 목적별 산출물로 변환합니다.",
      steps: [
        { label: "근거 수집", detail: "프로젝트·활동·참여·재정·결정 기록에서 필요한 근거를 수집합니다.", state: "connector" },
        { label: "초안 생성", detail: "월간 실적, 결과보고, 제안서 등 요청 목적에 맞게 구조화합니다.", state: "auto" },
        { label: "누락/충돌 검사", detail: "날짜, 인원, 금액, 승인되지 않은 사실의 불일치를 표시합니다.", state: "auto" },
        { label: "공식 제출 승인", detail: "외부기관 제출 또는 공개 전 최종 확인을 요청합니다.", state: "approval" },
        { label: "산출물 보관", detail: "승인된 문서와 변경 이력을 Drive/GitHub 등 지정 저장소에 남깁니다.", state: "connector" },
      ],
    };
  }

  return {
    command,
    title: "범용 Birdiaconia Agent 계획",
    scope: "명령의 목적을 Core 객체와 연결하고, 자동 실행·외부 도구·사람 승인을 구분한 뒤 필요한 다음 행동을 구성합니다.",
    steps: [
      { label: "목표 해석", detail: "사용자의 명령에서 완료 조건과 관련 객체를 식별합니다.", state: "auto" },
      { label: "Core 조회", detail: "사람·프로젝트·참여·활동·관계·자원·재정·기록 중 필요한 사실을 찾습니다.", state: "connector" },
      { label: "실행계획 구성", detail: "이미 확인된 사실은 재사용하고 새로 필요한 사실만 요청합니다.", state: "auto" },
      { label: "의미 있는 결정 승인", detail: "대외 공개, 돈 지급, 개인정보, 사례 판단 등은 사람에게 승인을 요청합니다.", state: "approval" },
      { label: "실행과 로그", detail: "연결된 도구로 실행하고 결과·오류·변경 이력을 기록합니다.", state: "connector" },
    ],
  };
}

export function AgentCommandCenter() {
  const [command, setCommand] = useState(quickCommands[0]);
  const [plan, setPlan] = useState<AgentPlan>(() => buildPlan(quickCommands[0]));

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const clean = command.trim();
    if (!clean) return;
    setPlan(buildPlan(clean));
  }

  return (
    <section className="agent-command-card" id="agent-command">
      <div className="agent-command-head">
        <div>
          <p className="eyebrow">Birdiaconia Agent · command first</p>
          <h2>말하면, 시스템이 컴퓨터 일을 한다.</h2>
          <p>
            메뉴를 찾아다니는 대신 목표를 입력합니다. Agent는 Core의 기존 사실을
            읽고 자동 실행, 외부 연결, 사람 승인을 구분해 한 흐름으로 계획합니다.
          </p>
        </div>
        <span className="agent-version">Agent Contract v0.1</span>
      </div>

      <form className="agent-command-form" onSubmit={submit}>
        <label htmlFor="birdiaconia-command">운영 명령</label>
        <textarea
          id="birdiaconia-command"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
          rows={3}
          placeholder="예: 11월 소록도 1박2일 활동을 20명 기준으로 기존 규칙에 맞춰 준비해"
        />
        <div className="agent-command-actions">
          <div className="quick-command-list" aria-label="빠른 명령">
            {quickCommands.map((item) => (
              <button
                type="button"
                className="quick-command"
                key={item}
                onClick={() => {
                  setCommand(item);
                  setPlan(buildPlan(item));
                }}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="primary-command" type="submit">실행계획 만들기</button>
        </div>
      </form>

      <div className="agent-plan">
        <div className="agent-plan-title">
          <div>
            <span>현재 계획</span>
            <strong>{plan.title}</strong>
          </div>
          <span className="plan-state">실행 전</span>
        </div>
        <p className="agent-plan-scope">{plan.scope}</p>
        <ol className="agent-step-list">
          {plan.steps.map((step, index) => (
            <li key={step.label}>
              <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
              </div>
              <span className={`step-state ${step.state}`}>{stateLabel[step.state]}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="agent-contract-grid">
        <article>
          <span>AUTO</span>
          <strong>찾고 · 연결하고 · 작성하고 · 검증</strong>
          <p>되돌릴 수 있고 위험이 낮은 내부 작업은 Agent가 진행합니다.</p>
        </article>
        <article>
          <span>CONFIRM</span>
          <strong>의미 있는 결정에서만 사람 승인</strong>
          <p>돈, 개인정보, 사례판단, 대외 공개와 공식 제출은 사람이 책임집니다.</p>
        </article>
        <article>
          <span>LOG</span>
          <strong>모든 실행은 이유와 결과를 남김</strong>
          <p>무엇을 왜 했고 무엇이 실패했는지 GitHub/운영 로그로 추적 가능해야 합니다.</p>
        </article>
      </div>

      <p className="agent-runtime-note">
        현재 공개 버전은 실행계획과 승인선을 먼저 검증하는 단계입니다. Google,
        Toss, 회계, 알림 등 외부 계정 작업은 해당 실행권한이 연결된 뒤 실제 Action으로
        전환됩니다.
      </p>
    </section>
  );
}
