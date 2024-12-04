import Link from "next/link"
import { Home, Compass, Grid2X2, Library } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-[240px] bg-[#1C1F1C] border-r border-gray-800 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <svg
            viewBox="0 0 24 24"
            className="w-6 h-6 text-white"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white font-semibold">perplexity</span>
        </div>
        <button className="w-full text-sm text-gray-300 flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-800/50">
          New Thread
          <div className="ml-auto flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 rounded">⌘</kbd>
            <kbd className="px-1.5 py-0.5 text-xs bg-gray-700 rounded">K</kbd>
          </div>
        </button>
      </div>
      <nav className="flex-1 px-2 py-4">
        <Link
          href="#"
          className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-gray-800/50 rounded-md"
        >
          <Home className="w-5 h-5" />
          Home
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-gray-800/50 rounded-md"
        >
          <Compass className="w-5 h-5" />
          Discover
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-gray-800/50 rounded-md"
        >
          <Grid2X2 className="w-5 h-5" />
          Spaces
        </Link>
        <Link
          href="#"
          className="flex items-center gap-3 px-2 py-2 text-gray-300 hover:bg-gray-800/50 rounded-md"
        >
          <Library className="w-5 h-5" />
          Library
        </Link>
      </nav>
      <div className="p-4 space-y-2">
        <Button className="w-full bg-[#5ED5A8] hover:bg-[#5ED5A8]/90 text-black">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
          Log in
        </Button>
      </div>
    </div>
  )
}

