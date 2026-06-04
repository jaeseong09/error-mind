'use client'

import { useRouter } from 'next/navigation'

import SolutionEditor from '@/components/SolutionEditor'

/**
 * 에러 상세 페이지
 * - 브레드크럼 네비게이션 (Dashboard → 에러 ID)
 * - 에러 요약 카드: 타입·심각도·해결 상태 배지 + 스택 트레이스
 * - AI 힌트 카드: 원인 분석 + 해결 방향 리스트
 * - 내 해결 메모 에디터 (Bold / Code / Table / Preview 툴바)
 *
 * TODO: props로 에러 ID 받아 API 연동, 각 섹션 컴포넌트 분리
 */
export default function Detail() {
  const router = useRouter()

  return (
    <div className="p-10 font-mono">

      {/* ── 브레드크럼 ──────────────────────────────────────────────
          왼쪽: "← Dashboard / ERR-001" (Dashboard 클릭 시 /dashboard 이동)
          오른쪽: "프로젝트명 | 등록 시간"
      */}
      <div className="flex">
        <p className="text-text-secondary">
          <span
            onClick={() => router.push("/dashboard")}
            className="cursor-pointer text-text-tertiary"
          >
            ← Dashboard /
          </span>{" "}
          ERR-001
        </p>
        <p className="ml-auto text-text-tertiary">Camplog | 2 hours ago</p>
      </div>

      {/* ── 에러 요약 카드 ───────────────────────────────────────────
          좌측 붉은 보더: 에러 심각도 시각화
          배지: 에러 타입 / 심각도(high) / 해결 상태
          스택 트레이스 박스: 세로 스크롤 허용
          하단: AI 분류 태그(React) + 발생 컨텍스트 요약
      */}
      <div className="bg-bg-elevated p-5 mt-10 border border-l-3 border-l-red-500 border-gray-700">
        <div className="flex items-center">
          <img src="/caution-red.svg" alt="caution-red" className="w-5 mr-3" />
          <p className="text-lg">Error info</p>

          {/* 에러 타입 / 심각도 / 해결 상태 배지 */}
          <div className="ml-auto flex gap-3 text-base">
            <div className="bg-red-500/8 text-red-400 px-3 py-1 rounded-full">Runtime Error</div>
            <div className="bg-yellow-500/8 text-yellow-400 px-3 py-1 rounded-full">↑ high</div>
            <div className="bg-red-500/8 text-red-400 px-3 py-1 rounded-full">Unresolved</div>
          </div>
        </div>

        {/* 스택 트레이스 — max-height 고정 후 overflow scroll */}
        <div className='max-h-50 bg-bg-base p-5 mt-5 border border-gray-700 rounded-md overflow-y-scroll'>
          <p>TypeError: Cannot read properties of undefined (reading 'map')
            at UserList (./components/UserList.tsx:12:28)
            at renderWithHooks (react-dom.development.js:149:18)
            TypeError: Cannot read properties of undefined (reading 'map')
            at UserList (./components/UserList.tsx:12:28)
            at renderWithHooks (react-dom.development.js:149:18)
            TypeError: Cannot read properties of undefined (reading 'map')
            at UserList (./components/UserList.tsx:12:28)
            at renderWithHooks (react-dom.development.js:149:18)
            TypeError: Cannot read properties of undefined (reading 'map')
            at UserList (./components/UserList.tsx:12:28)
            at renderWithHooks (react-dom.development.js:149:18)
          </p>
        </div>

        {/* AI 자동 분류 태그(기술 스택) + 발생 컨텍스트 한줄 요약 */}
        <div className='flex mt-5 items-center'>
          <div className='bg-violet-500/8 text-violet-400 px-3 py-1 rounded-full'>React</div>
          <p className='ml-auto text-text-tertiary'>context: <span>유저 목록 페이지에서 API 호출 후 렌더링 시 발생</span>
          </p>
        </div>
      </div>

      {/* ── AI 힌트 카드 ─────────────────────────────────────────────
          GPT-4o-mini 분석 결과 표시
          possible_cause: 에러 원인 추론
          direction_to_explore: 단계별 해결 방향 리스트
          면책 안내 배너: AI는 힌트 제공 전용임을 명시
      */}
      <div className="bg-bg-elevated p-5 mt-10 border border-l-3 border-l-cyan-500 border-gray-700">
        <div className='flex items-center'>
          <img className='w-6 mr-3' src="/bulb.svg" alt="" />
          <p className='text-lg'>AI hints</p>

          {/* 사용 모델 표시 배지 */}
          <div className='ml-auto bg-zinc-500/8 text-zinc-400 px-3 py-1 rounded-full'>GPT-4o-mini</div>
        </div>

        {/* 원인 분석 블록 */}
        <p className='mt-5 text-cyan-500 text-base'>❯ possible_cause</p>
        <div className='bg-bg-base p-5 mt-2 border border-l-3 border-l-cyan-500 border-gray-700 rounded-md min-h-16 overflow-y-scroll'>
          <p>API 응답 데이터가 도착하기 전에 .map()을 호출하고 있을 가능성이 높습니다.
            state 초기값이 undefined인 상태에서 렌더링이 먼저 실행된 경우입니다.</p>
        </div>

        {/* 해결 방향 단계별 리스트 — 각 항목은 border-b 구분선 */}
        <p className='mt-5 text-cyan-500 text-base'>❯ direction_to_explore</p>
        <div className='bg-bg-base  mt-2 border border-l-3 border-l-cyan-500 border-gray-700 rounded-md min-h-16 overflow-y-scroll'>
          <div className='p-5 border-b border-gray-700 flex'>
            <span className='text-cyan-500'>1.</span>
            <p>state 초기값을 빈 배열([])로 설정해보세요</p>
          </div>
          <div className='p-5 border-b border-gray-700 flex'>
            <span className='text-cyan-500'>2.</span>
            <p>optional chaining(?.)이나 조건부 렌더링을 검토해보세요</p>
          </div>
          <div className='p-5 border-b border-gray-700 flex'>
            <span className='text-cyan-500'>3.</span>
            <p>데이터 fetching 타이밍과 렌더링 순서를 확인해보세요</p>
          </div>
        </div>

        {/* AI 면책 안내 배너 */}
        <div className='flex p-3 mt-5 bg-cyan-500/5 rounded-md'>
          <img className='w-5 mr-2' src="/info-cyan.svg" alt="" />
          <p>
            AI는 힌트만 제공합니다. 직접 해결하고 아래에 기록해보세요!</p>
        </div>
      </div>

      <SolutionEditor />
    </div>
  )
}
