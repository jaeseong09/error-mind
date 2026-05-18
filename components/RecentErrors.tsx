import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";

export default function RecentErrors(){
  const recentErrors = [
    {
      id: "err_001",
      message: "TypeError: Cannot read properties of undefined (reading 'map')",
      aiCategory: "런타임 에러",
      tags: ["React", "TypeScript"],
      isResolved: false,
      createdAt: "2026-05-05T09:23:00Z",
      updatedAt: "2026-05-05T09:23:00Z",
      likeCount: 12,
    },
    {
      id: "err_002",
      message: "ECONNREFUSED 127.0.0.1:27017 - MongoDB connection failed",
      aiCategory: "연결 에러",
      tags: ["MongoDB", "NestJS"],
      isResolved: false,
      createdAt: "2026-05-04T17:45:00Z",
      updatedAt: "2026-05-04T17:45:00Z",
      likeCount: 7,
    },
    {
      id: "err_003",
      message: "Module not found: Can't resolve '@/components/Button'",
      aiCategory: "빌드 에러",
      tags: ["Next.js", "Import"],
      isResolved: true,
      createdAt: "2026-05-04T14:12:00Z",
      updatedAt: "2026-05-04T16:30:00Z",
      likeCount: 24,
    },
    {
      id: "err_004",
      message: "JWT malformed - invalid token signature",
      aiCategory: "인증 에러",
      tags: ["JWT", "Passport"],
      isResolved: true,
      createdAt: "2026-05-03T20:30:00Z",
      updatedAt: "2026-05-04T09:15:00Z",
      likeCount: 31,
    },
    {
      id: "err_005",
      message: "Hydration failed because the initial UI does not match server render",
      aiCategory: "SSR 에러",
      tags: ["Next.js", "SSR"],
      isResolved: false,
      createdAt: "2026-05-03T11:05:00Z",
      updatedAt: "2026-05-03T11:05:00Z",
      likeCount: 3,
    },
    {
      id: "err_006",
      message: "AxiosError: Request failed with status code 429 - Rate limit exceeded",
      aiCategory: "API 에러",
      tags: ["Axios", "OpenAI"],
      isResolved: true,
      createdAt: "2026-05-02T08:50:00Z",
      updatedAt: "2026-05-02T11:20:00Z",
      likeCount: 18,
    },
  ];
  return(
    <>
      {
        recentErrors.map((a,i)=>{
          return(
            <Link href={""} key={a.id}>
              <div className={`p-6 mb-5 bg-terminal-bg border border-terminal-input border-l-3 ${a.isResolved == false ? "border-l-red-400 " : "border-l-green-400"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`font-medium text-sm px-3 py-1 rounded-full ${a.isResolved == false ? "bg-red-500/8 text-red-400" : "bg-green-500/8 text-green-400"}`}>{a.aiCategory}</div>
                  {
                    a.tags.map((tag)=>{
                      return(
                        <div key={tag} className={"font-medium text-sm px-3 py-1 rounded-full bg-violet-500/8 text-violet-400"}>{tag}</div>
                      )
                    })
                  }
                </div>
                <h1 className="font-normal text-white line-clamp-2 mb-3">
                  {a.message}
                </h1>
                <div className="flex gap-5">
                  <p className="font-medium">{formatDistanceToNow(new Date(a.updatedAt), { addSuffix: true })}</p>
                  <p>👍 {a.likeCount}</p>
                </div>
              </div>
            </Link>
          )
        })
      }
    </>
  )
}