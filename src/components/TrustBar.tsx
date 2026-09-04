import { Activity, CheckCircle2, Radio, Sparkles } from 'lucide-react'
import { Counter } from './ui/Counter'

const categories = ['NHÀ HÀNG', 'CAFE', 'TRÀ SỮA', 'TIỆM BÁNH', 'BIDA', 'KARAOKE', 'BAR / PUB']

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.055] bg-[#06090e] py-7">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,131,255,.025),transparent)]" />
      <div className="relative mx-auto mb-5 grid max-w-7xl gap-4 px-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-white/58"><Sparkles className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Hệ sinh thái Sapo phục vụ hơn <span className="font-semibold text-white"><Counter to={230} suffix=".000+" /></span> nhà bán hàng*</div>
          <div className="hidden h-4 w-px bg-white/[0.07] lg:block" />
          <div className="hidden items-center gap-4 text-[10px] text-white/28 lg:flex"><span className="inline-flex items-center gap-1.5"><Radio className="h-3 w-3" /> Realtime</span><span className="inline-flex items-center gap-1.5"><Activity className="h-3 w-3" /> Multi-device</span><span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3" /> FnB workflow</span></div>
        </div>
        <p className="text-[10px] text-white/24">*Theo thông tin công bố trên hệ thống nội dung Sapo.</p>
      </div>
      <div className="marquee relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#06090e] to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#06090e] to-transparent" />
        <div className="marquee-track flex min-w-max gap-2.5 px-3">
          {[...categories, ...categories].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-white/[0.055] bg-white/[0.018] px-5 py-2.5 text-[10px] font-semibold tracking-[0.18em] text-white/30">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
