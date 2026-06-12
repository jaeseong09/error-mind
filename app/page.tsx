import PopularTags from "@/components/PopularTags";
import TerminalInput from "@/components/TerminalInput";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-terminal-bg h-full font-mono">
      <nav className="relative bg-terminal-bar text-text-tertiary h-10 font-mono px-5 py-3 w-full">
        <div className="flex justify-between items-center w-full">

          <div className="flex gap-2 -mt-1">
            <div className="rounded-full bg-red-400 w-4 h-4"></div>
            <div className="rounded-full bg-amber-400 w-4 h-4"></div>
            <div className="rounded-full bg-lime-400 w-4 h-4"></div>
          </div>

          <div className="flex gap-5 -mt-1">
            <Link href="/explore" className="text-text-secondary hover:text-text-hover">explore</Link>
            <Link href="/history" className="text-text-secondary hover:text-text-hover">history</Link>
            <Link href="/auth/login" className="text-text-point hover:text-text-hover">login</Link>
          </div>

        </div>

        <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          ErrorMind - terminal
        </p>
      </nav>

      <div className="pt-10 pr-10 pl-10 pb-0 font-mono flex flex-col min-h-screen">
        <img src={"/ASCII.svg"} className="w-225"></img>
        <p className="mt-10 text-2xl text-text-primary">같은 에러, 두 번 검색하지 마세요</p>
        <p className="text-text-tertiary mt-2.5 ">해결하고, 기록하고, 예방하세요. 당신의 에러는 두 번 발생하지 않습니다.</p>
        <p className="text-text-tertiary mt-5"> 1. 에러를 붙여넣으세요.</p>
        <p className="text-text-tertiary mt-2.5">2. 이전에 해결한 기록이 있으면 바로 보여드립니다.</p>
        <p className="text-text-tertiary mt-2.5">3. 처음 만난 에러라면 AI가 힌트를 제공합니다.</p>
        <p className="text-text-tertiary mt-2.5">4. 해결 후 기록하면 나만의 에러 사전이 됩니다.</p>
        <p className="text-text-tertiary mt-2.5">5. <span className="text-text-point">/help</span> for more information. </p>
        <TerminalInput PageRoute={true} w={225} mt={10}></TerminalInput>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {/* Paste and find */}
          <div className="bg-bg-surface border border-border-default  p-6">
            <svg className="w-7 h-7 text-primary mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M16.5 16.5l4 4" />
            </svg>
            <p className="text-text-primary font-bold mb-2">Paste and find</p>
            <p className="text-text-tertiary text-sm leading-relaxed">에러를 붙여넣으면 과거 기록에서<br />같은 에러를 찾아줍니다</p>
          </div>

          {/* AI hints, not answers */}
          <div className="bg-bg-surface border border-border-default  p-6">
            <svg className="w-7 h-7 text-semantic-info mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a7 7 0 0 1 4 12.9V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.1A7 7 0 0 1 12 2z" />
              <path strokeLinecap="round" d="M9 21h6M10 18v3M14 18v3" />
            </svg>
            <p className="text-text-primary font-bold mb-2">AI hints, not answers</p>
            <p className="text-text-tertiary text-sm leading-relaxed">AI가 정답 대신 힌트를 줍니다. 직접<br />해결해야 실력이 됩니다</p>
          </div>

          {/* Build your error dictionary */}
          <div className="bg-bg-surface border border-border-default  p-6">
            <svg className="w-7 h-7 text-semantic-success mb-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <rect x="4" y="2" width="14" height="20" rx="1" /><path strokeLinecap="round" d="M8 6h6M8 10h6M8 14h4" /><path d="M16 2v20" />
            </svg>
            <p className="text-text-primary font-bold mb-2">Build your error dictionary</p>
            <p className="text-text-tertiary text-sm leading-relaxed">해결할수록 내 에러 사전이 쌓여서<br />AI 의존도가 줄어듭니다</p>
          </div>
        </div>

        <div className="flex-1 border-t border-terminal-border ">
          <p className="text-text-point pt-8 pb-4">$ errormind tags --popular</p>
          <PopularTags></PopularTags>
        </div>

        <div className="mt-auto border-t border-terminal-border left-0 right-0 px-5 py-2 text-sm text-text-tertiary">
          <div className="flex justify-between items-center w-full">
            <p className="items-center">errormind v1.0.0</p>
            <p className="items-center absolute left-1/2 -translate-x-1/2">ready</p>
            <p className="items-center text-lime-300">online</p>
          </div>
        </div>
      </div>
    </div>
  );
}
