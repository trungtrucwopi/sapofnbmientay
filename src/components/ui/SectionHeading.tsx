import { cn } from '../../lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <div className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[var(--sapo-blue-light)]">{eyebrow}</div>}
      <h2 className="text-balance text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-pretty text-base leading-7 text-white/58 sm:text-lg">{description}</p>}
    </div>
  )
}
