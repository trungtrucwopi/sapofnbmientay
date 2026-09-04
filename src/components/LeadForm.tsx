import { FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, LoaderCircle, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react'
import { useUTM } from '../hooks/useUTM'
import { track } from '../lib/analytics'
import { site } from '../config/site'
import { isValidVietnamPhone, submitLead } from '../services/leadService'
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
    <section id="lead" ref={sectionRef} className="section-pad relative scroll-mt-24 overflow-hidden">
      <div className="absolute inset-x-0 top-1/2 h-[420px] -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(0,131,255,.065),transparent_48%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="lead-shell overflow-hidden rounded-[34px] border border-white/[0.09] bg-[#080c13] shadow-[0_35px_110px_rgba(0,0,0,.34)]">
            <div className="grid lg:grid-cols-[.72fr_1.28fr]">
              <div className="relative overflow-hidden border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                <div className="absolute -left-20 top-16 h-56 w-56 rounded-full bg-[var(--sapo-blue)]/[0.07] blur-[80px]" />
                <div className="relative lg:sticky lg:top-28">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,131,255,.15)] bg-[rgba(0,131,255,.05)] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--sapo-blue-light)]"><Sparkles className="h-3.5 w-3.5" /> Personal setup session</div>
                  <h2 className="mt-6 text-3xl font-bold tracking-[-0.045em] text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">Không cần chọn gói trước. Hãy chọn đúng cách vận hành.</h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/44">Trực sẽ bắt đầu từ mô hình quán, quy trình order, bếp/bar, thanh toán và cách chủ quán muốn theo dõi dữ liệu.</p>

                  <div className="mt-8 space-y-3">
                    {[
                      ['01', 'Tư vấn 1:1 theo mô hình thực tế'],
                      ['02', 'Demo đúng nghiệp vụ quán đang cần'],
                      ['03', 'Đề xuất cấu hình & lộ trình triển khai'],
                    ].map(([index, item]) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/[0.05] bg-white/[0.018] px-4 py-3.5">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-[rgba(0,131,255,.12)] bg-[rgba(0,131,255,.05)] text-[9px] font-bold text-[var(--sapo-blue-light)]">{index}</span>
                        <span className="text-xs leading-5 text-white/56 sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/[0.05] bg-[#05090f] p-4"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sapo-blue-light)]" /><p className="text-[10px] leading-5 text-white/30">Thông tin được gửi tới endpoint Google Apps Script đã cấu hình; Google Sheet không được nhúng trực tiếp vào frontend.</p></div>
                </div>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                {status === 'success' ? (
                  <div className="grid min-h-[620px] place-items-center rounded-[26px] border border-emerald-300/10 bg-emerald-300/[0.025] p-6 text-center">
                    <div>
                      <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-emerald-300/12 bg-emerald-300/[0.06] text-emerald-300"><Check className="h-8 w-8" /></div>
                      <div className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-300/70">Lead received</div>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">Cảm ơn anh/chị!</h3>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/42">Trực đã nhận được thông tin và sẽ liên hệ tư vấn sớm.</p>
                      <a href={site.zalo} target="_blank" rel="noopener noreferrer" onClick={() => track('click_zalo', { location: 'form_success' })} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> Chat Zalo ngay</a>
                    </div>
                  </div>
                ) : (
                  <form onFocus={markStart} onSubmit={onSubmit} className="rounded-[26px] border border-white/[0.06] bg-[#05090f] p-4 sm:p-6" noValidate>
                    <div className="mb-6 flex items-center justify-between border-b border-white/[0.05] pb-5">
                      <div><div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/24">Consultation brief</div><div className="mt-1 text-sm font-semibold text-white/70">Thông tin quán & nhu cầu</div></div>
                      <div className="text-[9px] text-white/18">~ 1 phút</div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="field"><span>Họ và tên *</span><input name="name" required autoComplete="name" placeholder="Nguyễn Văn A" /></label>
                      <label className="field"><span>Số điện thoại *</span><input name="phone" required inputMode="tel" autoComplete="tel" placeholder="0386 427 289" /></label>
                      <label className="field"><span>Tên quán / thương hiệu</span><input name="businessName" autoComplete="organization" placeholder="Tên quán của anh/chị" /></label>
                      <label className="field"><span>Tỉnh / Thành phố</span><input name="province" autoComplete="address-level1" placeholder="Cần Thơ, An Giang..." /></label>
                      <label className="field"><span>Loại hình kinh doanh *</span><select name="businessType" required defaultValue=""><option value="" disabled>Chọn mô hình</option>{businessTypes.map((item)=><option key={item}>{item}</option>)}</select></label>
                      <label className="field"><span>Quy mô</span><select name="scale" defaultValue=""><option value="">Chọn quy mô</option>{scales.map((item)=><option key={item}>{item}</option>)}</select></label>
                    </div>

                    <fieldset className="mt-6"><legend className="text-xs font-semibold text-white/56">Nhu cầu quan tâm</legend><div className="mt-3 flex flex-wrap gap-2">{needs.map((need)=><button key={need} type="button" aria-pressed={selectedNeeds.includes(need)} onClick={()=>toggleNeed(need)} className={`rounded-xl border px-3 py-2.5 text-[10px] font-medium transition ${selectedNeeds.includes(need)?'border-[rgba(0,131,255,.34)] bg-[rgba(0,131,255,.08)] text-[var(--sapo-blue-light)]':'border-white/[0.06] bg-white/[0.018] text-white/34 hover:border-white/[0.1] hover:text-white/62'}`}>{need}</button>)}</div></fieldset>
                    <label className="field mt-6"><span>Ghi chú</span><textarea name="note" rows={4} placeholder="Ví dụ: quán có 2 khu vực, cần order tại bàn và quản lý kho nguyên liệu..." /></label>

                    {status === 'error' && <div className="mt-4 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-4 py-3 text-xs leading-5 text-red-200">{error}</div>}

                    <button type="submit" disabled={status==='loading'} className="group mt-6 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,131,255,.22)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)] disabled:cursor-not-allowed disabled:opacity-60">
                      {status==='loading' ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Đang gửi...</> : <>NHẬN TƯ VẤN MIỄN PHÍ <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></>}
                    </button>
                    <p className="mt-3 text-center text-[9px] leading-4 text-white/22">Bằng việc gửi form, anh/chị đồng ý để Trung Trực liên hệ tư vấn theo thông tin đã cung cấp.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
