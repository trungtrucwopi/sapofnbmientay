import type { MouseEvent, ReactNode } from 'react'
import { cn } from '../../lib/utils'

export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div onMouseMove={onMove} className={cn('spotlight-card relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035]', className)}>
      {children}
    </div>
  )
}
