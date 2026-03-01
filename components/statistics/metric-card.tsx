"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/core/card"
import { cn } from "@/lib/utils"

type MetricCardProps = {
  title: string
  value: number
  description: string
}

export function MetricCard({ title, value, description }: MetricCardProps) {
  return (
    <Card className={cn("border shadow-sm cursor-pointer", "transition-all duration-200", "hover:scale-[1.01] hover:shadow-md")}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className={cn("text-4xl font-semibold", "tracking-tight")}>{value}</div>
        <p className={cn("mt-2", "text-sm text-gray-500")}>{description}</p>
      </CardContent>
    </Card>
  )
}
