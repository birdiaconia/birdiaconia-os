# Birdiaconia Mission Control v0.1

## 문서 목적

이 문서는 GitHub Project를 버디아코니아 OS의 **Mission Control 0.1**로 운영하기 위한 기준을 정의한다.

Mission Control의 목적은 “무엇을 만들었는지”를 나열하는 것이 아니라, 버디아코니아 OS가 **지금 어디까지 왔고, 다음에 무엇을 해야 하는지**를 운영자가 한눈에 볼 수 있게 하는 것이다.

따라서 이 문서는 GitHub Project 설정을 직접 변경하지 않는다. 우선 현재 보드를 버디아코니아 운영실로 사용하기 위한 표준, 컬럼, 카드 필드, 이동 규칙, Issue·PR·Merge 흐름을 문서로 정의한다.

---

## 1. Mission Control의 목적

Mission Control은 버디아코니아 OS의 **첫 사용자 화면**이다.

버디아코니아 OS에서 GitHub Project는 단순한 개발자용 칸반 보드가 아니라, 사람, ChatGPT PM, Codex, GitHub Issue, Pull Request, Merge 흐름이 한 화면에서 연결되는 **운영 현황판**이다.

Mission Control 0.1은 GitHub Project를 사용하여 다음 항목을 한눈에 보기 위한 화면이다.

- 현재 진행 중인 Issue
- 검토 중인 Pull Request
- Codex가 수행 중이거나 완료한 작업
- Merge가 완료되어 공식 반영된 항목
- 다음에 실행해야 할 작업
- 보류되었거나 현재 실행 대상이 아닌 항목

Mission Control은 개발자가 작업 현황을 관리하기 위한 보드가 아니다. 운영자가 버디아코니아 OS 전체의 흐름을 파악하고, 다음 결정을 내리기 위한 **운영자용 보드**다.

---

## 2. 기본 보드 컬럼

GitHub Project의 기본 컬럼은 버디아코니아 운영 흐름에 맞게 다음과 같이 재정의한다.

| 컬럼 | 의미 | 들어가는 항목 |
|---|---|---|
| Inbox | 아직 정리되지 않은 아이디어, 대화, 요청 | Issue 후보, 메모 |
| Todo | 실행하기로 결정했지만 아직 시작하지 않은 일 | 확정 Issue |
| Doing | Codex 또는 사람이 작업 중인 일 | 진행 중 Issue, 작업 브랜치 |
| Review | Pull Request가 생성되어 검토 중인 일 | PR |
| Done | Merge가 완료된 일 | 완료 PR, 반영된 문서 |
| Archive | 완료 후 보관하거나 현재 실행 대상이 아닌 일 | 종료 작업, 보류 자료 |

### 컬럼별 이동 기준

#### Inbox

Inbox에는 아직 실행 단위로 정리되지 않은 입력을 둔다.

- 대화에서 나온 아이디어
- ChatGPT PM이 정리한 제안
- 운영자가 메모한 요청
- 아직 Issue로 만들지 않은 업무 후보

**이동 기준:** 실행할 가치가 있고 업무 단위로 정리되면 Todo로 이동한다. 실행하지 않기로 결정했거나 당장 다루지 않을 항목은 Archive로 보낸다.

#### Todo

Todo에는 실행하기로 결정했지만 아직 시작하지 않은 일을 둔다.

- 제목과 목적이 명확한 Issue
- Owner를 지정할 수 있는 작업
- 우선순위가 부여된 작업
- 다음 행동이 정의된 작업

**이동 기준:** 사람이 작업을 시작하거나 Codex에게 작업을 맡기면 Doing으로 이동한다.

#### Doing

Doing에는 현재 작업 중인 일을 둔다.

- 사람이 직접 작성 중인 Issue
- Codex가 수행 중인 작업
- 작업 브랜치가 생성된 항목
- 아직 PR로 제출되지 않은 변경 사항

**이동 기준:** PR이 생성되면 Review로 이동한다. 작업이 중단되거나 실패하면 Health를 Blocked로 바꾸고 Doing 또는 Inbox에서 재정리한다.

#### Review

Review에는 PR이 생성되어 검토 중인 일을 둔다.

- 사람이 검토해야 하는 PR
- Codex가 만든 PR
- 문서·정책·OS 구조 반영 전 최종 확인 대상

**이동 기준:** PR이 Merge되면 Done으로 이동한다. 수정이 필요하면 Review에 유지하거나 Doing으로 되돌린다.

#### Done

Done에는 Merge가 완료되어 저장소에 공식 반영된 일을 둔다.

- Merge 완료 PR
- 반영된 문서
- 확정된 운영 기준
- 완료된 구조 정의

**이동 기준:** 더 이상 매일 확인할 필요가 없으면 Archive로 이동한다. Merge 이후 실제 실행이 필요하면 Done에 둔 상태에서 별도의 Pilot 또는 Project Issue를 만든다.

#### Archive

Archive에는 완료 후 보관하거나 현재 실행 대상이 아닌 일을 둔다.

- 종료된 작업
- 보류된 자료
- 더 이상 실행하지 않는 제안
- 나중에 참고할 수 있는 기록

**이동 기준:** 다시 실행 대상이 되면 Inbox 또는 Todo로 되돌린다.

---

## 3. 버디아코니아 권장 컬럼 이름

GitHub 기본 이름은 버디아코니아 운영 언어에 맞게 다음처럼 바꾸어 사용할 수 있다.

| GitHub 기본 | 버디아코니아 이름 |
|---|---|
| Backlog | Inbox |
| Ready | Todo |
| In progress | Doing |
| In review | Review |
| Done | Done |

### 이모지 버전

운영자가 화면에서 상태를 더 빠르게 구분할 수 있도록 다음 이모지 버전을 사용할 수 있다.

| 기본 이름 | 이모지 버전 | 의미 |
|---|---|---|
| Inbox | 📥 Inbox | 정리되지 않은 입력 |
| Todo | 📝 Todo | 실행하기로 결정한 일 |
| Doing | 🔧 Doing | 작업 중인 일 |
| Review | 👀 Review | 검토 중인 PR |
| Done | ✅ Done | Merge 완료 |
| Archive | 🗄️ Archive | 보관 또는 보류 |

---

## 4. 카드 필드

각 카드는 단순한 메모가 아니라 운영자가 판단할 수 있는 실행 단위여야 한다. 따라서 다음 필드를 가진다.

| 필드 | 의미 | 예시 값 |
|---|---|---|
| Object Type | 카드가 속한 버디아코니아 OS 객체 유형 | OS, Research, Policy |
| Priority | 실행 우선순위 | P1, P2, P3, Later |
| Owner | 현재 책임자 또는 검토자 | 사람 운영자, ChatGPT PM, Codex |
| Status | 현재 보드 상태 | Inbox, Todo, Doing, Review, Done, Archive |
| Health | 작업의 안정성 또는 위험 상태 | Stable, Developing, Needs Review, Blocked, Archived |
| Related PR | 연결된 Pull Request | `#12`, PR URL |
| Related Issue | 연결된 Issue | `#8`, Issue URL |
| Related Object | 연결된 OS 객체 또는 문서 | Object Model v1, Research Object |
| Next Action | 다음에 해야 할 구체적 행동 | PR 검토, Issue 생성, 문서 보완 |
| Review Date | 다시 확인할 날짜 | 2026-07-05 |
| Decision Gate | 다음 단계로 넘어가기 위한 결정 기준 | Merge 승인, 운영자 확인, Pilot 전환 |

### Object Type 예시

Object Type은 카드가 버디아코니아 OS 안에서 어떤 종류의 객체인지를 보여준다.

- OS
- Research
- Policy
- Law
- Funding
- Pilot
- Project
- Data
- Output
- Knowledge
- Workspace
- Automation

### Priority 예시

Priority는 운영자가 무엇을 먼저 봐야 하는지 결정하기 위한 값이다.

- P1: 지금 가장 중요한 핵심 작업
- P2: 다음 단계에서 필요한 중요 작업
- P3: 진행하면 좋지만 즉시 필요하지 않은 작업
- Later: 나중에 검토할 작업

### Health 예시

Health는 카드의 현재 상태가 안정적인지, 검토가 필요한지, 막혀 있는지를 표시한다.

- Stable: 안정적이며 큰 문제가 없음
- Developing: 작성 또는 설계가 진행 중임
- Needs Review: 사람의 검토가 필요함
- Blocked: 진행이 막힘
- Archived: 보관 상태임

---

## 5. 카드 이동 규칙

Mission Control의 기본 흐름은 다음과 같다.

```text
Conversation
↓
Inbox
↓
Todo
↓
Doing
↓
Review
↓
Done
↓
Archive
```

### Conversation → Inbox

대화는 입력이다. 대화에서 나온 아이디어, 요청, 운영 판단은 바로 실행으로 간주하지 않는다.

- 사람이 해야 할 일
  - 중요한 대화를 선별한다.
  - 실행 가능성이 있는 항목을 카드 후보로 정리한다.
  - 카드로 만들 가치가 있는지 판단한다.
- AI가 할 수 있는 일
  - 대화를 요약한다.
  - 작업 후보를 뽑는다.
  - 카드 제목과 설명 초안을 만든다.

### Inbox → Todo

Inbox의 입력이 실행 가능한 업무 단위로 정리되면 Todo로 이동한다.

- 사람이 해야 할 일
  - 실행 여부를 결정한다.
  - 우선순위를 부여한다.
  - Owner와 Decision Gate를 정한다.
- AI가 할 수 있는 일
  - Issue 초안을 작성한다.
  - Object Type을 제안한다.
  - Next Action을 정리한다.

### Todo → Doing

실행이 시작되면 Doing으로 이동한다.

- 사람이 해야 할 일
  - 직접 작업을 시작하거나 Codex에게 작업을 맡긴다.
  - 작업 범위를 확인한다.
  - 필요한 경우 브랜치 전략을 정한다.
- AI가 할 수 있는 일
  - 문서 초안을 작성한다.
  - 코드 또는 파일 변경을 수행한다.
  - PR 설명 초안을 준비한다.

### Doing → Review

작업 결과가 PR로 제출되면 Review로 이동한다.

- 사람이 해야 할 일
  - PR을 검토한다.
  - 내용, 방향, 운영 기준 적합성을 확인한다.
  - 수정 요청 또는 Merge 여부를 결정한다.
- AI가 할 수 있는 일
  - 변경 요약을 작성한다.
  - 테스트 또는 문서 검토 결과를 보고한다.
  - 수정 요청에 따라 다시 작업한다.

### Review → Done

PR이 Merge되면 Done으로 이동한다.

- 사람이 해야 할 일
  - Merge 여부를 최종 결정한다.
  - Merge 후 실제 실행이 필요한지 판단한다.
  - 필요하면 후속 Pilot 또는 Project Issue를 만든다.
- AI가 할 수 있는 일
  - Merge 후 후속 작업 후보를 정리한다.
  - 관련 문서와 카드 연결을 제안한다.
  - 운영 로그를 요약한다.

### Done → Archive

Done 항목이 더 이상 운영자가 매일 확인할 필요가 없으면 Archive로 이동한다.

- 사람이 해야 할 일
  - 보관 여부를 결정한다.
  - 반복적으로 참조할 항목인지 판단한다.
- AI가 할 수 있는 일
  - 완료 항목을 요약한다.
  - 관련 지식 객체로 정리할 내용을 제안한다.

---

## 6. PR과 Issue 연결 규칙

Mission Control에서 Issue, PR, Merge는 서로 다른 의미를 가진다.

- Issue는 실행 가능한 업무 단위다.
- PR은 검토 요청이다.
- Merge는 공식 반영이다.

운영 규칙은 다음과 같다.

1. 실행할 작업은 Issue로 만든다.
2. 작업이 시작되면 카드를 Doing으로 이동한다.
3. PR이 생성되면 카드를 Review로 이동한다.
4. PR 검토가 끝나고 Merge되면 카드를 Done으로 이동한다.
5. Merge는 저장소에 공식 반영되었다는 뜻이다.
6. Merge가 실제 현장 실행 완료를 의미하지 않을 수 있다.
7. Merge 후에도 실제 실행이 필요하면 새로운 Pilot 또는 Project Issue를 생성한다.

예를 들어 운영 기준 문서가 Merge되면 문서 작성 작업은 Done이다. 그러나 그 기준을 실제 보드에 적용해야 한다면 별도의 `Pilot` 또는 `Project` Issue를 만들어 실행한다.

---

## 7. Codex 작업 표시 규칙

Codex는 Mission Control에서 작업을 수행할 수 있지만, 최종 승인자는 아니다.

Codex 작업은 다음 규칙으로 표시한다.

- Codex가 작업 중인 카드는 Doing에 둔다.
- Codex가 PR을 만들면 카드는 Review로 이동한다.
- Codex가 실패하거나 멈추면 Health를 Blocked로 표시한다.
- Codex가 만든 PR은 사람이 반드시 검토한다.
- Codex는 Merge 승인권자가 아니다.
- Codex가 작성한 변경 사항은 Related PR과 Related Issue로 추적한다.
- Codex 작업 결과가 운영 기준에 맞지 않으면 Review에서 Doing으로 되돌린다.

Codex는 작성자, 정리자, 실행 보조자 역할을 할 수 있다. 그러나 Mission Control에서 Merge 승인, 우선순위 확정, 운영 결정은 사람이 수행한다.

---

## 8. 현재 버디아코니아 OS 보드에 넣어야 할 초기 카드

현재 상태 기준으로 Mission Control 0.1에 다음 초기 카드를 넣는 것을 제안한다.

| 카드명 | Object Type | Priority | 권장 컬럼 |
|---|---|---|---|
| Birdiaconia OS Object Model v1 | OS | P1 | Done |
| Haus Hall Research Object 재검토 | Research | P1 | Review |
| Mission Control v0.1 정의 | Workspace | P1 | Doing |
| Workflow Engine v1 설계 | OS | P1 | Todo |
| Research Object Template v2.0 | Research | P1 | Todo |
| Workspace 화면 설계 | Workspace | P2 | Todo |
| Input App / Output Engine 매핑 | Data | P2 | Todo |
| AppSheet 구조 설계 | Data | P2 | Later |

초기 카드는 현재 보드에 “무엇이 있는지”를 보여주기보다, 버디아코니아 OS가 지금 어떤 구조를 갖추어 가고 있고 다음에 무엇을 정해야 하는지를 보여주기 위해 배치한다.

---

## 9. Mission Control 운영 원칙

Mission Control은 매일 확인하는 운영판이다.

운영 원칙은 다음과 같다.

- 모든 중요한 작업은 카드로 보인다.
- 카드 없는 작업은 공식 작업이 아니다.
- 대화는 입력이지만, 카드는 실행 단위다.
- PR은 반드시 Review 컬럼을 거친다.
- Merge는 Done이지만, 실행 완료를 의미하지 않을 수 있다.
- 실행이 필요한 경우 Pilot 또는 Project 카드로 이어진다.
- Mission Control은 매일 확인하는 운영판이다.
- 사람은 최종 결정권자다.
- ChatGPT PM은 대화, 판단, 구조화, 우선순위 제안을 돕는다.
- Codex는 파일 변경, 문서 작성, PR 생성을 수행할 수 있다.
- GitHub Issue는 실행 단위다.
- Pull Request는 검토 요청이다.
- Merge는 저장소에 공식 반영되었다는 기록이다.

Mission Control은 개발 현황판을 넘어 버디아코니아 OS의 운영 흐름을 보이게 하는 첫 화면이다.

---

## 10. 다음 단계

Mission Control 0.1 문서가 반영된 뒤 다음 작업을 진행한다.

1. GitHub Project 컬럼명 정리
2. 카드 필드 추가
3. 현재 Issue와 PR을 보드에 배치
4. Object Type 필드 적용
5. Priority 필드 적용
6. Workflow Engine v1 설계 Issue 생성

이 다음 단계는 GitHub Project 설정을 실제로 변경하는 작업이므로, 별도의 Issue 또는 PR로 분리하여 진행한다.
