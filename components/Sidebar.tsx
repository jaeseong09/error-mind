'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div className="w-60 h-screen bg-terminal-bg flex-col flex" >
      <div className="p-5">
        <Link href={"/"}>
          <img src={"/ASCII.svg"} alt="" className="" />
        </Link>
      </div>
      <div className="border-b border-terminal-border border">
      </div>

      <div className="p-5">
        <Link href={"/dashboard"}>
          <div className={`w-full h-12   ${pathname == "/dashboard" ? "bg-primary" : 'text-text-tertiary hover:bg-terminal-bar'} `}>
            <div className={`flex ml-1 w-[98%] h-12 p-3 border-none ${pathname == "/dashboard" ? "bg-bg-sidebar" : "bg-none"}`}>
              <img src={"/bar-chart.svg"} alt="bar-chart.svg" className="w-5" />
              <p className="ml-2">Dashboard</p>
            </div>
          </div>
        </Link>

        <Link href={"/errors/new"}>
          <div className={`w-full h-12 mt-3 ${pathname == "/errors" ? "bg-primary" : 'text-text-tertiary hover:bg-terminal-bar'}`}>
            <div className={`flex ml-1 w-[98%] h-12 p-3 border-none ${pathname == "/errors" ? "bg-bg-sidebar" : "bg-none"}`}>
              <img src={"/pencil.svg"} alt="pencil.svg" className="w-5" />
              <p className="ml-2">New Error</p>
            </div>
          </div>
        </Link>

        <Link href={"/explore"}>
          <div className={`w-full h-12 mt-3  ${pathname == "/explore" ? "bg-primary" : 'text-text-tertiary hover:bg-terminal-bar'}`}>
            <div className={`flex ml-1 w-[98%] h-12 p-3 border-none ${pathname == "/explore" ? "bg-bg-sidebar" : "bg-none"}`}>
              <img src={"/search.svg"} alt="search.svg" className="w-6" />
              <p className="ml-1">Explore</p>
            </div>
          </div>
        </Link>

        <Link href={"/history"}>
          <div className={`w-full h-12 mt-3 ${pathname == "/history" ? "bg-primary" : 'text-text-tertiary hover:bg-terminal-bar'}`}>
            <div className={`flex ml-1 w-[98%] h-12 p-3 border-none ${pathname == "/history" ? "bg-bg-sidebar" : "bg-none"}`}>
              <img src={"/book.svg"} alt="book.svg" className="w-5" />
              <p className="ml-2">My History</p>
            </div>
          </div>
        </Link>


        <Link href={"/profile"}>
          <div className={`w-full h-12 mt-3 ${pathname == "/profile" ? "bg-primary" : 'text-text-tertiary hover:bg-terminal-bar'}`}>
            <div className={`flex ml-1 w-[98%] h-12 p-3 border-none ${pathname == "/profile" ? "bg-bg-sidebar" : "bg-none"}`}>
              <img src={"/user.svg"} alt="user.svg" className="w-5" />
              <p className="ml-2">Profile</p>
            </div>
          </div>
        </Link>



      </div>

      <div className="border-b border-terminal-border border mt-auto"></div>
      <div className="flex items-center p-4 gap-3">
        <Link href={"/profile"}>
          <div className="w-10 h-10 bg-primary rounded-full text-3xl flex justify-center items-center pb-1">s</div>
        </Link>
        <div className="flex flex-col">
          <div>wijaeseong</div>
          <div className="text-sm text-text-tertiary">online</div>
        </div>
      </div>
    </div>
  )
}