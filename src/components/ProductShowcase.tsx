import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bell, Boxes, ChefHat, Coffee, DoorOpen, Gauge, MoonStar, ReceiptText, TrendingUp } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const moments = [
  { time: '08:00', label: 'Mở ca', icon: DoorOpen, orders: 6, revenue: '1,2M', table: '04/18', queue: 1, note: 'Nhân viên bắt đầu ca, quầy sẵn sàng phục vụ.', bars: [20,25,18,22,30,28,35,32,40,36,44,42] },
  { time: '10:30', label: 'Giờ cao điểm', icon: Coffee, orders: 48, revenue: '6,8M', table: '14/18', queue: 7, note: 'Order tăng nhanh, bếp/bar nhận món liên tục.', bars: [45,62,55,80,72,92,84,96,86,98,90,100] },
  { time: '14:00', label: 'Kiểm kho', icon: Boxes, orders: 72, revenue: '10,4M', table: '08/18', queue: 3, note: 'Theo dõi tồn và chuẩn bị nguyên liệu cho ca tối.', bars: [35,42,38,55,48,62,58,66,62,72,68,76] },
  { time: '18:30', label: 'Order tăng mạnh', icon: Bell, orders: 126, revenue: '18,6M', table: '17/18', queue: 9, note: 'Luồng order, bếp/bar và thu ngân vận hành đồng bộ.', bars: [60,72,68,82,76,95,90,100,92,98,94,100] },
  { time: '22:00', label: 'Kết ca', icon: MoonStar, orders: 154, revenue: '23,1M', table: '03/18', queue: 0, note: 'Tổng hợp doanh thu và trạng thái vận hành cuối ngày.', bars: [70,74,78,82,88,91,96,100,92,86,78,70] },
]

export function ProductShowcase() {
  const [active, setActive] = useState(1)
  const current = moments[active]
  const reduce = useReducedMotion()

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute left-[-18%] top-[26%] h-[520px] w-[520px] rounded-full bg-cyan-300/[0.025] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Interactive control room"
            title="Một ngày vận hành quán — nhìn như đang đứng trong phòng điều khiển."
            description="Chọn từng mốc thời gian để dashboard chuyển trạng thái theo nhịp vận hành. Số liệu bên dưới là dữ liệu mô phỏng giao diện, không phải cam kết kinh doanh."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#080c13] p-3 shadow-[0_35px_110px_rgba(0,0,0,.34)] sm:p-4 lg:p-5">
            <div className="overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#05090f]">
              <div className="flex flex-col gap-4 border-b border-white/[0.06] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(0,131,255,.16)] bg-[rgba(0,131,255,.08)] text-[var(--sapo-blue-light)]"><Gauge className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/26">Live operations console</div>
                    <div className="mt-0.5 text-xs font-semibold text-white/72">Chi nhánh trung tâm • {current.time}</div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[9px]">
                  <span className="rounded-full border border-emerald-300/10 bg-emerald-300/[0.05] px-2.5 py-1.5 font-bold text-emerald-300">● SYSTEM LIVE</span>
                  <span className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-1.5 text-white/30">AUTO SYNC</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.time}
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.38fr_.62fr] lg:p-6"
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {[
                        { label: 'Đơn hàng', value: String(current.orders).padStart(3, '0'), icon: ReceiptText, detail: 'đã tiếp nhận' },
                        { label: 'Doanh thu', value: current.revenue, icon: TrendingUp, detail: 'trong ngày' },
                        { label: 'Bàn hoạt động', value: current.table, icon: Coffee, detail: 'đang sử dụng' },
                        { label: 'Bếp / Bar', value: String(current.queue).padStart(2, '0'), icon: ChefHat, detail: 'order chờ' },
                      ].map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-white/[0.055] bg-white/[0.02] p-3.5 sm:p-4">
                          <div className="flex items-center justify-between"><span className="text-[9px] uppercase tracking-[0.12em] text-white/24">{metric.label}</span><metric.icon className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /></div>
                          <div className="mt-2 text-xl font-bold tracking-[-0.04em] text-white sm:text-2xl">{metric.value}</div>
                          <div className="mt-1 text-[9px] text-white/26">{metric.detail}</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid gap-4 xl:grid-cols-[1.25fr_.75fr]">
                      <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-4 sm:p-5">
                        <div className="flex items-center justify-between">
                          <div><div className="text-xs font-semibold text-white/70">Nhịp order theo thời gian</div><div className="mt-1 text-[9px] text-white/24">Realtime simulation</div></div>
                          <div className="text-right"><div className="text-sm font-semibold text-white">{current.orders} đơn</div><div className="mt-0.5 text-[9px] text-emerald-300/55">đã đồng bộ</div></div>
                        </div>
                        <div className="relative mt-6 flex h-44 items-end gap-2 overflow-hidden rounded-2xl border border-white/[0.04] bg-[#04080d] px-4 pb-4 pt-5">
                          {[25, 50, 75].map((line) => <div key={line} className="absolute inset-x-4 border-t border-dashed border-white/[0.045]" style={{ bottom: `${line}%` }} />)}
                          {current.bars.map((height, index) => (
                            <motion.div
                              key={`${current.time}-${index}`}
                              initial={reduce ? undefined : { height: '10%' }}
                              animate={reduce ? undefined : { height: `${height}%` }}
                              transition={{ duration: 0.4, delay: index * 0.025 }}
                              style={reduce ? { height: `${height}%` } : undefined}
                              className="relative z-10 flex-1 rounded-t-[5px] bg-gradient-to-t from-[rgba(0,131,255,.1)] via-[rgba(0,131,255,.48)] to-[#67c2ff]"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-4 sm:p-5">
                        <div className="text-xs font-semibold text-white/70">Operation pulse</div>
                        <div className="mt-5 space-y-3">
                          {[
                            ['Order', Math.min(96, 45 + current.orders / 2)],
                            ['Bếp / Bar', Math.min(92, 36 + current.queue * 6)],
                            ['Thu ngân', Math.min(94, 54 + active * 9)],
                            ['Kho', active === 2 ? 88 : 62],
                          ].map(([label, value]) => (
                            <div key={String(label)}>
                              <div className="mb-1.5 flex items-center justify-between text-[9px]"><span className="text-white/34">{label}</span><span className="text-white/24">{Math.round(Number(value))}%</span></div>
                              <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.05]"><motion.div initial={reduce ? undefined : { width: 0 }} animate={{ width: `${value}%` }} transition={{ duration: 0.45 }} className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[var(--sapo-blue-light)]" /></div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-[rgba(0,131,255,.1)] bg-[rgba(0,131,255,.04)] p-3.5">
                          <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--sapo-blue-light)]">Context</div>
                          <p className="mt-2 text-[10px] leading-5 text-white/42">{current.note}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-white/[0.055] bg-white/[0.018] p-4 sm:p-5">
                    <div className="flex items-center justify-between"><div className="text-xs font-semibold text-white/70">Activity stream</div><span className="h-2 w-2 rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_12px_rgba(53,162,255,.7)]" /></div>
                    <div className="mt-5 space-y-2.5">
                      {[
                        ['Order #A128', 'Bếp đã nhận', '00:18'],
                        ['Bàn B05', 'Thêm 02 món', '00:42'],
                        ['QR Payment', '486.000đ', '01:08'],
                        ['Kho nguyên liệu', active === 2 ? 'Cần kiểm tra' : 'Ổn định', '02:14'],
                        ['Ca làm việc', current.time === '22:00' ? 'Chuẩn bị kết ca' : 'Đang hoạt động', '03:02'],
                      ].map(([name, status, time], index) => (
                        <div key={`${name}-${index}`} className="flex items-start gap-3 rounded-xl border border-white/[0.045] bg-[#070b11] p-3">
                          <span className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${index < 2 ? 'bg-[var(--sapo-blue-light)] shadow-[0_0_8px_rgba(53,162,255,.65)]' : 'bg-white/15'}`} />
                          <div className="min-w-0 flex-1"><div className="truncate text-[10px] font-semibold text-white/66">{name}</div><div className="mt-1 text-[9px] text-white/28">{status}</div></div>
                          <span className="text-[8px] text-white/18">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-white/[0.06] p-3 sm:p-4">
                <div className="relative grid grid-cols-5 gap-2 before:absolute before:left-[10%] before:right-[10%] before:top-[18px] before:h-px before:bg-white/[0.055]">
                  {moments.map((moment, index) => {
                    const selected = active === index
                    return (
                      <button key={moment.time} onClick={() => setActive(index)} className="group relative z-10 flex flex-col items-center rounded-xl px-1 py-1 text-center sm:px-2">
                        <span className={`grid h-9 w-9 place-items-center rounded-full border transition ${selected ? 'border-[rgba(0,131,255,.38)] bg-[var(--sapo-blue)] text-white shadow-[0_0_25px_rgba(0,131,255,.28)]' : 'border-white/[0.07] bg-[#080c13] text-white/28 group-hover:text-white/60'}`}><moment.icon className="h-3.5 w-3.5" /></span>
                        <span className={`mt-2 text-[10px] font-bold ${selected ? 'text-white' : 'text-white/34'}`}>{moment.time}</span>
                        <span className="mt-0.5 hidden text-[8px] text-white/22 sm:block">{moment.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
