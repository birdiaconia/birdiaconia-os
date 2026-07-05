# Birdiaconia OS Object Model v1

## 1. 버디아코니아 OS의 목적

버디아코니아 OS는 지식 저장소가 아니다. 버디아코니아 OS는 대화, 조사, 정책, 법률, 재원, 데이터, 파일럿, 출력물을 서로 연결하여 지식을 실행 가능한 모델로 변환하는 운영체계다.

조사, 보고서 작성, 자동화 자체는 목적이 아니다. 모든 조사는 실행 가능성, 파일럿, 데이터 구조, 출력물, 의사결정으로 이어져야 한다. 따라서 OS의 핵심 기준은 “무엇을 알게 되었는가”가 아니라 “무엇을 실행할 수 있게 되었는가”이다.

## 2. 핵심 객체 유형

| 객체 | 목적 | 입력 | 출력 | 다음 연결 객체 |
|---|---|---|---|---|
| Research Object | 특정 주제, 사례, 제도, 모델에 대한 근거를 구조화한다. | 대화, 질문, 자료, 인터뷰, 문헌, 현장 정보 | 조사 카드, 근거 요약, 비교 분석, 실행 시사점 | Policy Object, Law Object, Funding Object, Pilot Object, Output Object, Decision Object, Knowledge Object |
| Policy Object | 정책 방향, 제도 설계, 공공 실행 논리를 정의한다. | Research Object, 현장 이슈, 정책 자료, 지역 전략 | 정책 옵션, 정책 브리프, 실행 조건 | Law Object, Funding Object, Pilot Object, Decision Object, Output Object |
| Law Object | 법률, 조례, 지침, 규제 조건을 구조화한다. | 법령, 조례, 행정지침, 판례, 전문가 검토 | 법적 가능성, 제한 사항, 검토 필요 항목 | Policy Object, Pilot Object, Decision Object, Issue Object |
| Funding Object | 실행에 필요한 재원, 공모, 보조금, 예산 경로를 정의한다. | 공모문, 예산 자료, 재정 제도, 사업계획 | 재원 매핑, 예산 초안, 신청 전략 | Project Object, Pilot Object, Decision Object, Output Object |
| Pilot Object | 제한된 범위의 실행 실험을 설계하고 운영한다. | Research Object, Policy Object, Law Object, Funding Object, Partner Object | 파일럿 설계서, 운영 기록, 평가 결과 | Project Object, Output Object, Decision Object, Knowledge Object, Data Object |
| Project Object | 승인된 실행 단위를 사업으로 관리한다. | Pilot Object, Funding Object, Decision Object, Partner Object | 사업계획, 일정, 예산, 역할, 성과 | Output Object, Data Object, Decision Object, Knowledge Object |
| Partner Object | 협력 기관, 역할, 책임, 이해관계를 구조화한다. | 기관 정보, MOU, 담당자, 역량, 리스크 | 파트너 맵, 역할 정의, 협력 조건 | Project Object, Pilot Object, Decision Object, Issue Object |
| Decision Object | 사람이 승인해야 하는 판단 지점을 기록한다. | 조사 결과, 법률 검토, 재원 검토, 리스크, 대안 | 승인, 반려, 보류, 조건부 승인 기록 | Pilot Object, Project Object, Output Object, Archive |
| Issue Object | 대화나 관찰에서 실행 가능한 업무 단위를 도출한다. | Conversation, 문제 제기, 현장 요청, 데이터 이상 | 정의된 이슈, 우선순위, 담당자, 다음 작업 | Research Object, Policy Object, Law Object, Data Object, Decision Object |
| Output Object | 정책 브리프, 사업계획서, PPT, 보고서 등 제출 가능한 산출물을 관리한다. | Research Object, Policy Object, Pilot Object, Project Object, Data Object | 문서, 발표자료, 제안서, 교육자료, 카드 | Decision Object, Archive, Knowledge Object |
| Knowledge Object | 반복 사용 가능한 지식, 원칙, 패턴, 템플릿을 보존한다. | Research Object, Output Object, Evaluation, Archive | 재사용 지식, 체크리스트, 템플릿, 설계 원칙 | Issue Object, Research Object, Policy Object, Pilot Object |
| Data Object | 실행과 의사결정에 필요한 구조화 데이터를 정의한다. | 원자료, 현장 기록, 설문, 행정 데이터, AppSheet 입력 | 데이터셋, 스키마, 지표, 대시보드 입력 | Pilot Object, Project Object, Output Object, Decision Object |

## 3. 객체 생명주기(Object Lifecycle)

| 상태 | 의미 | 다음 단계 이동 조건 |
|---|---|---|
| Idea | 아직 실행 단위로 정리되지 않은 아이디어 또는 대화 입력이다. | 문제, 대상, 목적이 식별되면 Draft로 이동한다. |
| Draft | 객체의 기본 구조가 작성된 상태다. | 필수 필드와 초기 근거가 입력되면 Researching 또는 Evidence Review로 이동한다. |
| Researching | 자료 수집, 비교, 현장 정보 확인이 진행 중인 상태다. | 출처와 핵심 근거가 충분히 정리되면 Evidence Review로 이동한다. |
| Evidence Review | 근거 수준, 출처 신뢰도, 실행 시사점을 검토하는 상태다. | 근거가 수용 가능하면 Legal Review, Pilot Ready, Decision Required 중 적절한 상태로 이동한다. |
| Legal Review | 법률, 조례, 규정, 개인정보, 계약 리스크를 검토하는 상태다. | 법적 제한과 조건이 정리되면 Pilot Ready 또는 Decision Required로 이동한다. |
| Pilot Ready | 제한된 실행 실험을 설계할 수 있는 상태다. | 승인권자의 Gate 3 승인을 받으면 Running으로 이동한다. |
| Running | 파일럿, 프로젝트, 데이터 수집, 산출물 제작이 실행 중인 상태다. | 실행 기록과 결과가 축적되면 Evaluation으로 이동한다. |
| Evaluation | 실행 결과, 효과, 리스크, 개선점을 평가하는 상태다. | 확장, 수정, 종료 중 하나의 판단이 필요하면 Decision Required로 이동한다. |
| Decision Required | 사람이 승인해야 하는 선택지가 존재하는 상태다. | 승인, 반려, 보류, 조건부 승인 기록이 생성되면 Approved, Blocked, Running, Archived 중 하나로 이동한다. |
| Approved | 승인권자가 공식 반영 또는 실행을 승인한 상태다. | 실행이 필요하면 Running, 산출물 확정이면 Published 또는 Archive 단계로 이동한다. |
| Blocked | 법률, 재원, 데이터, 파트너, 승인 문제로 진행이 중단된 상태다. | 차단 사유가 해소되면 이전 적정 상태로 이동하고, 해소 불가하면 Archived로 이동한다. |
| Archived | 현재 실행 대상이 아니며 참조용으로 보존되는 상태다. | 재사용 가치가 확인되면 Knowledge Object로 전환하거나 신규 Issue로 재개한다. |

## 4. Object Health

| Health | 의미 | 판단 기준 | 사람이 해야 할 일 |
|---|---|---|---|
| Stable | 구조, 근거, 책임, 다음 단계가 명확하다. | 최신성, 출처, 승인 상태, 연결 객체가 충분하다. | 정기 검토 주기에 따라 유지한다. |
| Developing | 객체가 형성 중이며 추가 입력이 필요하다. | 일부 필드, 근거, 연결 객체가 미완성이다. | 담당자, 우선순위, 보완 자료를 지정한다. |
| Needs Review | 사람이 판단해야 할 불확실성이 있다. | 법률, 재원, 개인정보, 정책 적합성, 외부 제출 가능성에 의문이 있다. | 검토자를 지정하고 Decision Gate 여부를 판단한다. |
| Blocked | 진행을 막는 핵심 장애가 있다. | 승인 부재, 법적 제한, 예산 부재, 데이터 결함, 파트너 부재가 확인된다. | 차단 사유를 기록하고 해결 책임자와 기한을 정한다. |
| Archived | 현재 실행 또는 검토 대상이 아니다. | 실행 종료, 대체, 폐기, 참고 보존으로 판단되었다. | 재사용 가능한 지식과 산출물을 분리해 보존한다. |

## 5. Object ID 규칙

객체 ID는 수동으로 임의 작성하지 않는다. 객체 ID는 객체 유형, 지역, 주제, 버전을 기준으로 일관되게 생성한다.

```text
{OBJECT_TYPE}-{COUNTRY_OR_REGION}-{SLUG}-{VERSION}
```

예시:

- `RO-DE-HAUSHALL-v1`
- `LO-KR-DISABILITY-WELFARE-ACT-v1`
- `FO-KR-INTEGRATED-CARE-GRANT-v1`
- `PO-GOHEUNG-COMMUNITY-CARE-v1`
- `PILOT-GOHEUNG-DAYACTIVITY-v1`

Object Type 약어:

| 약어 | 객체 유형 |
|---|---|
| RO | Research Object |
| PO | Policy Object |
| LO | Law Object |
| FO | Funding Object |
| PIO | Pilot Object |
| PILOT | Pilot Object의 가독성 우선 표기 |
| PRJ | Project Object |
| PAO | Partner Object |
| DO | Decision Object |
| IO | Issue Object |
| OO | Output Object |
| KO | Knowledge Object |
| DAO | Data Object |

## 6. Version 규칙

모든 객체는 Version을 가진다. Version은 객체의 신뢰 수준과 구조 변경 이력을 표시한다.

| Version | 의미 |
|---|---|
| v0.1 | 초안이다. 구조와 근거가 미완성이다. |
| v0.5 | 내부 검토가 가능하다. 핵심 필드와 1차 근거가 존재한다. |
| v1.0 | 최초 승인 버전이다. 공식 참조 또는 실행 기준으로 사용할 수 있다. |
| v1.1 | 경미한 수정이다. 문구, 출처, 일정, 담당자 등 구조를 바꾸지 않는 변경이다. |
| v2.0 | 구조 변경이다. 목적, 범위, 데이터 구조, 정책 방향, 실행 모델이 실질적으로 변경되었다. |

버전 변경 기준:

- 필수 필드가 처음 채워지면 `v0.1`로 시작한다.
- 내부 검토 가능한 근거와 연결 객체가 확보되면 `v0.5`로 올린다.
- 승인권자의 Decision Gate를 통과하면 `v1.0`으로 확정할 수 있다.
- 의미를 바꾸지 않는 수정은 소수점 둘째 자리 또는 `v1.1` 단위로 관리한다.
- 의사결정, 실행 범위, 데이터 구조, 법적 판단, 예산 구조가 바뀌면 주 버전을 올린다.

## 7. Decision Gate

AI는 결정을 제안할 수 있지만 승인하지 않는다. 승인은 지정된 사람 또는 조직의 책임이다.

| Gate | 승인권자 | AI 역할 | 승인 전 조건 | 승인 후 다음 상태 |
|---|---|---|---|---|
| Gate 1: 조사 완료 승인 | 객체 Owner 또는 지정 검토자 | 근거 요약, 출처 정리, 누락 항목 제안 | 핵심 출처, 비교 기준, 실행 시사점, 한계가 기록되어야 한다. | Evidence Review 또는 Policy/Law/Funding 작업 |
| Gate 2: 법률·조례 검토 승인 | 법률 검토 책임자, 외부 전문가, 기관 담당자 | 관련 법령 후보와 쟁점 목록 제안 | 법률·조례·지침 검토 기록과 제한 사항이 정리되어야 한다. | Pilot Ready 또는 Decision Required |
| Gate 3: 파일럿 실행 승인 | 사업 책임자, 예산 책임자, 운영 책임자 | 파일럿 설계안, 리스크, 지표, 예산 초안 제안 | 대상, 기간, 예산, 역할, 데이터 처리, 평가 방식이 확정되어야 한다. | Running |
| Gate 4: 확장 승인 | 최고 의사결정자 또는 운영위원회 | 평가 결과 요약과 확장 옵션 제안 | 파일럿 평가, 비용, 리스크, 파트너 역량, 데이터 근거가 확인되어야 한다. | Project Object 또는 확장 Running |
| Gate 5: 아카이브 승인 | 객체 Owner 또는 기록 관리 책임자 | 재사용 자산 분리와 아카이브 사유 제안 | 종료 사유, 최종 산출물, 재사용 지식, 남은 리스크가 기록되어야 한다. | Archived 및 Reusable Knowledge |

## 8. Workflow

버디아코니아 OS의 기본 Workflow는 다음 흐름을 따른다.

```text
Conversation
↓
Issue Candidate
↓
Issue
↓
Research / Policy / Data 작업
↓
Decision Gate
↓
Pilot
↓
Evaluation
↓
Output
↓
Archive
↓
Reusable Knowledge
```

| 단계 | 입력 | 처리 | 출력 | 사람 검토 여부 |
|---|---|---|---|---|
| Conversation | 대화, 회의, 현장 요청, 메모 | 문제 후보와 실행 가능 단서를 추출한다. | Issue Candidate | 필요 |
| Issue Candidate | 대화 요약, 문제 후보 | 범위, 대상, 긴급도, 실행 가능성을 분류한다. | Issue 초안 | 필요 |
| Issue | 정의된 문제, 담당자, 우선순위 | 필요한 객체 유형과 작업 경로를 지정한다. | Research/Policy/Data 작업 요청 | 필수 |
| Research / Policy / Data 작업 | Issue, 자료, 데이터, 정책 질문 | 조사, 분석, 데이터 구조화, 정책 설계를 수행한다. | Research Object, Policy Object, Data Object | 필수 |
| Decision Gate | 검토 자료, 옵션, 리스크 | 승인, 보류, 반려, 조건부 승인을 판단한다. | Decision Object | 필수 |
| Pilot | 승인된 실행안, 예산, 역할 | 제한된 범위에서 실행하고 기록한다. | Pilot 기록, Data Object | 필수 |
| Evaluation | 파일럿 데이터, 현장 피드백, 비용 | 성과, 한계, 확장 가능성을 평가한다. | 평가 결과, 확장 옵션 | 필수 |
| Output | 승인된 내용, 평가, 데이터 | 제출·공유 가능한 산출물을 생성한다. | Output Object | 필수 |
| Archive | 완료된 객체, 산출물, 의사결정 | 보존, 종료, 재사용 여부를 정리한다. | Archived Object | 필요 |
| Reusable Knowledge | 아카이브, 평가, 템플릿 | 반복 가능한 원칙과 자산을 추출한다. | Knowledge Object | 필요 |

## 9. Automation Boundary

자동화는 안정적인 운용을 위해 존재한다. 자동화는 책임 있는 판단, 법적 승인, 외부 제출, 예산 집행을 대체하지 않는다.

| 항목 | 자동화 가능 % | 사람 검토 필요 여부 | 금지 또는 제한 사항 |
|---|---:|---|---|
| 자료수집 | 80% | 필요 | 출처 없는 자료를 사실로 확정하지 않는다. |
| 출처정리 | 90% | 필요 | 인용 형식과 원문 의미를 왜곡하지 않는다. |
| 비교분석 | 70% | 필요 | 비교 기준이 불명확한 결론을 확정하지 않는다. |
| 법률검토 | 40% | 필수 | AI 판단을 법적 자문 또는 최종 판단으로 사용하지 않는다. |
| 조례검토 | 50% | 필수 | 최신 조례 확인 없이 실행 결정을 하지 않는다. |
| 재원분석 | 60% | 필수 | 신청 가능성, 자부담, 집행 조건을 자동 확정하지 않는다. |
| 파일럿 설계 | 70% | 필수 | 대상자 안전, 개인정보, 예산 책임을 자동 승인하지 않는다. |
| 예산 초안 | 60% | 필수 | 실제 집행, 계약, 회계 처리를 자동화하지 않는다. |
| 보고서 생성 | 80% | 필수 | 외부 제출 전 사람 승인 없이 발송하지 않는다. |
| PPT 생성 | 80% | 필수 | 대외 발표 자료를 검토 없이 공개하지 않는다. |
| 외부 제출 | 20% | 필수 | 사람 승인 없는 제출, 서명, 확약을 금지한다. |
| 예산 집행 | 10% | 필수 | 자동 결제, 자동 계약, 자동 지출 승인을 금지한다. |
| 법적 판단 | 10% | 필수 | AI의 법률 해석을 최종 판단으로 사용하지 않는다. |
| 개인정보 처리 | 30% | 필수 | 동의, 최소 수집, 접근 권한, 보관 기간 검토 없이 처리하지 않는다. |

## 10. Output Lifecycle

Output은 생성으로 끝나지 않는다. 모든 Output Object는 검토, 승인, 공개, 보존 단계를 거쳐야 한다.

| 상태 | 의미 | 이동 조건 |
|---|---|---|
| Draft | 초안 산출물이다. | 필수 내용과 출처가 채워지면 Review로 이동한다. |
| Review | 사람이 내용, 근거, 법적·정책적 리스크를 검토하는 상태다. | 수정 요청이 해소되고 승인권자가 확인하면 Approved로 이동한다. |
| Approved | 공식 사용이 승인된 상태다. | 공개 또는 제출 결정이 있으면 Published로 이동한다. |
| Published | 외부 제출, 공유, 발표, 내부 배포가 완료된 상태다. | 사용 종료 또는 최신성 상실 시 Archived로 이동한다. |
| Archived | 참조와 재사용을 위해 보존되는 상태다. | 재사용 지식 또는 템플릿으로 전환할 수 있다. |

정책 브리프, 사업계획서, 공모사업 제안서, PPT, 내부 교육자료, AppSheet 설계서, 대표 보고서, AI Knowledge Card는 모두 이 Lifecycle을 따라야 한다.

## 11. AppSheet / Database 연결 원칙

향후 AppSheet 또는 데이터베이스에 연결할 수 있도록 모든 객체는 구조화 가능한 필드를 가져야 한다. 객체는 문서인 동시에 데이터 레코드가 될 수 있어야 한다.

공통 필드 예시:

| 필드 | 설명 |
|---|---|
| Object ID | 객체의 고유 식별자 |
| Object Type | 객체 유형 |
| Title | 사람이 읽을 수 있는 제목 |
| Status | Object Lifecycle 상태 |
| Health | Object Health 상태 |
| Version | 객체 버전 |
| Owner | 책임자 또는 담당 조직 |
| Evidence Level | 근거 수준 또는 신뢰도 |
| Decision Gate | 현재 또는 마지막 의사결정 단계 |
| Related Objects | 연결된 객체 목록 |
| Dependencies | 진행에 필요한 선행 조건 |
| Updated At | 마지막 수정일 |
| Next Review | 다음 검토 예정일 |
| Outputs | 연결된 산출물 |
| Reusable Assets | 재사용 가능한 템플릿, 데이터, 지식 |

## 12. Research Object와의 관계

Haus Hall 같은 사례 카드는 이 OS Object Model을 따르는 Research Object의 한 예일 뿐이다. 특정 사례 카드는 OS 전체 구조의 중심이 아니라 실행 가능한 객체 네트워크로 들어가는 입력 중 하나다.

Research Object는 반드시 다음 객체로 연결되어야 한다.

- Policy Object
- Law Object
- Funding Object
- Pilot Object
- Output Object
- Decision Object
- Knowledge Object

Research Object는 “좋은 사례를 알게 되었다”에서 멈추지 않는다. 실행 조건, 법적 가능성, 재원 경로, 파일럿 설계, 산출물, 의사결정, 재사용 지식으로 이어져야 한다.

## 13. 운영 원칙

- 대화는 입력이다.
- Issue는 실행 가능한 업무 단위다.
- PR은 검토 요청이다.
- Merge는 공식 반영이다.
- AI는 제안한다.
- 사람은 승인한다.
- 조사는 보고서로 끝나지 않는다.
- 모든 조사는 실행 가능성으로 연결된다.
- 자동화는 안정적인 운용을 위해 존재한다.
- 데이터 없이 자동화하지 않는다.
