'use client'

import { useState } from "react";

export default function ErrorMessageInput(){
  const [focus,setFocus] = useState(false);
  const [input,setInput] = useState("");
  return(
    <div className={`border  p-3 cursor-text relative bg-bg-elevated h-40 ${focus ? "border-primary" : "border-terminal-input"}`}>
      {
            focus === false && input === ""?
            <div className="pointer-events-none">
              <span className="text-text-tertiary">에러 메세지를 붙여넣으세요...</span>
              <span className="inline-block w-2 h-5 bg-primary align-middle animate-blink ml-1"></span>
            </div>
            :null
      }
      <textarea 
      onFocus={()=>{setFocus(true)}}
      onBlur={()=>{setFocus(false)}}
      name="" 
      id="" 
      className="absolute inset-0 w-full h-full bg-transparent text-text-primary p-3 outline-none font-mono text-base resize-none"></textarea>
    </div>
  )
}