import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-xl border border-[#e6e7eb] dark:border-[#3d348b] bg-white/50 dark:bg-[#191716]/50 px-4 py-3 text-base ring-offset-white transition-all duration-200",
          "placeholder:text-gray-500 dark:placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-[#3d348b] dark:focus:ring-[#e6af2e] focus:ring-offset-0",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-[#3d348b] dark:hover:border-[#e6af2e]",
          "backdrop-blur-md",
          "resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }