import type { ReactNode } from "react";

type TaskObject = {
  id: string;
  title: string;
  owner: string;
  source: "GitHub Project" | "AppSheet" | "Google Sheets";
  status: "대기" | "진행" | "검토";
  due: string;
};

type ScheduleObject = {
  id: string;
  time: string;
  title: string;
  location: string;
  source: "Google Calendar" | "Google Sheets";
};

type FieldObject = {
  id: string;
  site: string;
  check: string;
  status: "확인 필요" | "정상" | "방문 예정";
  source: "AppSheet" | "Field Sheet";
};

type ResearchObject = {
  id: string;
  topic: string;
  nextAction: string;
  linkedObject: string;
  source: "GitHub" | "Research Sheet";
};

type BusinessObject = {
  id: string;
  name: string;
  nextAction: string;
  deadline: string;
  source: "Google Sheets" | "GitHub Issue";
};

type AIRequestObject = {
  id: string;
  request: string;
  status: "입력 대기" | "생성 대기" | "검토 대기";
  output: string;
};

type ReportObject = {
  id: string;
  title: string;
  basis: string;
  target: string;
  readiness: "초안 가능" | "자료 보강" | "검토 필요";
};

type DecisionObject = {
  id: string;
  question: string;
  impact: string;
  neededBy: string;
  owner: string;
};

type TodayRoomData = {
  tasks: TaskObject[];
  schedules: ScheduleObject[];
  fields: FieldObject[];
  research: ResearchObject[];
  business: BusinessObject[];
  aiRequests: AIRequestObject[];
  reports: ReportObject[];
  decisions: DecisionObject[];
};

const navigation = ["오늘의 운영실", "할 일", "일정", "현장", "연구/사업", "AI", "보고서", "결정"];

const todayRoomData: TodayRoomData = {
  tasks: [
    { id: "task-001", title: "주간 운영 우선순위 3개 확정", owner: "대표", source: "GitHub Project", status: "검토", due: "오늘 오전" },
    { id: "task-002", title: "현장 방문 전 확인 질문 정리", owner: "운영", source: "AppSheet", status: "진행", due: "오늘 14:00" },
  ],
  schedules: [
    { id: "schedule-001", time: "09:30", title: "아침 운영 점검", location: "Workspace", source: "Google Calendar" },
    { id: "schedule-002", time: "15:00", title: "현장 파트너 통화", location: "온라인", source: "Google Sheets" },
  ],
  fields: [
    { id: "field-001", site: "공동체 현장 A", check: "방문 전 필요 자료 수신 여부", status: "확인 필요", source: "AppSheet" },
    { id: "field-002", site: "돌봄 공간 B", check: "사진 기록 및 이슈 업데이트", status: "방문 예정", source: "Field Sheet" },
  ],
  research: [
    { id: "research-001", topic: "공동체 정책 아카이빙", nextAction: "사례 2건 요약", linkedObject: "Research Object", source: "GitHub" },
  ],
  business: [
    { id: "business-001", name: "지역 돌봄 공모 준비", nextAction: "예산 항목 검토", deadline: "이번 주", source: "Google Sheets" },
  ],
  aiRequests: [
    { id: "ai-001", request: "현장 기록을 보고서 초안으로 변환", status: "생성 대기", output: "운영 보고서 초안" },
    { id: "ai-002", request: "공모사업 요약본 작성", status: "입력 대기", output: "사업 제안 요약" },
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
  { label: "할 일", value: todayRoomData.tasks.length, note: "승인·검토 우선" },
  { label: "일정", value: todayRoomData.schedules.length, note: "회의·통화·마감" },
  { label: "현장", value: todayRoomData.fields.length, note: "확인 필요 항목" },
  { label: "결정", value: todayRoomData.decisions.length, note: "대표 판단 대기" },
];

function SourceBadge({ children }: { children: ReactNode }) {
  return <span className="source-badge">{children}</span>;
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
            <a className={item === "오늘의 운영실" ? "active" : ""} href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content-panel">
        <header className="page-header" id="오늘의 운영실">
          <p className="eyebrow">오늘의 운영실</p>
          <h1>Birdiaconia Workspace</h1>
          <p>오늘 해야 할 일, 일정, 현장, 연구, 사업, AI, 보고서를 한 화면에서 확인합니다.</p>
        </header>

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
                <strong>{task.title}</strong><p>{task.owner} · {task.status} · {task.due}</p><SourceBadge>{task.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="일정">
            <div className="section-heading"><p className="eyebrow">Schedule Object</p><h2>오늘 일정</h2></div>
            {todayRoomData.schedules.map((schedule) => (
              <div className="flow-row compact" key={schedule.id}>
                <span className="time-chip">{schedule.time}</span><div><strong>{schedule.title}</strong><p>{schedule.location}</p></div><SourceBadge>{schedule.source}</SourceBadge>
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
                <strong>{"topic" in item ? item.topic : item.name}</strong><p>{item.nextAction}{"linkedObject" in item ? ` · ${item.linkedObject}` : ` · 마감 ${item.deadline}`}</p><SourceBadge>{item.source}</SourceBadge>
              </div>
            ))}
          </article>

          <article className="room-card" id="AI">
            <div className="section-heading"><p className="eyebrow">AI Request Object</p><h2>AI 작업함</h2></div>
            {todayRoomData.aiRequests.map((request) => (
              <div className="flow-row" key={request.id}>
                <strong>{request.request}</strong><p>{request.status} · 결과물: {request.output}</p>
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
      </section>
    </main>
  );
}
