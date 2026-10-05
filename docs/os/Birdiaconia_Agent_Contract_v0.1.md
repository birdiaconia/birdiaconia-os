# Birdiaconia Agent Contract v0.1

## 목적

Birdiaconia는 사람이 여러 화면과 메뉴를 옮겨 다니며 같은 사실을 반복 입력하는 시스템이 아니다.

운영자가 목표를 말하면 Birdiaconia Agent가 기존 Core 사실을 먼저 읽고, 필요한 도구를 선택하고, 실행 가능한 단계와 사람 승인 단계를 구분해 운영을 이어가는 것을 기본 원칙으로 한다.

> 사람은 시스템을 운영하기 위해 컴퓨터 일을 하지 않는다. 사람이 하려는 일을 말하면 시스템이 컴퓨터 일을 한다.

## 1. 하나의 Agent

사용자가 Research AI, Policy AI, Funding AI, Case AI 등을 각각 골라 쓰지 않는다.

외부에는 하나의 `Birdiaconia Agent`가 보이고, Research / Policy / Funding / Pilot / Data / Output / Community / Case / Strategy / Executive 기능은 내부 capability로 동작한다.

## 2. Core 객체

Agent가 읽고 연결하는 기본 객체는 다음과 같다.

- PERSON
- ORGANIZATION / GROUP
- PROJECT
- PARTICIPATION
- ACTIVITY
- RELATIONSHIP
- RESOURCE
- TRANSACTION
- RECORD
- EVENT

한 번 확인된 사실은 Core에 남기고 다음 작업에서 다시 사용한다.

## 3. 기본 실행 루프

```text
Goal
→ Read Core
→ Build Plan
→ Use Tools / APIs
→ Ask Human only at meaningful decisions
→ Execute
→ Verify
→ Log
→ Continue
```

운영 시나리오는 다음 흐름을 기준으로 한다.

```text
신청
→ 승인
→ 일정
→ 활동
→ 최소 기록
→ AI 구조화
→ 확인
→ 기여/적립
→ 월간 실적
→ 정산·보고
```

## 4. 자율 실행과 승인

### Agent가 기본적으로 수행

- 기존 사실 검색
- 데이터 연결
- 중복 확인
- 초안 작성
- 계산
- 형식 변환
- 누락/충돌 검사
- 되돌릴 수 있는 내부 상태 갱신
- 실행 결과 기록

### 사람 승인이 필요한 의미 있는 결정

- 사례관리 전문 판단
- 대상자 선발
- 돈 지급·환불
- 개인정보·민감정보 공개 또는 이동
- 권리 제한
- 외부기관 공식 제출
- 계약
- 대외 공개

원칙은 `Human in every step`이 아니라 `Human at meaningful decisions`이다.

## 5. 도구

Site, Toss, Google Forms/Sheets/Drive, GitHub, Vercel, 문서 출력 엔진은 각각 독립된 목적지가 아니라 Agent가 필요할 때 쓰는 도구다.

도구가 바뀌어도 Core와 Agent Contract는 유지되어야 한다.

## 6. 로그

모든 실행은 다음을 남겨야 한다.

- 무엇을 했는가
- 왜 했는가
- 어떤 사실을 사용했는가
- 어떤 도구를 사용했는가
- 무엇을 변경했는가
- 실패했는가
- 복구 또는 다음 행동은 무엇인가
- 사람 승인이 있었는가

## 7. 개인정보

공개 Vercel 화면에는 사례 원문, 연락처, 주소, 건강정보 등 민감정보를 저장하거나 표시하지 않는다.

Agent가 민감정보를 다루어야 하는 경우 승인된 비공개 저장소와 권한을 사용하고, 외부 공개·이동이 필요한 순간에는 사람 승인을 받는다.

## 8. 현재 구현 단계

v0.1 사이트는 다음을 구현한다.

1. Agent-first 명령창
2. 명령별 실행계획 미리보기
3. 자동 / 외부 연결 / 사람 승인 구분
4. 기존 Today / Input / Storage 운영실과 공존
5. 10개 BIS Agent를 외부 챗봇이 아니라 내부 capability로 재정의

외부 계정에서 실제 Action을 수행하는 단계는 각 서비스의 실행권한과 connector/API가 연결되는 순서대로 확장한다.
