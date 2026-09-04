import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, PhoneCall, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { scrollToId } from '../lib/utils'
import { site } from '../config/site'
import { track } from '../lib/analytics'

const nav = [
  ['solution', 'Bài toán'],
  ['industries', 'Mô hình'],
  ['workflow', 'Luồng vận hành'],
  ['features', 'Hệ thống'],
  ['customers', 'Khách hàng'],
  ['lead', 'Tư vấn'],
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(nav.map(([id]) => id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={`mx-auto flex h-[66px] max-w-[1380px] items-center justify-between rounded-[22px] border px-3.5 transition-all duration-300 sm:px-5 ${scrolled || open ? 'border-white/[0.1] bg-[#05080d]/88 shadow-[0_20px_70px_rgba(0,0,0,.42)] backdrop-blur-2xl' : 'border-white/[0.055] bg-[#05080d]/28 backdrop-blur-xl'}`}>
        <button onClick={() => go('top')} className="group flex items-center gap-3 text-left" aria-label="Về đầu trang">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[13px] border border-white/[0.12] bg-white/[0.04]">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(85,188,255,.42),transparent_38%)]" />
            <span className="relative text-base font-black tracking-[-0.06em] text-white">S</span>
          </span>
          <span className="hidden sm:block">
            <span className="block text-[12px] font-black tracking-[0.16em] text-white">SAPO MIỀN TÂY</span>
            <span className="mt-0.5 block text-[8px] uppercase tracking-[0.22em] text-white/32">Trung Trực / FnB systems</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {nav.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative rounded-xl px-3 py-2 text-[11px] font-semibold transition ${active === id ? 'text-white' : 'text-white/40 hover:text-white/74'}`}
            >
              {label}
              <span className={`absolute inset-x-3 -bottom-1 h-px origin-left bg-[var(--sapo-blue-light)] transition-transform ${active === id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={site.call}
            onClick={() => track('click_phone', { location: 'header_v3' })}
            className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 text-[10px] font-semibold text-white/56 transition hover:border-white/[0.13] hover:text-white"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
            {site.phoneDisplay}
          </a>
          <button onClick={() => go('lead')} className="group inline-flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-[11px] font-black text-[#06101b] transition hover:-translate-y-0.5 hover:bg-[#dff2ff]">
            Nhận tư vấn <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-white lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-[1380px] overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#05080d]/96 p-3 shadow-[0_30px_90px_rgba(0,0,0,.5)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-1.5" aria-label="Điều hướng mobile">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="rounded-xl px-4 py-3.5 text-left text-sm font-medium text-white/62 transition hover:bg-white/[0.04] hover:text-white">
                {label}
              </button>
            ))}
            <button onClick={() => go('lead')} className="mt-1 rounded-xl bg-white px-4 py-3.5 text-sm font-black text-[#06101b]">
              Nhận tư vấn miễn phí
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
