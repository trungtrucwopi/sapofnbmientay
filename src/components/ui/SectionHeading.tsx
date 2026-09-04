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
    <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className={cn('mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--sapo-blue-light)]', align === 'center' && 'justify-center')}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--sapo-blue-light)]/70" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--sapo-blue-light)]/70" />
        </div>
      )}
      <h2 className="text-balance text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.03]">{title}</h2>
      {description && <p className="mt-5 max-w-3xl text-pretty text-base leading-7 text-white/48 sm:text-lg sm:leading-8">{description}</p>}
    </div>
  )
}
