import { ChefHat, CreditCard, DoorOpen, FileBarChart2, QrCode, Utensils } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const steps = [
  { icon: DoorOpen, title: 'Nhận khách / chọn bàn', text: 'Xác định bàn hoặc khu vực phục vụ.' },
  { icon: QrCode, title: 'Order tại bàn hoặc QR', text: 'Nhân viên hoặc khách tự gửi món.' },
  { icon: ChefHat, title: 'Chuyển bếp / bar', text: 'Thông tin món được chuyển đến nơi chế biến.' },
  { icon: Utensils, title: 'Hoàn thành & trả món', text: 'Theo dõi trạng thái trong quá trình phục vụ.' },
  { icon: CreditCard, title: 'Thanh toán & hóa đơn', text: 'Ghi nhận thanh toán và hoàn tất đơn.' },
  { icon: FileBarChart2, title: 'Đồng bộ báo cáo', text: 'Dữ liệu bán hàng cập nhật về hệ thống quản lý.' },
]

export function Workflow() {
  return (
    <section id="workflow" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Product workflow" title="Một quy trình xuyên suốt từ lúc khách vào quán đến khi chủ xem báo cáo" /></Reveal>
        <div className="relative mt-12 grid gap-4 lg:grid-cols-6">
          <div className="absolute left-[8%] right-[8%] top-7 hidden h-px bg-white/[0.07] lg:block"><div className="pipeline-pulse absolute h-px w-28 bg-gradient-to-r from-transparent via-[var(--sapo-blue-light)] to-transparent" /></div>
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.05}>
              <div className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 lg:border-0 lg:bg-transparent lg:p-0">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.09] bg-[#0b1018] text-[var(--sapo-blue-light)] shadow-[0_0_0_7px_#05070a] transition group-hover:border-[rgba(0,131,255,.35)] group-hover:shadow-[0_0_0_7px_#05070a,0_0_30px_rgba(0,131,255,.18)]"><step.icon className="h-5 w-5" /></div>
                <div className="mt-6 text-[10px] font-bold tracking-[0.16em] text-white/24">STEP 0{index + 1}</div>
                <h3 className="mt-2 text-sm font-semibold leading-5 text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/42">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
