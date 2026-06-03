# ErrorMind

> 개발자 에러 해결 & 추천 시스템

개발 중 마주치는 에러를 기록하고, AI가 자동으로 분류·분석합니다.  
이전에 같은 에러를 겪은 적 있다면 바로 알려드립니다.

---

## 주요 기능

- **에러 등록** — 에러 메시지를 붙여넣으면 AI가 자동으로 카테고리·심각도·태그 분류
- **AI 힌트** — GPT-4o-mini 기반 원인 추론 + 단계별 해결 방향 제시
- **내 해결 메모** — 직접 해결한 내용을 마크다운으로 기록
- **에러 히스토리** — 프로젝트별 에러 이력 축적 및 중복 에러 감지
- **개인화 추천** — 내 기술 스택과 이력 기반 유사 에러 추천

## 기술 스택

| 영역 | 기술 |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, Zustand |
| Backend | NestJS, TypeScript, Mongoose, Passport.js (JWT + OAuth) |
| DB | MongoDB Atlas |
| AI | OpenAI GPT-4o-mini |
| Infra | AWS EC2, S3, Docker, GitHub Actions |

## 로컬 실행

```bash
npm install
npm run dev
```

`http://localhost:3000` 접속

## 프로젝트 구조

```
app/
  (main)/
    dashboard/       # 대시보드
    errors/
      new/           # 에러 등록 페이지
      [id]/          # 에러 상세 페이지
components/          # 공통 컴포넌트
```

## 진행 현황

### Frontend (Next.js)

| 페이지 / 컴포넌트 | 상태 |
|---|---|
| 레이아웃 & 사이드바 | ✅ 완료 |
| 랜딩 페이지 | ✅ 완료 |
| 로그인 / 회원가입 페이지 | ✅ UI 완료 |
| 대시보드 | ✅ UI 완료 |
| 에러 등록 페이지 | ✅ UI 완료 |
| 에러 상세 페이지 | ✅ UI 완료 (목업) |
| 에러 탐색 (Explore) | ✅ UI 완료 |
| 히스토리 페이지 | ✅ UI 완료 |
| 프로젝트 관리 페이지 | ✅ UI 완료 |
| 프로필 페이지 | ✅ UI 완료 |

### Backend (NestJS)

| 기능 | 상태 |
|---|---|
| 프로젝트 초기 세팅 | ⬜ 예정 |
| 인증 (JWT + OAuth) | ⬜ 예정 |
| 에러 CRUD API | ⬜ 예정 |
| AI 분석 연동 (GPT-4o-mini) | ⬜ 예정 |
| 에러 중복 감지 / 추천 | ⬜ 예정 |

### 인프라

| 항목 | 상태 |
|---|---|
| AWS EC2 / S3 | ⬜ 예정 |
| Docker | ⬜ 예정 |
| GitHub Actions CI/CD | ⬜ 예정 |

---

포트폴리오 목적으로 1인 풀스택 개발 중입니다.
