import { cn } from "@/lib/utils"

interface ValcoreLogoProps {
  className?: string
  variant?: "dark" | "light"
}

export function ValcoreLogo({ className, variant = "dark" }: ValcoreLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/valcore-logo.svg"
        alt="Valcore"
        className={cn(
          "h-10 w-auto",
          variant === "light" && "brightness-0 invert"
        )}
      />
    </div>
  )
}
