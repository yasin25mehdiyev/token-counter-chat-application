"use client"

import { cn } from "@/lib/utils"

type LoaderProps = {
  className?: string
  label?: string
} 

export function Loader({ label = "Loading...", className }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center", "gap-3 py-10", "text-lg text-gray-500", className)}>
      <span className={cn("h-7 w-7 animate-spin", "rounded-full border-2 border-gray-300 border-t-gray-900")} />
      <span className={cn("ml-3 animate-pulse")}>{label}</span>
    </div>
  )
}
