import { bisAgents, bisSystem } from "@/data/bisAgents";

const navigation = ["운영실", "연구", "현장", "사업", "사람", "기록", "AI", "BIS", "설정"];

const todayCards = [
  { title: "오늘 해야 할 일", value: "8", note: "승인 3 · 검토 5", tone: "blue" },
  { title: "오늘 일정", value: "5", note: "회의 2 · 현장 1 · 마감 2", tone: "green" },
  { title: "오늘 알림", value: "12", note: "중요 4 · 대기 8", tone: "amber" },
  { title: "최근 변경", value: "18", note: "문서 9 · 업무 6 · 정책 3", tone: "violet" },
];

const operations = [
  { title: "운영 현황", metric: "정상", detail: "핵심 흐름 안정" },
  { title: "연구", metric: "14건", detail: "정리 중 6건" },
  { title: "현장", metric: "7곳", detail: "방문 예정 2곳" },
  { title: "사업", metric: "11건", detail: "공모 준비 3건" },
  { title: "자동화", metric: "23개", detail: "실행 대기 4개" },
  { title: "진행률", metric: "72%", detail: "이번 주 목표 기준" },
];

const researchObjects = [
  { name: "Research Objects", description: "정책, 사례, 현장 자료를 연결한 연구 객체" },
  { name: "Haus Hall", description: "공동체 운영 모델과 돌봄 환경 기록" },
  { name: "Camphill", description: "생활공동체 철학과 실행 사례" },
  { name: "L'Arche", description: "관계 중심 공동체 모델 분석" },
];

const quickActions = ["보고서 생성", "공모사업 생성", "AppSheet 열기", "Issue 생성"];

export default function Home() {
  return (
    <main className="workspace-shell">
      <aside className="sidebar" aria-label="워크스페이스 탐색">
        <div className="brand">
          <span className="brand-mark">B</span>
          <div>
            <strong>Birdiaconia</strong>
            <span>Workspace</span>
          </div>
        </div>
        <nav className="nav-list">
          {navigation.map((item) => (
            <a className={item === "운영실" ? "active" : ""} href={`#${item}`} key={item}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      <section className="content-panel">
        <header className="page-header" id="운영실">
          <p className="eyebrow">운영실</p>
          <h1>버디아코니아 오늘</h1>
          <p>오늘의 업무, 일정, 알림, 변경 사항을 한 화면에서 확인합니다.</p>
        </header>

        <section className="card-grid today-grid" aria-label="오늘 요약">
          {todayCards.map((card) => (
            <article className={`summary-card ${card.tone}`} key={card.title}>
              <span>{card.title}</span>
              <strong>{card.value}</strong>
              <p>{card.note}</p>
            </article>
          ))}
        </section>

        <section className="section-block" id="연구">
          <div className="section-heading">
            <p className="eyebrow">운영 흐름</p>
            <h2>운영 현황</h2>
          </div>
          <div className="operations-grid">
            {operations.map((item) => (
              <article className="operation-card" key={item.title}>
                <span>{item.title}</span>
                <strong>{item.metric}</strong>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="기록">
          <div className="section-heading">
            <p className="eyebrow">지식 객체</p>
            <h2>Research Objects</h2>
          </div>
          <div className="object-list">
            {researchObjects.map((object) => (
              <article className="object-row" key={object.name}>
                <strong>{object.name}</strong>
                <p>{object.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="AI">
          <div className="section-heading">
            <p className="eyebrow">자동 실행</p>
            <h2>빠른 실행</h2>
          </div>
          <div className="quick-actions">
            {quickActions.map((action) => (
              <button type="button" key={action}>
                {action}
              </button>
            ))}
          </div>
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
