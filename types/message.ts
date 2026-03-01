export interface Message {
  id: string
  text: string
  tokens: number
  createdAt: number
}

export type SubmitMessageReasonUnion = "EMPTY" | "PER_MESSAGE_LIMIT" | "GLOBAL_LIMIT" 
