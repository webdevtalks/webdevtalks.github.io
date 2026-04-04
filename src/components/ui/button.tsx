import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-brand text-white shadow-xl hover:-translate-y-0.5 hover:bg-zinc-300 hover:text-brand',
        secondary: 'bg-white/80 text-slate-900 ring-1 ring-black/10 hover:bg-zinc-200/70',
        ghost: 'text-slate-700 hover:bg-zinc-200/70',
        outline: 'bg-transparent text-slate-900 ring-1 ring-black/12 hover:bg-zinc-200/70',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-3.5 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
)

Button.displayName = 'Button'

export { Button, buttonVariants }
