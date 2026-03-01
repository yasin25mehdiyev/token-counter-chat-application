"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/core/card"
import { cn } from "@/lib/utils"

type UsageBarProps = {
  used: number
  globalLimit: number
}

export function UsageBar({ used, globalLimit }: UsageBarProps) {
  const percent =
    used >= globalLimit ? 100 : Math.floor((used / globalLimit) * 100)

  return (
    <Card className={cn("border shadow-sm cursor-pointer", "transition-all duration-200", "hover:scale-[1.01] hover:shadow-md")}>
      <CardHeader>
        <CardTitle>Usage</CardTitle>
      </CardHeader>

      <CardContent className={cn("space-y-3")}>
        <div className={cn("text-sm text-gray-500", "flex items-center justify-between")}>
          <span>
            {used} / {globalLimit} tokens
          </span>
          <span>{percent}%</span>
        </div>

        <div className={cn("h-3 w-full", "rounded-full bg-gray-200")}>
          <div
            className={cn("h-3 rounded-full", "bg-blue-600 transition-[width]")}
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className={cn("text-xs text-gray-400")}>
          Tip: Delete messages from the Chat page to free up tokens.
        </p>
      </CardContent>
    </Card>
  )
}
