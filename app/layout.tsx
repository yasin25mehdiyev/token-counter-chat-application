import type { Metadata } from "next"
import { Header } from "@/components/shared/layout/header"
import { cn } from "@/lib/utils"

import "./globals.css"
import { TooltipProvider } from "@/components/shared/ui/core/tooltip"

export const metadata: Metadata = {
  title: "Token Counter Chat",
  description: "Token tracking chat application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={cn("min-h-screen", "bg-gray-100 text-gray-900")}>
        <TooltipProvider delayDuration={200}>
          <div className={cn("max-w-3xl mx-auto", "px-6 py-10")}>
            <Header />
            <main>{children}</main>
          </div>
        </TooltipProvider>
      </body>
    </html>
  )
}
