import PopularSolutions from "@/components/PopularSolutions";
import RecentErrors from "@/components/RecentErrors";
import TerminalInput from "@/components/TerminalInput";

export default function Dashboard(){
  return(
    <div className="p-10 w-full">
      <div className="w-ful ">

        <div className="grid grid-cols-4 gap-10 ">
          <div className="bg-terminal-bg h-40 border border-terminal-input p-10">
            <p className="text-5xl mb-3 font-semibold text-green-400">47</p>
            <p className="text-xl text-text-tertiary">Resolved</p>
          </div>
          <div className="bg-terminal-bg h-40 border border-terminal-input p-10">
            <p className="text-5xl mb-3 font-semibold text-red-400">3</p>
            <p className="text-xl text-text-tertiary">Unresolved</p>
          </div>
          <div className="bg-terminal-bg h-40 border border-terminal-input p-10">
            <p className="text-5xl mb-3 font-semibold text-yellow-400">2</p>
            <p className="text-xl text-text-tertiary">Recurring</p>
          </div>
          <div className="bg-terminal-bg h-40 border border-terminal-input p-10">
            <p className="text-5xl mb-3 font-semibold text-violet-400">7</p>
            <p className="text-xl text-text-tertiary">This Week</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 mt-10 text-xl text-text-tertiary">
          <div>
            <p className="mb-3">Recent Errors</p>
            <div className="mt-3 flex-col">
              <RecentErrors/>
            </div>
          </div>
          <div>
            <p className="mb-3">Popular Solutions</p>
            <PopularSolutions/>
          </div>
        </div>
      </div>
    </div>
  )
}