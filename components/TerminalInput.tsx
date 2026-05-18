'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

type Props = {
  PageRoute : boolean,
  w:number,
  mt:number
}

export default function TerminalInput(props:Props){
  const [input,setInput] = useState("");
  const [focus,setFocus] = useState(false);
  const [submitted,setSubmitted] = useState("");
  const [help,sethelp] = useState(false)

  let route = useRouter();
  return(
    <div>
        <div className={`border w-${props.w} border-terminal-input  p-3 cursor-text relative bg-bg-elevated mt-${props.mt} min-h-13`}>
          {
            focus === false && input === ""?
            <div className="pointer-events-none">
              <span className="text-primary">❯ </span>
              <span className="text-text-tertiary">에러 메세지를 붙여넣으세요...</span>
              <span className="inline-block w-2 h-5 bg-primary align-middle animate-blink ml-1"></span>
            </div>
            :null
          }
          <input 
            onFocus={()=>{setFocus(true)}}
            onBlur={()=>{setFocus(false)}}
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            onKeyDown={(e)=>{
              if(e.key==='Enter'){
                setSubmitted(input)
                setInput("")
                if(props.PageRoute==false){
                route.push("/errors")
              }
                if(props.PageRoute==true){
                  if(input === "/help"){
                    sethelp(true)
                  }
                  if(input === "/dashboard"){
                    route.push("/dashboard")
                  }
                  if(input === "/errors"){
                    route.push("/errors/new")
                  }
                  if(input === "/explore"){
                    route.push("/explore")
                  }
                  if(input === "/history"){
                    route.push("/history")
                  }
                  if(input === "/login"){
                    route.push("/auth/login")
                  }
                }
              }
            }}
            type="text" 
            className="absolute inset-0 w-full h-full bg-transparent text-text-primary pl-3 outline-none font-mono text-lg"
          />
          
      
        </div>
        {
            help === true ? 
            <div>
              <pre className="text-text-tertiary">{`
$ /help

ErrorMind — 에러 해결 & 추천 시스템

명령어:
/dashboard  대시보드로 이동
/errors     에러를 입력하고 AI 해결 힌트를 받으세요
/explore    다른 개발자들의 에러와 해결법을 탐색
/history    내가 해결한 에러 히스토리
/login      로그인 / 회원가입
`}</pre>
            </div> 
            :null
          }
          </div>
  )
}