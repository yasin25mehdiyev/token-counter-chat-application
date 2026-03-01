"use client"

import { useTokenChat } from "@/hooks/use-token-chat"
import { GLOBAL_LIMIT } from "@/lib/constant"
import { StatisticsCards } from "@/components/statistics/statistics-cards"
import { UsageBar } from "@/components/statistics/usage-bar"
import { cn } from "@/lib/utils"
import { Loader } from "@/components/shared/ui/custom/loader"
import { useSmoothLoader } from "@/hooks/use-smooth-loader"

export default function StatisticsPage() {
  const { totalTokens: used, remainingTokens: remaining, isPageReady } = useTokenChat()
  const { showLoader } = useSmoothLoader(isPageReady)

  if(showLoader) return <Loader />

  return (
    <div className={cn("space-y-6")}>
      <StatisticsCards used={used} remaining={remaining} globalLimit={GLOBAL_LIMIT} />
      <UsageBar used={used} globalLimit={GLOBAL_LIMIT} />
    </div>
  )
}
