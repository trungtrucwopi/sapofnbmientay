import { useState } from 'react'
import { CakeSlice, Check, CircleDot, Coffee, Martini, Mic2, Soup } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { industries, type IndustryKey } from '../config/industries'
import { track } from '../lib/analytics'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const iconMap = {
  restaurant: Soup,
  cafe: Coffee,
  milkTea: Coffee,
  bakery: CakeSlice,
  billiards: CircleDot,
  karaoke: Mic2,
  bar: Martini,
} satisfies Record<IndustryKey, typeof Soup>

export function IndustrySolutions() {
  const [activeKey, setActiveKey] = useState<IndustryKey>('restaurant')
  const active = industries.find((item) => item.key === activeKey) ?? industries[0]
  const ActiveIcon = iconMap[active.key]
  const reduce = useReducedMotion()

  const select = (key: IndustryKey) => {
    setActiveKey(key)
    track('select_industry', { industry: key })
  }

  return (
    <section id="industries" className="section-pad border-y border-white/[0.05] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Theo từng mô hình" title="Một nền tảng. Tối ưu theo từng mô hình FnB." description="Chọn mô hình để xem các nghiệp vụ trọng tâm. Nội dung tính năng được đối chiếu theo tài liệu và trang sản phẩm chính thức của Sapo." /></Reveal>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Chọn ngành hàng">
          {industries.map((item) => {
            const Icon = iconMap[item.key]
            return (
              <button
                key={item.key}
                role="tab"
                aria-selected={active.key === item.key}
                onClick={() => select(item.key)}
                className={`flex min-w-max items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition ${active.key === item.key ? 'border-[rgba(0,131,255,.42)] bg-[rgba(0,131,255,.12)] text-white' : 'border-white/[0.07] bg-white/[0.025] text-white/48 hover:bg-white/[0.05] hover:text-white/75'}`}
              >
                <Icon className="h-4 w-4" /> {item.name}
              </button>
            )
          })}
        </div>

        <div className="mt-6 overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#090d14] p-5 sm:p-7 lg:p-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[var(--sapo-blue-light)]"><ActiveIcon className="h-4 w-4" />{active.eyebrow}</div>
                <h3 className="mt-5 text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">{active.name}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/52">{active.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {active.features.map((feature) => <span key={feature} className="flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-xs text-white/60"><Check className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />{feature}</span>)}
                </div>
              </div>

              <div className="relative min-h-[390px] rounded-[24px] border border-white/[0.08] bg-[#05080d] p-4 sm:p-5">
                <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_75%_18%,rgba(0,131,255,.14),transparent_32%)]" />
                <div className="relative flex h-full min-h-[350px] flex-col rounded-2xl border border-white/[0.06] bg-[#0b1018] p-4">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                    <div><div className="text-xs font-semibold text-white">{active.name} • Dashboard</div><div className="mt-1 text-[10px] text-white/32">{active.accent}</div></div>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">LIVE</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {active.metrics.map((metric) => <div key={metric.label} className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><div className="text-[10px] text-white/35">{metric.label}</div><div className="mt-2 text-sm font-semibold text-white">{metric.value}</div></div>)}
                  </div>
                  <div className="mt-3 grid flex-1 grid-cols-[1.05fr_.95fr] gap-3">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <div className="flex items-center justify-between text-[10px] text-white/35"><span>Luồng vận hành</span><span>Đồng bộ</span></div>
                      <div className="mt-5 space-y-3">
                        {['Khách / bàn', 'Order', 'Bếp / Bar', 'Thu ngân', 'Báo cáo'].map((label, index) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className={`grid h-6 w-6 place-items-center rounded-lg text-[9px] font-bold ${index < 4 ? 'bg-[rgba(0,131,255,.13)] text-[var(--sapo-blue-light)]' : 'bg-white/[0.05] text-white/40'}`}>{index + 1}</span>
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.05]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[var(--sapo-blue-light)]" style={{ width: `${95 - index * 9}%` }} /></div>
                            <span className="w-16 text-right text-[9px] text-white/42">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.025] p-3">
                      <div className="text-[10px] text-white/35">Tác vụ ưu tiên</div>
                      <div className="mt-4 grid gap-2">
                        {active.features.slice(0, 5).map((feature, index) => <div key={feature} className="flex items-center justify-between rounded-lg bg-white/[0.035] px-3 py-2.5 text-[10px] text-white/55"><span>{feature}</span><span className={`h-1.5 w-1.5 rounded-full ${index < 3 ? 'bg-[var(--sapo-blue-light)] shadow-[0_0_8px_var(--sapo-blue-light)]' : 'bg-white/18'}`} /></div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
