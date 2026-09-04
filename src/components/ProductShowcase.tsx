import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bell, Boxes, ChefHat, Coffee, DoorOpen, Gauge, MoonStar, ReceiptText, Sparkles, TrendingUp } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const moments = [
  { time: '08:00', label: 'Mở ca', icon: DoorOpen, orders: 6, revenue: '1,2M', tables: '04/18', queue: 1, note: 'Quầy mở, nhân viên vào ca, hệ thống sẵn sàng nhận order.', bars: [18,22,20,26,30,34,31,38,42,39,46,44] },
  { time: '10:30', label: 'Giờ cao điểm', icon: Coffee, orders: 48, revenue: '6,8M', tables: '14/18', queue: 7, note: 'Order tăng nhanh, bếp/bar nhận món liên tục và đồng bộ.', bars: [38,54,49,66,72,84,78,92,88,96,91,100] },
  { time: '14:00', label: 'Kiểm kho', icon: Boxes, orders: 72, revenue: '10,4M', tables: '08/18', queue: 3, note: 'Kiểm tồn, chuẩn bị nguyên liệu và theo dõi nhịp ca chiều.', bars: [32,38,41,48,52,58,62,66,64,70,74,78] },
  { time: '18:30', label: 'Order tăng mạnh', icon: Bell, orders: 126, revenue: '18,6M', tables: '17/18', queue: 9, note: 'Luồng order, bếp/bar và thu ngân vận hành ở cường độ cao.', bars: [56,63,69,74,82,90,86,96,92,100,96,100] },
  { time: '22:00', label: 'Kết ca', icon: MoonStar, orders: 154, revenue: '23,1M', tables: '03/18', queue: 0, note: 'Kết ca, đối soát và xem lại dữ liệu vận hành trong ngày.', bars: [68,72,77,82,88,93,100,96,90,84,78,70] },
]

export function ProductShowcase() {
  const [active, setActive] = useState(1)
  const current = moments[active]
  const reduce = useReducedMotion()

  return (
    <section className="signature-section relative overflow-hidden border-y border-white/[0.055] py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(0,131,255,.08),transparent_34%)]" />
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.24em] text-[var(--sapo-blue-light)]">
                <Sparkles className="h-3.5 w-3.5" /> Signature experience
              </div>
              <h2 className="mt-5 max-w-xl text-balance text-[clamp(2.4rem,5vw,5rem)] font-black leading-[.96] tracking-[-0.06em] text-white">
                Một ngày trong quán.
                <span className="block text-white/28">Một luồng dữ liệu.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/38 lg:justify-self-end lg:text-base">
              Chọn từng mốc thời gian để xem cách dashboard thay đổi theo nhịp vận hành. Các con số bên dưới chỉ là dữ liệu mô phỏng giao diện.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-5 lg:grid-cols-[290px_1fr]">
            <div className="timeline-console rounded-[28px] border border-white/[0.075] bg-white/[0.018] p-3 sm:p-4">
              <div className="mb-3 px-2 pt-2 text-[8px] font-bold uppercase tracking-[0.22em] text-white/20">Shift timeline</div>
              <div className="grid gap-2">
                {moments.map((moment, index) => {
                  const Icon = moment.icon
                  const selected = active === index
                  return (
                    <button
                      key={moment.time}
                      onClick={() => setActive(index)}
                      className={`group relative overflow-hidden rounded-[18px] border px-4 py-4 text-left transition ${selected ? 'border-[rgba(53,162,255,.25)] bg-[rgba(0,131,255,.075)]' : 'border-transparent bg-white/[0.018] hover:border-white/[0.07] hover:bg-white/[0.03]'}`}
                    >
                      {selected && <motion.span layoutId="moment-active" className="absolute inset-y-3 left-0 w-[2px] rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_16px_rgba(53,162,255,.8)]" />}
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className={`text-xl font-black tracking-[-0.04em] ${selected ? 'text-white' : 'text-white/42'}`}>{moment.time}</div>
                          <div className={`mt-1 text-[10px] font-semibold ${selected ? 'text-white/62' : 'text-white/28'}`}>{moment.label}</div>
                        </div>
                        <div className={`grid h-9 w-9 place-items-center rounded-xl border ${selected ? 'border-[rgba(53,162,255,.2)] bg-[rgba(53,162,255,.08)] text-[var(--sapo-blue-light)]' : 'border-white/[0.05] text-white/20'}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[#05090e] shadow-[0_35px_100px_rgba(0,0,0,.42)]">
              <div className="flex flex-col gap-3 border-b border-white/[0.055] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(53,162,255,.16)] bg-[rgba(0,131,255,.055)] text-[var(--sapo-blue-light)]"><Gauge className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">Live Operations Console</div>
                    <div className="mt-1 text-sm font-semibold text-white/66">Chi nhánh trung tâm • {current.time}</div>
                  </div>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/[0.045] px-3 py-1.5 text-[9px] font-bold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> SYSTEM LIVE
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.time}
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-4 p-4 sm:p-5 xl:grid-cols-[1.35fr_.65fr]"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        ['Đơn hàng', String(current.orders).padStart(3, '0'), ReceiptText],
                        ['Doanh thu', current.revenue, TrendingUp],
                        ['Bàn hoạt động', current.tables, Coffee],
                        ['Bếp / Bar', String(current.queue).padStart(2, '0'), ChefHat],
                      ].map(([label, value, Icon]) => {
                        const MetricIcon = Icon as typeof ReceiptText
                        return (
                          <div key={String(label)} className="rounded-2xl border border-white/[0.055] bg-white/[0.018] p-3.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[8px] uppercase tracking-[0.14em] text-white/20">{String(label)}</span>
                              <MetricIcon className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
                            </div>
                            <div className="mt-2 text-xl font-black tracking-[-0.04em] text-white">{value as string}</div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.014] p-4 sm:p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-semibold text-white/62">Order velocity</div>
                          <div className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/18">Nhịp theo mốc thời gian</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black text-white">{current.orders} đơn</div>
                          <div className="mt-1 text-[8px] text-emerald-300/55">đã đồng bộ</div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex h-52 items-end gap-2 overflow-hidden rounded-2xl border border-white/[0.035] bg-[#03070b] px-4 pb-4 pt-5">
                        {[25,50,75].map((line)=><span key={line} className="absolute inset-x-4 border-t border-dashed border-white/[0.04]" style={{bottom:`${line}%`}} />)}
                        {current.bars.map((height,index)=>(
                          <motion.span
                            key={`${current.time}-${index}`}
                            initial={reduce ? undefined : { height: '8%' }}
                            animate={reduce ? undefined : { height: `${height}%` }}
                            transition={{ duration: 0.38, delay: index * 0.025 }}
                            style={reduce ? { height: `${height}%` } : undefined}
                            className="relative z-10 flex-1 rounded-t-[4px] bg-gradient-to-t from-[rgba(0,131,255,.1)] via-[rgba(0,131,255,.46)] to-[#7fd0ff]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid content-start gap-4">
                    <div className="rounded-[24px] border border-white/[0.055] bg-[linear-gradient(145deg,rgba(0,131,255,.055),rgba(255,255,255,.012))] p-5">
                      <div className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]">Now happening</div>
                      <div className="mt-3 text-2xl font-black tracking-[-0.04em] text-white">{current.label}</div>
                      <p className="mt-3 text-xs leading-6 text-white/38">{current.note}</p>
                    </div>

                    <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.014] p-5">
                      <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">System status</div>
                      <div className="mt-5 space-y-4">
                        {[
                          ['Order', 'Synced'],
                          ['Bếp / Bar', current.queue ? `${current.queue} chờ` : 'Clear'],
                          ['Báo cáo', 'Realtime'],
                        ].map(([label,value])=>(
                          <div key={label}>
                            <div className="flex items-center justify-between text-[9px]">
                              <span className="text-white/32">{label}</span>
                              <span className="font-semibold text-white/58">{value}</span>
                            </div>
                            <div className="mt-2 h-1 rounded-full bg-white/[0.045]">
                              <motion.div initial={reduce ? undefined : { width: 0 }} animate={{ width: label === 'Bếp / Bar' && current.queue > 6 ? '74%' : '94%' }} className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[#82d2ff]" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
