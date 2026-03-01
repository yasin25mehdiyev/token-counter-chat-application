"use client"

import { Button } from "../../core/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../core/tooltip"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type IconButtonProps = {
  icon: LucideIcon
  label: string
  onClick?: () => void
  className?: string
  variant?: "ghost" | "outline" | "default"
  size?: "icon" | "sm" | "default"
  disabled?: boolean
}

export function IconButton({
  icon: Icon,
  label,
  onClick,
  className,
  variant = "ghost",
  size = "icon",
  disabled,
}: IconButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label={label}
          variant={variant}
          size={size}
          disabled={disabled}
          onClick={onClick}
          className={cn(className)}
        >
          <Icon className="h-4 w-4" />
        </Button>
      </TooltipTrigger>

      <TooltipContent side="top">
        {label}
      </TooltipContent>
    </Tooltip>
  )
}
