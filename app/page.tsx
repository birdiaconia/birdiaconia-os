import type { ReactNode } from "react";
import { bisAgents, bisSystem } from "../data/bisAgents";

const navigation = ["운영실", "연구", "현장", "사업", "사람", "기록", "AI", "BIS", "설정"];

type DataSource = "GitHub Project" | "AppSheet" | "Google Sheets" | "Google Calendar" | "Field Sheet" | "GitHub Issue" | "Research Sheet";

type OperationalStatus = "대기" | "진행" | "검토" | "확인 필요" | "정상" | "방문 예정" | "입력 대기" | "생성 대기" | "검토 대기" | "초안 가능" | "자료 보강";

type TaskObject = {
  id: string;
  title: string;
  owner: string;
  source: Extract<DataSource, "GitHub Project" | "AppSheet" | "Google Sheets">;
  status: Extract<OperationalStatus, "대기" | "진행" | "검토">;
  due: string;
  nextStep: string;
};

type ScheduleObject = {
  id: string;
  time: string;
  title: string;
  location: string;
  source: Extract<DataSource, "Google Calendar" | "Google Sheets">;
  relatedObject: string;
};

type FieldObject = {
  id: string;
  site: string;
  check: string;
  status: Extract<OperationalStatus, "확인 필요" | "정상" | "방문 예정">;
  source: Extract<DataSource, "AppSheet" | "Field Sheet">;
};

type ResearchObject = {
  id: string;
  topic: string;
  nextAction: string;
  linkedObject: string;
  source: Extract<DataSource, "GitHub Project" | "Research Sheet">;
};

type BusinessObject = {
  id: string;
  name: string;
  nextAction: string;
  deadline: string;
  source: Extract<DataSource, "Google Sheets" | "GitHub Issue">;
};

type AIRequestObject = {
  id: string;
  request: string;
  status: Extract<OperationalStatus, "입력 대기" | "생성 대기" | "검토 대기">;
  output: string;
  inputObject: string;
};

type ReportObject = {
  id: string;
  title: string;
  basis: string;
  target: string;
  readiness: Extract<OperationalStatus, "초안 가능" | "자료 보강" | "검토 대기">;
};

type DecisionObject = {
  id: string;
  question: string;
  impact: string;
  neededBy: string;
  owner: string;
};

type TodayRoomData = {
  meta: {
    version: "v0.2 MVP";
    purpose: string;
    integrationNote: string;
  };
  tasks: TaskObject[];
  schedules: ScheduleObject[];
  fields: FieldObject[];
  research: ResearchObject[];
  business: BusinessObject[];
  aiRequests: AIRequestObject[];
  reports: ReportObject[];
  decisions: DecisionObject[];
};

const navigation = ["Today Room", "할 일", "일정", "현장", "연구/사업", "AI", "보고서", "결정"];

const todayRoomData: TodayRoomData = {
  meta: {
    version: "v0.2 MVP",
    purpose: "Workspace는 홈페이지가 아니라 Birdiaconia / 버디아코니아의 오늘 운영실입니다.",
    integrationNote: "현재는 임시 data object이며 이후 Google Sheets, AppSheet, GitHub Project 연결로 교체합니다.",
  },
  tasks: [
    { id: "task-001", title: "주간 운영 우선순위 3개 확정", owner: "대표", source: "GitHub Project", status: "검토", due: "오늘 오전", nextStep: "결정 카드에 승인 여부 기록" },
    { id: "task-002", title: "현장 방문 전 확인 질문 정리", owner: "운영", source: "AppSheet", status: "진행", due: "오늘 14:00", nextStep: "Field Object로 질문 연결" },
    { id: "task-003", title: "보고서 초안 생성 대상 선택", owner: "AI 운영", source: "Google Sheets", status: "대기", due: "오늘 중", nextStep: "AI Request Object 생성" },
  ],
  schedules: [
    { id: "schedule-001", time: "09:30", title: "아침 운영 점검", location: "Workspace", source: "Google Calendar", relatedObject: "task-001" },
    { id: "schedule-002", time: "15:00", title: "현장 파트너 통화", location: "온라인", source: "Google Sheets", relatedObject: "field-001" },
  ],
  fields: [
    { id: "field-001", site: "공동체 현장 A", check: "방문 전 필요 자료 수신 여부", status: "확인 필요", source: "AppSheet" },
    { id: "field-002", site: "돌봄 공간 B", check: "사진 기록 및 이슈 업데이트", status: "방문 예정", source: "Field Sheet" },
  ],
  research: [
    { id: "research-001", topic: "공동체 정책 아카이빙", nextAction: "사례 2건 요약", linkedObject: "report-002", source: "GitHub Project" },
  ],
  business: [
    { id: "business-001", name: "지역 돌봄 공모 준비", nextAction: "예산 항목 검토", deadline: "이번 주", source: "Google Sheets" },
  ],
  aiRequests: [
    { id: "ai-001", request: "현장 기록을 보고서 초안으로 변환", status: "생성 대기", output: "운영 보고서 초안", inputObject: "field-001" },
    { id: "ai-002", request: "공모사업 요약본 작성", status: "입력 대기", output: "사업 제안 요약", inputObject: "business-001" },
  ],
  reports: [
    { id: "report-001", title: "오늘 현장 점검 보고", basis: "Field + Schedule", target: "내부 공유", readiness: "초안 가능" },
    { id: "report-002", title: "연구/사업 연결 메모", basis: "Research + Business", target: "대표 검토", readiness: "자료 보강" },
  ],
  decisions: [
    { id: "decision-001", question: "이번 주 현장 방문 우선순위는 어디인가?", impact: "일정과 보고서 생성 순서 결정", neededBy: "오늘 오전", owner: "대표" },
  ],
};

const sectionSummaries = [
  { label: "오늘 할 일", value: todayRoomData.tasks.length, note: "승인·검토 우선" },
  { label: "운영 일정", value: todayRoomData.schedules.length, note: "회의·통화·마감" },
  { label: "현장 신호", value: todayRoomData.fields.filter((field) => field.status !== "정상").length, note: "확인 필요 항목" },
  { label: "결정 대기", value: todayRoomData.decisions.length, note: "대표 판단 필요" },
];

function SourceBadge({ children }: { children: ReactNode }) {
  return <span className="source-badge">{children}</span>;
}

function ObjectLink({ children }: { children: ReactNode }) {
  return <span className="object-link">{children}</span>;
}

export default function Home() {
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
        <nav className="nav-list">
          {navigation.map((item) => (
            <a className={item === "Today Room" ? "active" : ""} href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content-panel">
        <header className="page-header" id="Today Room">
          <p className="eyebrow">{todayRoomData.meta.version}</p>
          <h1>Birdiaconia Workspace Today Room</h1>
          <p>{todayRoomData.meta.purpose}</p>
          <p className="integration-note">{todayRoomData.meta.integrationNote}</p>
        </header>

        <section className="operation-flow" aria-label="Today Room 운영 흐름">
          <span>수집</span><strong>→</strong><span>정리</span><strong>→</strong><span>실행</span><strong>→</strong><span>보고</span><strong>→</strong><span>결정</span>
        </section>

        <section className="card-grid today-grid" aria-label="오늘의 운영 흐름 요약">
          {sectionSummaries.map((card) => (
            <article className="summary-card" key={card.label}>
              <span>{card.label}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </article>
          ))}
        </section>

        <section className="today-room-grid" aria-label="Today Room 운영 카드">
          <article className="room-card priority" id="할 일">
            <div className="section-heading"><p className="eyebrow">Task Object</p><h2>오늘 해야 할 일</h2></div>
            {todayRoomData.tasks.map((task) => (
              <div className="flow-row" key={task.id}>
                <strong>{task.title}</strong><p>{task.owner} · {task.status} · {task.due}</p><p className="next-step">다음 행동: {task.nextStep}</p><SourceBadge>{task.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="일정">
            <div className="section-heading"><p className="eyebrow">Schedule Object</p><h2>오늘 일정</h2></div>
            {todayRoomData.schedules.map((schedule) => (
              <div className="flow-row compact" key={schedule.id}>
                <span className="time-chip">{schedule.time}</span><div><strong>{schedule.title}</strong><p>{schedule.location} · <ObjectLink>{schedule.relatedObject}</ObjectLink></p></div><SourceBadge>{schedule.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="현장">
            <div className="section-heading"><p className="eyebrow">Field Object</p><h2>현장 확인</h2></div>
            {todayRoomData.fields.map((field) => (
              <div className="flow-row" key={field.id}>
                <strong>{field.site}</strong><p>{field.check} · {field.status}</p><SourceBadge>{field.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="연구/사업">
            <div className="section-heading"><p className="eyebrow">Research + Business Object</p><h2>연구/사업 메모</h2></div>
            {[...todayRoomData.research, ...todayRoomData.business].map((item) => (
              <div className="flow-row" key={item.id}>
                <strong>{"topic" in item ? item.topic : item.name}</strong><p>{item.nextAction}{"linkedObject" in item ? ` · 연결 ${item.linkedObject}` : ` · 마감 ${item.deadline}`}</p><SourceBadge>{item.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="AI">
            <div className="section-heading"><p className="eyebrow">AI Request Object</p><h2>AI 작업함</h2></div>
            {todayRoomData.aiRequests.map((request) => (
              <div className="flow-row" key={request.id}>
                <strong>{request.request}</strong><p>{request.status} · 입력: <ObjectLink>{request.inputObject}</ObjectLink> · 결과물: {request.output}</p>
              </div>
            ))}
          </article>

          <article className="room-card" id="보고서">
            <div className="section-heading"><p className="eyebrow">Report Object</p><h2>보고서 생성 후보</h2></div>
            {todayRoomData.reports.map((report) => (
              <div className="flow-row" key={report.id}>
                <strong>{report.title}</strong><p>{report.basis} · {report.target} · {report.readiness}</p>
              </div>
            ))}
          </article>

          <article className="room-card decision-card" id="결정">
            <div className="section-heading"><p className="eyebrow">Decision Object</p><h2>미처리 결정사항</h2></div>
            {todayRoomData.decisions.map((decision) => (
              <div className="flow-row" key={decision.id}>
                <strong>{decision.question}</strong><p>{decision.impact} · {decision.neededBy} · {decision.owner}</p>
              </div>
            ))}
          </article>
        </section>

        <section className="section-block bis-section" id="BIS" aria-labelledby="bis-heading">
          <div className="section-heading bis-heading">
            <div>
              <p className="eyebrow">AI command layer</p>
              <h2 id="bis-heading">{bisSystem.name}</h2>
            </div>
            <p>{bisSystem.description}</p>
          </div>

          <div className="bis-operating-language" aria-label="BIS operating language">
            {bisSystem.operatingLanguage.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div className="bis-module-list" aria-label="BIS operational modules">
            {bisAgents.map((agent) => (
              <article className="bis-module" key={agent.name}>
                <div className="bis-module-header">
                  <div>
                    <span className="module-label">Operational module</span>
                    <h3>{agent.name}</h3>
                  </div>
                  <span className={`status-pill ${agent.status.toLowerCase().replace(" ", "-")}`}>
                    {agent.status}
                  </span>
                </div>

                <dl className="module-fields">
                  <div>
                    <dt>Core role</dt>
                    <dd>{agent.role}</dd>
                  </div>
                  <div>
                    <dt>Main inputs</dt>
                    <dd>{agent.inputs.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>Main outputs</dt>
                    <dd>{agent.outputs.join(" · ")}</dd>
                  </div>
                  <div className="command-row">
                    <dt>Example command</dt>
                    <dd>{agent.exampleCommand}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
