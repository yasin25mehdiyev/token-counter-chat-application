import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/core/card"
import { Button } from "@/components/shared/ui/core/button"
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <Card className={cn("border shadow-sm", "transition-transform duration-200 cursor-pointer", "hover:scale-[1.01]")}>
      <CardHeader className={cn("space-y-2")}>
        <CardTitle className={cn("text-2xl")}>Token Counter Chat</CardTitle>
        <p className={cn("text-sm text-gray-500")}>
          Write messages, see token usage live while typing, and track your total
          usage across sessions.
        </p>
      </CardHeader>

      <CardContent className={cn("flex items-center justify-between", "gap-6")}>
        <div className={cn("text-sm text-gray-600")}>
          <ul className={cn("list-disc pl-5 space-y-1")}>
            <li>1 token = 4 characters (rounded up)</li>
            <li>Max 100 tokens per message</li>
            <li>Global limit: 1000 tokens</li>
          </ul>
        </div>

        <Button asChild>
          <Link href="/chat">Start Chat</Link>
        </Button>
      </CardContent>
    </Card>
  )
}