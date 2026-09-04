import { BadgeDollarSign, Boxes, ChefHat, CreditCard, FileText, LayoutDashboard, LockKeyhole, QrCode, Smartphone, Users } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SectionHeading } from './ui/SectionHeading'
import { SpotlightCard } from './ui/SpotlightCard'

const features = [
  { icon: Smartphone, title: 'Order thông minh', text: 'Điện thoại • Tablet • POS • QR', span: 'lg:col-span-2 lg:row-span-2', visual: 'order', label: 'FLOW CORE' },
  { icon: ChefHat, title: 'Bếp / Bar', text: 'Đồng bộ order trực tiếp', span: '', visual: 'queue', label: 'LIVE QUEUE' },
  { icon: LayoutDashboard, title: 'Quản lý doanh thu', text: 'Dashboard theo dõi tập trung', span: '', visual: 'chart', label: 'REALTIME' },
  { icon: Boxes, title: 'Kho & nguyên liệu', text: 'Theo dõi tồn kho và định lượng', span: '', visual: 'stock', label: 'INVENTORY' },
  { icon: Users, title: 'Khách hàng', text: 'Thông tin, thành viên, tích điểm', span: '', visual: 'members', label: 'CRM' },
  { icon: LockKeyhole, title: 'Nhân viên', text: 'Phân quyền và quản lý ca', span: '', visual: 'roles', label: 'ACCESS' },
  { icon: CreditCard, title: 'Thanh toán', text: 'Tiền mặt • Chuyển khoản • QR', span: '', visual: 'pay', label: 'PAYMENT' },
  { icon: FileText, title: 'Hóa đơn điện tử', text: 'Tích hợp trong quy trình bán hàng', span: '', visual: 'invoice', label: 'INVOICE' },
  { icon: QrCode, title: 'Order QR', text: 'Khách tự gọi món tại bàn', span: '', visual: 'qr', label: 'SELF ORDER' },
  { icon: BadgeDollarSign, title: 'Quản lý từ xa', text: 'Theo dõi quán bằng smartphone', span: 'lg:col-span-2', visual: 'remote', label: 'OWNER VIEW' },
]

function MiniVisual({ type }: { type: string }) {
  if (type === 'order') return (
    <div className="mt-7 grid min-h-[250px] gap-3 sm:grid-cols-[1.1fr_.9fr]">
      <div className="rounded-[20px] border border-white/[0.06] bg-[#05090f] p-3.5">
        <div className="flex items-center justify-between text-[9px] text-white/26"><span>Sơ đồ bàn</span><span>18 bàn</span></div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {['B01','B02','B03','B04','B05','B06','B07','B08','B09'].map((x, i) => <span key={x} className={`grid aspect-square place-items-center rounded-xl border text-[10px] font-semibold ${i === 1 || i === 4 || i === 7 ? 'border-[rgba(0,131,255,.18)] bg-[rgba(0,131,255,.08)] text-[var(--sapo-blue-light)]' : 'border-white/[0.04] bg-white/[0.025] text-white/34'}`}>{x}</span>)}
        </div>
      </div>
      <div className="rounded-[20px] border border-white/[0.06] bg-[#05090f] p-3.5">
        <div className="flex items-center justify-between"><div className="text-[9px] text-white/26">Order #A128</div><span className="h-1.5 w-1.5 rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_8px_rgba(53,162,255,.7)]" /></div>
        <div className="mt-4 space-y-2.5">{['Cơm bò sốt tiêu','Trà đào cam sả','Khoai tây chiên'].map((x, i) => <div key={x} className="flex items-center justify-between rounded-xl bg-white/[0.025] px-3 py-2.5 text-[9px]"><span className="text-white/52">{x}</span><span className="text-white/22">x{i + 1}</span></div>)}</div>
        <div className="mt-4 rounded-xl bg-[var(--sapo-blue)] px-3 py-3 text-center text-[10px] font-bold text-white shadow-[0_10px_28px_rgba(0,131,255,.18)]">GỬI ORDER</div>
      </div>
    </div>
  )
  if (type === 'chart') return <div className="mt-7 flex h-24 items-end gap-1.5 rounded-2xl border border-white/[0.05] bg-[#05090f] px-3 pb-3 pt-4">{[26,48,36,65,54,82,71,94,84,100].map((h,i)=><span key={i} className="flex-1 rounded-t-[4px] bg-gradient-to-t from-[rgba(0,131,255,.14)] to-[#64c2ff]" style={{height:`${h}%`}} />)}</div>
  if (type === 'queue') return <div className="mt-7 space-y-2.5">{['#A128 • 3 món','#A129 • 2 món','#A130 • 5 món'].map((x,i)=><div key={x} className="flex items-center justify-between rounded-xl border border-white/[0.045] bg-[#05090f] px-3 py-3 text-[9px] text-white/46"><span>{x}</span><span className={i===0?'text-amber-300':'text-[var(--sapo-blue-light)]'}>{i===0?'Đang làm':'Đã nhận'}</span></div>)}</div>
  if (type === 'stock') return <div className="mt-7 space-y-3.5">{[['Cà phê',72],['Sữa',44],['Syrup',28]].map(([n,v])=><div key={String(n)}><div className="mb-1.5 flex justify-between text-[9px] text-white/34"><span>{n}</span><span>{v}%</span></div><div className="h-1.5 rounded-full bg-white/[0.05]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[var(--sapo-blue-light)]" style={{width:`${v}%`}} /></div></div>)}</div>
  if (type === 'members') return <div className="mt-7"><div className="flex -space-x-2">{['TT','HN','MK','PL','AN'].map((x,i)=><span key={x} className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#0a0e15] bg-white/[0.07] text-[9px] font-semibold text-white/60" style={{zIndex:10-i}}>{x}</span>)}</div><div className="mt-4 text-[9px] text-white/28">5 khách vừa quay lại trong tuần</div></div>
  if (type === 'roles') return <div className="mt-7 grid gap-2.5">{['Quản lý','Thu ngân','Phục vụ'].map((x,i)=><div key={x} className="flex justify-between rounded-xl border border-white/[0.045] bg-[#05090f] px-3 py-3 text-[9px]"><span className="text-white/44">{x}</span><span className="text-[var(--sapo-blue-light)]">{i===0?'Toàn quyền':'Theo quyền'}</span></div>)}</div>
  if (type === 'pay') return <div className="mt-7 grid grid-cols-3 gap-2">{['Cash','Bank','QR'].map((x,i)=><div key={x} className={`rounded-xl border py-4 text-center text-[9px] ${i===2?'border-[rgba(0,131,255,.16)] bg-[rgba(0,131,255,.06)] text-[var(--sapo-blue-light)]':'border-white/[0.05] bg-[#05090f] text-white/36'}`}>{x}</div>)}</div>
  if (type === 'invoice') return <div className="mt-7 rounded-2xl border border-dashed border-white/[0.08] bg-[#05090f] p-4 text-[9px] leading-5 text-white/38"><div className="font-semibold tracking-[0.14em] text-white/64">HÓA ĐƠN</div><div className="mt-3 flex justify-between"><span>Tổng tiền</span><span className="text-white/58">860.000đ</span></div><div className="flex justify-between"><span>Trạng thái</span><span className="text-emerald-300">Hoàn tất</span></div></div>
  if (type === 'qr') return <div className="mt-7 grid place-items-center rounded-2xl border border-white/[0.05] bg-[#05090f] py-5"><div className="qr-pattern h-20 w-20 rounded-lg bg-white p-2" /><div className="mt-3 text-[9px] text-white/28">Scan • Order • Pay</div></div>
  return <div className="mt-7 grid gap-3 sm:grid-cols-[.8fr_1.2fr]"><div className="grid min-h-32 place-items-center rounded-2xl border border-white/[0.05] bg-[#05090f]"><div className="relative grid h-20 w-12 place-items-center rounded-[14px] border border-white/[0.09] bg-[#0a0f16]"><div className="absolute top-1.5 h-0.5 w-4 rounded-full bg-white/10"/><Smartphone className="h-5 w-5 text-[var(--sapo-blue-light)]" /></div></div><div className="rounded-2xl border border-white/[0.05] bg-[#05090f] p-4"><div className="text-[9px] text-white/28">Owner view</div><div className="mt-2 text-xl font-bold text-white">18,64M</div><div className="mt-1 text-[9px] text-emerald-300/60">Doanh thu hôm nay</div><div className="mt-4 h-1.5 rounded-full bg-white/[0.05]"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[var(--sapo-blue-light)]" /></div></div></div>
}

export function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden border-y border-white/[0.05] bg-[#070a0f]">
      <div className="absolute left-[40%] top-[-16%] h-[520px] w-[520px] rounded-full bg-[var(--sapo-blue)]/[0.035] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><SectionHeading eyebrow="Product system" title="Không phải danh sách tính năng. Đây là một hệ điều hành cho quán." description="Mỗi bento card mô phỏng một phần của luồng vận hành để người xem hiểu sản phẩm bằng mắt trước khi đọc chi tiết." /></Reveal>
        <div className="mt-10 grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={(index % 4) * 0.035} className={feature.span}>
              <SpotlightCard className="feature-card h-full p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(0,131,255,.12)] bg-[rgba(0,131,255,.05)] text-[var(--sapo-blue-light)]"><feature.icon className="h-4 w-4" /></div>
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/18">{feature.label}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{feature.title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/38">{feature.text}</p>
                <MiniVisual type={feature.visual} />
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
