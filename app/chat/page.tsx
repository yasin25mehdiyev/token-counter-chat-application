"use client"

import { useTokenChat } from "@/hooks/use-token-chat"
import { useSmoothLoader } from "@/hooks/use-smooth-loader"

import { ChatComposer } from "@/components/chat/chat-composer"
import { MessageList } from "@/components/chat/message-list"
import { cn } from "@/lib/utils"
import { Loader } from "@/components/shared/ui/custom/loader"

export default function ChatPage() {
  const {
    input,
    setInput,
    messages,
    messageTokens,
    totalTokens,
    canSubmit,
    submitErrorText,
    isPageReady,
    handleSubmit,
    handleDelete,
  } = useTokenChat()

  const { showLoader } = useSmoothLoader(isPageReady)

  if(showLoader) return <Loader />

  return (
    <div className={cn("space-y-6 mt-8")}>
      <ChatComposer
        value={input}
        onChange={setInput}
        messageTokens={messageTokens}
        totalTokens={totalTokens}
        canSubmit={canSubmit}
        errorText={submitErrorText}
        onSubmit={handleSubmit}
      />

      <MessageList messages={messages} onDelete={handleDelete} />
    </div>
  )
}
