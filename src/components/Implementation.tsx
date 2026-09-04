import { Cable, CirclePlay, ClipboardList, GraduationCap, Rocket, SlidersHorizontal } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const steps = [
  { icon: ClipboardList, title: 'Khảo sát mô hình', text: 'Tìm hiểu quy mô, quy trình và nhu cầu của quán.' },
  { icon: CirclePlay, title: 'Demo giải pháp', text: 'Demo trực tiếp theo nghiệp vụ thực tế.' },
  { icon: SlidersHorizontal, title: 'Thiết lập hệ thống', text: 'Menu, danh mục, bàn/phòng, nhân viên và quyền hạn.' },
  { icon: Cable, title: 'Kết nối thiết bị', text: 'POS, máy in, QR và khu vực bếp/bar nếu có.' },
  { icon: GraduationCap, title: 'Hướng dẫn sử dụng', text: 'Hướng dẫn chủ quán và nhân viên theo luồng công việc.' },
  { icon: Rocket, title: 'Go Live & hỗ trợ', text: 'Đồng hành khi quán đưa hệ thống vào vận hành.' },
]

export function Implementation() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Triển khai" title="Triển khai gọn. Có người đồng hành từ đầu đến khi vận hành." description="Quy trình dưới đây mô tả các bước triển khai điển hình; thời gian cụ thể sẽ phụ thuộc mô hình và phạm vi thiết lập thực tế." /></Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={(index % 3) * 0.05}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                <div className="absolute right-4 top-2 text-5xl font-black tracking-[-0.08em] text-white/[0.025]">0{index + 1}</div>
                <step.icon className="h-5 w-5 text-[var(--sapo-blue-light)]" />
                <h3 className="mt-8 text-base font-semibold text-white">0{index + 1} — {step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/44">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
