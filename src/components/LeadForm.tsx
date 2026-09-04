import { FormEvent, useEffect, useRef, useState } from 'react'
import { Check, LoaderCircle, MessageCircle, ShieldCheck } from 'lucide-react'
import { useUTM } from '../hooks/useUTM'
import { track } from '../lib/analytics'
import { site } from '../config/site'
import { isValidVietnamPhone, submitLead } from '../services/leadService'
import { AnimatedBorder } from './ui/AnimatedBorder'
import { Reveal } from './ui/Reveal'

const businessTypes = ['Nhà hàng / Quán ăn', 'Cafe', 'Trà sữa', 'Tiệm bánh', 'Bida', 'Karaoke', 'Bar / Pub', 'Khác']
const scales = ['Chuẩn bị mở quán', '1 cửa hàng', '2–5 cửa hàng', 'Trên 5 cửa hàng']
const needs = ['Phần mềm bán hàng', 'Order QR', 'Quản lý kho', 'Thanh toán', 'Hóa đơn điện tử', 'Quản lý chuỗi', 'Thiết bị POS', 'Chưa rõ — cần tư vấn']

type Status = 'idle' | 'loading' | 'success' | 'error'

export function LeadForm() {
  const utm = useUTM()
  const sectionRef = useRef<HTMLElement>(null)
  const started = useRef(false)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([])

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { track('view_lead_form'); observer.disconnect() }
    }, { threshold: 0.3 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const markStart = () => {
    if (!started.current) { started.current = true; track('start_lead_form') }
  }

  const toggleNeed = (need: string) => setSelectedNeeds((current) => current.includes(need) ? current.filter((item) => item !== need) : [...current, need])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'loading') return
    const data = new FormData(event.currentTarget)
    const phone = String(data.get('phone') || '')
    if (!isValidVietnamPhone(phone)) {
      setError('Số điện thoại chưa hợp lệ. Vui lòng kiểm tra lại.')
      setStatus('error')
      return
    }
    if (!data.get('name') || !data.get('businessType')) {
      setError('Vui lòng nhập họ tên và chọn loại hình kinh doanh.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setError('')
    try {
      await submitLead({
        name: String(data.get('name') || ''),
        phone,
        businessName: String(data.get('businessName') || ''),
        province: String(data.get('province') || ''),
        businessType: String(data.get('businessType') || ''),
        scale: String(data.get('scale') || ''),
        needs: selectedNeeds,
        note: String(data.get('note') || ''),
        utm,
      })
      setStatus('success')
      track('submit_lead_success')
      event.currentTarget.reset()
      setSelectedNeeds([])
    } catch (submissionError) {
      console.error('Lead submission error', submissionError)
      setError('Chưa gửi được thông tin. Anh/chị có thể thử lại hoặc chat Zalo trực tiếp với Trực.')
      setStatus('error')
      track('submit_lead_error')
    }
  }

  return (
    <section id="lead" ref={sectionRef} className="section-pad scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedBorder>
          <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-[.78fr_1.22fr] lg:p-10">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--sapo-blue-light)]">Tư vấn 1:1</div>
                <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">Để lại thông tin — Trực tư vấn giải pháp phù hợp cho quán của bạn</h2>
                <p className="mt-5 text-sm leading-7 text-white/48">Không cần chọn gói ngay. Trước tiên hãy xác định đúng mô hình và nhu cầu vận hành.</p>
                <div className="mt-7 space-y-3">
                  {['Demo theo nghiệp vụ thực tế', 'Đề xuất cấu hình theo mô hình', 'Hỗ trợ triển khai & hướng dẫn sử dụng'].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-white/60"><span className="grid h-6 w-6 place-items-center rounded-full bg-[rgba(0,131,255,.11)]"><Check className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" /></span>{item}</div>)}
                </div>
                <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sapo-blue-light)]" /><p className="text-xs leading-5 text-white/38">Thông tin form chỉ được gửi tới endpoint Google Apps Script đã cấu hình. Không nhúng trực tiếp Google Sheet vào frontend.</p></div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              {status === 'success' ? (
                <div className="grid min-h-[580px] place-items-center rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.035] p-6 text-center">
                  <div><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400/10 text-emerald-300"><Check className="h-7 w-7" /></div><h3 className="mt-6 text-2xl font-semibold text-white">Cảm ơn anh/chị!</h3><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/48">Trực đã nhận được thông tin và sẽ liên hệ tư vấn sớm.</p><a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={() => track('click_zalo', { location: 'form_success' })} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> Chat Zalo ngay</a></div>
                </div>
              ) : (
                <form onFocus={markStart} onSubmit={onSubmit} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 sm:p-6" noValidate>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="field"><span>Họ và tên *</span><input name="name" required autoComplete="name" placeholder="Nguyễn Văn A" /></label>
                    <label className="field"><span>Số điện thoại *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="0386 427 289" /></label>
                    <label className="field"><span>Tên quán / thương hiệu</span><input name="businessName" autoComplete="organization" placeholder="Tên quán của anh/chị" /></label>
                    <label className="field"><span>Tỉnh / Thành phố</span><input name="province" autoComplete="address-level1" placeholder="Cần Thơ, An Giang..." /></label>
                    <label className="field"><span>Loại hình kinh doanh *</span><select name="businessType" required defaultValue=""><option value="" disabled>Chọn mô hình</option>{businessTypes.map((item)=><option key={item}>{item}</option>)}</select></label>
                    <label className="field"><span>Quy mô</span><select name="scale" defaultValue=""><option value="">Chọn quy mô</option>{scales.map((item)=><option key={item}>{item}</option>)}</select></label>
                  </div>

                  <fieldset className="mt-5"><legend className="text-xs font-semibold text-white/64">Nhu cầu quan tâm</legend><div className="mt-3 flex flex-wrap gap-2">{needs.map((need)=><button key={need} type="button" aria-pressed={selectedNeeds.includes(need)} onClick={()=>toggleNeed(need)} className={`rounded-lg border px-3 py-2 text-xs transition ${selectedNeeds.includes(need)?'border-[rgba(0,131,255,.42)] bg-[rgba(0,131,255,.1)] text-[var(--sapo-blue-light)]':'border-white/[0.08] bg-white/[0.025] text-white/42 hover:text-white/70'}`}>{need}</button>)}</div></fieldset>
                  <label className="field mt-5"><span>Ghi chú</span><textarea name="note" rows={4} placeholder="Ví dụ: quán có 2 khu vực, cần order tại bàn và quản lý kho nguyên liệu..." /></label>

                  {status === 'error' && <div className="mt-4 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-4 py-3 text-xs leading-5 text-red-200">{error}</div>}

                  <button type="submit" disabled={status==='loading'} className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,131,255,.22)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)] disabled:cursor-not-allowed disabled:opacity-60">
                    {status==='loading' ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Đang gửi...</> : 'NHẬN TƯ VẤN MIỄN PHÍ'}
                  </button>
                  <p className="mt-3 text-center text-[10px] leading-4 text-white/28">Bằng việc gửi form, anh/chị đồng ý để Trung Trực liên hệ tư vấn theo thông tin đã cung cấp.</p>
                </form>
              )}
            </Reveal>
          </div>
        </AnimatedBorder>
      </div>
    </section>
  )
}
