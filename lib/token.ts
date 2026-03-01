import type { Message, SubmitMessageReasonUnion } from "@/types/message"
import { GLOBAL_LIMIT, PER_MESSAGE_LIMIT, TOKEN_PER_CHAR } from "./constant"

export const calculateTokens = (text: string): number => {
  return Math.ceil(text.length / TOKEN_PER_CHAR)
}

export const calculateTotalTokens = (messages: Message[]): number => {
  return messages.reduce((acc, m) => acc + m.tokens, 0)
}

export const canSubmitMessage = (
  messageTokens: number,
  totalTokens: number
): { ok: boolean; reason?: SubmitMessageReasonUnion } => {
  const nextTotal = totalTokens + messageTokens
  
  if (messageTokens === 0) return { ok: false, reason: "EMPTY" }
  if (messageTokens > PER_MESSAGE_LIMIT) return { ok: false, reason: "PER_MESSAGE_LIMIT" }
  if (nextTotal > GLOBAL_LIMIT) return { ok: false, reason: "GLOBAL_LIMIT" }
  return { ok: true }
}
