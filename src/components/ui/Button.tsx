import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Button({
  children,
  className,
  variant = 'primary',
  withArrow = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  withArrow?: boolean
}) {
  return (
    <button
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sapo-blue-light)] disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'primary' && 'bg-[var(--sapo-blue)] text-white shadow-[0_14px_45px_rgba(0,131,255,.25)] hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]',
        variant === 'secondary' && 'border border-white/12 bg-white/[0.05] text-white hover:-translate-y-0.5 hover:border-[rgba(0,131,255,.45)] hover:bg-white/[0.08]',
        variant === 'ghost' && 'text-white/75 hover:bg-white/[0.06] hover:text-white',
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />}
    </button>
  )
}
