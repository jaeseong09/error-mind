'use client'

import { useState } from "react"

import ErrorMessageInput from "@/components/ErrorMessageInput"
import ProjectsToggle from "@/components/ProjectsToggle"
import TagInput from "@/components/TagInput"

// 새 에러 등록 페이지 — 프로젝트 선택, 에러 메시지, 태그, 공개 설정 입력
export default function Errors() {
  // 선택된 프로젝트의 태그 (ProjectsToggle → TagInput으로 전달)
  const [tags, setTags] = useState<string[]>([])
  // 에러 공개 범위 (Public / Private)
  const [visibility, setVisibility] = useState("Public")

  return (
    <div className="p-10 w-full">
      {/* 페이지 타이틀 */}
      <p className="text-4xl font-mono mb-1">
        <span className="text-3xl text-primary mr-2">❯</span>New error report
      </p>
      <p className="pl-10 text-text-tertiary mb-10">에러를 붙여넣으면 AI가 분석하고, 프로젝트에 기록합니다</p>

      {/* 프로젝트 선택 — 선택 시 해당 프로젝트 태그가 setTags로 올라와 TagInput에 자동 반영됨 */}
      <p className="text-text-tertiary text-xl font-mono mb-2">
        <span className="text-lg text-primary mr-2">❯</span>project
        <span className="pl-1 text-red-400">*</span>
      </p>
      <ProjectsToggle onSelectProject={setTags} />

      {/* 에러 메시지 입력 */}
      <p className="text-text-tertiary text-xl font-mono mb-2 mt-10">
        <span className="text-lg text-primary mr-2">❯</span>error_message
        <span className="pl-1 text-red-400">*</span>
      </p>
      <ErrorMessageInput />

      {/* 추가 컨텍스트 (선택) */}
      <p className="text-text-tertiary text-xl font-mono mb-2 mt-10">
        <span className="text-lg text-primary mr-2">❯</span>context
        <span className="pl-1 text-gray-700">(optional)</span>
      </p>
      <input
        type="text"
        className="border border-terminal-input p-3 cursor-text w-full bg-bg-elevated text-base"
      />

      <div className="flex gap-10 mt-10">
        {/* 태그 입력 — 프로젝트 선택 시 자동으로 채워지며 직접 수정도 가능 */}
        <div className="w-1/2">
          <p className="text-text-tertiary text-xl font-mono mb-2">
            <span className="text-lg text-primary mr-2">❯</span>tags
          </p>
          <TagInput tags={tags} onChange={setTags} />
        </div>

        {/* 공개 범위 선택 */}
        <div className="w-1/2">
          <p className="text-text-tertiary text-xl font-mono mb-2">
            <span className="text-lg text-primary mr-2">❯</span>visibility
          </p>
          <div className="flex gap-3">
            <div
              onClick={() => setVisibility("Public")}
              className={`w-1/2 items-center justify-center text-center border p-3 ${
                visibility === "Public" ? "border-primary text-primary" : "border-terminal-input"
              }`}
            >
              <p>Public</p>
            </div>
            <div
              onClick={() => setVisibility("Private")}
              className={`w-1/2 items-center justify-center text-center border p-3 ${
                visibility === "Private" ? "border-primary text-primary" : "border-terminal-input"
              }`}
            >
              <p>Private</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI 자동 분석 안내 문구 */}
      <div className="border mt-10 border-terminal-input p-3 cursor-text w-full text-base text-text-tertiary flex items-center">
        <img src="/info.svg" alt="" className="w-5 mr-3" />
        AI가 에러를 분석해 카테고리, 심각도, 태그를 자동으로 분류합니다. 이전에 같은 에러를 겪었다면 바로 알려드립니다.
      </div>

      {/* 제출 / 취소 버튼 */}
      <div className="flex gap-5 font-mono mt-10">
        <button className="bg-primary w-3/4 h-15 cursor-pointer hover:bg-primary-hover">❯ Analyze and save</button>
        <button className="w-1/4 border border-terminal-input cursor-pointer hover:border-primary-hover">Cancel</button>
      </div>
    </div>
  )
}
