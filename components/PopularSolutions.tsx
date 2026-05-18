import Link from "next/link";

export default function PopularSolutions(){
  const popularSolutions = [
    {
      id: "sol_001",
      title: 'unique "key" prop 해결법',
      description: "map() 사용 시 key에 index 대신 고유값 사용",
      tags: ["React"],
      upvotes: 31,
    },
    {
      id: "sol_002",
      title: "CORS 에러 해결법",
      description: "NestJS에서 enableCors() 설정 또는 proxy 설정으로 우회",
      tags: ["NestJS", "API"],
      upvotes: 24,
    },
    {
      id: "sol_003",
      title: "Cannot find module 경로 에러",
      description: "tsconfig.json의 paths와 baseUrl 설정 확인",
      tags: ["TypeScript", "Next.js"],
      upvotes: 18,
    },
    {
      id: "sol_004",
      title: "Hydration Mismatch 해결법",
      description: "useEffect로 클라이언트 전용 렌더링 분리하기",
      tags: ["Next.js", "SSR"],
      upvotes: 15,
    },
  ];

  return(
    <>
      {
        popularSolutions.map((a)=>{
          return(
            <Link key={a.id} href={""}>
              <div className="p-6 mb-5 bg-terminal-bg border border-terminal-input">
                <div className="flex gap-5 mb-3">
                  <p className="text-green-400">👍 {a.upvotes}</p>
                  <h1 className="text-white font-normal line-clamp-1">{a.title}</h1>
                </div>
                <p className="font-normal line-clamp-2 mb-3">{a.description}</p>
                <div className="flex">
                  {
                      a.tags.map((tag)=>{
                        return(
                          <div key={tag} className={"font-medium text-sm px-3 py-1 rounded-full bg-violet-500/8 text-violet-400"}>{tag}</div>
                        )
                      })
                    }
                </div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}