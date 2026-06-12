'use client'

import { useRef, useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'


// 내 해결 메모 에디터 — 툴바(Bold / Code / Table / Preview) + react-markdown 연동 예정
export default function SolutionEditor() {
  const [text, setText] = useState('');
  const [focus, setFocus] = useState(false)
  const [isPreview, setIsPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const wrap = (before: string, after: string) => {
    const el = textareaRef.current
    if (!el) return
    const start = el.selectionStart
    const end = el.selectionEnd
    const selected = text.substring(start, end)
    const newText = text.substring(0, start) + before + selected + after + text.substring(end)
    setText(newText)

    setTimeout(() => el.setSelectionRange(start + before.length, end + before.length), 0)
  }

  return (
    <div className="bg-bg-elevated p-5 mt-10 border border-l-3 border-l-violet-500 border-gray-700">
      <div className='flex items-center'>
        <img className='w-5 mr-3' src="/pen.svg" alt="" />
        <p className='text-lg'>My solution</p>
        <p className='ml-3 text-text-tertiary text-base'>Markdown supported</p>

        {/* 에디터 툴바 버튼 그룹 */}
        <div className='flex ml-auto gap-3 '>
          <div onClick={() => { wrap('**', '**') }} className='bg-gray-800 px-3 py-1 text-sm rounded-md text-[#52525B] font-semibold'>B</div>
          <div onClick={() => { wrap('`', '`') }} className='flex items-center justify-center bg-gray-800 px-3 py-1 text-sm rounded-md cursor-pointer'>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 6L3 10L7 14" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 6L17 10L13 14" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div onClick={() => { wrap('```\n', '\n```') }} className='flex items-center justify-center bg-gray-800 px-3 py-1 text-sm rounded-md cursor-pointer'>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="2" y="4" width="16" height="12" rx="2" stroke="#52525B" strokeWidth="1.5"/>
              <path d="M2 8H18" stroke="#52525B" strokeWidth="1.5"/>
              <path d="M5 12H9" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div onClick={() => { setIsPreview(!isPreview) }} className='flex items-center justify-center bg-gray-800 px-3 py-1 text-sm rounded-md text-[#52525B]'><img src="/eye-gray.svg" className='w-5 mr-1' alt="" />Preview</div>
        </div>
      </div>

      <div className={` bg-bg-base p-5 mt-5 border  rounded-md overflow-y-scroll ${focus ? "border-primary" : "border-gray-700"}`}>
        {
          !isPreview ?
            <>
              <textarea ref={textareaRef} onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault()
                  const el = e.currentTarget
                  const start = el.selectionStart
                  const end = el.selectionEnd
                  const newText = text.substring(0, start) + '  ' + text.substring(end)
                  setText(newText)
                  setTimeout(() => el.setSelectionRange(start + 2, start + 2), 0)
                }
              }} onBlur={() => { setFocus(false) }} onFocus={() => { setFocus(true) }}
                className='h-100 w-full focus:outline-none' name="" id="" onChange={(e) => { setText(e.target.value) }} value={text}></textarea>
            </>
            :
            <div >
              <Markdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                components={{
                  h1: ({ children }) => <h1 className="text-4xl font-bold tracking-tight mb-2 mt-6">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold mt-6 mb-2">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold mt-4 mb-1">{children}</h3>,
                  p: ({ children }) => <p className="leading-relaxed mb-3">{children}</p>,
                  strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                  code: ({ children, className }) => {
                    const isBlock = Boolean(className)
                    const language = className?.replace('language-', '') ?? 'text'
                    if (isBlock) return (
                      <SyntaxHighlighter language={language} style={oneDark} PreTag="div">
                        {String(children)}
                      </SyntaxHighlighter>
                    )
                    return <code className="bg-gray-800 text-red-300 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
                  },
                  ul: ({ children }) => <ul className="list-disc pl-6 mb-3 space-y-1">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal pl-6 mb-3 space-y-1">{children}</ol>,
                  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
                  blockquote: ({ children }) => <blockquote className="border-l-3 border-gray-500 pl-4 italic text-text-tertiary my-3">{children}</blockquote>,
                  hr: () => <hr className="border-gray-700 my-4" />,
                }}
              >
                {text}
              </Markdown>
            </div>
        }

      </div>
    </div >
  )
}
