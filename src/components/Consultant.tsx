import { Facebook, MessageCircle, PhoneCall } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { Reveal } from './ui/Reveal'

export function Consultant() {
  const portrait = `${import.meta.env.BASE_URL}assets/trung-truc.webp`
  return (
    <section className="section-pad border-y border-white/[0.05] bg-[#070a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[28px] border border-white/[0.08] bg-[radial-gradient(circle_at_75%_30%,rgba(0,131,255,.13),transparent_32%),#090d14] p-5 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
              <div className="relative min-h-[330px] overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#06090e]">
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center"><div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-[rgba(0,131,255,.2)] bg-[rgba(0,131,255,.08)] text-3xl font-bold text-[var(--sapo-blue-light)]">TT</div><div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/28">Portrait placeholder</div></div>
                </div>
                <img src={portrait} alt="Trung Trực - Chuyên viên tư vấn giải pháp Sapo Miền Tây" className="absolute inset-0 h-full w-full object-cover" onError={(event: any) => { event.currentTarget.style.display = 'none' }} />
                {/* TODO: Replace with official Trung Truc portrait at /public/assets/trung-truc.webp */}
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]">Personal consultant</div>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">Một giải pháp tốt cần được triển khai đúng cách.</h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/52">Thay vì chọn phần mềm theo danh sách tính năng, hãy bắt đầu từ luồng vận hành thật của quán: order thế nào, bếp/bar nhận món ra sao, thu ngân xử lý gì và chủ quán cần xem dữ liệu nào.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"><div className="text-xs text-white/34">Tư vấn</div><div className="mt-1 text-base font-semibold text-white">{site.consultant}</div></div>
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-4"><div className="text-xs text-white/34">Khu vực</div><div className="mt-1 text-base font-semibold text-white">{site.region}</div></div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={() => track('click_zalo', { location: 'consultant' })} className="contact-chip"><MessageCircle className="h-4 w-4" /> Chat Zalo</a>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" onClick={() => track('click_facebook', { location: 'consultant' })} className="contact-chip"><Facebook className="h-4 w-4" /> Facebook</a>
                  <a href={site.call} onClick={() => track('click_phone', { location: 'consultant' })} className="contact-chip"><PhoneCall className="h-4 w-4" /> {site.phoneDisplay}</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
