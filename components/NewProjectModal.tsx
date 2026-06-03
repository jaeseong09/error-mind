'use client'

import { useState } from "react"

// 프리셋 기술 스택 목록
const PRESET_TAGS = ["MySQL", "MongoDB", "Next.js", "NestJS", "TypeScript", "React", "Spring Boot", "FastAPI", "Docker"]

type Props = {
  onClose: () => void
  onAdd: (name: string, tags: string[]) => void
}

// 새 프로젝트 생성 모달 — 이름, 설명, 기술 스택 태그 입력
export default function NewProjectModal({ onClose, onAdd }: Props) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [customInput, setCustomInput] = useState("")

  // 프리셋 태그 추가 (중복 방지)
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) setTags([...tags, tag])
    setDropdownOpen(false)
  }

  // 태그 제거
  const removeTag = (tag: string) => setTags(tags.filter(t => t !== tag))

  // 커스텀 태그 추가 — Enter 키 또는 직접 호출
  const addCustomTag = () => {
    if (customInput.trim() && !tags.includes(customInput.trim())) {
      setTags([...tags, customInput.trim()])
      setCustomInput("")
    }
  }

  return (
    // 모달 바깥 클릭 시 닫기
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 font-mono" onClick={onClose}>
      <div className="bg-bg-surface border border-border-default rounded-xl w-full max-w-xl p-8" onClick={e => e.stopPropagation()}>

        {/* 헤더 */}
        <div className="flex items-center justify-between mb-7">
          <div className="flex items-center gap-3">
            <img src="/folder-plus.svg" alt="" className="w-6" />
            <span className="text-2xl font-bold">New project</span>
          </div>
          <button className="text-text-tertiary hover:text-text-primary text-lg" onClick={onClose}>✕</button>
        </div>

        {/* 프로젝트명 입력 (필수) */}
        <div className="mb-5">
          <p className="font-mono text-base text-text-tertiary mb-2">
            <span className="text-primary mr-2">❯</span>project_name
            <span className="text-red-400 ml-1">*</span>
          </p>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full bg-bg-elevated h-13 px-4 border border-terminal-input font-mono text-base outline-none focus:border-primary"
          />
        </div>

        {/* 설명 입력 (선택) */}
        <div className="mb-5">
          <p className="font-mono text-base text-text-tertiary mb-2">
            <span className="text-primary mr-2">❯</span>description
            <span className="text-text-tertiary ml-2">(optional)</span>
          </p>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={3}
            className="w-full bg-bg-elevated px-4 py-3 border border-terminal-input font-mono text-base outline-none focus:border-primary resize-none"
          />
        </div>

        {/* 기술 스택 태그 선택 */}
        <div className="mb-7">
          <p className="font-mono text-base text-text-tertiary mb-2">
            <span className="text-primary mr-2">❯</span>tech_stack
          </p>

          {/* 선택된 태그 목록 + 추가 버튼 */}
          <div className="bg-bg-elevated border border-terminal-input px-4 py-3 flex flex-wrap gap-2 items-center">
            {tags.map(tag => (
              <span key={tag} className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/30 text-primary text-base font-mono">
                {tag}
                <button className="hover:text-white ml-1 leading-none" onClick={() => removeTag(tag)}>×</button>
              </span>
            ))}
            <button className="text-text-tertiary text-base hover:text-text-primary font-mono" onClick={() => setDropdownOpen(!dropdownOpen)}>
              + add
            </button>
          </div>

          {/* 프리셋 태그 드롭다운 + 커스텀 태그 입력 */}
          {dropdownOpen && (
            <div className="border border-terminal-input mt-1 bg-bg-elevated max-h-48 overflow-y-auto">
              {PRESET_TAGS.filter(t => !tags.includes(t)).map(tag => (
                <div
                  key={tag}
                  className="px-4 py-3 font-mono text-base cursor-pointer hover:bg-bg-overlay border-b border-border-default last:border-b-0"
                  onClick={() => addTag(tag)}
                >
                  {tag}
                </div>
              ))}
              {/* 커스텀 태그 직접 입력 */}
              <div className="px-4 py-3 border-t border-border-default flex items-center gap-2">
                <span className="text-primary text-base font-mono">+ Custom:</span>
                <input
                  className="flex-1 bg-transparent outline-none font-mono text-base"
                  placeholder='"Docker"'
                  value={customInput}
                  onChange={e => setCustomInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addCustomTag()}
                />
              </div>
            </div>
          )}
        </div>

        {/* 생성 / 취소 버튼 */}
        <div className="flex gap-3">
          <button
            onClick={() => { onAdd(name, tags); onClose() }}
            className="flex-1 h-13 bg-primary hover:bg-primary-hover font-mono text-base rounded-lg"
          >
            + Create project
          </button>
          <button
            onClick={onClose}
            className="px-8 h-13 bg-bg-elevated border border-terminal-input text-text-secondary hover:text-text-primary font-mono text-base rounded-lg"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}
