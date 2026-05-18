# CLAUDE.md — ErrorMind

## 프로젝트
- **ErrorMind**: 개발자 에러 해결 & 추천 시스템 (포트폴리오용, 1인 풀스택)
- **차별점**: 개인화된 에러 히스토리 축적 + AI 자동 분류

## 스택
- Frontend: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Zustand
- Backend: NestJS, TypeScript, Mongoose, Passport.js (JWT+OAuth)
- DB: MongoDB (Atlas)
- AI: OpenAI GPT-4o-mini (에러 요약/분류/태깅)
- Infra: AWS EC2, S3, Docker, GitHub Actions CI/CD

## 디자인
- 테마: 다크모드, 터미널/CLI 감성
- 배경: #0a0a0f(base) → #12121a(surface) → #1a1a25(elevated)
- 포인트: 네온 보라 #7c3aed
- 상태: error #f85149, warning #d29922, success #3fb950, info #58a6ff
- 폰트: IBM Plex Sans (UI), JetBrains Mono (코드)
- 레이아웃: 왼쪽 사이드바 240px 고정 + 콘텐츠 fluid (max 1080px)

## 컨벤션
- 커밋: feat: / fix: / refactor: / style: / docs: / chore:
- 브랜치: feature/기능명, fix/버그명
- 컴포넌트: PascalCase, 함수: camelCase, 상수: UPPER_SNAKE_CASE
- 응답은 한국어, 코드/변수명은 영어
- 완성 코드 대신 힌트/방향 제시

## 상세 문서 (필요할 때 참조)
- `docs/PLAN.md` — 전체 기획서 (기능 상세, API, DB 스키마, 일정)
- `docs/DESIGN.md` — 디자인 시스템 토큰 시트

## 응답 규칙
- 절대 완성된 코드를 제공하지 말 것
- 해결 방법, 접근 방향, 실무 조언만 제공
- 어떤 기술/함수/속성을 쓰면 되는지 이름만 알려주고 코드는 직접 작성하게 유도
- 에러 발생 시 원인과 해결 방향만 설명