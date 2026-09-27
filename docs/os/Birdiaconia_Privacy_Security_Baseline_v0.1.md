# Birdiaconia Privacy & Security Baseline v0.1

## 1. 목적

Birdiaconia는 느슨한 기록과 관계의 연속성을 지향하지만 개인정보 처리는 느슨하게 운영하지 않는다.

핵심 원칙은 다음과 같다.

- Loose UX: 사람에게 과도한 입력 구조를 강요하지 않는다.
- Minimum Collection: 목적에 필요한 최소 개인정보만 수집한다.
- Strict Governance: 저장 이후에는 분류, 목적, 권한, 동의, 보유기간을 엄격하게 적용한다.
- Privacy Gate: AI는 원본 데이터 전체가 아니라 목적에 필요한 최소 정보만 사용한다.
- Human Decision: AI는 민감한 사례·지원·법적 판단을 승인하지 않는다.

## 2. 데이터 분류

- PUBLIC: 외부 공개 가능
- INTERNAL: 내부 운영정보
- PRIVATE: 개인을 식별하거나 개인의 참여·연락·관계에 관한 정보
- SENSITIVE: 건강, 장애, 상담, 사례, 복지 지원 등 고위험 정보
- IDENTITY: 로그인 식별자, Toss 연계키, 인증 매핑
- SECRET: API 키, 토큰, 비밀번호, 서비스 계정 비밀값

SECRET은 일반 Workspace 객체로 저장하거나 표시하지 않는다.

## 3. 공개/비공개 경계

Public Workspace는 Public Home과 공개 가능한 BIS 설명만 노출한다.
Today, Input, Storage, Settings 및 개인정보가 연결될 수 있는 운영 영역은 Private Workspace에서만 접근한다.

## 4. 개인정보 객체 필수 메타데이터

개인정보가 포함될 수 있는 객체는 가능한 범위에서 다음 정보를 가진다.

- processing purpose
- legal basis
- consent id (동의 근거인 경우)
- data classification
- retention until
- AI allowed
- AI redaction required
- export allowed
- subject id

## 5. AI Privacy Gate

AI 처리는 다음 순서로 평가한다.

1. 역할이 해당 분류에 접근 가능한가
2. 보유기간이 유효한가
3. AI 처리 목적/허용 근거가 있는가
4. 민감·식별정보 처리가 시스템에서 명시적으로 활성화되어 있는가
5. 가명화/최소화가 필요한가
6. 사람 검토가 예정되어 있는가

SENSITIVE와 IDENTITY는 기본적으로 AI 처리 차단 상태다.

## 6. 접근권한

- Guest: 개인정보 접근 없음
- Viewer: 제한된 내부 조회
- Partner: 파트너/사업 범위
- Field: 일반 현장기록
- Researcher: 연구·보고 범위
- Operator: 운영 및 제한된 개인 데이터
- Owner: 민감정보 승인 범위

Owner도 SECRET에 대한 일반 Workspace 조회권을 갖지 않는다.

실제 배포 전에는 placeholder role 방식 대신 인증 공급자와 서버 세션 기반 RBAC/ABAC로 교체한다.

## 7. 감사 로그

운영 DB 연결 시 다음 행위를 Audit Event로 남긴다.

- view
- create
- update
- export
- delete
- ai-process

감사로그 자체도 무단 수정이 어렵도록 운영 데이터와 분리해 보존한다.

## 8. 보유와 파기

"마을의 기억"과 개인정보의 무기한 보유를 동일시하지 않는다.
식별 가능한 개인정보는 목적과 법적 근거에 따라 보유기한을 관리한다.
장기 분석이 필요하면 적법한 범위에서 익명화 또는 가명처리를 검토한다.

## 9. 구현 상태

2026-09-27 기준 코드에 다음 기반을 반영한다.

- NEXT_PUBLIC 사용자 역할/이메일 제거
- 공개 Workspace 노출범위 축소
- 6단계 데이터 분류
- PrivacyMetadata
- ConsentObject
- AuditEvent
- AI Privacy Gate
- 민감정보/AI 민감처리 기본 OFF
- Privacy & Security 운영 카드

아직 미구현:

- 실제 로그인 및 MFA
- DB Row Level Security
- 암호화 키 관리
- 실제 Audit Log 영속화
- Consent Ledger 영속화
- Toss Identity Mapping
- 삭제 요청 처리 워크플로
- 침해사고 대응 자동화
- 백업/복구 테스트

## 10. 구현 우선순위

P0
- 실제 인증
- 서버 세션
- DB 접근정책/RLS
- 비밀값 Secret Manager
- Audit Log 영속화

P1
- Consent Ledger
- Retention Worker
- AI Redaction/Pseudonymization
- Toss Identity Mapping

P2
- 데이터주체 권리 요청
- 보안 점검 대시보드
- 사고대응 Runbook 자동화
