import * as React from "react"
import { cn } from "@/lib/utils"

export const HalftoneBg = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "halftone-bg w-full h-full absolute inset-0 -z-10",
          className
        )}
        {...props}
      />
    )
  }
)
HalftoneBg.displayName = "HalftoneBg"
