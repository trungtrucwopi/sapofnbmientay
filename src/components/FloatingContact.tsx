import { Facebook, FormInput, MessageCircle, Phone } from 'lucide-react'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'

export function FloatingContact() {
  return (
    <>
      <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={()=>track('click_zalo',{location:'floating'})} className="floating-action"><MessageCircle className="h-4 w-4" /><span>Chat Zalo</span></a>
        <a href={site.call} onClick={()=>track('click_phone',{location:'floating'})} className="floating-action"><Phone className="h-4 w-4" /><span>{site.phoneDisplay}</span></a>
        <a href={site.facebook} target="_blank" rel="noopener noreferrer" onClick={()=>track('click_facebook',{location:'floating'})} className="floating-action"><Facebook className="h-4 w-4" /><span>Facebook</span></a>
        <button onClick={()=>scrollToId('lead')} className="floating-action"><FormInput className="h-4 w-4" /><span>Nhận tư vấn</span></button>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-[#06090e]/94 p-2 backdrop-blur-xl md:hidden" style={{ paddingBottom: 'max(.5rem, env(safe-area-inset-bottom))' }}>
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={()=>track('click_zalo',{location:'mobile_bar'})} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> Zalo</a>
          <button onClick={()=>scrollToId('lead')} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--sapo-blue)] text-sm font-semibold text-white">Đăng ký tư vấn</button>
        </div>
      </div>
    </>
  )
}
