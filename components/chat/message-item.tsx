"use client"

import { cn } from "@/lib/utils"
import type { Message } from "@/types/message"
import { IconButton } from "@/components/shared/ui/custom/icon-button"
import { Trash2 } from "lucide-react"

type MessageItemProps = {
  message: Message
  onDelete: (id: string) => void
}

export function MessageItem({ message, onDelete }: MessageItemProps) {
  return (
    <div className={cn("flex items-center justify-between", "gap-4 rounded-lg border", "bg-white p-4", "transition-transform duration-200 cursor-pointer", "hover:scale-[1.01]")}>
      <div className={cn("min-w-0")}>
        <p className={cn("whitespace-pre-wrap break-words", "text-sm text-gray-900")}>
          {message.text}
        </p>
        <p className={cn("mt-2", "text-xs text-gray-500")}>{message.tokens} tokens</p>
      </div>

      <IconButton
        icon={Trash2}
        label="Delete"
        className={cn("text-red-600", "hover:text-red-700")}
        onClick={() => onDelete(message.id)}
      />
    </div>
  )
}
