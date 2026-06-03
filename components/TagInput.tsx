'use client'

import { useState } from "react"

// 프리셋 태그 목록
const PRESET_TAGS = ["MySQL", "MongoDB", "Next.js", "NestJS", "TypeScript", "React", "Spring Boot", "FastAPI", "Docker"]

type Props = {
  tags: string[]              // 현재 선택된 태그 배열 (부모에서 관리)
  onChange: (tags: string[]) => void  // 태그 변경 시 부모로 전달하는 콜백
}

// 태그 입력 컴포넌트 — 프리셋 선택 또는 커스텀 입력, 태그 제거 지원
export default function TagInput({ tags, onChange }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [customInput, setCustomInput] = useState("")

  // 프리셋 태그 추가 (중복 방지)
  const addTag = (tag: string) => {
    if (!tags.includes(tag)) onChange([...tags, tag])
    setDropdownOpen(false)
  }

  // 태그 제거
  const removeTag = (tag: string) => onChange(tags.filter(t => t !== tag))

  // 커스텀 태그 추가 — Enter 키 또는 직접 호출
  const addCustomTag = () => {
    if (customInput.trim() && !tags.includes(customInput.trim())) {
      onChange([...tags, customInput.trim()])
      setCustomInput("")
    }
  }

  return (
    <div>
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
  )
}
