import { Facebook, MessageCircle, Phone } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#040609] pb-28 pt-10 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.3fr_.7fr_.7fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--sapo-blue)] text-sm font-black text-white">S</span><div><div className="text-sm font-bold tracking-[0.12em] text-white">SAPO MIỀN TÂY</div><div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/32">Trung Trực • FnB</div></div></div>
          <p className="mt-5 max-w-md text-sm leading-6 text-white/38">Tư vấn giải pháp quản lý & bán hàng FnB cho chủ quán khu vực Miền Tây.</p>
          <p className="mt-4 max-w-md text-[11px] leading-5 text-white/24">Website tư vấn giải pháp Sapo FnB của Trung Trực. Đây không phải website sapo.vn chính thức.</p>
        </div>
        <div><div className="text-xs font-bold uppercase tracking-[0.16em] text-white/34">Điều hướng</div><div className="mt-4 grid gap-2 text-sm text-white/46">{[['industries','Ngành hàng'],['workflow','Quy trình'],['features','Tính năng'],['lead','Đăng ký tư vấn']].map(([id,label])=><button key={id} className="w-fit hover:text-white" onClick={()=>scrollToId(id)}>{label}</button>)}</div></div>
        <div><div className="text-xs font-bold uppercase tracking-[0.16em] text-white/34">Liên hệ</div><div className="mt-4 grid gap-3 text-sm"><a className="footer-link" href={site.call} onClick={()=>track('click_phone',{location:'footer'})}><Phone className="h-4 w-4" />{site.phoneDisplay}</a><a className="footer-link" href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={()=>track('click_zalo',{location:'footer'})}><MessageCircle className="h-4 w-4" />Zalo</a><a className="footer-link" href={site.facebook} target="_blank" rel="noopener noreferrer" onClick={()=>track('click_facebook',{location:'footer'})}><Facebook className="h-4 w-4" />Facebook</a></div></div>
      </div>
      <div className="mx-auto mt-9 max-w-7xl border-t border-white/[0.05] px-4 pt-6 text-[10px] text-white/22 sm:px-6 lg:px-8">© {new Date().getFullYear()} Trung Trực — Sapo Miền Tây.</div>
    </footer>
  )
}
