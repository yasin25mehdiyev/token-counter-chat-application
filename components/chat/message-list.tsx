"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/core/card"
import type { Message } from "@/types/message"
import { MessageItem } from "@/components/chat/message-item"
import { cn } from "@/lib/utils"

type MessageListProps = {
  messages: Message[]
  onDelete: (id: string) => void
}

export function MessageList({ messages, onDelete }: MessageListProps) {
  const renderMessageContent = (messages: Message[]) => {
    if(messages.length === 0) return <div className={cn("text-sm text-gray-500")}>No messages yet.</div>
    return (
      messages.map((m) => (
        <MessageItem key={m.id} message={m} onDelete={onDelete} />
      ))
    )
  }
  return (
    <Card className={cn("border shadow-sm", "max-h-96 overflow-y-auto")}>
      <CardHeader>
        <CardTitle>Messages</CardTitle>
      </CardHeader>

      <CardContent className={cn("space-y-3")}>
        {renderMessageContent(messages)}
      </CardContent>
    </Card>
  )
}
