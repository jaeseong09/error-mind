import ProjectsToggle from "@/components/ProjectToggle";

export default function Errors(){
  return(
    <div className="p-10 w-full">
      <p className="text-4xl font-mono mb-1"><span className="text-3xl text-primary mr-2">❯</span>New error report</p>
      <p className="pl-10 text-text-tertiary mb-10">에러를 붙여넣으면 AI가 분석하고, 프로젝트에 기록합니다</p>

      <p className="text-text-tertiary text-xl font-mono mb-2"><span className="text-lg text-primary mr-2">❯</span>project<span className="pl-1 text-red-400">*</span></p>
      <ProjectsToggle></ProjectsToggle>
    </div>
  )
}