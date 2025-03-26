---
title: "사고 기반 자기 구조화 웹사이트 기획안"
description: "사용자의 자기 인식과 커리어 설계를 위한 사고 체계 기반 구조화 시스템"
---

# 사고 기반 자기 구조화 웹사이트 기획안 🧠

## 1. 프로젝트 개요

### 1.1 목적
- 사고 체계 기반의 자기 인식 및 커리어 설계 시스템 구축
- 사고 → 명제화 → 차이 분석 → Quest 생성 → 커리어 설계의 흐름 구현
- 실천 가능한 목표의 시각화 및 관리 기능 제공

### 1.2 핵심 기능
- 자기 인식 기록 및 분류
- 사고 기반 문제 인식 및 해결
- 실천 과제(Quest) 생성 및 추적
- 커리어 방향 정립
- AI 프롬프트 기반 자기 설명 데이터셋 제공

## 2. 기술 스택

### 2.1 핵심 기술
- Quartz (정적 사이트 생성기)
- Markdown 기반 콘텐츠 관리
- TypeScript (커스텀 컴포넌트)
- Mermaid.js (시각화)
- Obsidian 호환성

### 2.2 개발 환경
- Node.js >= 20
- npm >= 9.3.1
- Git 버전 관리
- VS Code/Cursor 개발 환경

## 3. 사이트 구조

### 3.1 콘텐츠 구조
```
content/
├── propositional/          # 명제적 사고
│   ├── cognitive/         # 인지적 신념
│   │   ├── verifiable/    # 검증 가능
│   │   ├── debatable/     # 논쟁 가능
│   │   └── unverifiable/  # 검증 불가능
│   └── value/            # 가치 판단
│       ├── moral/        # 도덕적 가치
│       ├── pragmatic/    # 실용적 가치
│       └── personal/     # 개인적 가치
├── nonpropositional/     # 비명제적 사고
│   ├── preference/      # 취향/선호
│   ├── emotion/        # 감정/정서
│   ├── mood/          # 기분/분위기
│   └── aesthetic/     # 미적/감각
├── identity/          # 정체성 관련
├── metaphysical/     # 형이상학적
├── unclassified/    # 미분류 명제
└── quests/         # 실천 과제
    ├── templates/  # 퀘스트 템플릿
    ├── pending/   # 대기 중
    ├── active/    # 진행 중
    ├── completed/ # 완료됨
    └── archived/  # 보관됨
```

## 4. Quest 시스템

### 4.1 Quest 생성 조건
- 동일 주어("나") 사용
- 시간 차이 있는 명제 쌍
  - 현재: 인지적 신념
  - 미래: 가치 판단
- 실체적 차이 요소의 유무 여부 구분 가능

### 4.2 Quest 구조
```markdown
---
title: "Quest 제목"
status: "active"
created: "YYYY-MM-DD"
propositions:
  - current: "현재 인지적 신념 UUID"
  - future: "미래 가치 판단 UUID"
difference: "차이 요소"
career_impact: "커리어 영향"
---

## 실행 계획
- [ ] 단계 1
- [ ] 단계 2
- [ ] 단계 3
```

## 5. 시각화 및 기능

### 5.1 그래프 뷰
- 명제 간 관계 시각화
- Quest 상태 트래커
- 타임라인 뷰
- AI 프롬프트 추출

### 5.2 컴포넌트 구조
```typescript
// 명제 카드 컴포넌트
interface PropositionCardProps {
  id: string;
  type: 'cognitive' | 'value' | 'nonpropositional';
  content: string;
  tags: string[];
  createdAt: string;
}

// Quest 카드 컴포넌트
interface QuestCardProps {
  id: string;
  title: string;
  status: 'pending' | 'active' | 'completed' | 'archived';
  propositions: string[];
  difference: string;
  careerImpact: string;
}
```

## 6. AI 프롬프트 시스템

### 6.1 데이터 구조화
```markdown
---
type: "proposition"
category: "cognitive"
verifiability: "verifiable"
tags: ["자산", "경력"]
ai_prompt: {
  "context": "사용자 성향",
  "current_state": "현재 인지 상태",
  "future_goal": "이상 가치 목표"
}
---
```

### 6.2 프롬프트 활용
- 자기 구조화된 사고/행동 데이터 기반
- 정확한 AI 프롬프트 제공
- 행동 계획 제안

## 7. 개발 가이드라인

### 7.1 코드 스타일
```typescript
// 컴포넌트 구조
interface ComponentProps {
  // Props 인터페이스
}

export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 컴포넌트 구현
};
```

### 7.2 명명 규칙
- 파일: kebab-case (예: `my-component.tsx`)
- 컴포넌트: PascalCase (예: `MyComponent`)
- 변수: camelCase (예: `myVariable`)
- 상수: UPPER_SNAKE_CASE (예: `MY_CONSTANT`)

## 8. 향후 확장 계획

### 8.1 기능 확장
- Mermaid 기반 트리 뷰 자동 생성
- Obsidian 연동 구조
- 명제-퀘스트-커리어 관계 시각화
- 자동 Quest 추천 시스템
- 사용자 유형 분류 기반 대시보드

### 8.2 기술적 개선
- 성능 최적화
- 테스트 커버리지 향상
- 빌드 프로세스 개선
- 의존성 업데이트

## 9. 유지보수 계획

### 9.1 정기 업데이트
- 월간 의존성 업데이트
- 분기별 콘텐츠 검토
- 월간 링크 점검
- 성능 메트릭 모니터링

### 9.2 백업 전략
- 정기 콘텐츠 백업
- 버전 관리
- 설정 변경 문서화
- 배포 로그 관리


