import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-[#e6e7eb] dark:border-[#3d348b] bg-white/50 dark:bg-[#191716]/50 px-4 py-2 text-base ring-offset-white transition-all duration-200",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-[#3d348b] dark:focus:ring-[#e6af2e] focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-[#3d348b] dark:hover:border-[#e6af2e]",
          "backdrop-blur-md",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }