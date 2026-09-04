import { ArrowRight, BarChart3, Check, ChevronRight, CircleDollarSign, Clock3, QrCode, ReceiptText, Sparkles, UtensilsCrossed, Wifi } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'

const tableStates = [
  { name: 'B01', status: 'Đang phục vụ', active: true },
  { name: 'B02', status: 'Trống', active: false },
  { name: 'B03', status: 'Chờ món', active: true },
  { name: 'B04', status: 'Trống', active: false },
  { name: 'B05', status: 'Thanh toán', active: true },
  { name: 'B06', status: 'Đặt trước', active: false },
]

function LiveCockpit() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, scale: 0.94, y: 24, rotateX: 4 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[690px] [perspective:1400px]"
    >
      <div className="absolute left-[16%] top-[12%] h-72 w-72 rounded-full bg-[var(--sapo-blue)]/16 blur-[95px]" />
      <div className="absolute bottom-[4%] right-[4%] h-52 w-52 rounded-full bg-cyan-300/8 blur-[80px]" />

      <div className="hero-cockpit relative overflow-hidden rounded-[30px] border border-white/[0.1] bg-[#090d14]/95 p-2.5 shadow-[0_45px_140px_rgba(0,0,0,.62)] backdrop-blur-2xl sm:p-3">
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#060a10]">
          <div className="flex h-12 items-center justify-between border-b border-white/[0.06] px-4 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--sapo-blue)] text-[10px] font-black text-white">S</div>
              <div>
                <div className="text-[11px] font-semibold text-white">Sapo FnB Control</div>
                <div className="text-[9px] text-white/30">Chi nhánh trung tâm • Live</div>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/[0.05] px-2.5 py-1 text-[9px] font-bold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,.7)]" /> ONLINE
            </div>
          </div>

          <div className="grid min-h-[430px] md:grid-cols-[74px_1fr]">
            <div className="hidden border-r border-white/[0.05] bg-white/[0.012] px-2 py-4 md:block">
              <div className="space-y-2">
                {[BarChart3, UtensilsCrossed, ReceiptText, QrCode].map((Icon, index) => (
                  <div key={index} className={`grid h-11 place-items-center rounded-xl border ${index === 0 ? 'border-[rgba(0,131,255,.22)] bg-[rgba(0,131,255,.09)] text-[var(--sapo-blue-light)]' : 'border-transparent text-white/24'}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 sm:p-5">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Doanh thu hôm nay', value: '18,64M', icon: CircleDollarSign, tag: '+12,8%' },
                  { label: 'Đơn đã nhận', value: '126', icon: ReceiptText, tag: '8 đang xử lý' },
                  { label: 'Thời gian TB', value: '07:42', icon: Clock3, tag: 'ổn định' },
                ].map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/[0.06] bg-white/[0.026] p-3.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-[9px] uppercase tracking-[0.12em] text-white/28">{card.label}</div>
                      <card.icon className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
                    </div>
                    <div className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">{card.value}</div>
                    <div className="mt-1 text-[9px] text-emerald-300/70">{card.tag}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid gap-3 lg:grid-cols-[1.12fr_.88fr]">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.022] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-semibold text-white/70">Nhịp doanh thu</div>
                      <div className="mt-0.5 text-[9px] text-white/26">Theo mốc trong ngày</div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] text-white/30"><Wifi className="h-3 w-3" /> realtime</div>
                  </div>
                  <div className="relative mt-6 flex h-28 items-end gap-1.5 overflow-hidden rounded-xl border border-white/[0.04] bg-[#05090f] px-3 pb-3 pt-4">
                    <div className="absolute inset-x-3 top-1/3 border-t border-dashed border-white/[0.05]" />
                    <div className="absolute inset-x-3 top-2/3 border-t border-dashed border-white/[0.05]" />
                    {[24, 36, 31, 49, 44, 64, 58, 78, 72, 92, 82, 97].map((height, index) => (
                      <motion.span
                        key={index}
                        initial={reduce ? undefined : { height: '8%' }}
                        animate={reduce ? undefined : { height: `${height}%` }}
                        transition={{ duration: 0.55, delay: 0.5 + index * 0.035 }}
                        style={reduce ? { height: `${height}%` } : undefined}
                        className="relative z-10 flex-1 rounded-t-[4px] bg-gradient-to-t from-[rgba(0,131,255,.16)] via-[rgba(0,131,255,.55)] to-[#6ec5ff]"
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.022] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-semibold text-white/70">Trạng thái bàn</div>
                    <span className="text-[9px] text-white/26">06 bàn</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {tableStates.map((table) => (
                      <div key={table.name} className={`rounded-xl border p-2.5 ${table.active ? 'border-[rgba(0,131,255,.16)] bg-[rgba(0,131,255,.06)]' : 'border-white/[0.05] bg-white/[0.018]'}`}>
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-white/78">{table.name}</span>
                          <span className={`h-1.5 w-1.5 rounded-full ${table.active ? 'bg-[var(--sapo-blue-light)] shadow-[0_0_8px_rgba(53,162,255,.75)]' : 'bg-white/15'}`} />
                        </div>
                        <div className="mt-1 text-[8px] text-white/28">{table.status}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-4 top-[34%] hidden w-44 rounded-2xl border border-white/10 bg-[#0a0f16]/94 p-3 shadow-2xl backdrop-blur-xl lg:block"
      >
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.12em] text-white/28"><span>Bếp / Bar</span><span className="text-amber-300">03 chờ</span></div>
        <div className="mt-3 rounded-xl bg-white/[0.035] p-2.5">
          <div className="text-[10px] font-semibold text-white/78">#A128 • B03</div>
          <div className="mt-1 text-[9px] text-white/32">3 món • vừa nhận</div>
        </div>
      </motion.div>

      <motion.div
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-5 right-1 hidden w-52 rounded-[22px] border border-white/10 bg-[#0a0f16]/96 p-4 shadow-2xl backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-[10px] font-semibold text-white/70"><QrCode className="h-4 w-4 text-[var(--sapo-blue-light)]" /> QR Order • bàn B05</div>
        <div className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.025] px-3 py-2.5">
          <div><div className="text-[9px] text-white/28">Giá trị đơn</div><div className="mt-0.5 text-sm font-bold text-white">486.000đ</div></div>
          <Check className="h-4 w-4 text-emerald-300" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section id="top" className="hero-grid hero-vignette relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(0,131,255,.15),transparent_30%),radial-gradient(circle_at_15%_10%,rgba(255,255,255,.04),transparent_22%)]" />
      <div className="hero-beam absolute left-[58%] top-[4%] hidden h-[90%] w-px rotate-[18deg] lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#05070a] to-transparent" />

      <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8 xl:gap-20">
        <div className="max-w-2xl">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,131,255,.22)] bg-[rgba(0,131,255,.07)] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--sapo-blue-light)] shadow-[inset_0_1px_0_rgba(255,255,255,.04)]"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Sapo FnB • Operations intelligence
          </motion.div>

          <motion.div initial={reduce ? undefined : { opacity: 0, y: 26 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.78, delay: 0.08 }}>
            <h1 className="mt-7 text-balance text-[clamp(3rem,6.2vw,5.5rem)] font-extrabold leading-[.96] tracking-[-0.065em] text-white">
              Vận hành quán<br />
              <span className="gradient-text">như một hệ thống.</span>
            </h1>
            <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">
              <span>Tăng tốc phục vụ</span><span className="h-1 w-1 rounded-full bg-white/20" /><span>Giảm rối vận hành</span>
            </div>
          </motion.div>

          <motion.p initial={reduce ? undefined : { opacity: 0, y: 18 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-6 max-w-xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
            Một luồng xuyên suốt từ order, bếp/bar, thanh toán đến kho và báo cáo — để chủ quán nhìn thấy toàn bộ vận hành trong một màn hình.
          </motion.p>

          <motion.div initial={reduce ? undefined : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ duration: 0.7, delay: 0.23 }} className="mt-5 flex items-center gap-3 text-sm text-white/58">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.08] bg-white/[0.035] text-[10px] font-bold text-white">TT</span>
            <span>Tư vấn & triển khai cùng <strong className="font-semibold text-white">Trung Trực — Sapo Miền Tây</strong></span>
          </motion.div>

          <motion.div initial={reduce ? undefined : { opacity: 0, y: 18 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => { track('click_hero_cta'); scrollToId('lead') }}
              className="group hero-primary-button inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[var(--sapo-blue)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_55px_rgba(0,131,255,.3)] transition hover:-translate-y-0.5 hover:bg-[var(--sapo-blue-light)]"
            >
              Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('click_zalo', { location: 'hero' })}
              className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.035] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-[rgba(0,131,255,.32)] hover:bg-white/[0.06]"
            >
              Chat Zalo ngay <ChevronRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
          </motion.div>

          <motion.div initial={reduce ? undefined : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ delay: 0.42 }} className="mt-6 grid max-w-xl grid-cols-3 gap-2">
            {[
              ['01', 'Tư vấn 1:1'],
              ['02', 'Demo theo mô hình'],
              ['03', 'Hỗ trợ triển khai'],
            ].map(([index, label]) => (
              <div key={label} className="border-l border-white/[0.08] pl-3">
                <div className="text-[9px] font-bold tracking-[0.16em] text-[var(--sapo-blue-light)]">{index}</div>
                <div className="mt-1 text-[10px] leading-4 text-white/38 sm:text-xs">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <LiveCockpit />
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/22 lg:flex">
        Scroll to explore <span className="h-px w-10 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
    </section>
  )
}
