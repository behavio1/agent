import * as React from "react"
import { cn } from "@/lib/utils"

export interface ActionTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
  variant?: "primary" | "secondary" | "destructive" | "warning";
}

export const ActionText = React.forwardRef<HTMLHeadingElement, ActionTextProps>(
  ({ className, as: Component = "span", variant = "primary", ...props }, ref) => {
    
    const colors = {
      primary: "text-blue-500",
      secondary: "text-yellow-400",
      destructive: "text-red-500",
      warning: "text-orange-500"
    };

    return (
      <Component
        ref={ref}
        className={cn(
          "font-manga tracking-wider uppercase italic transform -skew-x-12",
          "drop-shadow-[3px_3px_0_rgba(0,0,0,1)]",
          colors[variant],
          className
        )}
        {...props}
      />
    )
  }
)
ActionText.displayName = "ActionText"
