import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { scrollToId } from '../lib/utils'

const nav = [
  ['solution', 'Giải pháp'],
  ['industries', 'Ngành hàng'],
  ['workflow', 'Quy trình'],
  ['features', 'Tính năng'],
  ['customers', 'Khách hàng'],
  ['lead', 'Đăng ký'],
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(nav.map(([id]) => id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div className={`mx-auto flex h-[64px] max-w-7xl items-center justify-between rounded-2xl px-3 transition-all duration-300 sm:px-4 ${scrolled || open ? 'border border-white/[0.08] bg-[#070a0f]/88 shadow-[0_14px_45px_rgba(0,0,0,.25)] backdrop-blur-2xl' : 'border border-transparent bg-transparent'}`}>
        <button onClick={() => go('top')} className="flex items-center gap-3 text-left" aria-label="Về đầu trang">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[rgba(255,255,255,.12)] bg-[var(--sapo-blue)] text-sm font-black text-white shadow-[0_10px_28px_rgba(0,131,255,.25)]">S</span>
          <span>
            <span className="block text-[13px] font-bold tracking-[0.13em] text-white">SAPO MIỀN TÂY</span>
            <span className="block text-[9px] uppercase tracking-[0.18em] text-white/34">Trung Trực • FnB</span>
          </span>
        </button>

        <nav className="hidden items-center rounded-xl border border-white/[0.045] bg-white/[0.018] p-1 lg:flex" aria-label="Điều hướng chính">
          {nav.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative rounded-lg px-3 py-2 text-xs font-medium transition ${active === id ? 'bg-white/[0.055] text-white' : 'text-white/45 hover:text-white/78'}`}
            >
              {label}
              {active === id && <span className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--sapo-blue-light)] to-transparent" />}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={() => go('lead')} className="group inline-flex items-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(0,131,255,.22)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]">
            Nhận tư vấn <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070a0f]/96 p-3 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-1" aria-label="Điều hướng mobile">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="rounded-xl px-4 py-3 text-left text-sm text-white/62 transition hover:bg-white/[0.04] hover:text-white">
                {label}
              </button>
            ))}
            <button onClick={() => go('lead')} className="mt-2 rounded-xl bg-[var(--sapo-blue)] px-4 py-3 text-sm font-semibold text-white">
              Nhận tư vấn miễn phí
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
