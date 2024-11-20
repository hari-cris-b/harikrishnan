import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "neon-button bg-[#3d348b] text-white hover:bg-[#3d348b]/90 shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-500/90 shadow-sm",
        outline: "border border-[#e6e7eb] dark:border-[#3d348b] bg-white/50 dark:bg-[#191716]/50 hover:bg-[#3d348b]/10 dark:hover:bg-[#e6af2e]/10",
        secondary: "neon-button bg-[#e6af2e] text-white hover:bg-[#e6af2e]/90 shadow-sm",
        ghost: "hover:bg-[#3d348b]/10 dark:hover:bg-[#e6af2e]/10",
        link: "text-[#3d348b] dark:text-[#e6af2e] underline-offset-4 hover:underline",
        neon: "neon-button bg-[#3d348b] dark:bg-[#191716] text-white hover:bg-[#3d348b]/90 dark:hover:bg-[#191716]/90 shadow-sm",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-10 rounded-xl px-8",
        icon: "h-9 w-9 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }