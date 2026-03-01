"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/core/card"
import { Textarea } from "@/components/shared/ui/core/textarea"
import { Button } from "@/components/shared/ui/core/button"
import { cn } from "@/lib/utils"
import { GLOBAL_LIMIT, PER_MESSAGE_LIMIT } from "@/lib/constant"

type ChatComposerProps = {
  value: string
  onChange: (value: string) => void
  messageTokens: number
  totalTokens: number
  canSubmit: boolean
  errorText?: string
  onSubmit: () => void
}

export function ChatComposer({
  value,
  onChange,
  messageTokens,
  totalTokens,
  canSubmit,
  errorText,
  onSubmit,
}: ChatComposerProps) {
  const isOverPerMessage = messageTokens > PER_MESSAGE_LIMIT
  const isOverGlobal = totalTokens + messageTokens > GLOBAL_LIMIT

  const renderShowErrorText = () => {
    if(errorText) return <div className={cn("text-xs text-red-600")}>{errorText}</div>
    return (
      <div className={cn("text-xs text-gray-400")}>
        1 token = 4 characters (rounded up)
      </div>
    )
  }

  return (
    <Card className={cn("border shadow-sm")}>
      <CardHeader>
        <CardTitle>Write a message</CardTitle>
      </CardHeader>

      <CardContent className={cn("space-y-4")}>
        <Textarea
          placeholder="Type your message..."
          className={cn("min-h-[120px]")}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        <div className={cn("flex items-center justify-between", "gap-4")}>
          <div className={cn("space-y-1 text-sm")}>
            <div
              className={cn(
                "text-gray-500",
                {
                  "text-red-600 font-medium": isOverPerMessage,
                }
              )}
            >
              {messageTokens} / {PER_MESSAGE_LIMIT} tokens
              <span className={cn("text-gray-400")}> • </span>
              <span className={cn("", {
                "text-red-600 font-medium": isOverGlobal
              })}>
                Total used: {totalTokens} / {GLOBAL_LIMIT}
              </span>
            </div>

            {renderShowErrorText()}
          </div>

          <Button onClick={onSubmit} disabled={!canSubmit}>
            Send Message
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
