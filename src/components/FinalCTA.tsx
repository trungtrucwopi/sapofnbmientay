import { ArrowRight, MessageCircle, PhoneCall } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-[1380px]">
        <Reveal>
          <div className="final-stage relative overflow-hidden rounded-[34px] border border-white/[0.085] bg-[#03070b] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(0,131,255,.24),transparent_44%),radial-gradient(circle_at_82%_12%,rgba(83,188,255,.075),transparent_25%)]" />
            <div className="final-stage-grid absolute inset-0" />
            <div className="absolute left-1/2 top-[56%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03]" />
            <div className="absolute left-1/2 top-[56%] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(53,162,255,.08)]" />

            <div className="relative mx-auto max-w-5xl text-center">
              <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[var(--sapo-blue-light)]">Ready when your operation is</div>
              <h2 className="mx-auto mt-6 text-balance text-[clamp(3rem,7vw,7rem)] font-black leading-[.88] tracking-[-0.075em] text-white">
                Đừng để quán lớn lên
                <span className="hero-stroke block">nhanh hơn hệ thống.</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/38 sm:text-base">Bắt đầu từ quy trình thật của quán. Sau đó mới chọn cách triển khai phù hợp.</p>

              <div className="mx-auto mt-9 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row">
                <button
                  onClick={() => scrollToId('lead')}
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-[#06101b] transition hover:-translate-y-1 hover:bg-[#e5f5ff]"
                >
                  Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <a
                  href={site.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track('click_zalo', { location: 'final_cta_v3' })}
                  className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.035] px-6 text-sm font-semibold text-white/72 transition hover:-translate-y-1 hover:border-[rgba(53,162,255,.25)] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Chat Zalo
                </a>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/22 sm:flex-row sm:gap-5">
                <span className="inline-flex items-center gap-2"><PhoneCall className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /> {site.phoneDisplay}</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
                <span>Trung Trực • Sapo Miền Tây</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/15 sm:block" />
                <span>Tư vấn 1:1</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
