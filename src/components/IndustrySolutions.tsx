import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ChefHat, Clock3, Coffee, Croissant, Mic2, QrCode, Sparkles, Trophy, UtensilsCrossed, Wine } from 'lucide-react'
import { industries, type IndustryKey } from '../config/industries'
import { Reveal } from './ui/Reveal'
import { track } from '../lib/analytics'

const icons: Record<IndustryKey, typeof UtensilsCrossed> = {
  restaurant: UtensilsCrossed,
  cafe: Coffee,
  milkTea: QrCode,
  bakery: Croissant,
  billiards: Trophy,
  karaoke: Mic2,
  bar: Wine,
}

const palette: Record<IndustryKey, string> = {
  restaurant: 'rgba(0,131,255,.18)',
  cafe: 'rgba(61,182,255,.16)',
  milkTea: 'rgba(91,196,255,.15)',
  bakery: 'rgba(255,255,255,.10)',
  billiards: 'rgba(52,211,153,.12)',
  karaoke: 'rgba(129,140,248,.12)',
  bar: 'rgba(56,189,248,.13)',
}

function IndustryStage({ activeKey }: { activeKey: IndustryKey }) {
  const reduce = useReducedMotion()

  if (activeKey === 'billiards') {
    return (
      <div className="grid min-h-[370px] gap-3 sm:grid-cols-[1.12fr_.88fr]">
        <div className="rounded-[24px] border border-white/[0.055] bg-[#03070b] p-4">
          <div className="flex items-center justify-between text-[9px] text-white/24"><span>Sơ đồ bàn</span><span>12 bàn</span></div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {Array.from({length:9}).map((_,index)=>(
              <div key={index} className={`relative overflow-hidden rounded-xl border p-3 ${[1,4,7].includes(index)?'border-emerald-300/15 bg-emerald-300/[0.045]':'border-white/[0.045] bg-white/[0.018]'}`}>
                <div className="text-[9px] font-bold text-white/58">B{String(index+1).padStart(2,'0')}</div>
                <div className="mt-6 flex items-end justify-between">
                  <span className="text-[8px] text-white/22">{[1,4,7].includes(index)?'Đang chơi':'Trống'}</span>
                  {[1,4,7].includes(index) && <Clock3 className="h-3.5 w-3.5 text-emerald-300/65" />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-5">
            <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">Bàn B05</div>
            <div className="mt-4 text-4xl font-black tracking-[-0.06em] text-white">01:42:18</div>
            <div className="mt-2 text-[9px] text-emerald-300/60">Đang tính giờ</div>
          </div>
          <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-5">
            <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">Order tại bàn</div>
            <div className="mt-4 space-y-2">
              {['2 × Nước suối','1 × Cà phê','1 × Snack'].map((item)=><div key={item} className="rounded-xl bg-[#03070b] px-3 py-2.5 text-[9px] text-white/42">{item}</div>)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (activeKey === 'karaoke') {
    return (
      <div className="grid min-h-[370px] gap-3 sm:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-5">
          <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">Phòng đang hát</div>
          <div className="mt-4 text-5xl font-black tracking-[-0.06em] text-white">VIP 06</div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(129,140,248,.12)] bg-[rgba(129,140,248,.045)] px-3 py-1.5 text-[9px] text-indigo-200/70">
            <Mic2 className="h-3.5 w-3.5" /> 01:18:42
          </div>
          <div className="mt-8 border-t border-white/[0.05] pt-5">
            <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">Bar queue</div>
            <div className="mt-3 space-y-2">
              {['#K128 • 4 món','#K129 • 2 món'].map((x,i)=><div key={x} className="flex items-center justify-between rounded-xl bg-[#03070b] px-3 py-3 text-[9px]"><span className="text-white/42">{x}</span><span className={i?'text-white/26':'text-[var(--sapo-blue-light)]'}>{i?'Chờ':'Đang làm'}</span></div>)}
            </div>
          </div>
        </div>
        <div className="rounded-[24px] border border-white/[0.055] bg-[#03070b] p-4">
          <div className="flex items-center justify-between text-[9px] text-white/24"><span>Room grid</span><span>18 phòng</span></div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {Array.from({length:9}).map((_,index)=>(
              <div key={index} className={`rounded-xl border p-3 ${[0,2,5,7].includes(index)?'border-[rgba(129,140,248,.14)] bg-[rgba(129,140,248,.045)]':'border-white/[0.045] bg-white/[0.018]'}`}>
                <div className="text-[9px] font-bold text-white/58">P{String(index+1).padStart(2,'0')}</div>
                <div className="mt-5 text-[8px] text-white/22">{[0,2,5,7].includes(index)?'Đang hát':'Trống'}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const labels = activeKey === 'milkTea'
    ? ['Size L','Topping','In tem','QR Pay']
    : activeKey === 'bakery'
      ? ['Đơn đặt','Tồn kho','Khách hàng','Chi nhánh']
      : activeKey === 'bar'
        ? ['Order nhanh','Bar queue','Bill','Kho đồ uống']
        : activeKey === 'cafe'
          ? ['Quầy','Mang đi','Bar','Thành viên']
          : ['Sơ đồ bàn','QR order','Bếp / Bar','Thanh toán']

  return (
    <div className="grid min-h-[370px] gap-3 sm:grid-cols-[1.22fr_.78fr]">
      <div className="rounded-[24px] border border-white/[0.055] bg-[#03070b] p-4">
        <div className="flex items-center justify-between text-[9px] text-white/24"><span>Operations canvas</span><span>Live</span></div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {labels.map((label,index)=>(
            <motion.div
              key={label}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: index * .05 }}
              className={`rounded-[18px] border p-4 ${index === 0 ? 'border-[rgba(0,131,255,.15)] bg-[rgba(0,131,255,.055)]' : 'border-white/[0.045] bg-white/[0.018]'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold text-white/52">{label}</span>
                {index === 0 ? <Sparkles className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /> : <ChefHat className="h-3.5 w-3.5 text-white/18" />}
              </div>
              <div className="mt-8 h-1 rounded-full bg-white/[0.045]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[#82d2ff]" style={{width:`${58 + index*10}%`}} /></div>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 rounded-[20px] border border-white/[0.045] bg-white/[0.012] p-4">
          <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.16em] text-white/18"><span>Flow signal</span><span>Realtime</span></div>
          <div className="mt-5 flex items-end gap-2">
            {[28,42,35,56,48,70,62,84,76,92,86,100].map((h,i)=><span key={i} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-[rgba(0,131,255,.1)] to-[#6bc5ff]" style={{height:`${h}px`}} />)}
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-5">
          <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">Today</div>
          <div className="mt-3 text-4xl font-black tracking-[-0.06em] text-white">18,64M</div>
          <div className="mt-1 text-[9px] text-emerald-300/60">Doanh thu realtime</div>
        </div>
        <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-5">
          <div className="text-[8px] uppercase tracking-[0.18em] text-white/20">System cards</div>
          <div className="mt-4 space-y-2.5">
            {['Order sync','Bếp / Bar','Thanh toán'].map((x,i)=><div key={x} className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-[#03070b] px-3 py-3 text-[9px]"><span className="text-white/36">{x}</span><span className={i===0?'text-[var(--sapo-blue-light)]':'text-emerald-300/60'}>{i===0?'Live':'Ready'}</span></div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndustrySolutions() {
  const [activeKey, setActiveKey] = useState<IndustryKey>('restaurant')
  const active = industries.find((industry) => industry.key === activeKey) ?? industries[0]
  const ActiveIcon = icons[active.key]

  return (
    <section id="industries" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,.012),transparent)]" />
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--sapo-blue-light)]">07 mô hình / 01 nền tảng</div>
              <h2 className="mt-5 max-w-2xl text-balance text-[clamp(2.35rem,5vw,5rem)] font-black leading-[.96] tracking-[-0.06em] text-white">
                Không dùng một giao diện
                <span className="block text-white/28">cho mọi loại quán.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/38 lg:justify-self-end lg:text-base">Chọn mô hình để xem cách luồng vận hành thay đổi theo nghiệp vụ thực tế của quán.</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-5 xl:grid-cols-[320px_1fr]">
            <div className="industry-index rounded-[28px] border border-white/[0.075] bg-white/[0.018] p-3">
              {industries.map((industry,index)=>{
                const Icon = icons[industry.key]
                const selected = active.key === industry.key
                return (
                  <button
                    key={industry.key}
                    onClick={() => {
                      setActiveKey(industry.key)
                      track('select_industry', { industry: industry.key })
                    }}
                    className={`group relative flex w-full items-center gap-4 rounded-[18px] border px-4 py-4 text-left transition ${selected ? 'border-[rgba(53,162,255,.22)] bg-[rgba(0,131,255,.07)]' : 'border-transparent hover:border-white/[0.055] hover:bg-white/[0.025]'}`}
                  >
                    <span className={`text-[9px] font-black tracking-[0.16em] ${selected?'text-[var(--sapo-blue-light)]':'text-white/18'}`}>{String(index+1).padStart(2,'0')}</span>
                    <div className={`grid h-9 w-9 place-items-center rounded-xl border ${selected?'border-[rgba(53,162,255,.18)] bg-[rgba(53,162,255,.065)] text-[var(--sapo-blue-light)]':'border-white/[0.045] text-white/20'}`}><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-sm font-bold ${selected?'text-white':'text-white/46'}`}>{industry.name}</div>
                      <div className="mt-0.5 truncate text-[8px] uppercase tracking-[0.14em] text-white/18">{industry.eyebrow}</div>
                    </div>
                    <ArrowUpRight className={`h-4 w-4 transition ${selected?'text-white/60':'text-white/12 group-hover:text-white/38'}`} />
                  </button>
                )
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: .28 }}
                className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#05090f] p-4 shadow-[0_35px_100px_rgba(0,0,0,.38)] sm:p-5 lg:p-6"
                style={{ boxShadow: `0 35px 110px rgba(0,0,0,.42), inset 0 0 120px ${palette[active.key]}` }}
              >
                <div className="absolute right-[-3%] top-[-8%] text-[clamp(7rem,18vw,14rem)] font-black leading-none tracking-[-0.08em] text-white/[0.018]">{String(industries.findIndex((item)=>item.key===active.key)+1).padStart(2,'0')}</div>
                <div className="relative grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.065] bg-white/[0.02] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-white/28">
                        <ActiveIcon className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /> {active.eyebrow}
                      </div>
                      <h3 className="mt-6 text-4xl font-black tracking-[-0.055em] text-white sm:text-5xl">{active.name}</h3>
                      <div className="mt-3 text-sm font-semibold text-[var(--sapo-blue-light)]">{active.accent}</div>
                      <p className="mt-5 max-w-md text-sm leading-7 text-white/38">{active.description}</p>
                    </div>
                    <div className="mt-7 grid grid-cols-2 gap-2.5">
                      {active.features.slice(0,6).map((feature)=><div key={feature} className="rounded-xl border border-white/[0.045] bg-white/[0.015] px-3 py-3 text-[9px] font-semibold text-white/38">{feature}</div>)}
                    </div>
                  </div>
                  <IndustryStage activeKey={active.key} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
