import { ArrowRight, Check, ChefHat, CircleDollarSign, Clock3, MessageCircle, QrCode, ReceiptText, Sparkles, TrendingUp, UtensilsCrossed, Wifi } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../config/site'
import { track } from '../lib/analytics'
import { scrollToId } from '../lib/utils'

const orders = [
  { id: '#A128', table: 'B03', items: '3 món', state: 'Bếp nhận', tone: 'blue' },
  { id: '#A129', table: 'B11', items: '2 món', state: 'Đang làm', tone: 'amber' },
  { id: '#A130', table: 'B07', items: '5 món', state: 'Sẵn sàng', tone: 'green' },
]

const tables = ['B01','B02','B03','B04','B05','B06','B07','B08','B09','B10','B11','B12']

function CommandDeck() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 46, scale: 0.965, rotateX: 7 }}
      animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="command-deck relative mx-auto mt-12 w-full max-w-[1220px] [perspective:1500px] sm:mt-14 lg:mt-16"
    >
      <div className="absolute left-1/2 top-[46%] h-[360px] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--sapo-blue)]/[0.13] blur-[105px]" />
      <div className="absolute inset-x-[12%] bottom-[-34px] h-20 rounded-[50%] bg-black/80 blur-2xl" />

      <div className="relative overflow-hidden rounded-[26px] border border-white/[0.11] bg-[#060b12]/96 p-2.5 shadow-[0_60px_180px_rgba(0,0,0,.68)] sm:rounded-[34px] sm:p-3.5">
        <div className="overflow-hidden rounded-[21px] border border-white/[0.06] bg-[#04080d] sm:rounded-[28px]">
          <div className="flex h-12 items-center justify-between border-b border-white/[0.055] px-4 sm:h-14 sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/12" />
                <span className="h-2 w-2 rounded-full bg-white/12" />
                <span className="h-2 w-2 rounded-full bg-[var(--sapo-blue-light)] shadow-[0_0_12px_rgba(53,162,255,.75)]" />
              </div>
              <div className="hidden h-4 w-px bg-white/[0.07] sm:block" />
              <span className="hidden text-[9px] font-bold uppercase tracking-[0.2em] text-white/28 sm:inline">Sapo FnB / Operations Command</span>
            </div>
            <div className="flex items-center gap-2 text-[9px]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/10 bg-emerald-300/[0.05] px-2.5 py-1 font-bold text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> LIVE
              </span>
              <span className="hidden rounded-full border border-white/[0.055] px-2.5 py-1 text-white/24 sm:inline">AUTO SYNC</span>
            </div>
          </div>

          <div className="grid min-h-[480px] lg:grid-cols-[.72fr_1.48fr_.8fr]">
            <aside className="border-b border-white/[0.055] p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">Live order feed</span>
                <Wifi className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
              </div>
              <div className="mt-5 space-y-3">
                {orders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={reduce ? undefined : { opacity: 0, x: -14 }}
                    animate={reduce ? undefined : { opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.65 + index * 0.08 }}
                    className="rounded-2xl border border-white/[0.055] bg-white/[0.018] p-3.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-white/72">{order.id} • {order.table}</span>
                      <span className={`h-1.5 w-1.5 rounded-full ${order.tone === 'green' ? 'bg-emerald-300' : order.tone === 'amber' ? 'bg-amber-300' : 'bg-[var(--sapo-blue-light)]'}`} />
                    </div>
                    <div className="mt-3 flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[9px] text-white/26">{order.items}</div>
                        <div className="mt-1 text-[9px] font-semibold text-white/50">{order.state}</div>
                      </div>
                      <ChefHat className="h-4 w-4 text-white/18" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-[rgba(0,131,255,.12)] bg-[rgba(0,131,255,.045)] p-4">
                <div className="flex items-center gap-2 text-[10px] font-semibold text-white/62"><QrCode className="h-4 w-4 text-[var(--sapo-blue-light)]" /> QR Order</div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] text-white/26">Bàn B05</span>
                  <span className="text-xs font-bold text-white">486.000đ</span>
                </div>
              </div>
            </aside>

            <div className="border-b border-white/[0.055] p-4 sm:p-5 lg:border-b-0 lg:border-r lg:p-6">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {[
                  { label: 'Doanh thu', value: '18,64M', icon: CircleDollarSign, detail: '+12,8%' },
                  { label: 'Đơn hàng', value: '126', icon: ReceiptText, detail: '8 xử lý' },
                  { label: 'Phục vụ TB', value: '07:42', icon: Clock3, detail: 'ổn định' },
                ].map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/[0.055] bg-white/[0.02] p-3 sm:p-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[8px] uppercase tracking-[0.12em] text-white/23 sm:text-[9px]">{metric.label}</span>
                      <metric.icon className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
                    </div>
                    <div className="mt-2 text-lg font-black tracking-[-0.05em] text-white sm:text-2xl">{metric.value}</div>
                    <div className="mt-1 text-[8px] text-emerald-300/60 sm:text-[9px]">{metric.detail}</div>
                  </div>
                ))}
              </div>

              <div className="mt-3 rounded-[22px] border border-white/[0.055] bg-white/[0.014] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold text-white/66">Nhịp doanh thu</div>
                    <div className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/20">Realtime / Today</div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-emerald-300/65"><TrendingUp className="h-3.5 w-3.5" /> +12,8%</div>
                </div>
                <div className="relative mt-5 flex h-40 items-end gap-2 overflow-hidden rounded-2xl border border-white/[0.035] bg-[#03070b] px-3 pb-3 pt-4 sm:h-48 sm:px-4 sm:pb-4">
                  {[25, 50, 75].map((line) => <span key={line} className="absolute inset-x-3 border-t border-dashed border-white/[0.04]" style={{ bottom: `${line}%` }} />)}
                  {[20,28,25,38,34,49,44,58,54,72,66,82,76,94,86,100].map((height, index) => (
                    <motion.span
                      key={index}
                      initial={reduce ? undefined : { height: '8%' }}
                      animate={reduce ? undefined : { height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.025 }}
                      style={reduce ? { height: `${height}%` } : undefined}
                      className="relative z-10 flex-1 rounded-t-[4px] bg-gradient-to-t from-[rgba(0,131,255,.12)] via-[rgba(0,131,255,.5)] to-[#7fd0ff]"
                    />
                  ))}
                </div>
              </div>
            </div>

            <aside className="p-4 sm:p-5">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">Floor map</span>
                <UtensilsCrossed className="h-3.5 w-3.5 text-white/24" />
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {tables.map((table, index) => (
                  <div key={table} className={`grid aspect-square place-items-center rounded-xl border text-[9px] font-bold ${[2,4,6,10].includes(index) ? 'border-[rgba(0,131,255,.18)] bg-[rgba(0,131,255,.075)] text-[var(--sapo-blue-light)]' : [1,8].includes(index) ? 'border-amber-300/10 bg-amber-300/[0.035] text-amber-200/65' : 'border-white/[0.045] bg-white/[0.018] text-white/28'}`}>
                    {table}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl border border-white/[0.055] bg-white/[0.018] p-4">
                <div className="text-[9px] uppercase tracking-[0.16em] text-white/22">System health</div>
                <div className="mt-4 space-y-3">
                  {[
                    ['Order sync', '99.9%'],
                    ['Bếp / Bar', 'Live'],
                    ['Thanh toán', 'Ready'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between text-[9px]">
                      <span className="text-white/35">{label}</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-300/70"><Check className="h-3 w-3" /> {value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[-28px] top-[28%] hidden rounded-2xl border border-white/[0.08] bg-[#07101a]/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40 shadow-xl backdrop-blur-xl xl:block">
        Order → Bếp
      </div>
      <div className="pointer-events-none absolute right-[-34px] top-[56%] hidden rounded-2xl border border-white/[0.08] bg-[#07101a]/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/40 shadow-xl backdrop-blur-xl xl:block">
        Thu ngân → Báo cáo
      </div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="hero-v3 relative min-h-[106svh] overflow-hidden pb-20 pt-28 sm:pt-32">
      <div className="hero-v3-grid absolute inset-0" />
      <div className="hero-horizon absolute left-1/2 top-[34%] h-[520px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%]" />
      <div className="absolute left-[7%] top-[22%] hidden text-[8px] font-bold uppercase tracking-[0.28em] text-white/16 lg:block [writing-mode:vertical-rl]">Sapo FnB / Mekong Region / 2026</div>
      <div className="absolute right-[7%] top-[22%] hidden text-[8px] font-bold uppercase tracking-[0.28em] text-white/16 lg:block [writing-mode:vertical-rl]">Operate / Control / Grow</div>

      <div className="relative mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.075] bg-white/[0.025] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/46 backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-[var(--sapo-blue-light)]" />
            SAPO FnB • Hệ thống vận hành cho quán
          </motion.div>

          <motion.h1
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-7 max-w-6xl text-balance text-[clamp(3.05rem,7.9vw,7.6rem)] font-black leading-[.86] tracking-[-0.075em] text-white"
          >
            Quán vận hành như
            <span className="hero-stroke block">một hệ thống.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mx-auto mt-7 max-w-3xl text-balance text-sm leading-7 text-white/42 sm:text-base lg:text-lg"
          >
            Order, bếp/bar, thu ngân, kho và báo cáo chạy trên cùng một luồng. Trung Trực tư vấn và triển khai Sapo FnB theo mô hình thực tế tại Miền Tây.
          </motion.p>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              onClick={() => {
                track('click_hero_cta')
                scrollToId('lead')
              }}
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-[#06101b] shadow-[0_20px_70px_rgba(255,255,255,.08)] transition hover:-translate-y-1 hover:bg-[#e5f5ff]"
            >
              Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href={site.zalo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('click_zalo', { location: 'hero_v3' })}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/[0.1] bg-white/[0.035] px-6 text-sm font-semibold text-white/74 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[rgba(53,162,255,.28)] hover:bg-white/[0.055] hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[var(--sapo-blue-light)]" /> Chat Zalo
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.14em] text-white/24 sm:text-[10px]"
          >
            <span>Tư vấn 1:1</span><span className="h-1 w-1 rounded-full bg-[var(--sapo-blue-light)]" />
            <span>Demo theo mô hình</span><span className="h-1 w-1 rounded-full bg-[var(--sapo-blue-light)]" />
            <span>Hỗ trợ triển khai</span>
          </motion.div>
        </div>

        <CommandDeck />
      </div>
    </section>
  )
}
