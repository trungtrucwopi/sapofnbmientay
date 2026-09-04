import { ArrowRight, MessageCircle, PhoneCall, Sparkles } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  return (
    <section className="section-pad pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="final-cta relative overflow-hidden rounded-[36px] border border-[rgba(0,131,255,.15)] bg-[#070b11] px-5 py-16 text-center shadow-[0_40px_120px_rgba(0,0,0,.42)] sm:px-8 lg:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,131,255,.23),transparent_44%),radial-gradient(circle_at_80%_10%,rgba(53,162,255,.07),transparent_28%)]" />
            <div className="final-cta-grid absolute inset-0 opacity-45" />
            <div className="absolute left-1/2 top-[48%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(0,131,255,.11)]" />
            <div className="absolute left-1/2 top-[48%] h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

            <div className="relative mx-auto max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,131,255,.14)] bg-[rgba(0,131,255,.05)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]"><Sparkles className="h-3.5 w-3.5" /> Ready to optimize</div>
              <h2 className="mx-auto mt-6 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[.98] tracking-[-0.06em] text-white">Đừng để quán đông hơn nhưng <span className="gradient-text">việc quản lý lại khó hơn.</span></h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/42 sm:text-lg">Chuẩn hóa luồng vận hành ngay từ đầu — từ order đến báo cáo — với giải pháp phù hợp cho mô hình của bạn.</p>

              <div className="mx-auto mt-9 grid max-w-2xl gap-3 sm:grid-cols-2">
                <button onClick={() => scrollToId('lead')} className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(0,131,255,.3)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]">Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
                <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={() => track('click_zalo', { location: 'final_cta' })} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[rgba(0,131,255,.28)] hover:bg-white/[0.055]"><MessageCircle className="h-4 w-4" /> Chat Zalo với Trung Trực</a>
              </div>

              <div className="mt-7 flex flex-col items-center justify-center gap-2 text-xs text-white/30 sm:flex-row sm:gap-5">
                <span className="inline-flex items-center gap-2"><PhoneCall className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /> {site.phoneDisplay}</span>
                <span className="hidden h-1 w-1 rounded-full bg-white/18 sm:block" />
                <span>Tư vấn 1:1 • Demo theo mô hình thực tế</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
