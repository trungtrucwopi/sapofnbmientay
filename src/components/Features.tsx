import { BadgeDollarSign, Boxes, ChefHat, CreditCard, FileText, LayoutDashboard, LockKeyhole, QrCode, Smartphone, Users } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { SpotlightCard } from './ui/SpotlightCard'

const features = [
  { icon: Smartphone, title: 'Order thông minh', text: 'Điện thoại • Tablet • POS • QR', span: 'lg:col-span-2 lg:row-span-2', visual: 'order' },
  { icon: ChefHat, title: 'Bếp / Bar', text: 'Đồng bộ order trực tiếp', span: '', visual: 'queue' },
  { icon: LayoutDashboard, title: 'Quản lý doanh thu', text: 'Dashboard theo dõi tập trung', span: '', visual: 'chart' },
  { icon: Boxes, title: 'Kho & nguyên liệu', text: 'Theo dõi tồn kho và định lượng', span: '', visual: 'stock' },
  { icon: Users, title: 'Khách hàng', text: 'Thông tin, thành viên, tích điểm', span: '', visual: 'members' },
  { icon: LockKeyhole, title: 'Nhân viên', text: 'Phân quyền và quản lý ca', span: '', visual: 'roles' },
  { icon: CreditCard, title: 'Thanh toán', text: 'Tiền mặt • Chuyển khoản • QR', span: '', visual: 'pay' },
  { icon: FileText, title: 'Hóa đơn điện tử', text: 'Tích hợp trong quy trình bán hàng', span: '', visual: 'invoice' },
  { icon: QrCode, title: 'Order QR', text: 'Khách tự gọi món tại bàn', span: '', visual: 'qr' },
  { icon: BadgeDollarSign, title: 'Quản lý từ xa', text: 'Theo dõi quán bằng smartphone', span: 'lg:col-span-2', visual: 'remote' },
]

function MiniVisual({ type }: { type: string }) {
  if (type === 'order') return (
    <div className="mt-6 grid grid-cols-[1.2fr_.8fr] gap-3">
      <div className="rounded-xl border border-white/[0.07] bg-[#070b11] p-3"><div className="grid grid-cols-3 gap-2">{['B01','B02','B03','B04','B05','B06'].map((x, i) => <span key={x} className={`grid aspect-square place-items-center rounded-lg text-[10px] font-semibold ${i === 1 || i === 4 ? 'bg-[rgba(0,131,255,.16)] text-[var(--sapo-blue-light)]' : 'bg-white/[0.045] text-white/42'}`}>{x}</span>)}</div></div>
      <div className="rounded-xl border border-white/[0.07] bg-[#070b11] p-3"><div className="space-y-2">{[70,52,88,44].map((w,i)=><div key={i} className="h-2 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-[var(--sapo-blue)]/55" style={{width:`${w}%`}} /></div>)}</div><div className="mt-4 rounded-lg bg-[var(--sapo-blue)] px-2 py-2 text-center text-[10px] font-semibold text-white">Gửi order</div></div>
    </div>
  )
  if (type === 'chart') return <div className="mt-6 flex h-20 items-end gap-1.5">{[26,48,36,65,54,82,71,94].map((h,i)=><span key={i} className="flex-1 rounded-t bg-gradient-to-t from-[var(--sapo-blue)]/25 to-[var(--sapo-blue-light)]/80" style={{height:`${h}%`}} />)}</div>
  if (type === 'queue') return <div className="mt-6 space-y-2">{['#A128 • 3 món','#A129 • 2 món','#A130 • 5 món'].map((x,i)=><div key={x} className="flex items-center justify-between rounded-lg bg-white/[0.035] px-3 py-2 text-[10px] text-white/48"><span>{x}</span><span className={i===0?'text-amber-300':'text-[var(--sapo-blue-light)]'}>{i===0?'Đang làm':'Đã nhận'}</span></div>)}</div>
  if (type === 'stock') return <div className="mt-6 space-y-3">{[['Cà phê',72],['Sữa',44],['Syrup',28]].map(([n,v])=><div key={String(n)}><div className="mb-1 flex justify-between text-[10px] text-white/38"><span>{n}</span><span>{v}%</span></div><div className="h-1.5 rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-[var(--sapo-blue-light)]/65" style={{width:`${v}%`}} /></div></div>)}</div>
  if (type === 'members') return <div className="mt-6 flex -space-x-2">{['TT','HN','MK','PL','AN'].map((x,i)=><span key={x} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0a0e15] bg-white/[0.07] text-[9px] font-semibold text-white/60" style={{zIndex:10-i}}>{x}</span>)}</div>
  if (type === 'roles') return <div className="mt-6 grid gap-2">{['Quản lý','Thu ngân','Phục vụ'].map((x,i)=><div key={x} className="flex justify-between rounded-lg bg-white/[0.035] px-3 py-2 text-[10px]"><span className="text-white/48">{x}</span><span className="text-[var(--sapo-blue-light)]">{i===0?'Toàn quyền':'Theo quyền'}</span></div>)}</div>
  if (type === 'pay') return <div className="mt-6 grid grid-cols-3 gap-2">{['Cash','Bank','QR'].map(x=><div key={x} className="rounded-lg border border-white/[0.06] bg-white/[0.03] py-3 text-center text-[10px] text-white/48">{x}</div>)}</div>
  if (type === 'invoice') return <div className="mt-6 rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-3 text-[10px] leading-5 text-white/42"><div className="font-semibold text-white/62">HÓA ĐƠN</div><div className="mt-2 flex justify-between"><span>Tổng tiền</span><span>860.000đ</span></div><div className="flex justify-between"><span>Trạng thái</span><span className="text-emerald-300">Hoàn tất</span></div></div>
  if (type === 'qr') return <div className="mt-6 grid place-items-center"><div className="qr-pattern h-20 w-20 rounded-lg bg-white p-2" /></div>
  return <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3"><Smartphone className="h-9 w-9 text-[var(--sapo-blue-light)]" /><div><div className="text-xs font-semibold text-white">Theo dõi từ điện thoại</div><div className="mt-1 text-[10px] text-white/36">Doanh thu • kho • vận hành</div></div></div>
}

export function Features() {
  return (
    <section id="features" className="section-pad border-y border-white/[0.05] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Bento features" title="Tất cả công cụ vận hành quán trong một hệ thống" description="Không chỉ là icon và mô tả — mỗi nhóm tính năng được mô phỏng bằng một trạng thái giao diện để người xem hiểu nhanh cách hệ thống hoạt động." /></Reveal>
        <div className="mt-10 grid auto-rows-[minmax(210px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 4) * 0.035} className={feature.span}>
              <SpotlightCard className="h-full p-5 sm:p-6">
                <feature.icon className="h-5 w-5 text-[var(--sapo-blue-light)]" />
                <h3 className="mt-5 text-base font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/42">{feature.text}</p>
                <MiniVisual type={feature.visual} />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
