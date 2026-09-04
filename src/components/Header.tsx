import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/[0.07] bg-[#05070a]/82 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => go('top')} className="flex items-center gap-3 text-left" aria-label="Về đầu trang">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--sapo-blue)] text-sm font-black text-white shadow-glow">S</span>
          <span>
            <span className="block text-sm font-bold tracking-[0.12em] text-white">SAPO MIỀN TÂY</span>
            <span className="block text-[10px] uppercase tracking-[0.18em] text-white/42">Trung Trực • FnB</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Điều hướng chính">
          {nav.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative rounded-lg px-3 py-2 text-sm transition ${active === id ? 'text-white' : 'text-white/58 hover:text-white'}`}
            >
              {label}
              <span className={`absolute inset-x-3 -bottom-0.5 h-px bg-[var(--sapo-blue-light)] transition-transform ${active === id ? 'scale-x-100' : 'scale-x-0'}`} />
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button onClick={() => go('lead')} className="rounded-xl bg-[var(--sapo-blue)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,131,255,.23)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]">
            Nhận tư vấn miễn phí
          </button>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#05070a]/96 px-4 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Điều hướng mobile">
            {nav.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="rounded-xl px-4 py-3 text-left text-base text-white/75 hover:bg-white/[0.05] hover:text-white">
                {label}
              </button>
            ))}
            <button onClick={() => go('lead')} className="mt-2 rounded-xl bg-[var(--sapo-blue)] px-4 py-3 font-semibold text-white">
              Nhận tư vấn miễn phí
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
