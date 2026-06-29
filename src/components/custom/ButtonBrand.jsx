import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const brandStyles = {
  primary:
    "font-bold bg-brand-purple text-white shadow-tactile-purple hover:bg-brand-purple hover:shadow-tactile-purple-hover hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
  secondary:
    "font-bold bg-brand-yellow text-brand-yellow-text shadow-tactile-yellow hover:bg-brand-yellow hover:shadow-tactile-yellow-hover hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]",
  subtle:
    "bg-white/50 backdrop-blur-sm border border-white/70 text-foreground shadow-xs hover:bg-white/70 hover:border-white/90 active:bg-white/90 dark:bg-black/20 dark:border-white/10 dark:text-foreground dark:hover:bg-black/30 dark:active:bg-black/40",
}

function ButtonBrand({ brand = "primary", className, ...props }) {
  return (
    <Button
      className={cn(
        "rounded-xl cursor-pointer disabled:cursor-not-allowed",
        brandStyles[brand],
        className,
      )}
      {...props}
    />
  )
}

ButtonBrand.displayName = "ButtonBrand"

export { ButtonBrand }
