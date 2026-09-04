import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Bell, Boxes, Coffee, DoorOpen, MoonStar } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const moments = [
  { time: '08:00', label: 'Mở ca', icon: DoorOpen, orders: 6, revenue: '1,2M', note: 'Nhân viên bắt đầu ca, quầy sẵn sàng phục vụ.', bars: [20,25,18,22,30,28,35,32] },
  { time: '10:30', label: 'Giờ cao điểm', icon: Coffee, orders: 48, revenue: '6,8M', note: 'Order tăng nhanh, bếp/bar nhận món liên tục.', bars: [45,62,55,80,72,92,84,96] },
  { time: '14:00', label: 'Kiểm kho', icon: Boxes, orders: 72, revenue: '10,4M', note: 'Theo dõi tồn và chuẩn bị nguyên liệu cho ca tối.', bars: [35,42,38,55,48,62,58,66] },
  { time: '18:30', label: 'Order tăng mạnh', icon: Bell, orders: 126, revenue: '18,6M', note: 'Luồng order, bếp/bar và thu ngân vận hành đồng bộ.', bars: [60,72,68,82,76,95,90,100] },
  { time: '22:00', label: 'Kết ca', icon: MoonStar, orders: 154, revenue: '23,1M', note: 'Tổng hợp doanh thu và trạng thái vận hành cuối ngày.', bars: [70,74,78,82,88,91,96,100] },
]

export function ProductShowcase() {
  const [active, setActive] = useState(1)
  const current = moments[active]
  const reduce = useReducedMotion()
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Interactive showcase" title="Một ngày vận hành quán với Sapo" description="Chọn từng mốc thời gian để hình dung cách dữ liệu thay đổi trong ngày. Các con số bên dưới chỉ là dữ liệu minh họa giao diện, không phải số liệu kinh doanh cam kết." /></Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-[260px_1fr]">
          <div className="grid gap-2 sm:grid-cols-5 lg:grid-cols-1">
            {moments.map((moment, index) => (
              <button key={moment.time} onClick={() => setActive(index)} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${active===index?'border-[rgba(0,131,255,.38)] bg-[rgba(0,131,255,.1)]':'border-white/[0.07] bg-white/[0.025] hover:bg-white/[0.045]'}`}>
                <moment.icon className={`h-4 w-4 ${active===index?'text-[var(--sapo-blue-light)]':'text-white/32'}`} />
                <div><div className="text-xs font-semibold text-white">{moment.time}</div><div className="mt-0.5 text-[10px] text-white/38">{moment.label}</div></div>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-[26px] border border-white/[0.08] bg-[#090d14] p-4 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div key={current.time} initial={reduce?undefined:{opacity:0,y:10}} animate={reduce?undefined:{opacity:1,y:0}} exit={reduce?undefined:{opacity:0,y:-6}} transition={{duration:.25}}>
                <div className="flex flex-col gap-4 border-b border-white/[0.06] pb-5 sm:flex-row sm:items-end sm:justify-between">
                  <div><div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sapo-blue-light)]">{current.time} • {current.label}</div><h3 className="mt-2 text-xl font-semibold text-white">Dashboard vận hành</h3><p className="mt-2 text-sm text-white/42">{current.note}</p></div>
                  <div className="flex gap-2"><span className="rounded-lg bg-white/[0.04] px-3 py-2 text-xs text-white/48">{current.orders} đơn</span><span className="rounded-lg bg-[rgba(0,131,255,.1)] px-3 py-2 text-xs font-semibold text-[var(--sapo-blue-light)]">{current.revenue} doanh thu</span></div>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-[1.2fr_.8fr]">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                    <div className="flex justify-between text-[10px] text-white/34"><span>Cường độ đơn hàng</span><span>08:00 → 22:00</span></div>
                    <div className="mt-6 flex h-40 items-end gap-3">{current.bars.map((h,i)=><motion.span key={i} initial={reduce?undefined:{height:10}} animate={reduce?undefined:{height:`${h}%`}} transition={{duration:.45,delay:i*.025}} className="flex-1 rounded-t-md bg-gradient-to-t from-[var(--sapo-blue)]/24 to-[var(--sapo-blue-light)]" style={reduce?{height:`${h}%`}:undefined} />)}</div>
                  </div>
                  <div className="grid gap-3">
                    {[
                      ['Bàn đang phục vụ', active>=3?'18 / 24':'9 / 24'],
                      ['Order đang xử lý', active>=3?'08':'03'],
                      ['Cảnh báo tồn kho', active===2?'03':'01'],
                      ['Ca nhân viên', active===4?'Đã kết':'Đang hoạt động'],
                    ].map(([label,value])=><div key={label} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3"><span className="text-xs text-white/42">{label}</span><span className="text-xs font-semibold text-white">{value}</span></div>)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
