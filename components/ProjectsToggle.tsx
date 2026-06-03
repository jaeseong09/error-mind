'use client'

import { useState } from "react"

import NewProjectModal from "./NewProjectModal"

type Project = {
  id: string
  name: string
  tags: string[]
}

type Props = {
  // 프로젝트 선택 시 해당 프로젝트의 태그 배열을 부모(page.tsx)로 전달하는 콜백
  onSelectProject: (tags: string[]) => void
}

// 프로젝트 선택 드롭다운 — 선택, 신규 생성(모달), 태그 표시
export default function ProjectsToggle({ onSelectProject }: Props) {
  const [open, setOpen] = useState(false)          // 드롭다운 열림 여부
  const [modal, setModal] = useState(false)         // 새 프로젝트 모달 열림 여부
  const [selectedId, setSelectedId] = useState<string | null>(null)  // 현재 선택된 프로젝트 ID

  // TODO: 추후 API에서 불러올 프로젝트 목록 (현재는 임시 데이터)
  const [projects, setProjects] = useState<Project[]>([
    { id: "p_001", name: "Camplog", tags: ["React", "Spring Boot"] },
  ])

  // 현재 선택된 프로젝트 객체
  const selected = projects.find(p => p.id === selectedId)

  // 새 프로젝트를 목록에 추가
  const onAdd = (name: string, tags: string[]) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name,
      tags,
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="w-full">

      {/* 선택된 프로젝트 표시 / 드롭다운 토글 */}
      <div
        className="flex items-center gap-3 px-4 py-4 cursor-pointer border border-border-default text-lg"
        onClick={() => setOpen(!open)}
      >
        <img src={selected ? "/folder.svg" : "/folder2.svg"} alt="" className="w-5" />
        <span className="font-mono text-text-secondary">
          {selected ? selected.name : "프로젝트를 선택하세요"}
        </span>
        {selected && selected.tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-bg-overlay text-text-secondary text-sm">{tag}</span>
        ))}
        <div className="flex-1" />
        <img src="/down-arrow.svg" alt="" className={`w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {/* 프로젝트 목록 드롭다운 */}
      {open && (
        <div className="border border-border-default mt-2">
          {projects.map(project => (
            <div
              key={project.id}
              className={`flex items-center gap-3 px-4 py-4 cursor-pointer border-t border-border-default first:border-t-0 hover:bg-bg-elevated ${
                project.id === selectedId ? "border-l-2 border-l-primary bg-bg-elevated text-lg" : ""
              }`}
              onClick={() => { setSelectedId(project.id); onSelectProject(project.tags); setOpen(false) }}
            >
              <img src={project.id === selectedId ? "/folder.svg" : "/folder2.svg"} alt="" className="w-5" />
              <span className="font-mono">{project.name}</span>
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-bg-overlay text-text-secondary text-sm">{tag}</span>
              ))}
            </div>
          ))}

          {/* 새 프로젝트 생성 버튼 — 클릭 시 모달 오픈 */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-t border-border-default text-primary cursor-pointer hover:bg-bg-elevated"
            onClick={() => { setOpen(false); setModal(true) }}
          >
            <span className="text-lg">+ New project</span>
          </div>
        </div>
      )}

      {/* 새 프로젝트 생성 모달 */}
      {modal && <NewProjectModal onAdd={onAdd} onClose={() => setModal(false)} />}
    </div>
  )
}
