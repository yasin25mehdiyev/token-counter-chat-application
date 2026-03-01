"use client"
import { useEffect, useMemo, useState } from "react"
import type { Message } from "@/types/message"
import { loadMessages, saveMessages } from "@/lib/storage"
import {
  calculateTokens,
  calculateTotalTokens,
  canSubmitMessage,
} from "@/lib/token"
import { GLOBAL_LIMIT } from "@/lib/constant"

export function useTokenChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>("")
  const [hydrated, setHydrated] = useState<boolean>(false)

  // load persisted messages (once)
  useEffect(() => {
    setMessages(loadMessages())
    setHydrated(true)
  }, [])

  // persist messages (on change)
  useEffect(() => {
    if (!hydrated) return
    saveMessages(messages)
  }, [messages, hydrated])

  const messageTokens = useMemo(() => calculateTokens(input), [input])

  const totalTokens = useMemo(
    () => calculateTotalTokens(messages),
    [messages]
  )

  const remainingTokens = Math.max(0, GLOBAL_LIMIT - totalTokens)

  const submitCheck = useMemo(
    () => canSubmitMessage(messageTokens, totalTokens),
    [messageTokens, totalTokens]
  )

  const canSubmit = submitCheck.ok

  const submitErrorText = useMemo(() => {
    if (submitCheck.ok) return ""
    if (submitCheck.reason === "EMPTY") return "Message can not be empty."
    if (submitCheck.reason === "PER_MESSAGE_LIMIT")
      return "Message exceeds the 100-token limit."
    return "Global token limit reached. Delete a message to continue."
  }, [submitCheck])

  const handleSubmit = () => {
    if (!canSubmit) return

    const text = input.trim()
    const tokens = calculateTokens(text)
    const reCheck = canSubmitMessage(tokens, totalTokens)
    if (!reCheck.ok) return

    const newMessage: Message = {
      id: crypto.randomUUID(),
      text,
      tokens,
      createdAt: Date.now(),
    }

    setMessages((prev) => [newMessage, ...prev])
    setInput("")
  }

  const handleDelete = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id))
  }

  return {
    input,
    setInput,
    messages,
    messageTokens,
    totalTokens,
    remainingTokens,
    canSubmit,
    submitErrorText,
    isPageReady: hydrated,
    handleSubmit,
    handleDelete,
  }
}
