import type { Message } from "@/types/message"
import { STORAGE_KEY } from "@/lib/constant"

const isBrowser = () => typeof window !== "undefined"

function safeJsonParse<T>(raw: string): T | null {
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function getItem<T>(key: string): T | null {
  if (!isBrowser()) return null
  const raw = localStorage.getItem(key)
  if (!raw) return null
  return safeJsonParse<T>(raw)
}

function setItem<T>(key: string, value: T): void {
  if (!isBrowser()) return
  localStorage.setItem(key, JSON.stringify(value))
}

export const loadMessages = (): Message[] => {
  const data = getItem<Message[]>(STORAGE_KEY)
  return Array.isArray(data) ? data : []
}

export const saveMessages = (messages: Message[]): void => {
  setItem(STORAGE_KEY, messages)
}
