import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors uppercase tracking-wider',
  {
    variants: {
      variant: {
        default: 'bg-primary-cyan/10 text-primary-cyan border border-primary-cyan/30',
        orange: 'bg-accent-orange/10 text-accent-orange border border-accent-orange/30',
        gold: 'bg-accent-gold/10 text-accent-gold border border-accent-gold/30',
        outline: 'border border-white/20 text-neutral-light-gray',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
