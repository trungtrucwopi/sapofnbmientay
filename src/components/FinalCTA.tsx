import { ArrowRight, MessageCircle } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'
import { Reveal } from './ui/Reveal'

export function FinalCTA() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="cta-halo relative overflow-hidden rounded-[30px] border border-[rgba(0,131,255,.16)] bg-[#080c13] px-5 py-16 text-center sm:px-8 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(0,131,255,.2),transparent_42%)]" />
            <div className="relative mx-auto max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]">Ready to optimize</div>
              <h2 className="mt-5 text-balance text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">Đừng để quán đông hơn nhưng việc quản lý lại khó hơn.</h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/48">Chuẩn hóa vận hành ngay từ đầu với giải pháp phù hợp cho mô hình của bạn.</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button onClick={() => scrollToId('lead')} className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,131,255,.28)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]">Đăng ký tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
                <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={() => track('click_zalo', { location: 'final_cta' })} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07]"><MessageCircle className="h-4 w-4" /> Chat Zalo với Trung Trực</a>
              </div>
              <a href={site.call} onClick={() => track('click_phone', { location: 'final_cta' })} className="mt-6 inline-block text-sm font-semibold text-white/58 hover:text-white">{site.phoneDisplay}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
