import { Boxes, ChefHat, CreditCard, FileText, LayoutDashboard, QrCode, Smartphone, Users } from 'lucide-react'
import { Reveal } from './ui/Reveal'
import { SpotlightCard } from './ui/SpotlightCard'

function OrderVisual() {
  return (
    <div className="mt-7 grid min-h-[270px] gap-3 sm:grid-cols-[1.15fr_.85fr]">
      <div className="rounded-[22px] border border-white/[0.055] bg-[#03070b] p-4">
        <div className="flex items-center justify-between text-[9px] text-white/22"><span>Floor map</span><span>18 bàn</span></div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {Array.from({length:9}).map((_,i)=><div key={i} className={`grid aspect-square place-items-center rounded-xl border text-[9px] font-bold ${[1,4,7].includes(i)?'border-[rgba(53,162,255,.18)] bg-[rgba(0,131,255,.07)] text-[var(--sapo-blue-light)]':'border-white/[0.04] bg-white/[0.018] text-white/24'}`}>B{String(i+1).padStart(2,'0')}</div>)}
        </div>
      </div>
      <div className="rounded-[22px] border border-white/[0.055] bg-[#03070b] p-4">
        <div className="text-[9px] text-white/22">Order #A128</div>
        <div className="mt-4 space-y-2.5">
          {['Cơm bò sốt tiêu','Trà đào cam sả','Khoai tây chiên'].map((item,i)=><div key={item} className="flex items-center justify-between rounded-xl border border-white/[0.04] bg-white/[0.018] px-3 py-3 text-[9px]"><span className="text-white/42">{item}</span><span className="text-white/18">x{i+1}</span></div>)}
        </div>
        <div className="mt-4 rounded-xl bg-white px-3 py-3 text-center text-[9px] font-black text-[#06101b]">GỬI ORDER</div>
      </div>
    </div>
  )
}

function RevenueVisual() {
  return (
    <div className="mt-7 rounded-[22px] border border-white/[0.055] bg-[#03070b] p-4">
      <div className="flex items-start justify-between">
        <div><div className="text-[9px] text-white/22">Doanh thu hôm nay</div><div className="mt-2 text-4xl font-black tracking-[-0.06em] text-white">18,64M</div></div>
        <span className="rounded-full border border-emerald-300/10 bg-emerald-300/[0.04] px-2.5 py-1 text-[8px] font-bold text-emerald-300">+12,8%</span>
      </div>
      <div className="mt-6 flex h-32 items-end gap-2">
        {[28,36,31,48,42,58,54,68,62,79,73,92,86,100].map((h,i)=><span key={i} className="flex-1 rounded-t-[4px] bg-gradient-to-t from-[rgba(0,131,255,.1)] to-[#74caff]" style={{height:`${h}%`}} />)}
      </div>
    </div>
  )
}

function QueueVisual() {
  return (
    <div className="mt-7 space-y-2.5">
      {['#A128 • B03 • 3 món','#A129 • B11 • 2 món','#A130 • B07 • 5 món'].map((x,i)=><div key={x} className="flex items-center justify-between rounded-[16px] border border-white/[0.045] bg-[#03070b] px-4 py-3.5 text-[9px]"><span className="text-white/40">{x}</span><span className={i===0?'text-amber-300/75':i===1?'text-[var(--sapo-blue-light)]':'text-emerald-300/70'}>{i===0?'Đang làm':i===1?'Đã nhận':'Sẵn sàng'}</span></div>)}
    </div>
  )
}

function InventoryVisual() {
  return (
    <div className="mt-7 space-y-4">
      {[['Cà phê',78],['Sữa',52],['Syrup',31],['Ly / bao bì',66]].map(([name,value])=>(
        <div key={String(name)}>
          <div className="mb-2 flex items-center justify-between text-[9px]"><span className="text-white/32">{name}</span><span className="font-semibold text-white/52">{value}%</span></div>
          <div className="h-1.5 rounded-full bg-white/[0.045]"><div className="h-full rounded-full bg-gradient-to-r from-[var(--sapo-blue)] to-[#80d1ff]" style={{width:`${value}%`}} /></div>
        </div>
      ))}
    </div>
  )
}

function RemoteVisual() {
  return (
    <div className="mt-7 grid min-h-[210px] place-items-center rounded-[22px] border border-white/[0.055] bg-[#03070b] p-5">
      <div className="relative h-[185px] w-[94px] rounded-[24px] border border-white/[0.11] bg-[#070d14] p-2 shadow-[0_25px_55px_rgba(0,0,0,.45)]">
        <div className="mx-auto h-1 w-7 rounded-full bg-white/10" />
        <div className="mt-4 text-[7px] uppercase tracking-[0.16em] text-white/20">Owner view</div>
        <div className="mt-2 text-xl font-black tracking-[-0.05em] text-white">18,64M</div>
        <div className="mt-1 text-[7px] text-emerald-300/60">Realtime</div>
        <div className="mt-5 flex h-14 items-end gap-1">
          {[38,62,49,72,58,86,78,100].map((h,i)=><span key={i} className="flex-1 rounded-t-[2px] bg-[#59b7ff]" style={{height:`${h}%`}} />)}
        </div>
      </div>
    </div>
  )
}

function UtilityVisual() {
  return (
    <div className="mt-7 grid grid-cols-2 gap-3">
      {[
        ['QR Order', QrCode],
        ['Thanh toán', CreditCard],
        ['Hóa đơn', FileText],
        ['Khách hàng', Users],
      ].map(([label, Icon])=>{
        const CardIcon = Icon as typeof QrCode
        return <div key={String(label)} className="rounded-[18px] border border-white/[0.045] bg-[#03070b] p-4"><CardIcon className="h-4 w-4 text-[var(--sapo-blue-light)]" /><div className="mt-5 text-[9px] font-semibold text-white/42">{String(label)}</div></div>
      })}
    </div>
  )
}

const cards = [
  { title: 'Order là lõi của toàn bộ hệ thống.', description: 'Điện thoại, tablet, POS và QR cùng đưa đơn về một luồng xử lý.', icon: Smartphone, visual: <OrderVisual />, className: 'lg:col-span-2 lg:row-span-2', label: 'FLOW CORE' },
  { title: 'Bếp / Bar không phải chờ truyền miệng.', description: 'Order chuyển trực tiếp tới khu vực chế biến.', icon: ChefHat, visual: <QueueVisual />, className: '', label: 'LIVE QUEUE' },
  { title: 'Doanh thu nhìn được ngay khi đang vận hành.', description: 'Theo dõi số liệu tập trung thay vì đợi cuối ca.', icon: LayoutDashboard, visual: <RevenueVisual />, className: 'lg:col-span-2', label: 'OWNER DATA' },
  { title: 'Kho và nguyên liệu có tín hiệu rõ ràng hơn.', description: 'Theo dõi tồn kho và hỗ trợ kiểm soát nguyên liệu.', icon: Boxes, visual: <InventoryVisual />, className: '', label: 'INVENTORY' },
  { title: 'Chủ quán vẫn theo dõi được khi không có mặt.', description: 'Xem tình hình vận hành trên thiết bị di động.', icon: Smartphone, visual: <RemoteVisual />, className: '', label: 'REMOTE' },
  { title: 'QR, thanh toán, hóa đơn và khách hàng cùng một nơi.', description: 'Các nghiệp vụ bán hàng được đặt trong cùng hệ thống.', icon: CreditCard, visual: <UtilityVisual />, className: 'lg:col-span-2', label: 'ECOSYSTEM' },
]

export function Features() {
  return (
    <section id="features" className="section-pad relative overflow-hidden border-y border-white/[0.05] bg-[#04070b]">
      <div className="absolute left-[44%] top-[-20%] h-[600px] w-[600px] rounded-full bg-[var(--sapo-blue)]/[0.04] blur-[150px]" />
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-7 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <div className="text-[9px] font-black uppercase tracking-[0.24em] text-[var(--sapo-blue-light)]">System architecture</div>
              <h2 className="mt-5 max-w-3xl text-balance text-[clamp(2.4rem,5vw,5rem)] font-black leading-[.96] tracking-[-0.06em] text-white">
                Ít card hơn.
                <span className="block text-white/28">Nhưng mỗi card phải kể được sản phẩm.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-white/38 lg:justify-self-end">Từ order đến doanh thu, mỗi nghiệp vụ được kết nối để chủ quán nhìn được toàn bộ vận hành thay vì ghép nhiều công cụ rời nhau.</p>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[minmax(250px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card,index)=>(
            <Reveal key={card.title} delay={(index % 4) * .04} className={card.className}>
              <SpotlightCard className="feature-v3 h-full overflow-hidden p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-[rgba(53,162,255,.13)] bg-[rgba(0,131,255,.045)] text-[var(--sapo-blue-light)]"><card.icon className="h-4 w-4" /></div>
                  <span className="text-[8px] font-black uppercase tracking-[0.18em] text-white/16">{card.label}</span>
                </div>
                <h3 className="mt-5 max-w-md text-xl font-black leading-6 tracking-[-0.035em] text-white">{card.title}</h3>
                <p className="mt-3 max-w-md text-xs leading-6 text-white/34">{card.description}</p>
                {card.visual}
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
