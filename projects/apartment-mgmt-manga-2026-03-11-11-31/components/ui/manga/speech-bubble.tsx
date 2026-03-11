import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpeechBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right" | "bottom" | "top";
}

export const SpeechBubble = React.forwardRef<HTMLDivElement, SpeechBubbleProps>(
  ({ className, direction = "bottom", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-white border-[3px] border-black p-4 rounded-3xl inline-block",
          className
        )}
        {...props}
      >
        {children}
        <div
          className={cn(
            "absolute w-0 h-0 border-[12px] border-transparent",
            direction === "bottom" && "border-t-black border-l-black -bottom-[20px] left-[20px] -rotate-12",
            direction === "top" && "border-b-black border-r-black -top-[20px] right-[20px] -rotate-12",
            direction === "left" && "border-r-black border-b-black -left-[20px] top-[20px] rotate-12",
            direction === "right" && "border-l-black border-t-black -right-[20px] bottom-[20px] rotate-12"
          )}
        />
        <div
          className={cn(
            "absolute w-0 h-0 border-[8px] border-transparent z-10",
            direction === "bottom" && "border-t-white border-l-white -bottom-[12px] left-[23px] -rotate-12",
            direction === "top" && "border-b-white border-r-white -top-[12px] right-[23px] -rotate-12",
            direction === "left" && "border-r-white border-b-white -left-[12px] top-[23px] rotate-12",
            direction === "right" && "border-l-white border-t-white -right-[12px] bottom-[23px] rotate-12"
          )}
        />
      </div>
    )
  }
)
SpeechBubble.displayName = "SpeechBubble"
