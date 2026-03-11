"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border-2 border-black bg-clip-padding text-lg font-manga tracking-widest uppercase whitespace-nowrap transition-all outline-none select-none active:translate-y-[4px] active:translate-x-[4px] active:shadow-none disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-yellow-400 text-black hover:bg-yellow-300",
        outline: "bg-white text-black hover:bg-gray-100",
        secondary: "bg-blue-400 text-black hover:bg-blue-300",
        ghost: "border-transparent shadow-none hover:bg-gray-100 hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black",
        destructive: "bg-red-500 text-white hover:bg-red-400",
        link: "text-blue-600 underline-offset-4 hover:underline shadow-none border-transparent active:translate-y-0 active:translate-x-0 hover:shadow-none hover:translate-x-0 hover:translate-y-0",
      },
      size: {
        default: "h-10 gap-2 px-4 has-[>svg]:px-3",
        xs: "h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
        lg: "h-12 gap-2 px-6 text-xl has-[>svg]:px-4",
        icon: "size-10",
        "icon-xs": "size-7",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
