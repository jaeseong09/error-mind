'use client'

import Link from "next/link"
import { useState } from "react";

export default function Register(){
  //비밀번호 state
  const [type,setType] = useState("password");
  const [password,setPassword] = useState("")

  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);

  // 비밀번호 확인 state
  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPassworType,setConfirmPasswordType] = useState("password");
  const isLengthValid = password.length >= 8;
  const isPasswordValid = hasLetter && hasNumber;
  const isMatch = password === confirmPassword;
  

  // 이메일 형식확인 state
  const [email,setEmail] = useState("")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);

  const isFormValid =
  isEmailValid &&
  isLengthValid &&
  isPasswordValid &&
  isMatch;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!isFormValid) return;
    console.log("회원가입:", email, password);
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
            <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-mono text-text-tertiary">ErrorMind - Signup</p>
          </div>

          <div className="p-5">
            <Link href={"/"}>
              <img src={"/ASCII.svg"} className="w-125 absolute left-1/2 -translate-x-1/2 pt-5 cursor-pointer" />
            </Link>
            <p className="mt-30 text-center text-2xl text-text-secondary">Get started</p>
            <form action="" className="mt-5 text-text-secondary font-mono" onSubmit={handleSubmit}>

              {/* // 닉네임 */}
              <label htmlFor="UserName">UserName</label>
              <input type="text" name="ID" className="mb-5 block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border"/>
              {/* //이메일 */}
              <label htmlFor="Email">Email</label>
              <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="email" className="mb-5 block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border"/>

              {/* //이메일 형식 확인 */}
              {
                email !== "" && !isEmailValid && ( <p className="mb-2 text-red-400">올바른 이메일 주소를 입력해주세요</p>)
              }

              {/* // 비밀번호 */}
              <label htmlFor="password" className="text-text-secondary">Password</label>
              <div className="relative mb-5">
                <input type={type} value={password} onChange={(e)=>{setPassword(e.target.value)}} className="block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border" />
                {
                  password ?
                    type=="text" ?
                    <div>
                      <img src={"/eye.svg"} alt="eye-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                      setType("password")
                      }}/>
                      <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setPassword("")
                      }}/>
                    </div>
                    :
                    <div>
                      <img src={"/eye-off.svg"} alt="eye-off-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setType("text")
                      }}/>
                      <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setPassword("")
                      }}/>
                    </div>
                  :
                  null
                }
                
              </div>
              
              {/* 비밀번호 길이 확인 */}
              {
                isLengthValid ? isPasswordValid?null :<p className="mb-2 text-red-400">영문과 숫자를 모두 포함해주세요</p> :password ? <p className="mb-2 text-red-400">비밀번호는 8자 이상이어야 해요</p> :null
              }

              

              {/* // 비밀번호 확인 */}
              <label htmlFor="Confirm Password" className="text-text-secondary">Confirm Password</label>
              <div className="relative">
                <input type={confirmPassworType} value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} className="block justify-self-center bg-bg-elevated w-full h-13 p-2 border-terminal-input border" />
                {
                  confirmPassword ?
                    confirmPassworType=="text" ?
                    <div>
                      <img src={"/eye.svg"} alt="eye-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setConfirmPasswordType("password")
                      }}/>
                      <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setConfirmPassword("")
                      }}/>
                    </div>
                    :
                    <div>
                      <img src={"/eye-off.svg"} alt="eye-off-icon"  className="absolute w-7 absolute right-11 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setConfirmPasswordType("text")
                      }}/>
                      <img src={"/remove.svg"} alt="remove-icon"  className="absolute w-7 absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer" onClick={()=>{
                        setConfirmPassword("")
                      }}/>
                    </div>
                  :
                  null
                }
              </div>
              {
                isMatch ? null : confirmPassword ? <p className="mb-2 text-red-400">비밀번호가 일치하지 않아요</p> :null
              }
              <button className={`block justify-self-center w-full h-13 p-2 bg-primary mt-8 text-text-primary hover:bg-primary-hover ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`} disabled={!isFormValid}>Sign up</button>
              <p className="mt-5">-------------------------------- or --------------------------------</p>
            </form>

            <button className="block justify-self-center w-full h-13 p-2 border-terminal-input border mt-5 text-text-primary flex items-center justify-center gap-2 hover:border-primary-hover"><img src={"/github-icon.png"} alt="github-icon" className="w-10"/> Continue with Github</button>
            <button className="block justify-self-center w-full h-13 p-2 border-terminal-input border mt-5 text-text-primary flex items-center justify-center gap-2 hover:border-primary-hover"> <img src={"/google-logo.webp"} alt="google-logo"  className="w-13 "/>Continue with Google</button>

            <p className="text-center mt-6 text-text-tertiary">Already have an account? <Link href={"/auth/login"} className="text-text-point cursor-pointer hover:text-text-hover">Log in</Link></p>
          </div>
          
          
        
      </div>
    </div>
  )
}