import { CircleDollarSign, ClipboardX, EyeOff, Unplug } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const points = [
  { icon: ClipboardX, code: '01', title: 'Sai món / sót món', text: 'Order giấy hoặc truyền miệng dễ lệch thông tin trong giờ cao điểm.' },
  { icon: CircleDollarSign, code: '02', title: 'Khó kiểm soát thất thoát', text: 'Kho, nguyên liệu và doanh thu tách rời khiến việc đối soát mất thời gian.' },
  { icon: EyeOff, code: '03', title: 'Thiếu dữ liệu tức thời', text: 'Chủ quán không có mặt nhưng vẫn cần biết quán đang vận hành ra sao.' },
  { icon: Unplug, code: '04', title: 'Quy trình rời rạc', text: 'Order, bếp/bar, thu ngân và báo cáo không kết nối tạo điểm nghẽn.' },
]

export function PainPoints() {
  return (
    <section id="solution" className="section-pad relative overflow-hidden">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--sapo-blue-light)]">Where operations break</div>
              <h2 className="mt-5 max-w-2xl text-balance text-[clamp(2.35rem,5vw,5rem)] font-black leading-[.96] tracking-[-0.06em] text-white">
                Quán đông không đáng sợ.
                <span className="block text-white/28">Dữ liệu đứt đoạn mới đáng sợ.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/38 lg:justify-self-end lg:text-base">Điểm nghẽn thường xuất hiện ở nơi thông tin phải đi từ người này sang người khác bằng trí nhớ, giấy ghi tay hoặc nhiều công cụ rời nhau.</p>
          </div>
        </Reveal>

        <div className="mt-12 divide-y divide-white/[0.055] border-y border-white/[0.055]">
          {points.map((point,index)=>(
            <Reveal key={point.title} delay={index*.04}>
              <div className="pain-row group grid gap-5 py-6 sm:grid-cols-[80px_1fr_auto] sm:items-center lg:py-8">
                <div className="text-4xl font-black tracking-[-0.06em] text-white/[0.09] transition group-hover:text-[var(--sapo-blue-light)]">{point.code}</div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.065] bg-white/[0.02] text-white/28 transition group-hover:border-[rgba(53,162,255,.18)] group-hover:text-[var(--sapo-blue-light)]"><point.icon className="h-4 w-4" /></div>
                  <div>
                    <h3 className="text-lg font-black tracking-[-0.025em] text-white">{point.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/34">{point.text}</p>
                  </div>
                </div>
                <div className="hidden h-px w-24 bg-gradient-to-r from-white/[0.08] to-transparent lg:block" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={.18}>
          <div className="mt-8 flex flex-col gap-3 rounded-[22px] border border-[rgba(53,162,255,.14)] bg-[linear-gradient(90deg,rgba(0,131,255,.055),rgba(255,255,255,.012))] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-bold text-white/72">Sapo FnB gom các điểm rời rạc về cùng một luồng vận hành.</span>
            <span className="text-[8px] font-black uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]">One operational flow</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
