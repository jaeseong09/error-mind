'use client'

import { useState } from "react"
import NewProjectModal from "./NewProjectModal"

type Project = {
  id: string
  name: string
  tags: string[]
}



export default function ProjectsToggle() {
  const [open, setOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [Projects,setProjects]= useState([
  { id: "p_001", name: "Camplog", tags: ["React", "Spring Boot"] },
])

  const selected = Projects.find(p => p.id === selectedId)


  function onAdd(name:string,tags:string[]){
    let newproject = {
      id: crypto.randomUUID(),
      name:name,
      tags:tags
    }
    let copy =[...Projects]
    copy.push(newproject)
    setProjects(copy)
  }

  return (
    <div className="w-full ">

      <div className="flex items-center gap-3 px-4 py-4 cursor-pointer border border-border-default text-lg" onClick={() => setOpen(!open)}>
        <img src={selected ? "/folder.svg" : "/folder2.svg"} alt="" className="w-5" />
        <span className="font-mono text-text-secondary">{selected ? selected.name : "프로젝트를 선택하세요"}</span>
        {selected && selected.tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-full bg-bg-overlay text-text-secondary text-sm">{tag}</span>
        ))}
        <div className="flex-1" />
        <img src="/down-arrow.svg" alt="" className={`w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </div>

      {open && (
        <div className="border border-border-default mt-2">
          {Projects.map(project => (
            <div
              key={project.id}
              className={`flex items-center gap-3 px-4 py-4 cursor-pointer border-t border-border-default first:border-t-0 hover:bg-bg-elevated ${project.id === selectedId ? "border-l-2 border-l-primary bg-bg-elevated text-lg" : ""}`}
              onClick={() => { setSelectedId(project.id); setOpen(false) }}
            >
              <img src={project.id === selectedId ? "/folder.svg" : "/folder2.svg"} alt="" className="w-5" />
              <span className="font-mono">{project.name}</span>
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-bg-overlay text-text-secondary text-sm">{tag}</span>
              ))}
            </div>
          ))}

          <div
            className="flex items-center gap-2 px-4 py-3 border-t border-border-default text-primary cursor-pointer hover:bg-bg-elevated"
            onClick={() => { setOpen(false); setModal(true) }}
          >
            <span className="text-lg">+ New project</span>
          </div>
        </div>
      )}

      {modal && <NewProjectModal onAdd={onAdd}  onClose={() => setModal(false)} />}
    </div>
  )
}
