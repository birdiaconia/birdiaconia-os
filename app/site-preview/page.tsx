import styles from "./page.module.css";

const stats = [
  ["프로젝트", "0"],
  ["연결된 사람", "0"],
  ["활동 기록", "0"],
  ["협력기관", "0"],
  ["올해 지출", "0원"],
];

const publicActions = [
  ["함께하고 싶어요", "봉사·프로젝트 참여"],
  ["도움이 필요해요", "필요를 남기고 연결 요청"],
  ["프로젝트가 궁금해요", "진행 중인 일을 살펴보기"],
  ["기관·기업으로 협력", "공동사업·연계 제안"],
  ["Birdi에게 물어보기", "사이트와 활동을 대화로 안내"],
];

const operatorModules = [
  ["TODAY", "일정·신청·마감·승인 대기"],
  ["PROJECTS", "사업의 목적·활동·사람·성과"],
  ["PEOPLE", "사람을 한 번만 만들고 관계를 연결"],
  ["RECORDS", "실제로 일어난 사실과 기록의 원장"],
  ["FINANCE", "수입·지출·증빙을 활동과 연결"],
  ["OUTPUT", "보고서·Story·Instagram 초안 생성"],
  ["ORGANIZATION", "정관·회원·회의·비영리 준비"],
  ["GUIDE", "역할별 실제 화면 기반 사용안내"],
];

const guideRoles = ["처음 방문자", "참여자", "봉사자", "협력기관", "운영자"];

export default function SitePreviewPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brandBlock}>
          <div className={styles.logo}>B</div>
          <div>
            <strong>Birdiaconia</strong>
            <span>버디아코니아 공식 홈페이지 · Foundation v1</span>
          </div>
        </div>
        <nav className={styles.topNav} aria-label="주요 메뉴">
          <a href="#public">홈</a>
          <a href="#operations">운영</a>
          <a href="#organization">단체 준비</a>
          <a href="#guide">이용안내</a>
        </nav>
      </header>

      <section className={styles.hero} id="public">
        <p className={styles.eyebrow}>ONE SITE · ONE SOURCE · MULTI USE</p>
        <h1>당신은 무엇을 해보고 싶나요?</h1>
        <p className={styles.lead}>
          버디아코니아의 공식 홈페이지이자 운영 본체입니다. 한 번 입력한 사실은 다시
          입력하지 않고, 기록·데이터·출력·공유에 연결합니다.
        </p>
        <div className={styles.actionsGrid}>
          {publicActions.map(([title, desc]) => (
            <button className={styles.actionCard} key={title} type="button">
              <strong>{title}</strong>
              <span>{desc}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>EMPTY BUT PRODUCTION-READY</p>
            <h2>데이터는 0, 구조는 완성 상태</h2>
          </div>
          <button className={styles.primaryButton} type="button">+ 첫 기록</button>
        </div>
        <div className={styles.statsGrid}>
          {stats.map(([label, value]) => (
            <article className={styles.statCard} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
        <div className={styles.ruleBox}>
          <strong>운영 규칙</strong>
          <p>실제 사실은 하나의 canonical source만 가집니다. 계산 가능한 값은 다시 입력하지 않습니다. 외부 신청은 검증 후 공식 데이터가 됩니다.</p>
        </div>
      </section>

      <section className={styles.section} id="operations">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.eyebrow}>OPERATIONS</p>
            <h2>운영실</h2>
          </div>
          <button className={styles.secondaryButton} type="button">Birdi에게 말하기</button>
        </div>
        <div className={styles.todayGrid}>
          <article className={styles.todayCard}>
            <span>오늘 일정</span><strong>0</strong><small>Calendar 연동 예정</small>
          </article>
          <article className={styles.todayCard}>
            <span>확인할 신청</span><strong>0</strong><small>Submission → 검증</small>
          </article>
          <article className={styles.todayCard}>
            <span>승인 대기 Output</span><strong>0</strong><small>Instagram·Story·문서</small>
          </article>
        </div>
        <div className={styles.moduleGrid}>
          {operatorModules.map(([title, desc]) => (
            <article className={styles.moduleCard} key={title}>
              <strong>{title}</strong>
              <p>{desc}</p>
              <button type="button">열기 →</button>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="organization">
        <p className={styles.eyebrow}>ORGANIZATION READINESS</p>
        <h2>비영리민간단체가 되는 과정부터 준비</h2>
        <div className={styles.readinessGrid}>
          {[
            ["단체 기본정보", "준비"],
            ["정관", "초안 준비"],
            ["회원·운영진", "구조 준비"],
            ["총회·회의", "구조 준비"],
            ["사업·활동실적", "0에서 축적"],
            ["재정·증빙", "0에서 축적"],
          ].map(([item, state]) => (
            <article className={styles.readinessCard} key={item}>
              <span>{item}</span><strong>{state}</strong>
            </article>
          ))}
        </div>
        <p className={styles.note}>정관은 파일 1개가 아니라 조항·버전·의결·시행 이력을 가진 관리 대상입니다. 향후 등록 시 현재 데이터에서 제출용 산출물을 생성합니다.</p>
      </section>

      <section className={styles.section}>
        <p className={styles.eyebrow}>CONNECT</p>
        <h2>같은 데이터를 여러 접점에서 사용</h2>
        <div className={styles.connectFlow}>
          <div><strong>Birdiaconia Site</strong><span>본체 · 공식 홈페이지</span></div>
          <b>↔</b>
          <div><strong>AppInToss</strong><span>보편적 참여·실행 수단</span></div>
          <b>↔</b>
          <div><strong>Instagram</strong><span>승인된 Output 배포</span></div>
          <b>↔</b>
          <div><strong>Google / GitHub</strong><span>저장·일정·시스템 기록</span></div>
        </div>
        <div className={styles.ruleBox}>
          <strong>연동 원칙</strong>
          <p>AppInToss와 Site는 같은 canonical data를 사용하고, Instagram은 활동 기록에서 생성된 승인된 Output만 게시 대상으로 사용합니다.</p>
        </div>
      </section>

      <section className={styles.guide} id="guide">
        <p className={styles.eyebrow}>COMPLETE USER GUIDE</p>
        <h2>실제 화면으로 보는 버디아코니아 이용 안내</h2>
        <p>별도 PDF 매뉴얼이 아니라 사이트 안에서 역할별로 실제 화면과 다음 행동을 안내합니다.</p>
        <div className={styles.roleTabs}>
          {guideRoles.map((role, index) => (
            <button className={index === 0 ? styles.activeTab : ""} key={role} type="button">{role}</button>
          ))}
        </div>
        <article className={styles.guideStep}>
          <div className={styles.stepNo}>01</div>
          <div>
            <span>처음 방문자</span>
            <h3>하고 싶은 일을 먼저 선택합니다</h3>
            <p>홈에서 참여, 도움 요청, 프로젝트 탐색, 기관 협력, Birdi 안내 중 하나를 선택합니다. 사용자가 내부 메뉴 구조를 먼저 배울 필요는 없습니다.</p>
          </div>
        </article>
      </section>

      <footer className={styles.footer}>
        <strong>Birdiaconia Foundation v1</strong>
        <span>Site 본체 · AppInToss 호환 · Instagram Output 연동 · 비영리 전환 준비</span>
      </footer>
    </main>
  );
}
