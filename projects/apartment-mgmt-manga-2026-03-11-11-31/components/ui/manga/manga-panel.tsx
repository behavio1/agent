import * as React from "react"
import { cn } from "@/lib/utils"

export interface MangaPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  noShadow?: boolean;
}

export const MangaPanel = React.forwardRef<HTMLDivElement, MangaPanelProps>(
  ({ className, noShadow = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border-[3px] border-black p-4 rounded-none",
          !noShadow && "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
          className
        )}
        {...props}
      />
    )
  }
)
MangaPanel.displayName = "MangaPanel"
