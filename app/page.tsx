const missionCards = [
  {
    title: "오늘의 사역 흐름",
    label: "운영",
    value: "7개 진행 중",
    description: "예배, 돌봄, 공동체 일정이 mock 데이터로 정리되어 있습니다.",
  },
  {
    title: "공동체 돌봄",
    label: "케어",
    value: "12명 확인 필요",
    description: "실제 AppSheet 또는 Google Sheets 연동 없이 샘플 상태만 표시합니다.",
  },
  {
    title: "정책 아카이브",
    label: "문서",
    value: "4건 검토 대기",
    description: "Birdiaconia OS 문서화 흐름을 Workspace에서 탐색하는 화면입니다.",
  },
];

const schedule = [
  { time: "09:00", title: "아침 운영 브리핑", owner: "운영팀" },
  { time: "11:30", title: "돌봄 대상자 상태 점검", owner: "케어팀" },
  { time: "14:00", title: "공동체 모델 카드 정리", owner: "아카이브팀" },
  { time: "17:00", title: "저녁 사역 회고", owner: "리더십" },
];

const mockRequests = [
  "새 가족 환영 메시지 준비",
  "주간 기도 제목 취합",
  "공간 사용 요청 검토",
];

export default function Home() {
  return (
    <main className="workspace-shell">
      <section className="hero-panel">
        <nav className="top-nav" aria-label="Workspace navigation">
          <div>
            <p className="eyebrow">Birdiaconia / 버디아코니아</p>
            <h1>Workspace v0.1 UI Prototype</h1>
          </div>
          <span className="status-pill">Mock 데이터 전용</span>
        </nav>

        <div className="hero-copy">
          <p className="kicker">사역 운영실</p>
          <h2>하루의 사역 흐름을 한 화면에서 살피는 버디아코니아 Workspace</h2>
          <p>
            GitHub API, AppSheet, Google Sheets 연동 없이 한국어 UI와 샘플 데이터만으로
            핵심 정보 구조를 검증하는 Next.js 프로토타입입니다.
          </p>
        </div>
      </section>

      <section className="dashboard-grid" aria-label="Workspace dashboard">
        {missionCards.map((card) => (
          <article className="mission-card" key={card.title}>
            <div className="card-header">
              <span>{card.label}</span>
              <strong>{card.value}</strong>
            </div>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel schedule-panel">
          <div className="panel-heading">
            <p className="eyebrow">오늘의 일정</p>
            <h2>운영 타임라인</h2>
          </div>
          <div className="timeline">
            {schedule.map((item) => (
              <div className="timeline-item" key={`${item.time}-${item.title}`}>
                <time>{item.time}</time>
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="panel request-panel">
          <div className="panel-heading">
            <p className="eyebrow">요청함</p>
            <h2>Mock 요청</h2>
          </div>
          <ul>
            {mockRequests.map((request) => (
              <li key={request}>{request}</li>
            ))}
          </ul>
          <button type="button">연동 전 샘플 보기</button>
        </aside>
      </section>
    </main>
  );
}
