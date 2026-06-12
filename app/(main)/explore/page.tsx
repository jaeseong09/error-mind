'use client'

import { formatDistanceToNow } from "date-fns";
import { useState } from "react"

// 탐색 페이지에 표시할 더미 에러 데이터 (추후 API로 교체 예정)
const exploreErrors = [
  {
    id: "exp_001",
    message: "TypeError: Cannot read properties of undefined (reading 'map')",
    aiCategory: "Runtime Error",
    aiSeverity: "high",
    tags: ["React", "TypeScript"],
    isResolved: true,
    solution: "useState 초기값을 빈 배열로 설정해서 해결. API 호출 전 렌더링 타이밍 문제였음.",
    upvotes: 24,
    author: { nickname: "devkim", avatar: "D" },
    createdAt: "2026-05-05T09:23:00Z",
  },
  {
    id: "exp_002",
    message: "ECONNREFUSED 127.0.0.1:27017 - MongoDB connection failed",
    aiCategory: "Connection Error",
    aiSeverity: "critical",
    tags: ["MongoDB", "Node.js"],
    isResolved: false,
    solution: null,
    upvotes: 8,
    author: { nickname: "jpark_dev", avatar: "J" },
    createdAt: "2026-05-04T17:45:00Z",
  },
  {
    id: "exp_003",
    message: "Hydration failed because the initial UI does not match server render",
    aiCategory: "SSR Error",
    aiSeverity: "medium",
    tags: ["Next.js", "CSS"],
    isResolved: true,
    solution: "useEffect로 클라이언트 전용 렌더링 분리. 날짜 같은 동적 데이터를 서버에서 미리 렌더하지 않도록 수정.",
    upvotes: 42,
    author: { nickname: "seonwoo", avatar: "S" },
    createdAt: "2026-05-03T11:05:00Z",
  },
  {
    id: "exp_004",
    message: "Module not found: Can't resolve '@/components/Button'",
    aiCategory: "Build Error",
    aiSeverity: "medium",
    tags: ["Next.js", "TypeScript"],
    isResolved: true,
    solution: "tsconfig.json에서 paths 설정이 빠져있었음. baseUrl과 paths 추가해서 해결.",
    upvotes: 15,
    author: { nickname: "minjae_fe", avatar: "M" },
    createdAt: "2026-05-02T08:50:00Z",
  },
  {
    id: "exp_005",
    message: "Access to XMLHttpRequest has been blocked by CORS policy",
    aiCategory: "API Error",
    aiSeverity: "high",
    tags: ["Node.js", "Spring Boot"],
    isResolved: true,
    solution: "백엔드에서 CORS 설정 누락. Spring Boot에서 @CrossOrigin 어노테이션 추가로 해결.",
    upvotes: 31,
    author: { nickname: "hojin_be", avatar: "H" },
    createdAt: "2026-05-01T15:20:00Z",
  },
  {
    id: "exp_006",
    message: "Warning: Each child in a list should have a unique 'key' prop",
    aiCategory: "Runtime Error",
    aiSeverity: "low",
    tags: ["React"],
    isResolved: false,
    solution: "map()에서 index 대신 고유 id를 key로 사용. 데이터에 id가 없으면 uuid로 생성.",
    upvotes: 19,
    author: { nickname: "yuna_dev", avatar: "Y" },
    createdAt: "2026-04-30T10:15:00Z",
  },
];

// 태그 필터 목록 — "All"은 항상 첫 번째로 고정
const popularTags = [
  "All",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Spring Boot",
  "MongoDB",
  "CSS",
];

export default function Explore() {
  const [focus, setFocus] = useState(false)       // 검색창 포커스 여부 (테두리 색 전환용)
  const [modal, setModal] = useState(false)       // 필터 드롭다운 열림 상태
  const [selectedTag, setSelectedTag] = useState("All");    // 선택된 태그 필터
  const [selectedSort, setSelectedSort] = useState("Latest"); // 선택된 정렬 기준




  return (
    <div className="p-10 w-full font-mono">
      <p className="text-4xl font-mono mb-1">
        <span className="text-3xl text-primary mr-2">❯</span>Explore
      </p>
      <p className="pl-7 text-text-tertiary mb-10">다른 개발자들이 해결한 에러와 솔루션을 둘러보세요</p>

      {/* 검색바 */}
      <div className={`border  w-full h-12 flex pl-3 ${focus ? "border-primary" : "border-gray-600"}`}>
        <img src="/search-gray.svg" alt="search-gray" className="w-5" />
        <input onFocus={() => { setFocus(true) }} onBlur={() => { setFocus(false) }} placeholder="Search errors or solutions..." type="text" className="pl-1 w-full h-full text-text-secondary focus:outline-none" />
      </div>

      {/* 태그 필터 칩 목록 */}
      <div className="flex gap-2 mt-5 flex-wrap">
        {popularTags.map((tag) => (
          <div
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`border px-4 py-1 rounded-full cursor-pointer ${selectedTag === tag
              ? "border-primary text-primary"
              : "border-gray-600 text-text-secondary"
              }`}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* 정렬 탭: 최신순 / 추천순 / 미해결 */}
      <div className="flex gap-5 mt-5 mb-5">
        {["Latest", "Most voted", "Unsolved"].map((sort) => (
          <div
            key={sort}
            onClick={() => setSelectedSort(sort)}
            className={`cursor-pointer pb-1 ${selectedSort === sort
              ? "text-primary border-b-2 border-primary"
              : "text-text-secondary"
              }`}
          >
            {sort}
          </div>
        ))}
      </div>

      {/* 에러 카드 목록 */}
      <div>
        {
          exploreErrors.map((a) => {
            return (
              // 해결 여부에 따라 왼쪽 테두리 색상 분기 (초록: 해결, 빨강: 미해결)
              <div key={a.id} className={`bg-bg-surface p-5 border border-border-default border-l-3  mb-5 ${a.isResolved == true ? "border-l-green-500" : "border-l-red-500"}`}>
                <div className="flex gap-3 mb-5">
                  {/* 해결 상태 배지 */}
                  {
                    a.isResolved == true ? <div className="px-3 py-1 rounded-full text-sm bg-green-500/8 text-green-400">Resolved</div>
                      :
                      <div className="px-3 py-1 rounded-full text-sm bg-red-500/8 text-red-400">Unresolved</div>
                  }

                  <div className="px-3 py-1 rounded-full text-sm bg-stone-500/8 text-stone-400">{a.aiCategory}</div>

                  <div className="ml-auto flex gap-3">
                    <div className="flex items-center justify-center"><img src="/like.svg" alt="like" className="w-4 mr-1" /><p className="text-text-secondary">{a.upvotes}</p></div>
                    <div className="flex items-center justify-center"><img src="/clock.svg" alt="clock" className="w-4 mr-1" /><p className="text-text-secondary text-sm">{formatDistanceToNow(new Date(a.createdAt))}</p></div>
                  </div>

                </div>
                <h1 className="text-text-primary mb-3">{a.message}</h1>

                {
                  a.solution ?
                    <p className={`text-text-tertiary text-sm border-l-2 pl-3 ${a.isResolved == true ? "border-green-500" : "border-red-500"}`}>{a.solution}</p>
                    :
                    <p className={`text-text-tertiary text-sm border-l-2 pl-3 `}>아직 솔루션이 작성되지 않았습니다</p>
                }


                <div className="mt-5 flex gap-3">
                  {
                    a.tags.map((a) => {
                      return (
                        <div className="px-3 py-1 rounded-full text-sm bg-violet-500/8 text-violet-400" key={a}>{a}</div>
                      )
                    })
                  }

                  <div className="ml-auto flex gap-1 items-center justify-center">
                    <div className="bg-bg-overlay rounded-full flex items-center font-bold text-text-secondary justify-center px-3 py-1"><p>{a.author.avatar}</p></div>
                    <p className="text-sm text-text-secondary">{a.author.nickname}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  )
}