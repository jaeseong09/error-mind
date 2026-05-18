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
        <p className="text-text-tertiary mt-10">해결하고, 기록하고, 예방하세요. 당신의 에러는 두 번 발생하지 않습니다.</p>
        <p className="text-text-tertiary mt-2.5"> 1. 에러를 붙여넣으세요.</p>
        <p className="text-text-tertiary mt-2.5">2. AI가 원인을 분석하고 해결 힌트를 제공합니다.</p>
        <p className="text-text-tertiary mt-2.5">3. 해결 후 기록하면 다음엔 바로 찾을 수 있습니다.</p>
        <p className="text-text-tertiary mt-2.5">4. <span className="text-text-point">/help</span> for more information. </p>
        <TerminalInput PageRoute={true} w={225} mt={10}></TerminalInput>

        <div className="mt-5 flex-3">
          
        </div>

      <div className="flex-1 border-t border-terminal-border ">
        <p className="text-text-point pt-8 pb-4">$ errormind tags --popula</p>
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
