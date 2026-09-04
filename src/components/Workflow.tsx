import { ChefHat, CreditCard, DoorOpen, FileBarChart2, QrCode, Utensils } from 'lucide-react'
import { Reveal } from './ui/Reveal'

const steps = [
  { icon: DoorOpen, number: '01', title: 'Nhận khách / chọn bàn', text: 'Xác định bàn hoặc khu vực phục vụ.' },
  { icon: QrCode, number: '02', title: 'Order tại bàn hoặc QR', text: 'Nhân viên hoặc khách tự gửi món.' },
  { icon: ChefHat, number: '03', title: 'Chuyển bếp / bar', text: 'Thông tin món được chuyển tới khu vực chế biến.' },
  { icon: Utensils, number: '04', title: 'Hoàn thành & trả món', text: 'Theo dõi trạng thái trong lúc phục vụ.' },
  { icon: CreditCard, number: '05', title: 'Thanh toán & hóa đơn', text: 'Ghi nhận thanh toán và hoàn tất đơn.' },
  { icon: FileBarChart2, number: '06', title: 'Đồng bộ báo cáo', text: 'Dữ liệu bán hàng cập nhật về hệ thống quản lý.' },
]

export function Workflow() {
  return (
    <section id="workflow" className="section-pad relative overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.035] to-transparent" />
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--sapo-blue-light)]">Operational pipeline</div>
            <h2 className="mt-5 text-balance text-[clamp(2.3rem,5vw,4.8rem)] font-black leading-[.98] tracking-[-0.06em] text-white">Một order đi qua quán như một tín hiệu.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/36">Từ khách vào quán đến lúc chủ xem báo cáo, mỗi bước nối tiếp nhau thay vì hoạt động như những điểm rời rạc.</p>
          </div>
        </Reveal>

        <div className="workflow-rail relative mt-14 overflow-hidden rounded-[30px] border border-white/[0.07] bg-[#05090e] p-4 sm:p-5 lg:p-7">
          <div className="absolute left-[8%] right-[8%] top-[60px] hidden h-px bg-white/[0.055] lg:block">
            <div className="pipeline-pulse absolute h-px w-32 bg-gradient-to-r from-transparent via-[var(--sapo-blue-light)] to-transparent" />
          </div>
          <div className="relative grid gap-3 lg:grid-cols-6">
            {steps.map((step,index)=>(
              <Reveal key={step.title} delay={index*.045}>
                <div className="group rounded-[20px] border border-white/[0.045] bg-white/[0.014] p-4 transition hover:-translate-y-1 hover:border-[rgba(53,162,255,.14)] hover:bg-white/[0.025] lg:border-transparent lg:bg-transparent">
                  <div className="flex items-center justify-between">
                    <div className="relative z-10 grid h-11 w-11 place-items-center rounded-xl border border-white/[0.075] bg-[#07101a] text-[var(--sapo-blue-light)] shadow-[0_0_0_6px_#05090e]">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="text-[8px] font-black tracking-[0.18em] text-white/14">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-sm font-black leading-5 text-white/78">{step.title}</h3>
                  <p className="mt-2 text-[11px] leading-5 text-white/28">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
