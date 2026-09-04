import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'

const faqs = [
  ['Sapo FnB phù hợp với mô hình nào?', 'Các nhóm nghiệp vụ Sapo FnB được thiết kế cho nhà hàng, quán ăn, cafe và nhiều mô hình dịch vụ FnB. Website này cũng trình bày các luồng ứng dụng cho trà sữa, tiệm bánh, bida, karaoke và bar/pub theo nguồn Sapo.'],
  ['Quán mới mở có dùng được không?', 'Có thể bắt đầu từ quy trình bán hàng cơ bản rồi mở rộng dần. Cấu hình phù hợp nên dựa trên mô hình phục vụ, số khu vực, số thiết bị và nhu cầu quản lý thực tế.'],
  ['Nhân viên có khó học không?', 'Trang sản phẩm Sapo mô tả giao diện đơn giản, dễ thao tác. Khi triển khai, nên hướng dẫn theo đúng vai trò như phục vụ, bếp/bar và thu ngân để nhân viên làm quen nhanh hơn.'],
  ['Có quản lý được từ xa không?', 'Có. Sapo có nội dung chính thức về theo dõi hoạt động kinh doanh và doanh thu trên điện thoại, giúp chủ quán nắm tình hình khi không có mặt trực tiếp.'],
  ['Có quản lý kho/nguyên liệu không?', 'Có các nghiệp vụ tồn kho, nguyên liệu và định lượng trong hệ thống Sapo FnB. Phạm vi tính năng cụ thể cần đối chiếu theo gói và cấu hình được tư vấn.'],
  ['Có hỗ trợ order QR không?', 'Có. Sapo FnB có tính năng QR order, cho phép khách dùng điện thoại tự gọi món tại bàn.'],
  ['Có hỗ trợ hóa đơn điện tử không?', 'Sapo có các giải pháp hóa đơn điện tử tích hợp trong hệ sinh thái bán hàng. Cách triển khai cụ thể cần được tư vấn theo nhu cầu và quy định áp dụng tại thời điểm sử dụng.'],
  ['Mất Internet có ảnh hưởng vận hành không?', 'Các trang sản phẩm Sapo cho nhà hàng, cafe và bar/pub mô tả khả năng chuyển sang chế độ offline cho một số nghiệp vụ bán hàng, sau đó đồng bộ dữ liệu khi có mạng trở lại.'],
  ['Có dùng được nhiều thiết bị không?', 'Trang sản phẩm cafe của Sapo cho biết phần mềm có thể sử dụng trên nhiều thiết bị như điện thoại, iPad và máy bán hàng. Cấu hình thực tế nên được kiểm tra theo mô hình triển khai.'],
  ['Quy trình triển khai mất bao lâu?', 'Website không đưa ra thời gian cố định vì thời lượng phụ thuộc quy mô, dữ liệu cần thiết lập, thiết bị và mức độ hướng dẫn. Trung Trực sẽ khảo sát trước khi đề xuất kế hoạch triển khai.'],
]

export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section-pad border-y border-white/[0.05] bg-[#070a0f]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="FAQ" title="Một số câu hỏi chủ quán thường quan tâm" align="center" /></Reveal>
        <div className="mt-10 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-white/[0.02] px-4 sm:px-6">
          {faqs.map(([question, answer], index) => (
            <div key={question}>
              <button className="flex w-full items-center justify-between gap-5 py-5 text-left" aria-expanded={open===index} onClick={() => setOpen(open===index ? -1 : index)}>
                <span className="text-sm font-semibold text-white sm:text-base">{question}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-white/38 transition-transform ${open===index?'rotate-180':''}`} />
              </button>
              {open===index && <div className="pb-5 pr-8 text-sm leading-7 text-white/46">{answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
