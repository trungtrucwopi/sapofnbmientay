import { CircleDollarSign, ClipboardX, EyeOff, Unplug } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { SpotlightCard } from './ui/SpotlightCard'

const points = [
  { icon: ClipboardX, title: 'Sai món / sót món', text: 'Order giấy hoặc truyền miệng dễ tạo sai lệch trong giờ cao điểm.' },
  { icon: CircleDollarSign, title: 'Khó kiểm soát thất thoát', text: 'Kho, nguyên liệu và doanh thu tách rời khiến việc đối soát mất thời gian.' },
  { icon: EyeOff, title: 'Chủ quán thiếu dữ liệu tức thời', text: 'Không có mặt tại quán nhưng vẫn cần nắm doanh thu và tình hình vận hành.' },
  { icon: Unplug, title: 'Quy trình rời rạc', text: 'Order, bếp/bar, thu ngân và báo cáo không kết nối tạo điểm nghẽn.' },
]

export function PainPoints() {
  return (
    <section id="solution" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Bài toán vận hành" title="Quán càng đông, vận hành thủ công càng dễ mất kiểm soát" description="Điểm nghẽn thường không nằm ở lượng khách, mà ở cách thông tin di chuyển giữa phục vụ, bếp/bar, thu ngân và chủ quán." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.05}>
              <SpotlightCard className="h-full p-6">
                <div className="flex items-center justify-between"><point.icon className="h-5 w-5 text-[var(--sapo-blue-light)]" /><span className="text-xs font-bold tracking-[0.18em] text-white/22">0{index + 1}</span></div>
                <h3 className="mt-10 text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/48">{point.text}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.18}><div className="mt-8 rounded-2xl border border-[rgba(0,131,255,.18)] bg-[rgba(0,131,255,.055)] px-5 py-4 text-center text-sm font-semibold text-white/82 sm:text-base">Sapo FnB kết nối toàn bộ quy trình trên một hệ thống.</div></Reveal>
      </div>
    </section>
  )
}
