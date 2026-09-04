import type { ReactNode } from 'react'

export function AnimatedBorder({ children }: { children: ReactNode }) {
  return (
    <div className="animated-border rounded-[22px] p-px">
      <div className="rounded-[21px] bg-[#070a0f]">{children}</div>
    </div>
  )
}
