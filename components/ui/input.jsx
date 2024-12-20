import * as React from "react"
import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, variant, ...props }, ref) => {
  const baseStyles = "flex h-10 w-full px-3 py-2 text-base rounded-md disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none";

  const variants = {
    default: "border border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-500 dark:bg-neutral-950 dark:text-neutral-50 dark:placeholder:text-neutral-400",
    bottomBorder: "bg-transparent border-b-2 border-neutral-300 text-neutral-900 placeholder:text-neutral-500 dark:border-neutral-700 dark:text-neutral-50 dark:placeholder:text-neutral-400",
  };

  const variantStyles = variants[variant] || variants.default; // Default to default variant if none is passed

  return (
    <input
      type={type}
      className={cn(baseStyles, variantStyles, className)}
      ref={ref}
      {...props}
    />
  );
})

Input.displayName = "Input"

export { Input }
