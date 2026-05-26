import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-sans font-semibold uppercase tracking-[0.18em] text-[10px] md:text-[11px] whitespace-nowrap transition-all duration-300 outline-none select-none rounded-full border border-transparent disabled:pointer-events-none disabled:opacity-40 cursor-pointer active:scale-98 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-deep-cta text-cta-text hover:bg-clay transition-all duration-300",
        outline: "border-border bg-transparent text-charcoal hover:border-clay/40 hover:bg-secondary/50 transition-all duration-300",
        secondary: "bg-secondary text-charcoal hover:bg-secondary/80 border border-border/30 transition-all duration-300",
        ghost: "hover:bg-secondary/40 hover:text-clay text-charcoal transition-all duration-300",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all duration-300",
        link: "text-clay underline-offset-4 hover:underline normal-case tracking-normal text-sm transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 gap-2",
        xs: "h-7 px-3 text-[9px] gap-1 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 px-4 text-[10px] gap-1.5 [&_svg:not([class*='size-'])]:size-3",
        lg: "h-13 px-8 text-xs gap-2.5 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-11 rounded-full p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

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
  );
}

export { Button, buttonVariants };
