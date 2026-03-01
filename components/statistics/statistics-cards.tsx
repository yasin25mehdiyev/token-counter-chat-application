"use client"

import { MetricCard } from "@/components/statistics/metric-card"
import { cn } from "@/lib/utils"

type StatisticsCardsProps = {
  used: number
  remaining: number
  globalLimit: number
}

export function StatisticsCards({ used, remaining, globalLimit }: StatisticsCardsProps) {
  return (
    <div className={cn("grid grid-cols-2", "gap-6")}>
      <MetricCard
        title="Total Tokens Used"
        value={used}
        description="Sum of tokens across all messages"
      />

      <MetricCard
        title="Remaining Tokens"
        value={remaining}
        description={`Global limit (${globalLimit}) minus used tokens`}
      />
    </div>
  )
}