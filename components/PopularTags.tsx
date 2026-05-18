'use client'

import { useState } from "react"

export default function PopularTags(){
  const [popularTags,setPopularTags] = useState(['react', 'typescript', 'next.js', 'node.js','spring'])
  return(
    <>
    <div  className="flex flex-wrap gap-2 pb-3">
      {
        popularTags.map((a,i)=>{
          return(
                <span key={i} className="inline-flex items-center rounded-xl bg-purple-400/10 px-4 py-2 text-base font-medium text-purple-400 hover:bg-primary-hover">{a}</span>
          )
        })
      }
      </div>
    </>
  )
}