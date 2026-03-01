"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { normalizePath } from "@/lib/normalize-path"

export function Header() {
  const pathname = normalizePath(usePathname())

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chat", href: "/chat" },
    { label: "Statistics", href: "/statistics" },
  ]

  return (
    <header className={cn("flex items-center justify-between", "bg-white rounded-lg", "px-3 py-2")}>
      <Link href="/" className={cn("text-xl font-semibold", "tracking-tight transition-opacity", "hover:opacity-80")}>
        Token Chat
      </Link>

      <nav className={cn("text-sm", "flex gap-6")}>
        {navItems.map((item) => {
          const href = normalizePath(item.href)

          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.endsWith(href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-blue-600",
                {
                  "text-blue-600 font-medium": isActive,
                  "text-gray-500": !isActive
                }
              )}
            >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
