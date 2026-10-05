# Birdiaconia OS

Birdiaconia OS는 버디아코니아의 설계, 실행, 기록, 자동화, 콘텐츠, 데이터, 의사결정을 관리하기 위한 프로젝트 운영체계다.

## 운영 원칙

1. 대화는 임시 입력값이다.
2. 결정은 문서로 남긴다.
3. 작업은 Issue로 쪼갠다.
4. 실행은 담당자 또는 Agent capability에 배정한다.
5. 결과는 Pull Request, 운영 로그 또는 문서 업데이트로 반영한다.
6. 한 번 확인된 사실은 Core에서 재사용하고 다시 입력하지 않는다.
7. 사람은 모든 단계에 개입하지 않고 의미 있는 결정에서 승인한다.

## Agent-first 방향

Birdiaconia는 홈페이지에 기능을 계속 쌓는 방식이 아니라, 운영자가 목표를 말하면 하나의 Birdiaconia Agent가 Core와 필요한 도구를 읽고 실행 흐름을 만드는 방향으로 전환한다.

```text
Goal
→ Core
→ Agent
→ Tools / APIs
→ Human at meaningful decisions
→ Execute / Verify / Log
```

## 주요 OS 문서

- [Birdiaconia Agent Contract v0.1](docs/os/Birdiaconia_Agent_Contract_v0.1.md): 하나의 Agent, Core 객체, 자율 실행 범위, 사람 승인선, 도구와 로그 규칙.
- [Birdiaconia Channel Operating Model v0.1](docs/os/Birdiaconia_Channel_Operating_Model_v0.1.md): Vercel, 네이버 카페, 인스타그램, 네이버 플레이스, Google 도구, GitHub, AI를 함께 쓰는 멀티채널 운영 모델.

## 기본 구조

- `/strategy` : 방향, 원칙, 의사결정
- `/operations` : 운영 흐름, 작업 방식
- `/data` : 데이터 모델, AppSheet 구조
- `/agents` : Agent capability와 실행 규칙
- `/projects` : 실제 실행 프로젝트
- `/archive` : 사례, 자료, 참고 모델
