'use client'

import Link from "next/link";
import { useState } from "react"

export default function Login(){
  //비밀번호 확인 state
  const [type,setType] = useState("password");
  const [input,setinput] = useState("")
  const isPasswordFilled = input.length > 0;

  // 이메일 형식확인 state
  const [email,setEmail] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const isFormValid = isEmailValid && isPasswordFilled;

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); 

  if (!isFormValid) return;

  console.log("로그인 시도:", email, input);
}

  return(
    <div className="bg-bg-base min-h-screen w-full flex items-center justify-center p-10 font-mono">
      <div className="w-[700px] min-h-[750px] bg-terminal-bg border border-terminal-border rounded-xl overflow-hidden">
        <div className="w-full bg-terminal-bar h-10 relative pl-5 pt-3">
          <div className="flex gap-2">
            <div className="rounded-full bg-red-400 w-4 h-4"></div>
            <div className="rounded-full bg-amber-400 w-4 h-4"></div>
            <div className="rounded-full bg-lime-400 w-4 h-4"></div>
          </div>
          <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-mono text-text-tertiary">ErrorMind - login</p>
        </div>

      <div className="p-5">
        <Link href={"/"}>
          <img src={"/ASCII.svg"} className="w-125 absolute left-1/2 -translate-x-1/2 pt-5 cursor-pointer" />
        </Link>
        <p className="mt-30 text-center text-2xl text-text-secondary">Welcome back</p>
        <form action="" className="mt-5 text-text-secondary font-mono" onSubmit={handleSubmit}>

          {/* 이메일 */}
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="mb-7 block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border"/>

          {/* //이메일 형식 확인 */}
          {
            email !== "" && !isEmailValid && ( <p className="mb-2 text-red-400">올바른 이메일 주소를 입력해주세요</p>)
          }

          {/* 비밀번호 */}
          <label htmlFor="password" className="text-text-secondary">Password <span className="text-left ml-103 text-text-point cursor-pointer hover:text-text-hover">Forgot password?</span></label>
          <div className="relative">
            <input type={type} value={input} onChange={(e)=>{setinput(e.target.value)}} className="block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border" />

            {/* 비밀번호 속성 */}
            {
              input ?
                type=="text" ?
                <div>
                  <img src={"/eye.svg"} alt="eye-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                  setType("password")
                  }}/>
                  <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                    setinput("")
                  }}/>
                </div>
                :
                <div>
                  <img src={"/eye-off.svg"} alt="eye-off-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                    setType("text")
                  }}/>
                  <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                    setinput("")
                  }}/>
                </div>
              :
              null
            }
          </div>
          <button className={`block justify-self-center w-full h-13 p-2 bg-primary mt-8 text-text-primary hover:bg-primary-hover ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isFormValid}>Login</button>
          <p className="mt-5">-------------------------------- or --------------------------------</p>
          </form>
          
          <button className="block justify-self-center w-full h-13 p-2 border-terminal-input border mt-5 text-text-primary flex items-center justify-center gap-2 hover:border-primary-hover"><img src={"/github-icon.png"} alt="github-icon" className="w-10"/> Continue with Github</button>
          <button className="block justify-self-center w-full h-13 p-2 border-terminal-input border mt-5 text-text-primary flex items-center justify-center gap-2 hover:border-primary-hover"> <img src={"/google-logo.webp"} alt="google-logo"  className="w-13 "/>Continue with Google</button>
        <p className="text-center mt-6 text-text-tertiary">Don't have an account? <Link href={"/auth/register"} className="text-text-point cursor-pointer hover:text-text-hover">Sign up</Link></p>
      </div>
      </div>
    </div>
  )
}


// // Todo
// Forgot password? 이메일 인증 구현
// 구글, 깃헙 소셜 로그인 구현
// Sign up 페이지 연결