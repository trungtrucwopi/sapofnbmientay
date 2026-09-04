import { Counter } from './ui/Counter'

const categories = ['NHÀ HÀNG', 'CAFE', 'TRÀ SỮA', 'TIỆM BÁNH', 'BIDA', 'KARAOKE', 'BAR / PUB']

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.018] py-7">
      <div className="mx-auto mb-5 flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-white/62">Hệ sinh thái Sapo phục vụ hơn <span className="font-semibold text-white"><Counter to={230} suffix=".000+" /></span> nhà bán hàng*</p>
        <p className="text-[11px] text-white/32">*Theo thông tin công bố trên hệ thống nội dung Sapo.</p>
      </div>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex min-w-max gap-3 px-3">
          {[...categories, ...categories].map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-5 py-2.5 text-xs font-semibold tracking-[0.16em] text-white/40">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
