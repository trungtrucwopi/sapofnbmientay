import { ArrowUpRight, BookOpenCheck, Coffee, Soup } from 'lucide-react'
import { site } from '../config/site'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { SpotlightCard } from './ui/SpotlightCard'

const resources = [
  { icon: Soup, label: 'Nhà hàng / quán ăn', title: 'Tính năng & tình huống vận hành', text: 'Sơ đồ bàn, order, bếp/bar, thanh toán, kho và báo cáo.', href: site.officialSources.restaurant },
  { icon: Coffee, label: 'Cafe / tiệm bánh', title: 'Quy trình bán hàng đa thiết bị', text: 'Order, thiết bị bán hàng, nguyên liệu và quản lý từ xa.', href: site.officialSources.cafe },
  { icon: BookOpenCheck, label: 'Tài liệu sử dụng', title: 'Help Center Sapo FnB', text: 'Tài liệu chính thức cho nhà hàng & dịch vụ: QR order, tồn kho, bàn, bar/bếp, thu ngân…', href: site.officialSources.help },
]

export function Customers() {
  return (
    <section id="customers" className="section-pad border-y border-white/[0.05] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Nguồn xác minh" title="Câu chuyện khách hàng & tài liệu từ Sapo" description="Bản source không tự tạo logo khách hàng hay testimonial giả. Khi có case study được xác minh, bạn có thể thay các card nguồn chính thức này bằng tài sản khách hàng được phép sử dụng." /></Reveal>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <SpotlightCard className="h-full p-6">
                <item.icon className="h-5 w-5 text-[var(--sapo-blue-light)]" />
                <div className="mt-8 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">{item.label}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/46">{item.text}</p>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[var(--sapo-blue-light)] hover:text-white">Xem nguồn chính thức <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
