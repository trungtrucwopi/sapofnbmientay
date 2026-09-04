import { useMemo, useState } from 'react'
import { CakeSlice, Check, CircleDot, Coffee, Martini, Mic2, Radio, Soup, Sparkles } from 'lucide-react'
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

const sceneLabels: Record<IndustryKey, string[]> = {
  restaurant: ['Bàn B03', 'Order 03 món', 'Bếp nhận', 'Thu ngân'],
  cafe: ['Quầy POS', 'Take-away', 'Bar nhận', 'Thành viên'],
  milkTea: ['Size M', '+ Topping', 'In tem', 'QR pay'],
  bakery: ['Đơn đặt bánh', 'Kho NVL', 'Giao nhận', 'Doanh thu'],
  billiards: ['Bàn 08', '01:42:18', '+ Đồ uống', 'Tính tiền'],
  karaoke: ['Phòng VIP 02', '02:18:42', 'Bar nhận', 'Thanh toán'],
  bar: ['Bàn A12', 'Order 05 món', 'Bar queue', 'Kết ca'],
}

function IndustryScene({ activeKey }: { activeKey: IndustryKey }) {
  const labels = sceneLabels[activeKey]
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#05090f] p-4 sm:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_67%_42%,rgba(0,131,255,.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,.015),transparent)]" />
      <div className="industry-orbit absolute left-1/2 top-[44%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,131,255,.11)]" />
      <div className="absolute left-1/2 top-[44%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

      <div className="relative flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/28">Operating scene</div>
          <div className="mt-1 text-xs font-semibold text-white/74">Luồng nghiệp vụ đang hoạt động</div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[rgba(0,131,255,.14)] bg-[rgba(0,131,255,.055)] px-2.5 py-1.5 text-[9px] font-bold text-[var(--sapo-blue-light)]">
          <Radio className="h-3 w-3" /> LIVE
        </div>
      </div>

      <div className="relative mt-5 grid min-h-[330px] place-items-center">
        <div className="relative grid h-28 w-28 place-items-center rounded-[30px] border border-[rgba(0,131,255,.23)] bg-[radial-gradient(circle_at_30%_20%,rgba(53,162,255,.28),rgba(0,131,255,.07)_46%,rgba(255,255,255,.02)_100%)] shadow-[0_0_70px_rgba(0,131,255,.15)]">
          <div className="absolute inset-2 rounded-[24px] border border-white/[0.06]" />
          <div className="relative text-center">
            <div className="text-[10px] font-black tracking-[0.18em] text-white">SAPO</div>
            <div className="mt-1 text-[9px] text-[var(--sapo-blue-light)]">FnB CORE</div>
          </div>
        </div>

        {labels.map((label, index) => {
          const positions = [
            'left-[2%] top-[12%] sm:left-[7%] sm:top-[16%]',
            'right-[2%] top-[12%] sm:right-[7%] sm:top-[16%]',
            'bottom-[7%] left-[3%] sm:bottom-[10%] sm:left-[10%]',
            'bottom-[7%] right-[3%] sm:bottom-[10%] sm:right-[10%]',
          ]
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08 + index * 0.05 }}
              className={`absolute ${positions[index]} w-[42%] max-w-[155px] rounded-2xl border border-white/[0.07] bg-[#0a0f16]/92 p-3 shadow-[0_18px_50px_rgba(0,0,0,.28)] backdrop-blur-xl`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-semibold text-white/70 sm:text-[10px]">{label}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_9px_rgba(53,162,255,.75)]" />
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[var(--sapo-blue-light)]" style={{ width: `${72 + index * 6}%` }} /></div>
            </motion.div>
          )
        })}
      </div>

      <div className="relative grid grid-cols-3 gap-2 border-t border-white/[0.05] pt-4">
        {['Đồng bộ', 'Realtime', 'Một dữ liệu'].map((label, index) => (
          <div key={label} className="rounded-xl bg-white/[0.025] px-3 py-2.5">
            <div className="text-[9px] text-white/24">0{index + 1}</div>
            <div className="mt-1 text-[10px] font-semibold text-white/58">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function IndustrySolutions() {
  const [activeKey, setActiveKey] = useState<IndustryKey>('restaurant')
  const active = industries.find((item) => item.key === activeKey) ?? industries[0]
  const ActiveIcon = iconMap[active.key]
  const reduce = useReducedMotion()
  const activeIndex = useMemo(() => industries.findIndex((item) => item.key === active.key), [active.key])

  const select = (key: IndustryKey) => {
    setActiveKey(key)
    track('select_industry', { industry: key })
  }

  return (
    <section id="industries" className="section-pad relative overflow-hidden border-y border-white/[0.05] bg-[#070a0f]">
      <div className="absolute right-[-12%] top-[18%] h-[420px] w-[420px] rounded-full bg-[var(--sapo-blue)]/[0.045] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Adaptive by industry"
            title="Một nền tảng. Nhưng cách vận hành không hề giống nhau."
            description="Chọn mô hình để xem hệ thống thay đổi theo nghiệp vụ thực tế — từ bàn, phòng, topping, tính giờ đến bar workflow."
          />
        </Reveal>

        <div className="mt-9 flex gap-2 overflow-x-auto pb-3 scrollbar-none" role="tablist" aria-label="Chọn ngành hàng">
          {industries.map((item, index) => {
            const Icon = iconMap[item.key]
            const selected = active.key === item.key
            return (
              <button
                key={item.key}
                role="tab"
                aria-selected={selected}
                onClick={() => select(item.key)}
                className={`group relative flex min-w-max items-center gap-2.5 overflow-hidden rounded-xl border px-4 py-3 text-sm font-semibold transition ${selected ? 'border-[rgba(0,131,255,.34)] bg-[rgba(0,131,255,.09)] text-white shadow-[0_12px_35px_rgba(0,0,0,.18)]' : 'border-white/[0.06] bg-white/[0.018] text-white/42 hover:border-white/[0.1] hover:bg-white/[0.035] hover:text-white/72'}`}
              >
                {selected && <motion.span layoutId="industry-active" className="absolute inset-x-3 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--sapo-blue-light)] to-transparent" />}
                <span className={`grid h-7 w-7 place-items-center rounded-lg border ${selected ? 'border-[rgba(0,131,255,.2)] bg-[rgba(0,131,255,.1)] text-[var(--sapo-blue-light)]' : 'border-white/[0.05] bg-white/[0.02] text-white/26'}`}><Icon className="h-3.5 w-3.5" /></span>
                <span>{item.name}</span>
                <span className="ml-1 text-[9px] font-bold text-white/18">0{index + 1}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-4 overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#090d14] p-4 shadow-[0_30px_100px_rgba(0,0,0,.28)] sm:p-6 lg:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid gap-7 lg:grid-cols-[.78fr_1.22fr] lg:items-stretch"
            >
              <div className="flex flex-col rounded-[26px] border border-white/[0.06] bg-white/[0.018] p-5 sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--sapo-blue-light)]"><ActiveIcon className="h-4 w-4" />{active.eyebrow}</div>
                  <div className="text-[10px] font-bold text-white/18">0{activeIndex + 1} / 07</div>
                </div>

                <h3 className="mt-7 text-4xl font-bold tracking-[-0.045em] text-white sm:text-5xl">{active.name}</h3>
                <p className="mt-4 text-lg font-semibold tracking-[-0.02em] text-white/72">{active.accent}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">{active.description}</p>

                <div className="mt-7 grid grid-cols-2 gap-2.5">
                  {active.features.slice(0, 6).map((feature, index) => (
                    <div key={feature} className="flex items-center gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-3 text-[11px] text-white/52">
                      <span className={`grid h-5 w-5 place-items-center rounded-md ${index < 3 ? 'bg-[rgba(0,131,255,.09)] text-[var(--sapo-blue-light)]' : 'bg-white/[0.035] text-white/35'}`}><Check className="h-3 w-3" /></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <div className="grid grid-cols-2 gap-3">
                    {active.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/[0.055] bg-[#070b11] p-4">
                        <div className="text-[9px] uppercase tracking-[0.12em] text-white/24">{metric.label}</div>
                        <div className="mt-2 text-sm font-semibold text-white/78">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <IndustryScene activeKey={active.key} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[rgba(0,131,255,.12)] bg-[linear-gradient(90deg,rgba(0,131,255,.06),rgba(255,255,255,.018))] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm font-semibold text-white/72"><Sparkles className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Một hệ thống, nhưng workflow hiển thị theo đúng mô hình quán.</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/25">No generic template</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
