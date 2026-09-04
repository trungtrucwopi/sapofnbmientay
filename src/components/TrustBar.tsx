import { Activity, Radio, ShieldCheck } from 'lucide-react'

const categories = ['NHÀ HÀNG', 'CAFE', 'TRÀ SỮA', 'TIỆM BÁNH', 'BIDA', 'KARAOKE', 'BAR / PUB']

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.055] bg-[#03060a]">
      <div className="mx-auto grid max-w-[1380px] lg:grid-cols-[260px_1fr_290px]">
        <div className="flex items-center gap-3 border-b border-white/[0.055] px-5 py-5 lg:border-b-0 lg:border-r">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--sapo-blue-light)] opacity-30" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--sapo-blue-light)]" />
          </span>
          <div>
            <div className="text-[8px] font-black uppercase tracking-[0.2em] text-white/20">System status</div>
            <div className="mt-1 text-[10px] font-semibold text-white/55">FnB operations online</div>
          </div>
        </div>

        <div className="marquee relative overflow-hidden border-b border-white/[0.055] py-4 lg:border-b-0">
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#03060a] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#03060a] to-transparent" />
          <div className="marquee-track flex min-w-max items-center gap-7 px-6">
            {[...categories,...categories].map((item,index)=>(
              <div key={`${item}-${index}`} className="flex items-center gap-7">
                <span className="text-[9px] font-black tracking-[0.2em] text-white/30">{item}</span>
                <span className="h-1 w-1 rounded-full bg-[rgba(53,162,255,.6)]" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4 text-[8px] uppercase tracking-[0.16em] text-white/22 lg:border-l">
          <span className="inline-flex items-center gap-1.5"><Radio className="h-3 w-3" /> Realtime</span>
          <span className="inline-flex items-center gap-1.5"><Activity className="h-3 w-3" /> Multi-device</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3" /> FnB</span>
        </div>
      </div>
    </section>
  )
}
